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
  ],
};
