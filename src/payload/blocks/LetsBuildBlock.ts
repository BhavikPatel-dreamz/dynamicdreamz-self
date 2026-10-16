import type { Block } from "payload";

export const LetsBuildBlock: Block = {
  slug: "lets-build",
  labels: {
    singular: "Let's Build CTA Section",
    plural: "Let's Build CTA Sections",
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "ctaLabel", type: "text", required: true },
    { name: "ctaHref", type: "text", required: true },
    { name: "className", type: "text" },
  ],
};
