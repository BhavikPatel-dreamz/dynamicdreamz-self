import type { Block } from "payload";

export const AiEmpoweredDeliveryBlock: Block = {
  slug: "ai-empowered-delivery",
  labels: {
    singular: "AI Empowered Delivery",
    plural: "AI Empowered Delivery Sections",
  },
  fields: [
    {
      name: "variant",
      type: "select",
      defaultValue: "default",
      options: [
        { label: "Default (Light Green)", value: "default" },
        { label: "Dark Green Background", value: "dark-green" },
      ],
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
      name: "description",
      type: "textarea",
      required: true,
      label: "Description",
    },
    {
      name: "callout",
      type: "text",
      label: "Callout / SEO Note",
    },
    {
      name: "cta",
      type: "group",
      label: "CTA Button",
      fields: [
        { name: "label", type: "text", label: "CTA Label" },
        { name: "href", type: "text", label: "CTA Link" },
      ],
    },
    {
      name: "tools",
      type: "array",
      dbName: "aed_tools",
      label: "AI Delivery Tools & Capabilities",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Tool / Capability Name",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Capability Description",
        },
      ],
    },
  ],
};
