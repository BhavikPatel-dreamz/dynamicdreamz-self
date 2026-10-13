import type { Block } from "payload";

export const ShopifyCroRevenueImpactBlock: Block = {
  slug: "shopify-cro-revenue-impact",
  labels: { singular: "Shopify CRO Revenue Impact", plural: "Shopify CRO Revenue Impacts" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "beforeBadge", type: "text", defaultValue: "Current State" },
    {
      name: "beforeMetrics",
      type: "array",
      dbName: "scri_b_metrics",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
      ],
    },
    { name: "beforeTotalLabel", type: "text", defaultValue: "Revenue" },
    { name: "beforeTotalValue", type: "text", defaultValue: "$50,000" },
    { name: "afterBadge", type: "text", defaultValue: "After Optimization" },
    {
      name: "afterMetrics",
      type: "array",
      dbName: "scri_a_metrics",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
      ],
    },
    { name: "afterTotalLabel", type: "text", defaultValue: "Revenue" },
    { name: "afterTotalValue", type: "text", defaultValue: "$75,000" },
    { name: "footerText", type: "text" },
    { name: "footerHighlight", type: "text" },
    { name: "footerSuffix", type: "text" },
  ],
};
