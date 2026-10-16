import type { Block } from "payload";

export const AboutHeroBlock: Block = {
  slug: "about-hero",
  labels: {
    singular: "About Hero Section",
    plural: "About Hero Sections",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "deliveryTitle", type: "text", required: true },
    {
      name: "statistics",
      type: "array",
      dbName: "ab_h_stats",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },
  ],
};
