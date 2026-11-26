import type { Block } from "payload";

export const ShopifyCroServicesBlock: Block = {
  slug: "cro-services",
  labels: {
    singular: "Shopify CRO Services Grid",
    plural: "Shopify CRO Services Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "items",
      type: "array",
      dbName: "cros_items",
      label: "CRO Services",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Service Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Service Description",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Service Icon",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Icon Alt Text",
        },
      ],
    },
  ],
};
