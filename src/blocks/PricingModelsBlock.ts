import type { Block } from "payload";

export const PricingModelsBlock: Block = {
  slug: "pricing-models",
  labels: { singular: "Pricing & Hiring Models", plural: "Pricing & Hiring Models" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "models",
      type: "array",
      label: "Engagement / Pricing Tiers",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "badge", type: "text" },
        { name: "price", type: "text", required: true },
        { name: "description", type: "textarea" },
        {
          name: "bullets",
          type: "array",
          fields: [{ name: "text", type: "text", required: true }],
        },
        { name: "ctaLabel", type: "text", required: true },
        { name: "ctaHref", type: "text", required: true },
      ],
    },
  ],
};
