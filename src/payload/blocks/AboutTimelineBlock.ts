import type { Block } from "payload";

export const AboutTimelineBlock: Block = {
  slug: "about-timeline",
  labels: {
    singular: "Company Milestones Timeline",
    plural: "About Timeline Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      defaultValue: "2006 to 2026 and Beyond",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "milestones",
      type: "array",
      dbName: "at_miles",
      label: "Company Milestones",
      fields: [
        {
          name: "year",
          type: "text",
          label: "Year / Milestone Label (e.g. 2006)",
        },
        {
          name: "description",
          type: "textarea",
          label: "Milestone Details",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Milestone Photo",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Photo Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
        },
        {
          name: "width",
          type: "number",
          defaultValue: 400,
        },
        {
          name: "height",
          type: "number",
          defaultValue: 260,
        },
      ],
    },
  ],
};
