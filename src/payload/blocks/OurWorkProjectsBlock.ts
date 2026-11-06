import type { Block } from "payload";

export const OurWorkProjectsBlock: Block = {
  slug: "our-work-projects",
  labels: {
    singular: "Our Work Filterable Projects",
    plural: "Our Work Projects Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "Portfolio",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Selected Projects That Delivered Real Business Impact",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
  ],
};
