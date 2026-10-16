import type { Block } from "payload";

export const BlogTableBlock: Block = {
  slug: "blog-table",
  labels: {
    singular: "Blog Table",
    plural: "Blog Tables",
  },
  fields: [
    {
      name: "headers",
      type: "array",
      dbName: "bt_headers",
      fields: [
        { name: "headerText", type: "text" },
      ],
    },
    {
      name: "rows",
      type: "array",
      dbName: "bt_rows",
      fields: [
        {
          name: "cells",
          type: "array",
          dbName: "btr_cells",
          fields: [
            { name: "cellText", type: "text" },
          ],
        },
      ],
    },
  ],
};
