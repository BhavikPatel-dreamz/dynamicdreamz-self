import type { Block } from "payload";

export const TechKeywordBlock: Block = {
  slug: "tech-keyword",
  labels: {
    singular: "Tech Keyword Callout",
    plural: "Tech Keyword Callouts",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "introText", type: "textarea" },
    { name: "highlightedText", type: "text" },
    { name: "bodyText", type: "textarea" },
  ],
};
