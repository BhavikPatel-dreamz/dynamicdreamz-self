import type { Block } from "payload";

export const ShopifyCroWhyBlock: Block = {
  slug: "cro-why",
  labels: {
    singular: "Why Dynamic Dreamz (CRO)",
    plural: "Why Dynamic Dreamz (CRO) Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "paragraphs",
      type: "array",
      dbName: "crow_paras",
      label: "Body Paragraphs",
      fields: [
        {
          name: "text",
          type: "textarea",
          required: true,
          label: "Paragraph",
        },
      ],
    },
    {
      name: "points",
      type: "array",
      dbName: "crow_pts",
      label: "Right Column Highlight Points",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Point Text",
        },
      ],
    },
    {
      name: "tagline",
      type: "text",
      label: "Bottom Red Banner Tagline",
    },
    {
      name: "removeTopPadding",
      type: "checkbox",
      defaultValue: true,
      label: "Remove top padding (pt-0)",
    },
  ],
};
