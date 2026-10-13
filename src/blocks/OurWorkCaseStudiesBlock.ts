import type { Block } from "payload";

export const OurWorkCaseStudiesBlock: Block = {
  slug: "our-work-case-studies",
  labels: {
    singular: "Our Work Case Studies Section",
    plural: "Our Work Case Studies Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
  ],
};
