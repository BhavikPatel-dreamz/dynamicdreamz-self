import type { Block } from "payload";

export const CroBarriersBlock: Block = {
  slug: "cro-barriers",
  labels: {
    singular: "CRO Revenue Barriers",
    plural: "CRO Barriers Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "Stop Losing Revenue",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Is Your Store Leaking Conversions at Key Touchpoints?",
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
      dbName: "cb_items",
      label: "Conversion Barriers",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Barrier Title",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Barrier Icon Upload",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
        },
      ],
    },
  ],
};
