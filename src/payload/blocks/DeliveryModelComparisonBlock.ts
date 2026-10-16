import type { Block } from "payload";

export const DeliveryModelComparisonBlock: Block = {
  slug: "delivery-model-comparison",
  labels: {
    singular: "Delivery Model Comparison",
    plural: "Delivery Model Comparisons",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "columns",
      type: "array",
      dbName: "dmc_cols",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "isWinner", type: "checkbox", defaultValue: false },
        { name: "kicker", type: "text" },
        { name: "pill", type: "text" },
      ],
    },
    {
      name: "rows",
      type: "array",
      dbName: "dmc_rows",
      fields: [
        { name: "feature", type: "text", required: true },
        { name: "inHouse", type: "text", required: true },
        { name: "freelancer", type: "text", required: true },
        { name: "partner", type: "text", required: true },
      ],
    },
    {
      name: "ctas",
      type: "group",
      fields: [
        {
          name: "primary",
          type: "group",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
        {
          name: "secondary",
          type: "group",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },
  ],
};
