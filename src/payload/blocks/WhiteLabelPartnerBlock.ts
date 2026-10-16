import type { Block } from "payload";

export const WhiteLabelPartnerBlock: Block = {
  slug: "white-label-partner-banner",
  labels: {
    singular: "White Label Partner Banner",
    plural: "White Label Partner Banners",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "bullets",
      type: "array",
      dbName: "wlp_bullets",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
  ],
};
