import type { CollectionConfig } from "payload";
import { safeRevalidatePath } from "@/lib/revalidate";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "clientName", "industry", "technology"],
    livePreview: {
      url: ({ data }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
        return `${baseUrl}/api/draft?secret=${process.env.PAYLOAD_SECRET || ""}&path=/case-studies/${data.slug || ""}&slug=${data.slug || ""}`;
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
          safeRevalidatePath(`/case-studies/${doc.slug}`);
        }
        if (previousDoc?.slug && previousDoc.slug !== doc?.slug) {
          safeRevalidatePath(`/case-studies/${previousDoc.slug}`);
        }
        safeRevalidatePath("/case-studies");
        safeRevalidatePath("/our-work");
        safeRevalidatePath("/");
      },
    ],
    afterDelete: [
      ({ doc }) => {
        if (doc?.slug) {
          safeRevalidatePath(`/case-studies/${doc.slug}`);
        }
        safeRevalidatePath("/case-studies");
        safeRevalidatePath("/our-work");
        safeRevalidatePath("/");
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "clientName", type: "text", required: true },
    { name: "projectTitle", type: "text" },
    { name: "industry", type: "text" },
    { name: "technology", type: "text", defaultValue: "Shopify Plus" },
    { name: "location", type: "text", defaultValue: "Surat, Gujarat, India" },
    { name: "websiteUrl", type: "text" },
    { name: "summary", type: "textarea" },
    { name: "heroImage", type: "upload", relationTo: "media" },
    {
      name: "heroEyebrows",
      type: "array",
      dbName: "cs_hero_eb",
      fields: [{ name: "text", type: "text", required: true }],
    },
    {
      name: "archive",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "technology", type: "text" },
        { name: "industry", type: "text" },
        { name: "excerpt", type: "textarea" },
        {
          name: "tags",
          type: "array",
          dbName: "cs_arch_tags",
          fields: [{ name: "tag", type: "text" }],
        },
      ],
    },
    {
      name: "keyMetrics",
      type: "group",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "items",
          type: "array",
          dbName: "cs_km_items",
          fields: [
            { name: "stat", type: "text", required: true },
            { name: "label", type: "text", required: true },
          ],
        },
      ],
    },
    {
      name: "challenge",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "items",
          type: "array",
          dbName: "cs_ch_items",
          fields: [
            { name: "number", type: "text" },
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
          ],
        },
      ],
    },
    {
      name: "solutions",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "heading", type: "text" },
        { name: "lead", type: "textarea" },
        {
          name: "items",
          type: "array",
          dbName: "cs_sol_items",
          fields: [
            { name: "number", type: "text" },
            { name: "text", type: "textarea" },
          ],
        },
      ],
    },
    {
      name: "keyFeatures",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "heading", type: "text" },
        { name: "isTwoColumn", type: "checkbox", defaultValue: false },
        {
          name: "items",
          type: "array",
          dbName: "cs_kf_items",
          fields: [
            { name: "number", type: "text" },
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
          ],
        },
      ],
    },
    {
      name: "projectDelivery",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "heading", type: "text" },
        {
          name: "items",
          type: "array",
          dbName: "cs_pd_items",
          fields: [
            { name: "category", type: "text" },
            { name: "name", type: "text" },
          ],
        },
      ],
    },
    {
      name: "customSections",
      type: "array",
      dbName: "cs_custom_secs",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "heading", type: "text", required: true },
        { name: "lead", type: "textarea" },
        { name: "description", type: "textarea" },
        {
          name: "items",
          type: "array",
          dbName: "cs_csi_items",
          fields: [
            { name: "number", type: "text" },
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "note", type: "text" },
          ],
        },
        {
          name: "takeaways",
          type: "array",
          dbName: "cs_cst_items",
          fields: [{ name: "text", type: "textarea" }],
        },
      ],
    },
    {
      name: "relatedCaseStudies",
      type: "relationship",
      relationTo: "case-studies",
      hasMany: true,
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
        { name: "canonicalUrl", type: "text" },
        { name: "metaImage", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
