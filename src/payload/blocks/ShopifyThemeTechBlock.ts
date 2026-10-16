import type { Block } from "payload";

export const ShopifyThemeTechBlock: Block = {
  slug: "shopify-theme-tech",
  labels: {
    singular: "Shopify Theme Tech Tools",
    plural: "Shopify Theme Tech Tools",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea" },
    { name: "bottomDescription", type: "textarea" },
    {
      name: "columns",
      type: "select",
      options: [
        { label: "3 Columns", value: "3" },
        { label: "5 Columns", value: "5" },
      ],
      defaultValue: "3",
    },
    {
      name: "items",
      type: "array",
      dbName: "stt_items",
      fields: [
        { name: "name", type: "text" },
        { name: "title", type: "text" },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "alt", type: "text" },
        { name: "gradient", type: "text" },
      ],
    },
  ],
};
