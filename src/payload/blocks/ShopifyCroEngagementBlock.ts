import type { Block } from "payload";

export const ShopifyCroEngagementBlock: Block = {
  slug: "cro-engagement",
  labels: {
    singular: "Shopify CRO Engagement Cards",
    plural: "Shopify CRO Engagement Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "items",
      type: "array",
      dbName: "croe_items",
      label: "Engagement Plans",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Engagement Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Engagement Description",
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
          name: "alt",
          type: "text",
          label: "Icon Alt Text",
        },
        {
          name: "features",
          type: "array",
          dbName: "croe_ftrs",
          label: "Included Deliverables",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Feature",
            },
          ],
        },
        {
          name: "ctaLabel",
          type: "text",
          required: true,
          label: "CTA Label",
        },
        {
          name: "ctaHref",
          type: "text",
          required: true,
          label: "CTA Link",
        },
      ],
    },
  ],
};
