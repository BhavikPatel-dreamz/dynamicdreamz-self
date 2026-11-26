import type { Block } from "payload";

export const ShopifyCroRevenueImpactBlock: Block = {
  slug: "cro-revenue-impact",
  labels: {
    singular: "Shopify CRO Revenue Impact",
    plural: "Shopify CRO Revenue Impact Sections",
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
      name: "beforeBadge",
      type: "text",
      defaultValue: "Current State",
      label: "Before Card Badge",
    },
    {
      name: "beforeMetrics",
      type: "array",
      dbName: "cri_bmet",
      label: "Before Optimization Metrics",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "Metric Label",
        },
        {
          name: "value",
          type: "text",
          required: true,
          label: "Metric Value",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Metric Icon",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Icon Alt Text",
        },
      ],
    },
    {
      name: "beforeTotalLabel",
      type: "text",
      defaultValue: "Revenue",
      label: "Before Total Label",
    },
    {
      name: "beforeTotalValue",
      type: "text",
      defaultValue: "$50,000",
      label: "Before Total Value",
    },
    {
      name: "afterBadge",
      type: "text",
      defaultValue: "After Optimization",
      label: "After Card Badge",
    },
    {
      name: "afterMetrics",
      type: "array",
      dbName: "cri_amet",
      label: "After Optimization Metrics",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "Metric Label",
        },
        {
          name: "value",
          type: "text",
          required: true,
          label: "Metric Value",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Metric Icon",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Icon Alt Text",
        },
      ],
    },
    {
      name: "afterTotalLabel",
      type: "text",
      defaultValue: "Revenue",
      label: "After Total Label",
    },
    {
      name: "afterTotalValue",
      type: "text",
      defaultValue: "$75,000",
      label: "After Total Value",
    },
    {
      name: "footerText",
      type: "text",
      label: "Footer Prefix Text",
    },
    {
      name: "footerHighlight",
      type: "text",
      label: "Footer Highlighted Value",
    },
    {
      name: "footerSuffix",
      type: "text",
      label: "Footer Suffix Text",
    },
  ],
};
