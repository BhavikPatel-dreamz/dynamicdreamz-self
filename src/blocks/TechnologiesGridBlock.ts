import type { Block } from "payload";

export const TechnologiesGridBlock: Block = {
  slug: "technologies-grid",
  labels: { singular: "Technologies & Integrations Grid", plural: "Technologies & Integrations Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "categories",
      type: "array",
      dbName: "tech_cats",
      label: "Technology Categories",
      fields: [
        { name: "category", type: "text", required: true },
        {
          name: "technologies",
          type: "array",
          dbName: "tech_items",
          fields: [
            { name: "name", type: "text", required: true },
            { name: "icon", type: "upload", relationTo: "media" },
          ],
        },
      ],
    },
  ],
};
