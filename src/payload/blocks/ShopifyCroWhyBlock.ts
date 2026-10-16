import type { Block } from "payload";

export const ShopifyCroWhyBlock: Block = {
  slug: "shopify-cro-why",
  labels: { singular: "Shopify CRO Why Us", plural: "Shopify CRO Why Us" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    {
      name: "paragraphs",
      type: "array",
      dbName: "scw_paras",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
    {
      name: "points",
      type: "array",
      dbName: "scw_points",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "tagline", type: "text" },
  ],
};
