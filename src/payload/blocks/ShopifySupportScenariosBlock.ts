import type { Block } from "payload";

export const ShopifySupportScenariosBlock: Block = {
  slug: "support-scenarios",
  labels: {
    singular: "Shopify Support Scenarios",
    plural: "Shopify Support Scenarios Sections",
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
      dbName: "ss_items",
      label: "Support Scenarios Cards",
      fields: [
        {
          name: "scenarioId",
          type: "text",
          label: "Unique Identifier",
        },
        {
          name: "kicker",
          type: "text",
          label: "Top Kicker Tag",
        },
        {
          name: "heading",
          type: "text",
          required: true,
          label: "Scenario Heading",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Scenario Description",
        },
        {
          name: "features",
          type: "array",
          dbName: "ss_ftrs",
          label: "Included Features",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "primaryCtaLabel",
          type: "text",
          defaultValue: "Discuss Scenario",
          label: "Primary CTA Label",
        },
        {
          name: "primaryCtaHref",
          type: "text",
          defaultValue: "/request-a-quote",
          label: "Primary CTA Link",
        },
        {
          name: "secondaryCtaLabel",
          type: "text",
          label: "Secondary CTA Label",
        },
        {
          name: "secondaryCtaHref",
          type: "text",
          label: "Secondary CTA Link",
        },
      ],
    },
  ],
};
