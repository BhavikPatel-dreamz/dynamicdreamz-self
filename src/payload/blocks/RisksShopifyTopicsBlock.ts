import type { Block } from "payload";

export const RisksShopifyTopicsBlock: Block = {
  slug: "risks-shopify-topics",
  labels: {
    singular: "Shopify Outsourcing Risks & Topics",
    plural: "Shopify Outsourcing Risks Sections",
  },
  fields: [
    {
      name: "items",
      type: "array",
      dbName: "rst_items",
      label: "Topics",
      fields: [
        {
          name: "topicId",
          type: "text",
          required: true,
          label: "Section Anchor ID (e.g. communication-barriers)",
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Nav Menu Label",
        },
        {
          name: "heading",
          type: "text",
          required: true,
          label: "Topic Heading (H2)",
        },
        {
          name: "introParagraphs",
          type: "array",
          dbName: "rst_intro",
          label: "Intro Paragraphs",
          fields: [
            {
              name: "text",
              type: "textarea",
              required: true,
            },
          ],
        },
        {
          name: "paragraphs",
          type: "array",
          dbName: "rst_paras",
          label: "Main Paragraphs",
          fields: [
            {
              name: "text",
              type: "textarea",
              required: true,
            },
          ],
        },
        {
          name: "bullets",
          type: "array",
          dbName: "rst_blts",
          label: "Checklist Bullets (Optional)",
          fields: [
            {
              name: "label",
              type: "text",
              required: true,
            },
            {
              name: "text",
              type: "textarea",
              required: true,
            },
          ],
        },
        {
          name: "closingParagraphs",
          type: "array",
          dbName: "rst_close",
          label: "Closing Paragraphs",
          fields: [
            {
              name: "text",
              type: "textarea",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
