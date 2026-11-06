import type { Block } from "payload";

export const WhiteLabelDeliveryBlock: Block = {
  slug: "white-label-delivery",
  labels: {
    singular: "White Label Delivery Models",
    plural: "White Label Delivery Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "Delivery Models",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Choose the Right White-Label Delivery Model for Your Agency",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          defaultValue: "Schedule Agency Call",
          label: "CTA Label",
        },
        {
          name: "href",
          type: "text",
          defaultValue: "/request-a-quote",
          label: "CTA Link",
        },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          defaultValue: "View Rate Card",
          label: "CTA Label",
        },
        {
          name: "href",
          type: "text",
          defaultValue: "/buy-shopify-development-hours",
          label: "CTA Link",
        },
      ],
    },
  ],
};
