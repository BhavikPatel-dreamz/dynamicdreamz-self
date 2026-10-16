import type { Block } from "payload";

export const AboutValuesBlock: Block = {
  slug: "about-values",
  labels: {
    singular: "About Values Section",
    plural: "About Values Sections",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "values",
      type: "array",
      dbName: "ab_vals",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "iconName", type: "text", required: true },
      ],
    },
  ],
};
