import type { Block } from "payload";

export const ShopifyAppBenefitsBlock: Block = {
  slug: "shopify-app-benefits",
  labels: {
    singular: "Shopify App Benefits",
    plural: "Shopify App Benefits Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Key benefits of Shopify Appmaker",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description (Optional)",
    },
    {
      name: "items",
      type: "array",
      dbName: "sab_items",
      label: "Benefit Boxes",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Benefit Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Benefit Description",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Benefit Icon",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "iconAlt",
          type: "text",
          label: "Icon Alt Text",
        },
      ],
    },
  ],
};
