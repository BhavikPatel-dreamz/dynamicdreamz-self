import type { Block } from "payload";

export const ShopifySupportScenariosBlock: Block = {
  slug: "shopify-support-scenarios",
  labels: {
    singular: "Shopify Support Scenarios",
    plural: "Shopify Support Scenarios",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "items",
      type: "array",
      dbName: "sss_items",
      fields: [
        { name: "scenarioId", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "subtitle", type: "text" },
        { name: "kicker", type: "text" },
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        {
          name: "features",
          type: "array",
          dbName: "sss_ftrs",
          fields: [{ name: "text", type: "text", required: true }],
        },
        { name: "meta", type: "text" },
        {
          name: "primaryCta",
          type: "group",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
        {
          name: "secondaryCta",
          type: "group",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },
  ],
};
