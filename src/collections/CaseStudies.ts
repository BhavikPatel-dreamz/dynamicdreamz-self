import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "clientName", "industry"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "clientName", type: "text", required: true },
    { name: "industry", type: "text" },
    { name: "technology", type: "text", defaultValue: "Shopify Plus" },
    { name: "websiteUrl", type: "text" },
    { name: "thumbnail", type: "upload", relationTo: "media", required: true },
    { name: "heroImage", type: "upload", relationTo: "media" },
    {
      name: "gallery",
      type: "array",
      fields: [{ name: "image", type: "upload", relationTo: "media" }],
    },
    { name: "overview", type: "textarea" },
    { name: "challenge", type: "textarea" },
    { name: "solution", type: "textarea" },
    {
      name: "metrics",
      type: "array",
      label: "Key Results & Metrics",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "testimonial",
      type: "relationship",
      relationTo: "testimonials",
    },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
        { name: "metaImage", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
