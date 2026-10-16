import type { Block } from "payload";

export const BlogQuoteBlock: Block = {
  slug: "blog-quote",
  labels: {
    singular: "Blog Quote",
    plural: "Blog Quotes",
  },
  fields: [
    { name: "quote", type: "textarea", required: true },
    { name: "citation", type: "text" },
  ],
};
