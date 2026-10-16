import type { Block } from "payload";

export const ShopifyAppProcessBlock: Block = {
  slug: "shopify-app-process",
  labels: { singular: "Shopify App Process", plural: "Shopify App Processes" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "steps",
      type: "array",
      dbName: "sap_steps",
      fields: [
        { name: "step", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text" },
      ],
    },
  ],
};
