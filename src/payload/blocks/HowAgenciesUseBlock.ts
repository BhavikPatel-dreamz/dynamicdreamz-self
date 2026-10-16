import type { Block } from "payload";

export const HowAgenciesUseBlock: Block = {
  slug: "how-agencies-use",
  labels: {
    singular: "How Agencies Use Dynamic Dreamz",
    plural: "How Agencies Use Dynamic Dreamz",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "cards",
      type: "array",
      dbName: "hau_crds",
      fields: [
        { name: "tag", type: "text", required: true },
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "pill", type: "text", required: true },
        { name: "ctaLabel", type: "text", required: true },
        { name: "ctaHref", type: "text", required: true },
      ],
    },
  ],
};
