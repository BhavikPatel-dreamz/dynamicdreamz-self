import type { Block } from "payload";

export const ShopifyMigrationNumberedGridBlock: Block = {
  slug: "shopify-migration-numbered-grid",
  labels: { singular: "Shopify Migration Numbered Grid", plural: "Shopify Migration Numbered Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
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
      dbName: "smng_items",
      fields: [
        { name: "number", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
