import type { Block } from "payload";

export const CareerOpportunitiesBlock: Block = {
  slug: "career-opportunities",
  labels: {
    singular: "Career Opportunities & Job Openings",
    plural: "Career Opportunities Sections",
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
      defaultValue: "Current Opportunities",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
  ],
};
