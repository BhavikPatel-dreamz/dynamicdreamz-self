import type { Block } from "payload";

export const ThemeCustomizationApproachBlock: Block = {
  slug: "theme-customization-approach",
  labels: { singular: "Theme Customization Approach", plural: "Theme Customization Approaches" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "approaches",
      type: "array",
      dbName: "tca_approaches",
      fields: [
        { name: "badge", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "isHighlighted", type: "checkbox", defaultValue: false },
        {
          name: "points",
          type: "array",
          dbName: "tca_points",
          fields: [{ name: "point", type: "text", required: true }],
        },
      ],
    },
  ],
};
