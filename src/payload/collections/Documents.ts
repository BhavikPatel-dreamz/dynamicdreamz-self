import type { CollectionConfig } from "payload";

const getMediaBaseURL = () =>
  (process.env.MEDIA_SERVER_URL || "https://media.dynamicdreamz.net").replace(/\/+$/, "");

export const Documents: CollectionConfig = {
  slug: "documents",
  labels: {
    singular: "Document",
    plural: "Documents",
  },
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "mimeType", "filesize", "createdAt"],
  },
  access: {
    read: () => true,
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    staticDir: "public/documents",
    handlers: [
      async (_req, { params }) => {
        const filename = params?.filename;
        if (!filename) {
          return new Response("Not found", { status: 404 });
        }
        const baseURL = getMediaBaseURL();
        return Response.redirect(`${baseURL}/files/documents/${encodeURIComponent(filename)}`, 307);
      },
    ],
    mimeTypes: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.oasis.opendocument.text",
      "application/rtf",
      "text/plain",
      "text/csv",
    ],
  },
  fields: [
    {
      name: "description",
      type: "text",
      label: "Description / Notes",
    },
  ],
};
