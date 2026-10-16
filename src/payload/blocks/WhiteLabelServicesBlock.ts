import type { Block } from "payload";

export const WhiteLabelServicesBlock: Block = {
  slug: "white-label-services",
  labels: {
    singular: "White Label Services",
    plural: "White Label Services",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "idPrefix", type: "text" },
    { name: "ctaLabel", type: "text" },
    { name: "showCta", type: "checkbox", defaultValue: true },
    {
      name: "services",
      type: "array",
      dbName: "wls_srv",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "href", type: "text" },
        { name: "linkLabel", type: "text" },
      ],
    },
  ],
};
