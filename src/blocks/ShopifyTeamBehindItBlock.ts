import type { Block } from "payload";

export const ShopifyTeamBehindItBlock: Block = {
  slug: "shopify-team-behind-it",
  labels: { singular: "Shopify Team Behind It", plural: "Shopify Team Behind It" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "hideCtas", type: "checkbox", defaultValue: true },
    {
      name: "items",
      type: "array",
      dbName: "stbi_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "iconName", type: "text" },
      ],
    },
  ],
};
