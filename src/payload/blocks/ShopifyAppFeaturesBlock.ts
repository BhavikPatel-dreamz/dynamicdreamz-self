import type { Block } from "payload";

export const ShopifyAppFeaturesBlock: Block = {
  slug: "shopify-app-features",
  labels: { singular: "Shopify App Features", plural: "Shopify App Features" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "centerImage", type: "upload", relationTo: "media" },
    { name: "centerImageSrc", type: "text" },
    { name: "centerImageAlt", type: "text" },
    {
      name: "leftFeatures",
      type: "array",
      dbName: "saf_l_feat",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text" },
      ],
    },
    {
      name: "rightFeatures",
      type: "array",
      dbName: "saf_r_feat",
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
