import type { Block } from "payload";

export const EvaluationFrameworkBlock: Block = {
  slug: "evaluation-framework",
  labels: { singular: "Evaluation Framework", plural: "Evaluation Frameworks" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "sectionId", type: "text", defaultValue: "evaluation-framework" },
    { name: "className", type: "text" },
    {
      name: "items",
      type: "array",
      dbName: "ef_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
