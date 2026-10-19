import type { Block } from "payload";

export const ShopifyCroServicesBlock: Block = {
  slug: "shopify-cro-services",
  labels: { singular: "Shopify CRO Services", plural: "Shopify CRO Services" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "scros_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        {
          name: "deliverables",
          type: "array",
          dbName: "scros_deliv",
          fields: [{ name: "item", type: "text", required: true }],
        },
      ],
    },
  ],
};
