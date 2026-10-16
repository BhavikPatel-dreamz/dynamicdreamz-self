import type { Block } from "payload";

export const ContactHeroBlock: Block = {
  slug: "contact-hero",
  labels: {
    singular: "Contact Hero Section",
    plural: "Contact Hero Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "quickLinks",
      type: "array",
      dbName: "cnt_ql",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
  ],
};
