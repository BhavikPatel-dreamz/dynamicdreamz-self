import type { Block } from "payload";

export const BlogListBlock: Block = {
  slug: "blog-list",
  labels: {
    singular: "Blog List",
    plural: "Blog Lists",
  },
  fields: [
    { name: "ordered", type: "checkbox", defaultValue: false },
    {
      name: "items",
      type: "array",
      dbName: "bl_items",
      labels: {
        singular: "List Item",
        plural: "List Items",
      },
      fields: [
        { name: "text", type: "textarea" },
        { name: "boldPrefix", type: "text" },
        { name: "linkText", type: "text" },
        { name: "linkHref", type: "text" },
        {
          name: "inlineNodes",
          type: "array",
          dbName: "bli_in_nodes",
          labels: {
            singular: "Inline Node",
            plural: "Inline Nodes",
          },
          fields: [
            {
              name: "type",
              type: "select",
              options: ["text", "link", "break", "code"],
              defaultValue: "text",
              required: true,
            },
            { name: "text", type: "text" },
            { name: "bold", type: "checkbox", defaultValue: false },
            { name: "italic", type: "checkbox", defaultValue: false },
            { name: "href", type: "text" },
            {
              name: "target",
              type: "select",
              options: [
                { label: "Same Window (_self)", value: "_self" },
                { label: "New Window (_blank)", value: "_blank" },
              ],
              defaultValue: "_self",
            },
            { name: "rel", type: "text" },
          ],
        },
      ],
    },
  ],
};
