import type { Block } from "payload";

export const ShopifyHoursComparisonBlock: Block = {
  slug: "shopify-hours-comparison",
  labels: { singular: "Shopify Hours Comparison", plural: "Shopify Hours Comparisons" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "comparisonItems",
      type: "array",
      dbName: "shc_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "agencyWay", type: "textarea", required: true },
        { name: "freelancerWay", type: "textarea", required: true },
      ],
    },
  ],
};
