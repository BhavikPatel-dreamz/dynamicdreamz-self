import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "./src/payload/collections/Users";
import { Media } from "./src/payload/collections/Media";
import { Categories } from "./src/payload/collections/Categories";
import { Authors } from "./src/payload/collections/Authors";
import { Testimonials } from "./src/payload/collections/Testimonials";
import { Posts } from "./src/payload/collections/Posts";
import { CaseStudies } from "./src/payload/collections/CaseStudies";
import { Pages } from "./src/payload/collections/Pages";

import { Navigation } from "./src/payload/globals/Navigation";
import { SiteSettings } from "./src/payload/globals/SiteSettings";
import { mediaServerStorage } from "./adapter/src/index";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
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
      },
      redirectRelationships: ["pages"],
      formOverrides: {
        admin: {
          group: "Leads & Inquiries",
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: "Leads & Inquiries",
        },
        hooks: {
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
      },
    }),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "src/types/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    push: false,
  }),
  sharp,
});
