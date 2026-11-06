import type { Block } from "payload";

export const PricingTableBlock: Block = {
  slug: "pricing-table",
  labels: {
    singular: "Pricing & Engagement Plans",
    plural: "Pricing Table Sections",
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
      defaultValue: "Our Engagement Models",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "tiers",
      options: [
        { label: "Engagement Pricing Tiers (Cards)", value: "tiers" },
        { label: "Buy Development Hours", value: "hours" },
      ],
    },
    {
      name: "plans",
      type: "array",
      dbName: "pr_plans",
      label: "Pricing Plans / Tiers",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "Plan Name (e.g. Dedicated Team)",
        },
        {
          name: "badge",
          type: "text",
          label: "Badge (e.g. Most Popular)",
        },
        {
          name: "price",
          type: "text",
          required: true,
          label: "Price Display (e.g. $3,500)",
        },
        {
          name: "period",
          type: "text",
          label: "Billing Period (e.g. /month)",
        },
        {
          name: "description",
          type: "textarea",
          label: "Plan Description",
        },
        {
          name: "bullets",
          type: "array",
          dbName: "pr_pln_b",
          label: "Features / Inclusions",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "ctaLabel",
          type: "text",
          defaultValue: "Get Started",
          label: "CTA Button Label",
        },
        {
          name: "ctaHref",
          type: "text",
          defaultValue: "/request-a-quote",
          label: "CTA Button Link",
        },
      ],
    },
  ],
};
