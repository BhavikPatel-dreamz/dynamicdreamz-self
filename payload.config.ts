import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { buildConfig, type Field } from "payload";
import sharp from "sharp";

import { Users } from "./src/payload/collections/Users";
import { Media } from "./src/payload/collections/Media";
import { Documents } from "./src/payload/collections/Documents";
import { Categories } from "./src/payload/collections/Categories";
import { Authors } from "./src/payload/collections/Authors";
import { Testimonials } from "./src/payload/collections/Testimonials";
import { Posts } from "./src/payload/collections/Posts";
import { CaseStudies } from "./src/payload/collections/CaseStudies";
import { Pages } from "./src/payload/collections/Pages";

import { Navigation } from "./src/payload/globals/Navigation";
import { SiteSettings } from "./src/payload/globals/SiteSettings";
import { mediaServerStorage } from "./adapter/src/index";
import { attachFormUploadsToEmail } from "./src/payload/hooks/attachFormUploadsToEmail";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " - Dynamic Dreamz",
      icons: [
        {
          type: "image/png",
          rel: "icon",
          sizes: "192x192",
          url: "/icon.png",
        },
      ],
    },
    components: {
      beforeDashboard: [
        "./src/payload/components/DashboardLeadsWidget#DashboardLeadsWidget",
      ],
      graphics: {
        Logo: "./src/payload/components/Logo#Logo",
        Icon: "./src/payload/components/Icon#Icon",
      },
    },
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
      collections: ["pages", "posts", "case-studies"],
    },
  },
  collections: [
    Users,
    Media,
    Documents,
    Categories,
    Authors,
    Testimonials,
    Posts,
    CaseStudies,
    Pages,
  ],
  globals: [
    Navigation,
    SiteSettings,
  ],
  plugins: [
    formBuilderPlugin({
      fields: {
        payment: false,
        upload: true,
      },
      uploadCollections: ["documents"],
      redirectRelationships: ["pages"],
      beforeEmail: attachFormUploadsToEmail as any,
      formOverrides: {
        admin: {
          group: "Leads & Inquiries",
        },
        fields: ({ defaultFields }) => {
          return defaultFields.map((field) => {
            if ("name" in field && field.name === "emails" && "fields" in field && Array.isArray(field.fields)) {
              return {
                ...field,
                access: {
                  read: () => true,
                },
                fields: [
                  ...field.fields,
                  {
                    name: "attachUploads",
                    type: "checkbox",
                    defaultValue: true,
                    label: "Attach uploaded files (CV, Resume, Documents)",
                    admin: {
                      condition: (data) =>
                        Boolean(
                          Array.isArray(data?.fields) &&
                          data.fields.some((f: any) => f?.blockType === "upload"),
                        ),
                      description:
                        "When enabled, files uploaded by the user in this form will be physically attached to this email.",
                    },
                  },
                ],
              } as Field;
            }
            return field;
          });
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: "Leads & Inquiries",
          components: {
            views: {
              list: {
                Component: "./src/payload/components/LeadsInboxView#LeadsInboxView",
              },
            },
          },
        },
        access: {
          read: ({ req }) => Boolean(req.user),
          update: ({ req }) => Boolean(req.user),
          delete: ({ req }) => Boolean(req.user),
        },
        hooks: {
          beforeChange: [
            async ({ data, req, operation }) => {
              if (operation === "create" && data) {
                const submissionData = Array.isArray(data.submissionData)
                  ? [...data.submissionData]
                  : [];

                const getVal = (name: string) =>
                  submissionData.find((s: any) => s?.field === name)?.value;

                // Extract client IP
                const headerIp =
                  req.headers?.get?.("x-forwarded-for")?.split(",")?.[0]?.trim() ||
                  req.headers?.get?.("x-real-ip") ||
                  (req as any).ip ||
                  "127.0.0.1";

                // Extract city / state from geo headers
                const city =
                  req.headers?.get?.("x-vercel-ip-city") ||
                  req.headers?.get?.("cf-ipcity") ||
                  "";
                const region =
                  req.headers?.get?.("x-vercel-ip-country-region") ||
                  req.headers?.get?.("cf-region") ||
                  "";
                const country =
                  req.headers?.get?.("x-vercel-ip-country") ||
                  req.headers?.get?.("cf-ipcountry") ||
                  "";
                const cityState =
                  [city, region, country].filter(Boolean).join(", ") || "N/A";

                const referer =
                  req.headers?.get?.("referer") ||
                  "https://www.dynamicdreamz.com/career-apply-now";

                const defaults: Array<{ field: string; value: string }> = [
                  { field: "_remote_ip", value: String(getVal("_remote_ip") || headerIp) },
                  { field: "citystate", value: String(getVal("citystate") || cityState) },
                  { field: "pagename", value: String(getVal("pagename") || "Career Apply Now") },
                  { field: "_url", value: String(getVal("_url") || referer) },
                  { field: "utm_source", value: String(getVal("utm_source") || "N/A") },
                  { field: "utm_medium", value: String(getVal("utm_medium") || "N/A") },
                  { field: "utm_campaign", value: String(getVal("utm_campaign") || "N/A") },
                  { field: "utm_term", value: String(getVal("utm_term") || "N/A") },
                  { field: "utm_content", value: String(getVal("utm_content") || "N/A") },
                ];

                for (const def of defaults) {
                  const existingIdx = submissionData.findIndex((s: any) => s?.field === def.field);
                  if (existingIdx >= 0) {
                    if (!submissionData[existingIdx].value) {
                      submissionData[existingIdx].value = def.value;
                    }
                  } else {
                    submissionData.push(def);
                  }
                }

                data.submissionData = submissionData;
              }
              return data;
            },
          ],
          afterChange: [
            async ({ doc, operation, req }) => {
              if (operation === "create") {
                const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
                if (!webhookUrl) return;

                try {
                  const webhookToken = process.env.CONTACT_FORM_WEBHOOK_TOKEN;
                  const submissionMap: Record<string, unknown> = {};
                  if (Array.isArray(doc.submissionData)) {
                    for (const item of doc.submissionData) {
                      submissionMap[item.field] = item.value;
                    }
                  }

                  await fetch(webhookUrl, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      ...(webhookToken ? { Authorization: `Bearer ${webhookToken}` } : {}),
                    },
                    body: JSON.stringify({
                      source: "form-builder",
                      formId: typeof doc.form === "object" ? doc.form?.id : doc.form,
                      submittedAt: doc.createdAt || new Date().toISOString(),
                      ...submissionMap,
                    }),
                    cache: "no-store",
                    signal: AbortSignal.timeout(10000),
                  });
                } catch (err) {
                  req.payload.logger.error({
                    err,
                    msg: "Failed to forward form submission to webhook",
                  });
                }
              }
            },
          ],
        },
      },
    }),
    mediaServerStorage({
      baseURL: process.env.MEDIA_SERVER_URL || "",
      apiKey: process.env.MEDIA_SERVER_API_KEY || "",
      collections: {
        media: {
          // Files are public on the media server, so Payload links directly to that domain.
          disablePayloadAccessControl: true,
          prefix: "uploads",
        },
        documents: {
          disablePayloadAccessControl: true,
          prefix: "documents",
        },
      },
    }),
  ],
  editor: lexicalEditor(),
  email:
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? nodemailerAdapter({
        defaultFromAddress:
          process.env.EMAIL_FROM || process.env.SMTP_USER || "hello@dynamicdreamz.com",
        defaultFromName: process.env.EMAIL_FROM_NAME || "Dynamic Dreamz",
        transportOptions: ({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 465,
          secure: Number(process.env.SMTP_PORT ?? 465) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: (process.env.SMTP_PASS || "").replace(/\s+/g, ""),
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
        } as any),
      })
      : undefined,
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "src/types/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    push: process.env.PAYLOAD_DB_PUSH === "true" ? true : false, // true for development
  }),
  sharp,
});
