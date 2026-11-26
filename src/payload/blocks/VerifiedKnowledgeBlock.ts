import type { Block } from "payload";

export const VerifiedKnowledgeBlock: Block = {
  slug: "verified-knowledge",
  labels: {
    singular: "Verified Shopify Knowledge",
    plural: "Verified Shopify Knowledge Sections",
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
      dbName: "vk_items",
      label: "Knowledge Pillars",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Pillar Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Pillar Description",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Pillar Icon",
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
