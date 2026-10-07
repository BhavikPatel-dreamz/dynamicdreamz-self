import type { Block } from "payload";

export const ProcessTimelineBlock: Block = {
  slug: "process-timeline",
  labels: { singular: "Process Timeline", plural: "Process Timelines" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    {
      name: "steps",
      type: "array",
      fields: [
        { name: "stepNumber", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
