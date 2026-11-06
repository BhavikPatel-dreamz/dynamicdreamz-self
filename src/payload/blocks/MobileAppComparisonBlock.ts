import type { Block } from "payload";

export const MobileAppComparisonBlock: Block = {
  slug: "mobile-app-comparison",
  labels: {
    singular: "Mobile App Comparison Matrix",
    plural: "Mobile App Comparison Matrix Sections",
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
      defaultValue: "Why Build a Custom Shopify Mobile App vs Using App Builders?",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "tableHeaders",
      type: "array",
      dbName: "mac_hdrs",
      label: "Table Column Headers",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Header Text",
        },
      ],
    },
    {
      name: "rows",
      type: "array",
      dbName: "mac_rows",
      label: "Comparison Matrix Rows",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Row Title",
        },
        {
          name: "subtitle",
          type: "text",
          label: "Row Subtitle / Context",
        },
        {
          name: "appBuilder",
          type: "textarea",
          required: true,
          label: "App Builder Column Text",
        },
        {
          name: "custom",
          type: "textarea",
          required: true,
          label: "Custom Dynamic Dreamz Column Text",
        },
      ],
    },
  ],
};
