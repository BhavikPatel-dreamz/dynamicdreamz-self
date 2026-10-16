import type { Block } from "payload";

export const ShopifyCroAssessmentBlock: Block = {
  slug: "shopify-cro-assessment",
  labels: { singular: "Shopify CRO Assessment", plural: "Shopify CRO Assessments" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "points",
      type: "array",
      dbName: "sca_points",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
  ],
};
