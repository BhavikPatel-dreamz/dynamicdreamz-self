import type { Block } from "payload";

export const CareerOpportunitiesBlock: Block = {
  slug: "career-opportunities",
  labels: {
    singular: "Career Opportunities Section",
    plural: "Career Opportunities Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
  ],
};
