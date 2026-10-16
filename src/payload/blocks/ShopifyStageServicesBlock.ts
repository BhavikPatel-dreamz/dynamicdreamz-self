import type { Block } from "payload";

export const ShopifyStageServicesBlock: Block = {
  slug: "shopify-stage-services",
  labels: { singular: "Shopify Stage Services", plural: "Shopify Stage Services" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "lastColFull", type: "checkbox", defaultValue: false },
    { name: "sixCards", type: "checkbox", defaultValue: false },
    {
      name: "items",
      type: "array",
      dbName: "sss_items",
      fields: [
        { name: "tag", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        {
          name: "pills",
          type: "array",
          dbName: "sss_pills",
          fields: [{ name: "text", type: "text" }],
        },
        {
          name: "cta",
          type: "group",
          fields: [
            { name: "label", type: "text" },
            { name: "href", type: "text" },
          ],
        },
      ],
    },
  ],
};
