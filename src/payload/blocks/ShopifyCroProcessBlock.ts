import type { Block } from "payload";

export const ShopifyCroProcessBlock: Block = {
  slug: "shopify-cro-process",
  labels: { singular: "Shopify CRO Process", plural: "Shopify CRO Processes" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "steps",
      type: "array",
      dbName: "scp_steps",
      fields: [
        { name: "number", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
      ],
    },
  ],
};
