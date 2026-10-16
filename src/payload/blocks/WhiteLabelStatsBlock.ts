import type { Block } from "payload";

export const WhiteLabelStatsBlock: Block = {
  slug: "white-label-stats",
  labels: {
    singular: "White Label Stats Bar",
    plural: "White Label Stats Bars",
  },
  fields: [
    {
      name: "variant",
      type: "select",
      options: [
        { label: "Default", value: "default" },
        { label: "Minimal", value: "minimal" },
      ],
      defaultValue: "minimal",
    },
    {
      name: "stats",
      type: "array",
      dbName: "wls_stat",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
