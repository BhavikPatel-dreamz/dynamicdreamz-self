import type { Block } from "payload";

export const WhiteLabelServicesBlock: Block = {
  slug: "white-label-services",
  labels: {
    singular: "White-Label Services Accordion",
    plural: "White-Label Services Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "title",
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
      name: "idPrefix",
      type: "text",
      defaultValue: "white-label-service",
      label: "Accordion ID Prefix",
    },
    {
      name: "showCta",
      type: "checkbox",
      defaultValue: true,
      label: "Show Bottom CTA Button",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "Request A Quote",
      label: "CTA Button Label",
    },
    {
      name: "services",
      type: "array",
      dbName: "wls_items",
      label: "Service Offerings",
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
          label: "Service Overview",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Service Icon (Media)",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Service Icon Fallback Path",
        },
        {
          name: "href",
          type: "text",
          label: "Link URL (optional)",
        },
        {
          name: "linkLabel",
          type: "text",
          label: "Link Label (e.g. Read More)",
        },
      ],
    },
  ],
};
