import type { CollectionConfig } from "payload";

const getMediaBaseURL = () =>
  (process.env.MEDIA_SERVER_URL || "https://media.dynamicdreamz.net").replace(/\/+$/, "");

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "public/uploads",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 512,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        height: 1080,
        position: "centre",
      },
    ],
    adminThumbnail: ({ doc }) => {
      const baseURL = getMediaBaseURL();
      const thumb = (doc?.sizes as { thumbnail?: { filename?: string } } | undefined)?.thumbnail?.filename;
      const file = thumb || (doc?.filename as string | undefined);
      if (file) {
        return `${baseURL}/files/uploads/${encodeURIComponent(file)}`;
      }
      return (doc?.url as string) || null;
    },
    handlers: [
      async (_req, { params }) => {
        const filename = params?.filename;
        if (!filename) {
          return new Response("Not found", { status: 404 });
        }
        const baseURL = getMediaBaseURL();
        return Response.redirect(`${baseURL}/files/uploads/${encodeURIComponent(filename)}`, 307);
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Alt Text (Required for SEO & Accessibility)",
    },
  ],
};
