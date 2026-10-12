import type { Block } from "payload";

export const BlogImageBlock: Block = {
  slug: "blog-image",
  labels: {
    singular: "Blog Image",
    plural: "Blog Images",
  },
  fields: [
    { name: "src", type: "text", required: true },
    { name: "alt", type: "text", required: true },
    { name: "width", type: "number", defaultValue: 750 },
    { name: "height", type: "number", defaultValue: 400 },
    { name: "caption", type: "text" },
  ],
};
