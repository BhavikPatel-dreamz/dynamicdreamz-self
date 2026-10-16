import type { Block } from "payload";

export const ShopifyMobileAppComparisonBlock: Block = {
  slug: "shopify-mobile-app-comparison",
  labels: { singular: "Shopify Mobile App Comparison", plural: "Shopify Mobile App Comparisons" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "col1Heading", type: "text", defaultValue: "App Builder (Template)" },
    { name: "col2Heading", type: "text", defaultValue: "Custom Mobile App Development" },
    {
      name: "rows",
      type: "array",
      dbName: "smac_rows",
      fields: [
        { name: "feature", type: "text", required: true },
        { name: "appBuilder", type: "text", required: true },
        { name: "customDev", type: "text", required: true },
      ],
    },
  ],
};
