import type { Block } from "payload";

export const ShopifyHorizontalProcessBlock: Block = {
  slug: "shopify-horizontal-process",
  labels: { singular: "Shopify Horizontal Process", plural: "Shopify Horizontal Processes" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "steps",
      type: "array",
      dbName: "shp_steps",
      fields: [
        { name: "number", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
