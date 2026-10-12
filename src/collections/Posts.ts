import type { CollectionConfig } from "payload";
import { safeRevalidatePath } from "@/lib/revalidate";
import { blogContentBlocks } from "@/blocks/blog";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "categories", "date"],
    livePreview: {
      url: ({ data }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
        return `${baseUrl}/api/draft?secret=${process.env.PAYLOAD_SECRET || ""}&path=/blogs/${data.slug || ""}&slug=${data.slug || ""}`;
      },
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        if (doc?.slug) {
          safeRevalidatePath(`/blogs/${doc.slug}`);
        }
        if (previousDoc?.slug && previousDoc.slug !== doc?.slug) {
          safeRevalidatePath(`/blogs/${previousDoc.slug}`);
        }
        safeRevalidatePath("/blogs");
        safeRevalidatePath("/");
      },
    ],
    afterDelete: [
      ({ doc }) => {
        if (doc?.slug) {
          safeRevalidatePath(`/blogs/${doc.slug}`);
        }
        safeRevalidatePath("/blogs");
        safeRevalidatePath("/");
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "date", type: "date", required: true },
    { name: "displayDate", type: "text" },
    {
      name: "featuredImage",
      type: "group",
      fields: [
        { name: "src", type: "text", required: true },
        { name: "alt", type: "text", required: true },
        { name: "width", type: "number", defaultValue: 1200 },
        { name: "height", type: "number", defaultValue: 630 },
      ],
    },
    { name: "excerpt", type: "textarea", required: true },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "contentBeforeToc",
      type: "blocks",
      label: "Content Before Table of Contents",
      blocks: blogContentBlocks,
    },
    {
      name: "toc",
      type: "array",
      label: "Table of Contents",
      dbName: "p_toc",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
        { name: "level", type: "number", defaultValue: 2 },
      ],
    },
    {
      name: "content",
      type: "blocks",
      label: "Article Body Content (After TOC)",
      blocks: blogContentBlocks,
    },
    {
      name: "faqs",
      type: "array",
      label: "Post FAQs",
      dbName: "p_faqs",
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
        { name: "metaImage", type: "text" },
      ],
    },
  ],
};
