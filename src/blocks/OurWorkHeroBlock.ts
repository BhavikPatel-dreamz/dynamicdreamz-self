import type { Block } from "payload";

export const OurWorkHeroBlock: Block = {
  slug: "our-work-hero",
  labels: {
    singular: "Our Work Hero Section",
    plural: "Our Work Hero Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "primaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "showcaseImages",
      type: "array",
      dbName: "ow_sc_imgs",
      fields: [
        { name: "image", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
  ],
};
