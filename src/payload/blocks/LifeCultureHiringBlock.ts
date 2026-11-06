import type { Block } from "payload";

export const LifeCultureHiringBlock: Block = {
  slug: "life-culture-hiring",
  labels: {
    singular: "Life Culture & Hiring Callout",
    plural: "Life Culture & Hiring Sections",
  },
  fields: [
    {
      name: "variant",
      type: "select",
      defaultValue: "culture",
      options: [
        { label: "Work Culture Grid", value: "culture" },
        { label: "Hiring Callout Split Banner", value: "hiring" },
      ],
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "cta",
      type: "text",
      label: "CTA Button Text (For Hiring Variant)",
    },
    {
      name: "href",
      type: "text",
      label: "CTA Button Link (For Hiring Variant)",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Featured Image (For Hiring Variant)",
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
      name: "values",
      type: "array",
      dbName: "lch_vals",
      label: "Culture Value Cards (For Culture Variant)",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Culture Card Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Culture Card Description",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Card Icon",
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
