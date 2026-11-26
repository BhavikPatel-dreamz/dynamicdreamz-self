import type { Block } from "payload";

export const CertifiedAgencySupportBlock: Block = {
  slug: "certified-agency-support",
  labels: {
    singular: "Certified Agency Support",
    plural: "Certified Agency Support Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "paragraphs",
      type: "array",
      dbName: "cas_paras",
      label: "Description Paragraphs",
      fields: [
        {
          name: "text",
          type: "textarea",
          required: true,
          label: "Paragraph",
        },
      ],
    },
    {
      name: "items",
      type: "array",
      dbName: "cas_items",
      label: "Support Pillars",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Card Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Card Description",
        },
      ],
    },
  ],
};
