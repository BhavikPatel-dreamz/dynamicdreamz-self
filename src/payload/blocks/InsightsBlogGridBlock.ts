import type { Block } from "payload";

export const InsightsBlogGridBlock: Block = {
  slug: "home-insights",
  labels: {
    singular: "Home Insights Blog Grid",
    plural: "Home Insights Blog Grid Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Fresh From Dynamic Dreamz",
      label: "Heading / Title",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "View All Blogs",
      label: "CTA Button Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/blogs/",
      label: "CTA Button Link",
    },
    {
      name: "insights",
      type: "array",
      dbName: "hi_items",
      label: "Featured Blog Articles",
      fields: [
        { name: "title", type: "text", required: true, label: "Article Title" },
        { name: "href", type: "text", required: true, label: "Article Path / URL" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Featured Image",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Image Fallback Path",
        },
        { name: "width", type: "number", defaultValue: 1024, label: "Image Width" },
        { name: "height", type: "number", defaultValue: 774, label: "Image Height" },
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
