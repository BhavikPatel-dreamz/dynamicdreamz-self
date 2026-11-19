import type { Block } from "payload";

export const WhiteLabelWhyBlock: Block = {
  slug: "white-label-why",
  labels: {
    singular: "White-Label Why Section",
    plural: "White-Label Why Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "reasons",
      type: "array",
      dbName: "wlw_items",
      label: "Reasons / Pillars",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Card Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Card Description",
        },
      ],
    },
  ],
};
