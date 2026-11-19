import type { Block } from "payload";

export const TechKeywordsBlock: Block = {
  slug: "tech-keywords",
  labels: {
    singular: "Tech Keywords Box",
    plural: "Tech Keywords Sections",
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
      name: "introText",
      type: "textarea",
      label: "Intro Text",
    },
    {
      name: "highlightedText",
      type: "text",
      label: "Highlighted Text (Bold)",
    },
    {
      name: "bodyText",
      type: "textarea",
      label: "Body Text",
    },
  ],
};
