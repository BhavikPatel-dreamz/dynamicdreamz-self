import type { Block } from "payload";

export const CaseStudyCardsBlock: Block = {
  slug: "case-study-cards",
  labels: { singular: "Case Study Cards", plural: "Case Study Cards" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "ctaLabel", type: "text" },
    {
      name: "items",
      type: "array",
      dbName: "csc_items",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
        { name: "imageAlt", type: "text" },
        { name: "href", type: "text", required: true },
        { name: "platform", type: "text" },
        { name: "industry", type: "text" },
        { name: "ctaLabel", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "chips",
          type: "array",
          dbName: "csc_chips",
          fields: [{ name: "tag", type: "text" }],
        },
      ],
    },
  ],
};
