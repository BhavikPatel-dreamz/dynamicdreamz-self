import type { Block } from "payload";

export const WorkCultureBlock: Block = {
  slug: "work-culture",
  labels: {
    singular: "Work Culture Section",
    plural: "Work Culture Sections",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "values",
      type: "array",
      dbName: "wc_vals",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
      ],
    },
  ],
};
