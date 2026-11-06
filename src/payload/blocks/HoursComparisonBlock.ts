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
  ],
};
