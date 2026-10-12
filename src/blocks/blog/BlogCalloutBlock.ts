import type { Block } from "payload";

export const BlogCalloutBlock: Block = {
  slug: "blog-callout",
  labels: {
    singular: "Blog Callout",
    plural: "Blog Callouts",
  },
  fields: [
    {
      name: "type",
      type: "select",
      options: [
        { label: "Info", value: "info" },
        { label: "Tip", value: "tip" },
        { label: "Warning", value: "warning" },
      ],
      defaultValue: "info",
      required: true,
    },
    { name: "title", type: "text" },
    { name: "content", type: "textarea", required: true },
  ],
};
