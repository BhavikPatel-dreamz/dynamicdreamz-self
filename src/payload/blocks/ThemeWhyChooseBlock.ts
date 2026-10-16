import type { Block } from "payload";

export const ThemeWhyChooseBlock: Block = {
  slug: "theme-why-choose",
  labels: {
    singular: "Theme Why Choose Section",
    plural: "Theme Why Choose Sections",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea", required: true },
    {
      name: "backgroundVariant",
      type: "select",
      options: [
        { label: "Gradient", value: "gradient" },
        { label: "White", value: "white" },
      ],
      defaultValue: "gradient",
    },
    {
      name: "items",
      type: "array",
      dbName: "twc_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text", required: true },
      ],
    },
  ],
};
