import type { Block } from "payload";

export const ShopifyCroAssessmentBlock: Block = {
  slug: "cro-assessment",
  labels: {
    singular: "Shopify CRO Assessment Matrix",
    plural: "Shopify CRO Assessment Matrix Sections",
  },
  fields: [
    {
      name: "heading",
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
      name: "ctaLabel",
      type: "text",
      defaultValue: "Request CRO Assessment",
      label: "CTA Button Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/request-a-quote",
      label: "CTA Button Link",
    },
    {
      name: "points",
      type: "array",
      dbName: "ca_points",
      label: "Assessment Steps / Badges",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Assessment Step Text",
        },
      ],
    },
  ],
};
