import type { Block } from "payload";

export const IndustryBrandsBlock: Block = {
  slug: "industry-brands",
  labels: { singular: "Industry Brands Slider", plural: "Industry Brands Sliders" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "eyebrow", type: "text" },
    { name: "density", type: "select", options: ["standard", "compact", "flexible"], defaultValue: "standard" },
    {
      name: "items",
      type: "array",
      dbName: "ind_br_items",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "src", type: "text" },
        { name: "alt", type: "text" },
        { name: "url", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
  ],
};
