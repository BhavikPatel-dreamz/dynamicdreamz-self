import type { Block } from "payload";

export const ShopifyMobileAppHeroBlock: Block = {
  slug: "shopify-mobile-app-hero",
  labels: { singular: "Shopify Mobile App Hero", plural: "Shopify Mobile App Heroes" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea", required: true },
    {
      name: "eyebrowSpans",
      type: "array",
      dbName: "smah_eyebrows",
      fields: [{ name: "text", type: "text" }],
    },
    { name: "cta", type: "text" },
    { name: "ctaHref", type: "text" },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "badges",
      type: "array",
      dbName: "smah_badges",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "src", type: "text" },
        { name: "alt", type: "text" },
        { name: "href", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
    {
      name: "appScreenshots",
      type: "array",
      dbName: "smah_screenshots",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "src", type: "text" },
        { name: "alt", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
    {
      name: "frameImage",
      type: "group",
      fields: [
        { name: "image", type: "upload", relationTo: "media" },
        { name: "src", type: "text" },
        { name: "alt", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
  ],
};
