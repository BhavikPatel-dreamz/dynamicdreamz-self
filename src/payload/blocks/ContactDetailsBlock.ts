import type { Block } from "payload";

export const ContactDetailsBlock: Block = {
  slug: "contact-details",
  labels: {
    singular: "Contact Details Section",
    plural: "Contact Details Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    {
      name: "sales",
      type: "group",
      label: "Business / Sales Inquiry",
      fields: [
        { name: "label", type: "text" },
        { name: "email", type: "text" },
        { name: "phone", type: "text" },
        { name: "phoneHref", type: "text" },
      ],
    },
    {
      name: "hr",
      type: "group",
      label: "Careers & HR",
      fields: [
        { name: "label", type: "text" },
        { name: "email", type: "text" },
        { name: "phone", type: "text" },
        { name: "phoneHref", type: "text" },
        { name: "actionLabel", type: "text" },
        { name: "actionHref", type: "text" },
      ],
    },
    {
      name: "discoveryCall",
      type: "group",
      label: "Discovery Call",
      fields: [
        { name: "label", type: "text" },
        { name: "actionLabel", type: "text" },
        { name: "actionHref", type: "text" },
        { name: "description", type: "text" },
      ],
    },
    {
      name: "social",
      type: "group",
      label: "Social Profiles",
      fields: [
        { name: "label", type: "text" },
        {
          name: "profiles",
          type: "array",
          dbName: "cd_soc",
          fields: [
            { name: "name", type: "text", required: true },
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },
  ],
};
