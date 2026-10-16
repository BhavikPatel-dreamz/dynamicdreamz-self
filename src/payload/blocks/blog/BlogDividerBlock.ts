import type { Block } from "payload";

export const BlogDividerBlock: Block = {
  slug: "blog-divider",
  labels: {
    singular: "Blog Divider",
    plural: "Blog Dividers",
  },
  fields: [
    {
      name: "style",
      type: "select",
      options: [
        { label: "Standard", value: "standard" },
        { label: "Subtle", value: "subtle" },
      ],
      defaultValue: "standard",
    },
  ],
};
