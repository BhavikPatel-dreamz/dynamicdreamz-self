import type { Block } from "payload";

export const WhiteLabelCounterBlock: Block = {
  slug: "white-label-counter",
  labels: { singular: "White Label Counter", plural: "White Label Counters" },
  fields: [
    {
      name: "counters",
      type: "array",
      dbName: "wlc_counters",
      fields: [
        { name: "count", type: "text", required: true },
        { name: "unit", type: "text" },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
