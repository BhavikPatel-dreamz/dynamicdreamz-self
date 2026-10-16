import type { Block } from "payload";

export const TwoColImageWithTextBlock: Block = {
  slug: "image-with-text",
  labels: { singular: "Image with Text (Split Content)", plural: "Image with Text Sections" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "image", type: "upload", relationTo: "media", required: true },
    {
      name: "imagePosition",
      type: "select",
      defaultValue: "left",
      options: [
        { label: "Image on Left", value: "left" },
        { label: "Image on Right", value: "right" },
      ],
    },
    {
      name: "bullets",
      type: "array",
      label: "Feature Checklist",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
  ],
};
