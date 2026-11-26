import type { Block } from "payload";

export const OurWorkCaseStudiesBlock: Block = {
  slug: "our-work-case-studies",
  labels: {
    singular: "Our Work Case Studies Grid",
    plural: "Our Work Case Studies Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "CASE STUDIES",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "See the Story Behind the Work",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "viewCaseStudyLabel",
      type: "text",
      defaultValue: "View case study",
      label: "View Case Study CTA Label",
    },
    {
      name: "items",
      type: "array",
      dbName: "owcs_items",
      label: "Case Study Cards",
      fields: [
        { name: "slug", type: "text", required: true, label: "Case Study Slug" },
        { name: "category", type: "text", required: true, label: "Category Label" },
        { name: "industry", type: "text", label: "Industry" },
        { name: "title", type: "text", required: true, label: "Card Title" },
        { name: "excerpt", type: "textarea", label: "Excerpt" },
        {
          name: "chips",
          type: "array",
          dbName: "owcs_chps",
          label: "Capability Chips",
          fields: [{ name: "text", type: "text", required: true }],
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Card Image",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Image Fallback Path",
        },
        { name: "imageAlt", type: "text", label: "Image Alt Text" },
      ],
    },
  ],
};
