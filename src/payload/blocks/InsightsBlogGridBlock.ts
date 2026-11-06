import type { Block } from "payload";

export const InsightsBlogGridBlock: Block = {
  slug: "home-insights",
  labels: {
    singular: "Home Insights Blog Grid",
    plural: "Home Insights Blog Grid Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Fresh From Dynamic Dreamz",
      label: "Heading / Title",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "View All Blogs",
      label: "CTA Button Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/blogs",
      label: "CTA Button Link",
    },
  ],
};
