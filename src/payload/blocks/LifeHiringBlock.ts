import type { Block } from "payload";

export const LifeHiringBlock: Block = {
  slug: "life-hiring",
  labels: {
    singular: "Life Hiring Section",
    plural: "Life Hiring Sections",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "cta", type: "text", required: true },
    { name: "href", type: "text", required: true },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "imageAlt", type: "text" },
  ],
};
