import type { Block } from "payload";

export const ShopifyAppsGridBlock: Block = {
  slug: "shopify-apps-grid",
  labels: { singular: "Shopify Apps Grid", plural: "Shopify Apps Grids" },
  fields: [
    {
      name: "apps",
      type: "array",
      dbName: "sag_apps",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "href", type: "text", required: true },
        { name: "additionalInfo", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
        { name: "alt", type: "text" },
      ],
    },
  ],
};
