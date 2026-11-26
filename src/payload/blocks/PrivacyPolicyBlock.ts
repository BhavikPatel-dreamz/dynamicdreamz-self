import type { Block } from "payload";

export const PrivacyPolicyBlock: Block = {
  slug: "privacy-policy",
  labels: {
    singular: "Privacy Policy Content",
    plural: "Privacy Policy Sections",
  },
  fields: [
    {
      name: "heroTitle",
      type: "text",
      required: true,
      defaultValue: "Privacy and Cookies Policy",
      label: "Hero Title (H1)",
    },
    {
      name: "sections",
      type: "array",
      dbName: "pp_secs",
      label: "Policy Sections",
      fields: [
        { name: "title", type: "text", required: true, label: "Section Heading" },
        {
          name: "level",
          type: "select",
          defaultValue: "2",
          label: "Heading Level",
          options: [
            { label: "H2", value: "2" },
            { label: "H3", value: "3" },
          ],
        },
        {
          name: "paragraphs",
          type: "array",
          dbName: "pp_pr",
          label: "Paragraphs",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
        {
          name: "items",
          type: "array",
          dbName: "pp_its",
          label: "Bullet Items",
          fields: [
            {
              name: "parts",
              type: "array",
              dbName: "pp_pts",
              label: "Inline Segments",
              fields: [
                { name: "text", type: "textarea", required: true },
                { name: "strong", type: "checkbox", defaultValue: false, label: "Bold" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "contactLabels",
      type: "group",
      label: "Contact Field Labels",
      fields: [
        { name: "email", type: "text", defaultValue: "Email:" },
        { name: "phone", type: "text", defaultValue: "Phone:" },
        { name: "address", type: "text", defaultValue: "Address:" },
      ],
    },
    {
      name: "contact",
      type: "group",
      label: "Contact Details Block",
      fields: [
        { name: "name", type: "text", label: "Contact Heading / Company Name" },
        { name: "email", type: "text", label: "Contact Email" },
        { name: "phone", type: "text", label: "Contact Phone Label" },
        { name: "phoneHref", type: "text", label: "Phone Href (tel:...)" },
        { name: "address", type: "textarea", label: "Postal Address" },
        { name: "addressHref", type: "text", label: "Map Link URL" },
      ],
    },
  ],
};
