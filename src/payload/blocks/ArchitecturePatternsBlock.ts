import type { Block } from "payload";

export const ArchitecturePatternsBlock: Block = {
  slug: "architecture-patterns",
  labels: {
    singular: "Architecture Patterns Section",
    plural: "Architecture Patterns Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "items",
      type: "array",
      dbName: "ap_items",
      label: "Architecture Pattern Cards",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "Category Label (e.g. HEADLESS & COMPOSABLE)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Pattern Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Pattern Description",
        },
        {
          name: "stack",
          type: "text",
          required: true,
          label: "Tech Stack Specs",
        },
      ],
    },
  ],
};
