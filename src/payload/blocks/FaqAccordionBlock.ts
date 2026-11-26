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
      name: "sectionId",
      type: "text",
      label: "HTML Section ID (e.g. faqs)",
    },
    {
      name: "containerVariant",
      type: "select",
      defaultValue: "default",
      label: "Container Width / Mobile Padding",
      options: [
        { label: "Default Container", value: "default" },
        { label: "Compact Mobile Padding (compactMobile)", value: "compactMobile" },
      ],
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
      name: "lazyAccordion",
      type: "checkbox",
      defaultValue: false,
      label: "Lazy Hydrate Accordion Items",
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
          required: false,
          label: "Answer (Plain Text or Leave Blank when using Rich Answer Parts)",
        },
        {
          name: "answerParts",
          type: "array",
          dbName: "fa_apts",
          label: "Rich Answer Parts (Optional inline bold spans)",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Text Segment",
            },
            {
              name: "strong",
              type: "checkbox",
              defaultValue: false,
              label: "Bold Text",
            },
          ],
        },
        {
          name: "listPosition",
          type: "select",
          defaultValue: "after",
          label: "Bullet List Position",
          options: [
            { label: "After Primary Answer", value: "after" },
            { label: "Before Primary Answer", value: "before" },
          ],
        },
        {
          name: "listItems",
          type: "array",
          dbName: "fa_list",
          label: "Structured Bullet Items (Optional)",
          fields: [
            {
              name: "label",
              type: "text",
              label: "Bold Prefix Label (Optional)",
            },
            {
              name: "text",
              type: "text",
              required: true,
              label: "Bullet Text",
            },
          ],
        },
        {
          name: "secondaryAnswer",
          type: "textarea",
          label: "Closing / Secondary Paragraph (Optional)",
        },
      ],
    },
  ],
};
