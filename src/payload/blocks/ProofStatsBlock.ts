import type { Block } from "payload";

export const ProofStatsBlock: Block = {
  slug: "proof-stats",
  labels: {
    singular: "Why Choose & Proof Stats",
    plural: "Proof & Stats Sections",
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
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "counters-bar",
      options: [
        { label: "Animated Counters Bar (4 Stats)", value: "counters-bar" },
        { label: "City Landing Counters Bar", value: "city-counters" },
        { label: "Shopify Team Behind It (Expertise Boxes)", value: "team-boxes" },
        { label: "Shopify Plus Proof Metrics", value: "shopify-plus-proof" },
        { label: "Why Choose Shopify Migration", value: "why-choose-migration" },
        { label: "Why Choose Boxes (City & Specialized)", value: "why-choose-boxes" },
        { label: "White Label Counters & Metrics", value: "white-label-counters" },
        { label: "Credential Evidence & Certifications", value: "credential-evidence" },
      ],
    },
    {
      name: "columns",
      type: "select",
      defaultValue: "5",
      options: [
        { label: "3 Columns (Dynamic Grid)", value: "3" },
        { label: "4 Columns", value: "4" },
        { label: "5 Columns (Standard Grid)", value: "5" },
      ],
    },
    {
      name: "theme",
      type: "select",
      defaultValue: "light",
      options: [
        { label: "Light Background (#eff4ef)", value: "light" },
        { label: "White Background", value: "white" },
        { label: "Dark Background", value: "dark" },
        { label: "Warm Background", value: "warm" },
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
      name: "counters",
      type: "array",
      dbName: "pr_cntrs",
      label: "Counter Metrics",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
          label: "Number / Value (e.g. 5000, 150)",
        },
        {
          name: "suffix",
          type: "text",
          label: "Suffix (e.g. +, B+, %)",
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Primary Label",
        },
        {
          name: "subLabel",
          type: "text",
          label: "Sub-label / Description",
        },
      ],
    },
    {
      name: "boxes",
      type: "array",
      dbName: "pr_boxes",
      label: "Proof & Expertise Boxes",
      fields: [
        {
          name: "number",
          type: "text",
          label: "Number (e.g. 01)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Box Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Box Description",
        },
        {
          name: "badgeText",
          type: "text",
          label: "Badge / Highlight Text",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Box Icon",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "iconAlt",
          type: "text",
          label: "Icon Alt Text",
        },
      ],
    },
  ],
};
