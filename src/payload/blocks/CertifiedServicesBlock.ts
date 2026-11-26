import type { Block } from "payload";

export const CertifiedServicesBlock: Block = {
  slug: "certified-services",
  labels: {
    singular: "Certified Developer Services",
    plural: "Certified Developer Services Sections",
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
      name: "items",
      type: "array",
      dbName: "csrv_items",
      label: "Certified Services Cards",
      fields: [
        {
          name: "eyebrow",
          type: "text",
          label: "Badge / Eyebrow (e.g. 01 / STOREFRONT)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Service Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Service Description",
        },
      ],
    },
  ],
};
