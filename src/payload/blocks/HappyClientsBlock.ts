import type { Block } from "payload";

export const HappyClientsBlock: Block = {
  slug: "happy-clients",
  labels: { singular: "Happy Clients Reviews", plural: "Happy Clients Reviews" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "testimonials",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
    },
    {
      name: "items",
      type: "array",
      dbName: "hcl_items",
      admin: {
        description:
          "Use for page-specific testimonial-card variants. The existing React card still owns all presentation.",
      },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "company", type: "text", required: true },
        { name: "quote", type: "textarea", required: true },
        { name: "videoId", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "logoWidth", type: "number" },
        { name: "logoHeight", type: "number" },
      ],
    },
  ],
};
