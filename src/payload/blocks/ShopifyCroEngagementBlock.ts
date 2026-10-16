import type { Block } from "payload";

export const ShopifyCroEngagementBlock: Block = {
  slug: "shopify-cro-engagement",
  labels: { singular: "Shopify CRO Engagement", plural: "Shopify CRO Engagements" },
  fields: [
    { name: "heading", type: "text", required: true },
    {
      name: "items",
      type: "array",
      dbName: "sce_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "alt", type: "text" },
        {
          name: "features",
          type: "array",
          dbName: "sce_features",
          fields: [{ name: "text", type: "text", required: true }],
        },
        { name: "ctaLabel", type: "text" },
        { name: "ctaHref", type: "text" },
      ],
    },
  ],
};
