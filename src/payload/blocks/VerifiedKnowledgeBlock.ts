import type { Block } from "payload";

export const VerifiedKnowledgeBlock: Block = {
  slug: "verified-knowledge",
  labels: { singular: "Verified Knowledge", plural: "Verified Knowledge" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "vk_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text" },
      ],
    },
  ],
};
