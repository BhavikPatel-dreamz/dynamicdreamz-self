import type { Block } from "payload";

export const BlogImageBlock: Block = {
  slug: "blog-image",
  labels: {
    singular: "Blog Image",
    plural: "Blog Images",
  },
  fields: [
    { name: "image", type: "upload", relationTo: "media", required: true },
    { name: "caption", type: "text" },
  ],
};
