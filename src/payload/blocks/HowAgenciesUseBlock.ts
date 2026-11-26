import type { Block } from "payload";

export const HowAgenciesUseBlock: Block = {
  slug: "how-agencies-use",
  labels: {
    singular: "How Agencies Use Us",
    plural: "How Agencies Use Us Sections",
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
      name: "cards",
      type: "array",
      dbName: "hau_cards",
      label: "Agency Use Case Cards",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
          label: "Top Region / Agency Tag",
        },
        {
          name: "heading",
          type: "text",
          required: true,
          label: "Card Heading",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Card Description",
        },
        {
          name: "pill",
          type: "text",
          required: true,
          label: "Bottom Capabilities Pill",
        },
        {
          name: "ctaLabel",
          type: "text",
          required: true,
          label: "CTA Label",
        },
        {
          name: "ctaHref",
          type: "text",
          required: true,
          label: "CTA Link",
        },
      ],
    },
  ],
};
