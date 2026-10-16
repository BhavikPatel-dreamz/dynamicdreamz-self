import type { Block } from "payload";

export const ContactOfficesBlock: Block = {
  slug: "contact-offices",
  labels: {
    singular: "Contact Offices Section",
    plural: "Contact Offices Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "directionsLabel", type: "text" },
    {
      name: "offices",
      type: "array",
      dbName: "cnt_offices",
      fields: [
        { name: "city", type: "text", required: true },
        { name: "address", type: "textarea", required: true },
        { name: "phone", type: "text", required: true },
        { name: "phoneHref", type: "text", required: true },
        { name: "directionsHref", type: "text", required: true },
      ],
    },
  ],
};
