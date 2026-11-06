import type { Block } from "payload";

export const EvaluationFrameworkBlock: Block = {
  slug: "evaluation-framework",
  labels: {
    singular: "Agency Evaluation Framework",
    plural: "Evaluation Framework Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "Evaluation Framework",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "10-Point Framework for Choosing Your Shopify Plus Partner",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "theme",
      type: "select",
      defaultValue: "white",
      options: [
        { label: "White Background", value: "white" },
        { label: "Cyan Tint Background", value: "cyan" },
      ],
    },
    {
      name: "items",
      type: "array",
      dbName: "ef_items",
      label: "Evaluation Criteria",
      fields: [
        {
          name: "number",
          type: "text",
          label: "Number (e.g. 01)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Criteria Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Criteria Explanation",
        },
      ],
    },
  ],
};
