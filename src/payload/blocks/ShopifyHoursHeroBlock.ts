import type { Block } from "payload";

export const ShopifyHoursHeroBlock: Block = {
  slug: "shopify-hours-hero",
  labels: { singular: "Shopify Hours Hero", plural: "Shopify Hours Heroes" },
  fields: [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    { name: "primaryCtaText", type: "text" },
    { name: "primaryCtaHref", type: "text" },
    { name: "hourlyRate", type: "text" },
    { name: "hourlyRateNote", type: "text" },
    {
      name: "trustBadges",
      type: "array",
      dbName: "shh_badges",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "subtitle", type: "text" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
      ],
    },
  ],
};
