import type { Block } from "payload";

export const RisksShopifyTopicsBlock: Block = {
  slug: "risks-shopify-topics",
  labels: { singular: "Risks Shopify Topics", plural: "Risks Shopify Topics" },
  fields: [
    {
      name: "topics",
      type: "array",
      dbName: "rst_topics",
      fields: [
        { name: "label", type: "text" },
        { name: "heading", type: "text" },
        { name: "number", type: "text" },
        { name: "title", type: "text", required: true },
        {
          name: "paragraphs",
          type: "array",
          dbName: "rst_paras",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
      ],
    },
  ],
};
