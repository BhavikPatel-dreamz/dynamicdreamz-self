import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "categories", "date"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "date", type: "date", required: true },
    { name: "displayDate", type: "text" },
    { name: "coverImage", type: "upload", relationTo: "media", required: true },
    { name: "excerpt", type: "textarea", required: true },
    { name: "content", type: "richText", required: true },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
    },
    {
      name: "faqs",
      type: "array",
      label: "Article FAQs",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
    {
      name: "seo",
      type: "group",
      label: "SEO Settings",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
        { name: "canonicalUrl", type: "text" },
        { name: "metaImage", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
