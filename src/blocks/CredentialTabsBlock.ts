import type { Block } from "payload";

export const CredentialTabsBlock: Block = {
  slug: "credential-tabs",
  labels: { singular: "Credential Tabs", plural: "Credential Tabs" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "ct_items",
      fields: [
        { name: "tabId", type: "text", required: true },
        { name: "label", type: "text", required: true },
        { name: "eyebrow", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        {
          name: "details",
          type: "array",
          dbName: "ct_details",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "value", type: "text", required: true },
          ],
        },
      ],
    },
  ],
};
