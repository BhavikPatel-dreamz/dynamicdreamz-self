import type { Block } from "payload";

export const PillListBlock: Block = {
  slug: "pill-list",
  labels: {
    singular: "Pill List Section",
    plural: "Pill List Sections",
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "pl_items",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "className", type: "text" },
  ],
};
