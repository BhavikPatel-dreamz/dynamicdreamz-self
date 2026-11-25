import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { resendAdapter } from "@payloadcms/email-resend";
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
import { ATTRIBUTION_FIELDS, resolveServerAttribution } from "./src/lib/attribution";
import { attachFormUploadsToEmail } from "./src/payload/hooks/attachFormUploadsToEmail";
import { formValidationCopy } from "./src/content/forms";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Extracts bare address and display name from env (`EMAIL_FROM` / `EMAIL_FROM_NAME`)
 * whether `EMAIL_FROM` is set as `user@domain.com` or `"Name <user@domain.com>"`.
 */
function resolveDefaultEmailSender(rawFrom?: string, rawName?: string) {
  const trimmedFrom = (rawFrom || "").trim();
  const angleMatch = trimmedFrom.match(/^(?:"?([^"]*?)"?\s*)?<([^<>@\s]+@[^<>@\s]+)>$/);

  const defaultFromAddress = angleMatch ? angleMatch[2].trim() : trimmedFrom;
  const parsedName = angleMatch?.[1]?.trim();
  const defaultFromName = (rawName || "").trim() || parsedName || "Dynamic Dreamz";

  return { defaultFromAddress, defaultFromName };
}

const defaultEmailSender = resolveDefaultEmailSender(
  process.env.RESEND_FROM_ADDRESS || process.env.EMAIL_FROM,
  process.env.RESEND_FROM_NAME || process.env.EMAIL_FROM_NAME,
);

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
          const mappedFields = defaultFields.map((field) => {
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

          const messagesField: Field = {
            name: "messages",
            type: "group",
            label: "Validation & Error Messages",
            admin: {
              description:
                "Customize form validation feedback and status messages. Leave default or customize anytime.",
            },
            fields: [
              {
                name: "validationError",
                type: "text",
                label: "Summary Error Box (General)",
                defaultValue: formValidationCopy.validationError,
                admin: {
                  description:
                    "Displayed in the response box at the bottom when any field has an error.",
                },
              },
              {
                name: "required",
                type: "text",
                label: "Required Field Error",
                defaultValue: formValidationCopy.required,
                admin: {
                  description: "Displayed directly beneath an empty required field.",
                },
              },
              {
                name: "invalidEmail",
                type: "text",
                label: "Invalid Email Error",
                defaultValue: formValidationCopy.invalidEmail,
                admin: {
                  description: "Displayed directly beneath an invalid email field.",
                },
              },
              {
                name: "invalidPhone",
                type: "text",
                label: "Invalid Phone Error",
                defaultValue: formValidationCopy.invalidPhone,
                admin: {
                  description: "Displayed directly beneath an invalid phone number field.",
                },
              },
              {
                name: "fileTooLarge",
                type: "text",
                label: "File Too Large Error",
                defaultValue: formValidationCopy.fileTooLarge,
                admin: {
                  description: "Displayed when an uploaded file exceeds the 5MB size limit.",
                },
              },
              {
                name: "invalidFileType",
                type: "text",
                label: "Disallowed File Type Error",
                defaultValue: formValidationCopy.invalidFileType,
                admin: {
                  description: "Displayed when an uploaded file has a disallowed extension.",
                },
              },
              {
                name: "serverError",
                type: "text",
                label: "Server / Network Error",
                defaultValue: formValidationCopy.serverError,
                admin: {
                  description: "Displayed when network or email sending fails.",
                },
              },
              {
                name: "successMessage",
                type: "text",
                label: "Success Message",
                defaultValue: formValidationCopy.success,
                admin: {
                  description: "Displayed upon successful submission.",
                },
              },
            ],
          };

          return [...mappedFields, messagesField];
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
                  [city, region, country].filter(Boolean).join(", ");

                const referer =
                  req.headers?.get?.("referer") ||
                  "https://www.dynamicdreamz.com";

                const defaultPageName = referer.includes("quote")
                  ? "Request a Quote"
                  : referer.includes("career")
                    ? "Career Apply Now"
                    : "Contact Us";

                const attr = resolveServerAttribution(
                  (field) => getVal(field),
                  {
                    fallbackLandingPage: "",
                    fallbackSubmissionPage: referer || "",
                  },
                );

                const defaults: Array<{ field: string; value: string }> = [
                  { field: "_remote_ip", value: String(getVal("_remote_ip") || headerIp || "") },
                  { field: "citystate", value: String(getVal("citystate") || cityState || "") },
                  { field: "pagename", value: String(getVal("pagename") || defaultPageName) },
                  { field: "_url", value: String(getVal("_url") || referer) },
                  ...ATTRIBUTION_FIELDS.map((field) => ({
                    field,
                    value: attr[field],
                  })),
                ];

                const attrFieldSet = new Set<string>(ATTRIBUTION_FIELDS);
                for (const def of defaults) {
                  const existingIdx = submissionData.findIndex((s: any) => s?.field === def.field);
                  if (existingIdx >= 0) {
                    if (!submissionData[existingIdx].value || attrFieldSet.has(def.field)) {
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
  email: resendAdapter({
    defaultFromAddress: defaultEmailSender.defaultFromAddress,
    defaultFromName: defaultEmailSender.defaultFromName,
    apiKey: process.env.RESEND_API_KEY || "",
  }),
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
