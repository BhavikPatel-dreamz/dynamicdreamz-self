import type { Block } from "payload";

export const TechnologiesWorkWithBlock: Block = {
  slug: "technologies-work-with",
  labels: {
    singular: "Technologies We Work With",
    plural: "Technologies We Work With",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "categories",
      type: "array",
      dbName: "tww_cats",
      fields: [
        { name: "category", type: "text", required: true },
        {
          name: "technologies",
          type: "array",
          dbName: "tww_techs",
          fields: [{ name: "text", type: "text", required: true }],
        },
      ],
    },
  ],
};
