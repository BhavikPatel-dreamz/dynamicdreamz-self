import type { Block } from "payload";

export const IndustriesGridBlock: Block = {
  slug: "industries-grid",
  labels: { singular: "Industries Served Grid", plural: "Industries Served Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "industries",
      type: "array",
      label: "Industry Cards",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "eyebrow", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "grid",
      options: [
        { label: "Grid", value: "grid" },
        { label: "Carousel / Drag Scroll", value: "carousel" },
      ],
    },
  ],
};
