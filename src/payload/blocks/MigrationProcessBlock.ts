import type { Block } from "payload";

export const MigrationProcessBlock: Block = {
  slug: "migration-process",
  labels: {
    singular: "Migration Process (6-Step Cards)",
    plural: "Migration Process Sections",
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
      name: "sectionId",
      type: "text",
      defaultValue: "migration-process",
      label: "HTML Section ID",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "cards",
      options: [
        { label: "Cards Grid (3-Col + Nested Sub-Boxes)", value: "cards" },
        { label: "Default Timeline", value: "default" },
      ],
    },
    {
      name: "steps",
      type: "array",
      dbName: "mp_steps",
      label: "Process Steps",
      fields: [
        {
          name: "stepNumber",
          type: "text",
          required: true,
          label: "Step Number (e.g. 01)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Step Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Step Description",
        },
        {
          name: "subBoxes",
          type: "array",
          dbName: "mp_sboxes",
          label: "Sub-boxes (e.g. Products, Categories, Testing)",
          fields: [
            {
              name: "title",
              type: "text",
              label: "Sub-box Title",
            },
            {
              name: "description",
              type: "textarea",
              label: "Sub-box Description",
            },
            {
              name: "items",
              type: "array",
              dbName: "mp_sbitems",
              label: "List Items / Tags",
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "categories",
          type: "array",
          dbName: "mp_cats",
          label: "Categories with Bullet Lists",
          fields: [
            {
              name: "title",
              type: "text",
              label: "Category Title",
            },
            {
              name: "items",
              type: "array",
              dbName: "mp_catitems",
              label: "List Items",
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
