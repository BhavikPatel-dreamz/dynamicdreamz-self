import type { Block } from "payload";

export const RecentArchitecturePatternsBlock: Block = {
  slug: "recent-architecture-patterns",
  labels: {
    singular: "Recent Architecture Pattern",
    plural: "Recent Architecture Patterns",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "items",
      type: "array",
      dbName: "rap_items",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "stack", type: "text", required: true },
      ],
    },
  ],
};
