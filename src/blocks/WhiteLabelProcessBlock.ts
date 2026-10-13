import type { Block } from "payload";

export const WhiteLabelProcessBlock: Block = {
  slug: "white-label-process",
  labels: { singular: "White Label Process", plural: "White Label Processes" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "note", type: "text" },
    {
      name: "steps",
      type: "array",
      dbName: "wlp_steps",
      fields: [
        { name: "number", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
