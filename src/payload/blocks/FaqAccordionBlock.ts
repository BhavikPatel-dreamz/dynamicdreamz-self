import type { Block } from "payload";

export const FaqAccordionBlock: Block = {
  slug: "faq-accordion",
  labels: { singular: "FAQ Accordion", plural: "FAQ Accordions" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "idPrefix", type: "text" },
    { name: "sectionId", type: "text" },
    {
      name: "faqs",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
        { name: "secondaryAnswer", type: "textarea" },
        { name: "listPosition", type: "select", options: ["before", "after"] },
        {
          name: "listItems",
          type: "array",
          dbName: "faq_list_items",
          fields: [
            { name: "label", type: "text" },
            { name: "text", type: "text", required: true },
          ],
        },
      ],
    },
  ],
};
