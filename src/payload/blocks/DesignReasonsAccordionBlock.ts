import type { Block } from "payload";

export const DesignReasonsAccordionBlock: Block = {
  slug: "design-reasons-accordion",
  labels: {
    singular: "Design Reasons Accordion",
    plural: "Design Reasons Accordions",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "dra_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
