import type { Block } from "payload";

export const SelectedWorkVideoBlock: Block = {
  slug: "home-selected-work",
  labels: {
    singular: "Home Selected Work Showcase",
    plural: "Home Selected Work Showcase Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Selected Work",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "View All Projects",
      label: "CTA Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/our-work",
      label: "CTA Link",
    },
  ],
};
