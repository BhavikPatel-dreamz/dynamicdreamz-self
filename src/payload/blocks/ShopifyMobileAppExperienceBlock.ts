import type { Block } from "payload";

export const ShopifyMobileAppExperienceBlock: Block = {
  slug: "shopify-mobile-app-experience",
  labels: { singular: "Shopify Mobile App Experience", plural: "Shopify Mobile App Experiences" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "smae_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "src", type: "text" },
        { name: "alt", type: "text" },
      ],
    },
  ],
};
