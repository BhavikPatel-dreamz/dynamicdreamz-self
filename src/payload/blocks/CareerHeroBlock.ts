import type { Block } from "payload";

export const CareerHeroBlock: Block = {
  slug: "career-hero",
  labels: {
    singular: "Career Hero Section",
    plural: "Career Hero Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "badges",
      type: "array",
      dbName: "car_bdgs",
      fields: [
        { name: "href", type: "text" },
        { name: "alt", type: "text" },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
    {
      name: "scrollingImages",
      type: "array",
      dbName: "car_sc_imgs",
      fields: [
        { name: "image", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
  ],
};
