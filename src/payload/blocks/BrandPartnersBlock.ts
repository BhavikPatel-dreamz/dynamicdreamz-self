import type { Block } from "payload";

export const BrandPartnersBlock: Block = {
  slug: "brand-partners",
  labels: { singular: "Brand Partners / Logo Slider", plural: "Brand Partners / Logo Sliders" },
  fields: [
    { name: "heading", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "logos",
      type: "array",
      label: "Partner & Client Logos",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "url", type: "text" },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "grid",
      options: [
        { label: "Grid", value: "grid" },
        { label: "Slider / Marquee", value: "slider" },
      ],
    },
  ],
};
