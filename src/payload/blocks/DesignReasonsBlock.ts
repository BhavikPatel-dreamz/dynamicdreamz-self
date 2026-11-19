import type { Block } from "payload";

export const DesignReasonsBlock: Block = {
  slug: "design-reasons",
  labels: {
    singular: "Design Reasons Accordion",
    plural: "Design Reasons Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Description",
    },
    {
      name: "items",
      type: "array",
      dbName: "dr_items",
      label: "Reason Accordion Items",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Item Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Item Description",
        },
      ],
    },
  ],
};
