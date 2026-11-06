import type { Block } from "payload";

export const AboutValuesBlock: Block = {
  slug: "about-values",
  labels: {
    singular: "About Core Values",
    plural: "About Core Values Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Our Core Values",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "values",
      type: "array",
      dbName: "av_vals",
      label: "Values Cards",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Value Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Value Description",
        },
        {
          name: "iconName",
          type: "text",
          required: true,
          label: "Icon Identifier (e.g. innovation, integrity, transparency)",
        },
      ],
    },
  ],
};
