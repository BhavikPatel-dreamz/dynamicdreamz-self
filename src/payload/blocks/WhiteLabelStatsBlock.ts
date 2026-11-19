import type { Block } from "payload";

export const WhiteLabelStatsBlock: Block = {
  slug: "white-label-stats",
  labels: {
    singular: "White-Label Stats Counter",
    plural: "White-Label Stats Sections",
  },
  fields: [
    {
      name: "stats",
      type: "array",
      dbName: "wlst_items",
      label: "Statistics",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
          label: "Number / Metric (e.g. 5000+)",
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Stat Label (e.g. Projects Completed)",
        },
      ],
    },
  ],
};
