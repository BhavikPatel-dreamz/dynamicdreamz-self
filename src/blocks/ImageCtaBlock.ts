import type { Block } from "payload";

export const ImageCtaBlock: Block = {
  slug: "image-cta",
  labels: { singular: "Image CTA", plural: "Image CTAs" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "ctaLabel", type: "text", required: true },
    { name: "ctaHref", type: "text", required: true },
    { name: "backgroundImage", type: "upload", relationTo: "media" },
    { name: "backgroundImageSrc", type: "text" },
  ],
};
