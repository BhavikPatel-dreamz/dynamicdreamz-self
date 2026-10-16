import type { Block } from "payload";

export const BlogHeadingBlock: Block = {
  slug: "blog-heading",
  labels: {
    singular: "Blog Heading",
    plural: "Blog Headings",
  },
  fields: [
    {
      name: "level",
      type: "select",
      options: [
        { label: "H2", value: "2" },
        { label: "H3", value: "3" },
        { label: "H4", value: "4" },
        { label: "H5", value: "5" },
      ],
      defaultValue: "2",
      required: true,
    },
    { name: "text", type: "text", required: true },
    { name: "anchorId", type: "text" },
  ],
};
