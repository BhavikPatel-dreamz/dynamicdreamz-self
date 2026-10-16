import type { Block } from "payload";

export const ShopifyMobileAppDtcBlock: Block = {
  slug: "shopify-mobile-app-dtc",
  labels: { singular: "Shopify Mobile App DTC Brands", plural: "Shopify Mobile App DTC Brands" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "cards",
      type: "array",
      dbName: "smad_cards",
      fields: [
        { name: "tag", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        {
          name: "badges",
          type: "array",
          dbName: "smad_badges",
          fields: [
            { name: "name", type: "text" },
            { name: "src", type: "text" },
            { name: "logo", type: "upload", relationTo: "media" },
            { name: "alt", type: "text" },
            { name: "href", type: "text" },
            { name: "width", type: "number" },
            { name: "height", type: "number" },
          ],
        },
      ],
    },
  ],
};
