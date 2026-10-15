import type { Block } from "payload";

export const AiServicesGridBlock: Block = {
  slug: "ai-services-grid",
  labels: {
    singular: "AI Services Grid",
    plural: "AI Services Grids",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "items",
      type: "array",
      dbName: "asg_items",
      fields: [
        { name: "label", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "useCasesHeading", type: "text" },
        { name: "useCases", type: "textarea" },
      ],
    },
  ],
};
