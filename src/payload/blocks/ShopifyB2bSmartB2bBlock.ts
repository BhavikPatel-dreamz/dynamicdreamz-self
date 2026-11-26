import type { Block } from "payload";

export const ShopifyB2bSmartB2bBlock: Block = {
  slug: "b2b-smart-b2b",
  labels: {
    singular: "Shopify SmartB2B Showcase",
    plural: "Shopify SmartB2B Showcases",
  },
  fields: [
    {
      name: "sectionId",
      type: "text",
      label: "HTML Section ID (e.g. smart-b2b)",
    },
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
      name: "paragraphs",
      type: "array",
      dbName: "sb2b_paras",
      label: "Body Paragraphs",
      fields: [
        {
          name: "text",
          type: "textarea",
          required: true,
          label: "Paragraph",
        },
      ],
    },
    {
      name: "features",
      type: "array",
      dbName: "sb2b_ftrs",
      label: "App Feature Pills",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Feature Label",
        },
      ],
    },
    {
      name: "buttons",
      type: "array",
      dbName: "sb2b_btns",
      label: "Action Buttons",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "Button Label",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "Button Link",
        },
        {
          name: "ariaLabel",
          type: "text",
          label: "Accessible Label (aria-label)",
        },
      ],
    },
    {
      name: "meta",
      type: "array",
      dbName: "sb2b_meta",
      label: "Meta Tags",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Meta Tag",
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Showcase Image",
    },
    {
      name: "imageSrc",
      type: "text",
      label: "Static Image Fallback Path",
    },
    {
      name: "imageAlt",
      type: "text",
      label: "Image Alt Text",
    },
    {
      name: "imageWidth",
      type: "number",
      defaultValue: 1360,
      label: "Image Width",
    },
    {
      name: "imageHeight",
      type: "number",
      defaultValue: 1480,
      label: "Image Height",
    },
  ],
};
