import type { Block } from "payload";

export const ShopifyHoursTasksBlock: Block = {
  slug: "hours-tasks",
  labels: {
    singular: "Shopify Hours Task Scope",
    plural: "Shopify Hours Task Scope Sections",
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
      defaultValue: "What Can You Use Shopify Hours For?",
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
      dbName: "ht_items",
      label: "Task Scope Pills",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Task Scope Item",
        },
      ],
    },
  ],
};
