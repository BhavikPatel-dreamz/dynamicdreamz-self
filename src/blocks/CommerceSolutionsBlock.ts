import type { Block } from "payload";

export const CommerceSolutionsBlock: Block = {
  slug: "commerce-solutions",
  labels: {
    singular: "Commerce Solutions (Accordion Cards)",
    plural: "Commerce Solutions Sections",
  },
  fields: [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "solutions",
      type: "array",
      dbName: "cs_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "summary", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
        { name: "href", type: "text" },
        { name: "cta", type: "text" },
      ],
    },
  ],
};
