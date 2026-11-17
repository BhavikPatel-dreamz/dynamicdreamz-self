import type { Block } from "payload";

export const SeoSafeMigrationBlock: Block = {
  slug: "seo-safe-migration",
  labels: {
    singular: "SEO-Safe Migration Section",
    plural: "SEO-Safe Migration Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "sectionId",
      type: "text",
      label: "Section ID (HTML Anchor)",
    },
    {
      name: "tags",
      type: "array",
      dbName: "ssm_tags",
      label: "Guarantee Badges / Tags",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
          label: "Tag Label",
        },
      ],
    },
    {
      name: "urlMappings",
      type: "array",
      dbName: "ssm_urls",
      label: "URL Redirect Mappings",
      fields: [
        {
          name: "source",
          type: "text",
          required: true,
          label: "Old Source URL (e.g. /products/shoes)",
        },
        {
          name: "statusCode",
          type: "text",
          defaultValue: "301 Moved Permanently",
          label: "Status Code Label",
        },
        {
          name: "target",
          type: "text",
          required: true,
          label: "New Shopify Target URL (e.g. /collections/shoes)",
        },
      ],
    },
    {
      name: "checks",
      type: "array",
      dbName: "ssm_chks",
      label: "Migration Checklist Items",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Checklist Item",
        },
      ],
    },
  ],
};
