import type { Block } from "payload";

export const CredentialTabsBlock: Block = {
  slug: "credential-tabs",
  labels: {
    singular: "Shopify Credential Tabs",
    plural: "Shopify Credential Tabs Sections",
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
      dbName: "ct_items",
      label: "Credential Tabs",
      fields: [
        {
          name: "tabId",
          type: "text",
          required: true,
          label: "Unique Tab ID (e.g. fundamentals, business)",
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Tab Button Label",
        },
        {
          name: "eyebrow",
          type: "text",
          label: "Panel Eyebrow Text",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Panel Heading Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Panel Narrative Description",
        },
        {
          name: "details",
          type: "array",
          dbName: "ct_dtls",
          label: "Credential Key Facts / Metrics",
          fields: [
            {
              name: "label",
              type: "text",
              required: true,
              label: "Fact Label",
            },
            {
              name: "value",
              type: "text",
              required: true,
              label: "Fact Value",
            },
          ],
        },
      ],
    },
  ],
};
