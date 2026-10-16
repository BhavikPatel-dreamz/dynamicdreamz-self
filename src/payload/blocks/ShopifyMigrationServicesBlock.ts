import type { Block } from "payload";

export const ShopifyMigrationServicesBlock: Block = {
  slug: "shopify-migration-services",
  labels: { singular: "Shopify Migration Services", plural: "Shopify Migration Services" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "idAttr", type: "text" },
    {
      name: "banner",
      type: "group",
      fields: [
        { name: "badge", type: "text" },
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
        { name: "ctaLabel", type: "text" },
        { name: "ctaHref", type: "text" },
      ],
    },
    {
      name: "items",
      type: "array",
      dbName: "sms_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text" },
        { name: "href", type: "text", required: true },
        { name: "ctaText", type: "text" },
      ],
    },
  ],
};
