import type { Block } from "payload";

export const MigrationProcessBlock: Block = {
  slug: "migration-process",
  labels: { singular: "Migration Process", plural: "Migration Processes" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "variant",
      type: "select",
      options: ["default", "cards"],
      defaultValue: "cards",
    },
    { name: "id", type: "text", defaultValue: "migration-process" },
    {
      name: "steps",
      type: "array",
      dbName: "mp_steps",
      fields: [
        { name: "stepNumber", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        {
          name: "subBoxes",
          type: "array",
          dbName: "mp_subboxes",
          fields: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            {
              name: "items",
              type: "array",
              dbName: "mp_sb_items",
              fields: [{ name: "text", type: "text", required: true }],
            },
          ],
        },
        {
          name: "categories",
          type: "array",
          dbName: "mp_cats",
          fields: [
            { name: "title", type: "text", required: true },
            {
              name: "items",
              type: "array",
              dbName: "mp_cat_items",
              fields: [{ name: "text", type: "text", required: true }],
            },
          ],
        },
      ],
    },
  ],
};
