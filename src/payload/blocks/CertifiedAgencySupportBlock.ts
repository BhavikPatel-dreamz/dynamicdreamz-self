import type { Block } from "payload";

export const CertifiedAgencySupportBlock: Block = {
  slug: "certified-agency-support",
  labels: { singular: "Certified Agency Support", plural: "Certified Agency Support" },
  fields: [
    { name: "heading", type: "text", required: true },
    {
      name: "paragraphs",
      type: "array",
      dbName: "cas_paragraphs",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
    {
      name: "items",
      type: "array",
      dbName: "cas_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
