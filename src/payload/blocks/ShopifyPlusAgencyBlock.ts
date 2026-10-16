import type { Block } from "payload";

export const ShopifyPlusAgencyBlock: Block = {
  slug: "shopify-plus-agency-overview",
  labels: {
    singular: "Shopify Plus Agency (Video & Stats)",
    plural: "Shopify Plus Agency Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text" },
    { name: "intro", type: "textarea" },
    {
      name: "paragraphs",
      type: "array",
      dbName: "spa_paras",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
    {
      name: "counters",
      type: "array",
      dbName: "spa_counters",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
        { name: "note", type: "text" },
        {
          name: "tone",
          type: "select",
          defaultValue: "green",
          options: [
            { label: "Green", value: "green" },
            { label: "Stone", value: "stone" },
            { label: "Peach", value: "peach" },
            { label: "Lime", value: "lime" },
          ],
        },
      ],
    },
    { name: "videoSrc", type: "text" },
  ],
};
