import type { Block } from "payload";

export const ShopifyAppsDirectoryBlock: Block = {
  slug: "shopify-apps-directory",
  labels: {
    singular: "Shopify Apps Directory",
    plural: "Shopify Apps Directory Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Shopify Public Apps",
      label: "Hero Heading",
    },
    {
      name: "apps",
      type: "array",
      dbName: "sa_items",
      label: "Shopify Apps",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "App Title",
        },
        {
          name: "additionalInfo",
          type: "text",
          label: "Additional Info (e.g. Rating & Reviews)",
        },
        {
          name: "description",
          type: "textarea",
          label: "App Description",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "App Icon Image",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Image Alt Text",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "App Store Link",
        },
      ],
    },
  ],
};
