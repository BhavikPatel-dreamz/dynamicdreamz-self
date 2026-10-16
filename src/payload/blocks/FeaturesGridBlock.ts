import type { Block } from "payload";

export const FeaturesGridBlock: Block = {
  slug: "features-grid",
  labels: { singular: "Features Grid", plural: "Features Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "features",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "linkText", type: "text" },
        { name: "linkUrl", type: "text" },
      ],
    },
  ],
};
