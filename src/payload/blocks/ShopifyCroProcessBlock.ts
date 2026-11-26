import type { Block } from "payload";

export const ShopifyCroProcessBlock: Block = {
  slug: "cro-process",
  labels: {
    singular: "Shopify CRO 5-Step Process",
    plural: "Shopify CRO Process Sections",
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
      name: "steps",
      type: "array",
      dbName: "crop_steps",
      label: "CRO Process Steps",
      fields: [
        {
          name: "number",
          type: "text",
          label: "Step Number (e.g. 01)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Step Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Step Description",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Step Icon",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
      ],
    },
  ],
};
