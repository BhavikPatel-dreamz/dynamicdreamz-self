import type { Block } from "payload";

export const WhyChooseShopifyMigrationBlock: Block = {
  slug: "why-choose-shopify-migration",
  labels: { singular: "Why Choose Shopify Migration", plural: "Why Choose Shopify Migration" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "partnerHeading", type: "text" },
    { name: "partnerDescription", type: "textarea" },
    { name: "partnerLogo", type: "upload", relationTo: "media" },
    { name: "partnerLogoSrc", type: "text" },
    { name: "partnerLogoAlt", type: "text" },
    { name: "logoHref", type: "text" },
    {
      name: "partnerLink",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "stats",
      type: "array",
      dbName: "wcsm_stats",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "items",
      type: "array",
      dbName: "wcsm_items",
      fields: [
        { name: "icon", type: "text" },
        { name: "title", type: "text" },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
