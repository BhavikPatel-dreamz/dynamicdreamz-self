import type { Block } from "payload";

export const ShopifyHoursTasksBlock: Block = {
  slug: "shopify-hours-tasks",
  labels: { singular: "Shopify Hours Tasks", plural: "Shopify Hours Tasks" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "taskCategories",
      type: "array",
      dbName: "sht_cats",
      fields: [
        { name: "category", type: "text", required: true },
        {
          name: "tasks",
          type: "array",
          dbName: "sht_tasks",
          fields: [{ name: "task", type: "text", required: true }],
        },
      ],
    },
  ],
};
