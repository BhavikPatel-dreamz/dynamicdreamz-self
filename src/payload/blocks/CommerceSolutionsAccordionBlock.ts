import type { Block } from "payload";

export const CommerceSolutionsAccordionBlock: Block = {
  slug: "home-commerce-solutions",
  labels: {
    singular: "Home Commerce Solutions Accordion",
    plural: "Home Commerce Solutions Accordion Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "solutions",
      type: "array",
      dbName: "hcs_items",
      label: "Commerce Solution Panels",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Solution Title",
        },
        {
          name: "summary",
          type: "textarea",
          required: true,
          label: "Brief Summary",
        },
        {
          name: "body",
          type: "textarea",
          required: true,
          label: "Extended Description",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "Link URL",
        },
        {
          name: "cta",
          type: "text",
          defaultValue: "Learn More",
          required: true,
          label: "CTA Text",
        },
      ],
    },
  ],
};
