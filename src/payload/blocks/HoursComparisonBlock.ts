import type { Block } from "payload";

export const HoursComparisonBlock: Block = {
  slug: "hours-comparison",
  labels: {
    singular: "Shopify Hours Comparison",
    plural: "Hours Comparison Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "Shopify Resources Comparison",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      defaultValue: "In-House vs. Freelancer vs. Dynamic Dreamz",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "badge",
      type: "text",
      defaultValue: "The Best of Both Worlds",
      label: "Top Banner Badge Text",
    },
    {
      name: "items",
      type: "array",
      dbName: "hc_items",
      label: "Comparison Columns",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Option Title",
        },
        {
          name: "points",
          type: "array",
          dbName: "hc_pts",
          label: "Comparison Points",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Point Text",
            },
          ],
        },
        {
          name: "note",
          type: "text",
          required: true,
          label: "Highlighted Footnote Box",
        },
        {
          name: "cta",
          type: "text",
          required: true,
          label: "CTA Label",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "CTA Link",
        },
      ],
    },
  ],
};
