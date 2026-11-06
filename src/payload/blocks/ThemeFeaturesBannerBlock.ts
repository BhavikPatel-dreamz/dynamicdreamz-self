import type { Block } from "payload";

export const ThemeFeaturesBannerBlock: Block = {
  slug: "theme-features-banner",
  labels: {
    singular: "Theme Features Banner",
    plural: "Theme Features Banner Sections",
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
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "items",
      type: "array",
      dbName: "tfb_items",
      label: "Feature Badges / Highlights",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Feature Title",
        },
      ],
    },
  ],
};
