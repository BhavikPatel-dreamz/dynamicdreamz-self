import type { Block } from "payload";

export const CtaBannerBlock: Block = {
  slug: "cta-banner",
  labels: { singular: "CTA Banner", plural: "CTA Banners" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "btnText", type: "text", required: true },
    { name: "btnUrl", type: "text", required: true },
  ],
};
