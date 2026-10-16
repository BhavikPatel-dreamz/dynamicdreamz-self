import type { Block } from "payload";

export const ShopifyAppBenefitsBlock: Block = {
  slug: "shopify-app-benefits",
  labels: { singular: "Shopify App Benefits", plural: "Shopify App Benefits" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "items",
      type: "array",
      dbName: "sab_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text" },
      ],
    },
  ],
};
