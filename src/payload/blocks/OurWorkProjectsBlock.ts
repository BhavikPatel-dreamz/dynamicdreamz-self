import type { Block } from "payload";

export const OurWorkProjectsBlock: Block = {
  slug: "our-work-projects",
  labels: {
    singular: "Our Work Projects Section",
    plural: "Our Work Projects Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
  ],
};
