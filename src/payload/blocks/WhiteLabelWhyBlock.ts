import type { Block } from "payload";

export const WhiteLabelWhyBlock: Block = {
  slug: "white-label-why",
  labels: {
    singular: "White Label Why Dynamic Dreamz",
    plural: "White Label Why Dynamic Dreamz",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "className", type: "text" },
    {
      name: "reasons",
      type: "array",
      dbName: "wlw_rsns",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
