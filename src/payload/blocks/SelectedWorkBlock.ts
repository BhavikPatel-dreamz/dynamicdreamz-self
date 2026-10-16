import type { Block } from "payload";

export const SelectedWorkBlock: Block = {
  slug: "selected-work-marquee",
  labels: {
    singular: "Selected Work (Video Marquee)",
    plural: "Selected Work Sections",
  },
  fields: [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
  ],
};
