import type { Block } from "payload";

export const ShopifyCroBarriersBlock: Block = {
  slug: "shopify-cro-barriers",
  labels: { singular: "Shopify CRO Barriers", plural: "Shopify CRO Barriers" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "scb_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "alt", type: "text" },
      ],
    },
  ],
};
