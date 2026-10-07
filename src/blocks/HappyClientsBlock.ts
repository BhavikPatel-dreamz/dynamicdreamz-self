import type { Block } from "payload";

export const HappyClientsBlock: Block = {
  slug: "happy-clients",
  labels: { singular: "Happy Clients Reviews", plural: "Happy Clients Reviews" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "testimonials",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
    },
  ],
};
