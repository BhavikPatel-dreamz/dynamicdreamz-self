import type { Block } from "payload";

export const ContactFormBlock: Block = {
  slug: "contact-form",
  labels: {
    singular: "Contact Form Section",
    plural: "Contact Form Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      label: "Form (CMS Form Builder)",
      admin: {
        description: "Select a custom form created in Form Builder, or leave empty to use the standard contact form.",
      },
    },
  ],
};
