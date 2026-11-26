import type { Block } from "payload";

export const ProcessTimelineBlock: Block = {
  slug: "process-timeline",
  labels: {
    singular: "Process & Roadmap Timeline",
    plural: "Process Timeline Sections",
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
      required: true,
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "note",
      type: "textarea",
      label: "Bottom Note / Clarification Text (White-Label Process)",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "development-process",
      options: [
        { label: "Our Development Process (Numbered Cards)", value: "development-process" },
        { label: "Shopify Migration Numbered Grid", value: "migration-grid" },
        { label: "Shopify Horizontal Process Stepper", value: "horizontal-process" },
        { label: "Numbered Process Timeline with Bullets", value: "numbered-timeline" },
        { label: "Shopify Migration 5-Step Process", value: "migration-process" },
        { label: "Shopify App Process (Appmaker)", value: "app-process" },
        { label: "White-Label Partnership Process (Numbered Circles & Chevrons)", value: "white-label-process" },
      ],
    },
    {
      name: "columns",
      type: "select",
      defaultValue: "4",
      options: [
        { label: "4 Columns (Default)", value: "4" },
        { label: "3 Columns (6-Box Grid)", value: "3" },
      ],
    },
    {
      name: "eyebrowVariant",
      type: "select",
      defaultValue: "dash",
      options: [
        { label: "Dash Prefix", value: "dash" },
        { label: "Pill Badge", value: "pill" },
      ],
    },
    {
      name: "isBgTransparent",
      type: "checkbox",
      defaultValue: false,
      label: "Transparent Background",
    },
    {
      name: "cardVariant",
      type: "select",
      defaultValue: "pista",
      options: [
        { label: "Pista Green (#EFF4EF)", value: "pista" },
        { label: "White Background", value: "white" },
      ],
    },
    {
      name: "sectionId",
      type: "text",
      label: "HTML Section ID (e.g. migration-process)",
    },
    {
      name: "headingId",
      type: "text",
      label: "Heading DOM ID (e.g. shopify-hours-process-title)",
    },
    {
      name: "className",
      type: "text",
      label: "Custom CSS Class (e.g. engagement-section)",
    },
    {
      name: "removeTopPadding",
      type: "checkbox",
      defaultValue: false,
      label: "Remove top padding (pt-0)",
    },
    {
      name: "removeBottomPadding",
      type: "checkbox",
      defaultValue: false,
      label: "Remove bottom padding (pb-0)",
    },
    {
      name: "steps",
      type: "array",
      dbName: "pt_steps",
      label: "Process Steps",
      fields: [
        {
          name: "step",
          type: "text",
          label: "Step Number (e.g. 01, Step 1)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Step Title",
        },
        {
          name: "secondaryTitle",
          type: "text",
          label: "Second Line Break (Optional split-line label)",
        },
        {
          name: "description",
          type: "textarea",
          label: "Step Description",
        },
        {
          name: "bullets",
          type: "array",
          dbName: "pt_blts",
          label: "Sub-points / Deliverables",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
