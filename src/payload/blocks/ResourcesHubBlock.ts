import type { Block } from "payload";

export const ResourcesHubBlock: Block = {
  slug: "resources-hub",
  labels: {
    singular: "Resources Hub & Listing",
    plural: "Resources Hub Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      defaultValue: "E-commerce Insights, Checklists & Migration Guides",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "points",
      type: "array",
      dbName: "rh_pts",
      label: "Key Hub Highlights",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Point Text",
        },
      ],
    },
  ],
};
