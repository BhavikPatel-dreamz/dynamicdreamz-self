import type { Block } from "payload";

export const ShopifyAppsHeroBlock: Block = {
  slug: "shopify-apps-hero",
  labels: { singular: "Shopify Apps Hero", plural: "Shopify Apps Heroes" },
  fields: [
    { name: "title", type: "text", required: true },
  ],
};
