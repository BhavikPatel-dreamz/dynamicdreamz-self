import type { Block } from "payload";

export const NumberedProcessTimelineBlock: Block = {
  slug: "numbered-process-timeline",
  labels: { singular: "Numbered Process Timeline", plural: "Numbered Process Timelines" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "headingId", type: "text" },
    {
      name: "layout",
      type: "select",
      options: ["split", "centered"],
      defaultValue: "split",
    },
    {
      name: "items",
      type: "array",
      dbName: "npt_items",
      fields: [
        { name: "number", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
