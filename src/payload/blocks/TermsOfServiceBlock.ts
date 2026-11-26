import type { Block } from "payload";

export const TermsOfServiceBlock: Block = {
  slug: "terms-of-service",
  labels: {
    singular: "Terms of Service Content",
    plural: "Terms of Service Sections",
  },
  fields: [
    {
      name: "heroTitle",
      type: "text",
      required: true,
      defaultValue: "Terms of Service",
      label: "Hero Title (H1)",
    },
    {
      name: "intro",
      type: "textarea",
      required: true,
      label: "Introductory Paragraph",
    },
    {
      name: "sections",
      type: "array",
      dbName: "tos_secs",
      label: "Terms Sections",
      fields: [
        { name: "title", type: "text", required: true, label: "Section Heading (H2)" },
        {
          name: "paragraphs",
          type: "array",
          dbName: "tos_pr",
          label: "Opening Paragraphs",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
        {
          name: "items",
          type: "array",
          dbName: "tos_it",
          label: "Bullet List Items",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
        {
          name: "closingParagraphs",
          type: "array",
          dbName: "tos_cp",
          label: "Closing Paragraphs",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
      ],
    },
    {
      name: "contactEmail",
      type: "text",
      required: true,
      defaultValue: "support@dynamicdreamz.com",
      label: "Contact Email Address",
    },
  ],
};
