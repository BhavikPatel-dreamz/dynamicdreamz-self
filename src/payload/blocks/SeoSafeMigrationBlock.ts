import type { Block } from "payload";

export const SeoSafeMigrationBlock: Block = {
  slug: "seo-safe-migration",
  labels: { singular: "SEO Safe Migration", plural: "SEO Safe Migrations" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "tags",
      type: "array",
      dbName: "ssm_tags",
      fields: [{ name: "tag", type: "text", required: true }],
    },
    {
      name: "urlMappings",
      type: "array",
      dbName: "ssm_mappings",
      fields: [
        { name: "source", type: "text", required: true },
        { name: "statusCode", type: "text", defaultValue: "301" },
        { name: "target", type: "text", required: true },
      ],
    },
    {
      name: "checks",
      type: "array",
      dbName: "ssm_checks",
      fields: [{ name: "check", type: "text", required: true }],
    },
  ],
};
