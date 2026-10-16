import type { Block } from "payload";

export const CareerPerksBlock: Block = {
  slug: "career-perks",
  labels: {
    singular: "Career Perks Section",
    plural: "Career Perks Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "perks",
      type: "array",
      dbName: "car_prks",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "iconName", type: "text", required: true },
      ],
    },
  ],
};
