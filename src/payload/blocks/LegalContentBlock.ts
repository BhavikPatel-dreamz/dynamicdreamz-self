import type { Block } from "payload";

export const LegalContentBlock: Block = {
  slug: "legal-content",
  labels: {
    singular: "Legal Policy Content",
    plural: "Legal Policy Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "intro", type: "textarea" },
    {
      name: "containerWidth",
      type: "select",
      defaultValue: "standard",
      options: [
        { label: "Narrow (Editorial / Legal)", value: "narrow" },
        { label: "Standard", value: "standard" },
        { label: "Full Width", value: "full" },
      ],
    },
    {
      name: "sections",
      type: "array",
      dbName: "leg_secs",
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "level",
          type: "select",
          defaultValue: "2",
          options: [
            { label: "H2", value: "2" },
            { label: "H3", value: "3" },
          ],
        },
        {
          name: "paragraphs",
          type: "array",
          dbName: "leg_paras",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
        {
          name: "items",
          type: "array",
          dbName: "leg_items",
          fields: [
            { name: "text", type: "text", required: true },
            { name: "boldPrefix", type: "text" },
          ],
        },
        {
          name: "closingParagraphs",
          type: "array",
          dbName: "leg_cparas",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
      ],
    },
    {
      name: "contactInfo",
      type: "group",
      fields: [
        { name: "name", type: "text" },
        { name: "email", type: "text" },
        { name: "phone", type: "text" },
        { name: "phoneHref", type: "text" },
        { name: "address", type: "textarea" },
        { name: "addressHref", type: "text" },
      ],
    },
  ],
};
