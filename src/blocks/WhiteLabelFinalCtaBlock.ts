import type { Block } from "payload";

export const WhiteLabelFinalCtaBlock: Block = {
  slug: "white-label-final-cta",
  labels: { singular: "White Label Final CTA", plural: "White Label Final CTAs" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "buttonText", type: "text", required: true },
    { name: "buttonUrl", type: "text", required: true },
    {
      name: "variant",
      type: "select",
      options: ["default", "certifiedDevelopers", "agency"],
      defaultValue: "default",
    },
  ],
};
