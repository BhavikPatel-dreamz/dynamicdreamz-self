import type { Block } from "payload";

export const IndustryCustomDevelopmentBlock: Block = {
  slug: "industry-custom-dev",
  labels: {
    singular: "Industry Custom Development",
    plural: "Industry Custom Development Sections",
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
      required: true,
      label: "Description",
    },
    {
      name: "items",
      type: "array",
      dbName: "icd_items",
      label: "List Items",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Item Text",
        },
      ],
    },
  ],
};
