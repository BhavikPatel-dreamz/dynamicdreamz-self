import type { Block } from "payload";

export const ThemeCustomizationApproachBlock: Block = {
  slug: "theme-customization-approach",
  labels: {
    singular: "Platform Comparison & Approach",
    plural: "Platform Comparison & Approach Sections",
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
      name: "sectionId",
      type: "text",
      label: "Section ID (HTML Anchor)",
    },
    {
      name: "approaches",
      type: "array",
      dbName: "tca_cards",
      label: "Comparison Cards",
      fields: [
        {
          name: "badge",
          type: "text",
          label: "Top Badge",
        },
        {
          name: "title",
          type: "text",
          label: "Card Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Card Description",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Platform Logo",
        },
        {
          name: "logoSrc",
          type: "text",
          label: "Static Logo Fallback Path",
        },
        {
          name: "logoAlt",
          type: "text",
          label: "Logo Alt Text",
        },
        {
          name: "isHighlighted",
          type: "checkbox",
          defaultValue: false,
          label: "Highlighted / Primary Column",
        },
        {
          name: "points",
          type: "array",
          dbName: "tca_pts",
          label: "Feature Comparison Rows",
          fields: [
            {
              name: "text",
              type: "text",
              label: "Simple Bullet Text (if no label/value)",
            },
            {
              name: "label",
              type: "text",
              label: "Row Label (e.g. Overall Rating, Starting Price)",
            },
            {
              name: "value",
              type: "textarea",
              label: "Row Value / Comparison Copy",
            },
            {
              name: "ratingImage",
              type: "upload",
              relationTo: "media",
              label: "Star Rating Image",
            },
            {
              name: "ratingImageSrc",
              type: "text",
              label: "Star Rating Image Static Path",
            },
          ],
        },
      ],
    },
  ],
};
