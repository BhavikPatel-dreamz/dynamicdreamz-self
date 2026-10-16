import type { Block } from "payload";

export const BlogParagraphBlock: Block = {
  slug: "blog-paragraph",
  labels: {
    singular: "Blog Paragraph",
    plural: "Blog Paragraphs",
  },
  fields: [
    { name: "text", type: "textarea" },
    {
      name: "inlineNodes",
      type: "array",
      dbName: "bp_in_nodes",
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
};
