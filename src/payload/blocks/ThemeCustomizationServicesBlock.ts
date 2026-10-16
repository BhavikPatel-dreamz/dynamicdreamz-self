import type { Block } from "payload";

export const ThemeCustomizationServicesBlock: Block = {
  slug: "theme-customization-services",
  labels: { singular: "Theme Customization Services", plural: "Theme Customization Services" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "bottomNote", type: "text" },
    {
      name: "variant",
      type: "select",
      options: ["green", "yellow", "transparent"],
      defaultValue: "green",
    },
    { name: "sectionId", type: "text" },
    {
      name: "boxes",
      type: "array",
      dbName: "tcs_boxes",
      fields: [
        { name: "number", type: "text" },
        { name: "iconName", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "badge", type: "text" },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
