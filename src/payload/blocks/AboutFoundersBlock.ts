import type { Block } from "payload";

export const AboutFoundersBlock: Block = {
  slug: "about-founders",
  labels: {
    singular: "About Founders Section",
    plural: "About Founders Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    {
      name: "descriptions",
      type: "array",
      dbName: "ab_f_descs",
      fields: [{ name: "text", type: "text", required: true }],
    },
    {
      name: "founders",
      type: "array",
      dbName: "ab_fndrs",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "role", type: "text", required: true },
        { name: "biography", type: "textarea" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
        { name: "linkedIn", type: "text" },
      ],
    },
  ],
};
