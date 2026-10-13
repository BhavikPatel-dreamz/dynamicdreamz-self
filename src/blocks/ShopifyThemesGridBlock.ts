import type { Block } from "payload";

export const ShopifyThemesGridBlock: Block = {
  slug: "shopify-themes-grid",
  labels: { singular: "Shopify Themes Grid", plural: "Shopify Themes Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea", required: true },
    { name: "idAttr", type: "text" },
    {
      name: "variant",
      type: "select",
      options: ["white", "pista"],
      defaultValue: "pista",
    },
    {
      name: "items",
      type: "array",
      dbName: "stg_items",
      fields: [
        { name: "name", type: "text" },
        { name: "title", type: "text" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
        { name: "alt", type: "text" },
        { name: "href", type: "text" },
        { name: "ctaText", type: "text" },
      ],
    },
  ],
};
