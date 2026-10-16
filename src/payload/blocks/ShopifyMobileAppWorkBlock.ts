import type { Block } from "payload";

export const ShopifyMobileAppWorkBlock: Block = {
  slug: "shopify-mobile-app-work",
  labels: { singular: "Shopify Mobile App Work", plural: "Shopify Mobile App Work" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
    { name: "className", type: "text" },
    {
      name: "items",
      type: "array",
      dbName: "smaw_items",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "category", type: "text" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "src", type: "text" },
        { name: "alt", type: "text" },
        { name: "href", type: "text" },
        { name: "appStoreUrl", type: "text" },
        { name: "playStoreUrl", type: "text" },
      ],
    },
  ],
};
