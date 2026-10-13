import type { Block } from "payload";

export const ShopifyPlusProofBlock: Block = {
  slug: "shopify-plus-proof",
  labels: { singular: "Shopify Plus Proof", plural: "Shopify Plus Proofs" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "intro", type: "textarea" },
    { name: "text", type: "textarea" },
    {
      name: "stats",
      type: "array",
      dbName: "spp_stats",
      fields: [{ name: "stat", type: "text", required: true }],
    },
  ],
};
