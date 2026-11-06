import type { Block } from "payload";

export const FaqAccordionBlock: Block = {
  slug: "faq-accordion",
  labels: {
    singular: "FAQ Accordion",
    plural: "FAQ Accordion Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      defaultValue: "Frequently Asked Questions",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description (Left Column)",
    },
    {
      name: "idPrefix",
      type: "text",
      defaultValue: "faq",
      label: "ID Prefix for ARIA Accessibility",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "split",
      options: [
        { label: "Split 2-Column (Sticky Heading, Right Accordions)", value: "split" },
        { label: "Home FAQ (Standard Spacing)", value: "home" },
      ],
    },
    {
      name: "iconVariant",
      type: "select",
      defaultValue: "circle-cross",
      options: [
        { label: "Circle Cross (+ / ×)", value: "circle-cross" },
        { label: "Default Chevron", value: "default" },
      ],
    },
    {
      name: "animateOnReveal",
      type: "checkbox",
      defaultValue: false,
      label: "Animate on Reveal (data-aos)",
    },
    {
      name: "faqs",
      type: "array",
      dbName: "fa_items",
      label: "Questions & Answers",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
          label: "Question",
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
          label: "Answer",
        },
      ],
    },
  ],
};
