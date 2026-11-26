import type { Block } from "payload";

export const ResourcesBlogBlock: Block = {
  slug: "resources-blog",
  labels: {
    singular: "Resources Blog Carousel",
    plural: "Resources Blog Carousels",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Shopify Blogs",
      label: "Heading / Title",
    },
    {
      name: "articles",
      type: "array",
      dbName: "rb_arts",
      label: "Featured Resource Articles",
      fields: [
        { name: "title", type: "text", required: true, label: "Article Title" },
        { name: "href", type: "text", required: true, label: "Article Path / URL" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Article Image",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Image Fallback Path",
        },
        { name: "width", type: "number", defaultValue: 1024, label: "Image Width" },
        { name: "height", type: "number", defaultValue: 515, label: "Image Height" },
        { name: "date", type: "text", required: true, label: "ISO Date (YYYY-MM-DD)" },
        { name: "displayDate", type: "text", required: true, label: "Display Date" },
        { name: "category", type: "text", defaultValue: "Shopify", label: "Category Name" },
        {
          name: "categoryHref",
          type: "text",
          defaultValue: "/blogs/category/shopify/",
          label: "Category Link",
        },
      ],
    },
  ],
};
