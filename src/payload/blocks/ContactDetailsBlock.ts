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
  ],
};
