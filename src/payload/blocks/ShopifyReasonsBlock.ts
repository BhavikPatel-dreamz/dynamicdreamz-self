import type { Block } from "payload";

export const ShopifyReasonsBlock: Block = {
  slug: "shopify-reasons",
  labels: {
    singular: "Shopify Reasons / Outcomes",
    plural: "Shopify Reasons / Outcomes",
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "layout",
      type: "select",
      options: [
        { label: "Grid", value: "grid" },
        { label: "Carousel", value: "carousel" },
      ],
      defaultValue: "carousel",
    },
    { name: "carouselFullBleed", type: "checkbox", defaultValue: true },
    {
      name: "items",
      type: "array",
      dbName: "sr_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text", required: true },
      ],
    },
  ],
};
