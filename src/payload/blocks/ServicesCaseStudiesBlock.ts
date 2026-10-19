import type { Block } from "payload";

export const ServicesCaseStudiesBlock: Block = {
  slug: "services-case-studies",
  labels: {
    singular: "Services Case Studies",
    plural: "Services Case Studies",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "items",
      type: "array",
      dbName: "svcs_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "href", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
        { name: "imageAlt", type: "text", required: true },
        { name: "technology", type: "text", required: true },
        { name: "industry", type: "text", required: true },
        { name: "ctaLabel", type: "text" },
        {
          name: "tags",
          type: "array",
          dbName: "svcs_tags",
          fields: [{ name: "text", type: "text", required: true }],
        },
      ],
    },
  ],
};
