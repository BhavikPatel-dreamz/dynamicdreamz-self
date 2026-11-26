import type { Block } from "payload";

export const ShopifyTeamBehindItBlock: Block = {
  slug: "team-behind-it",
  labels: {
    singular: "White-Label Team Behind It",
    plural: "White-Label Team Behind It Sections",
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
      dbName: "tbi_cards",
      label: "Brand Protection & Workflow Cards",
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
    {
      name: "hideCtas",
      type: "checkbox",
      defaultValue: false,
      label: "Hide Bottom CTAs",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          label: "CTA Label",
        },
        {
          name: "href",
          type: "text",
          label: "CTA Link",
        },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Secondary CTA Label",
        },
        {
          name: "href",
          type: "text",
          label: "Secondary CTA Link",
        },
        {
          name: "variant",
          type: "select",
          defaultValue: "arrowLink",
          options: [
            { label: "Arrow Link", value: "arrowLink" },
            { label: "Outline Button", value: "outline" },
          ],
        },
      ],
    },
  ],
};
