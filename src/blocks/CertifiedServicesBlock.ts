import type { Block } from "payload";

export const CertifiedServicesBlock: Block = {
  slug: "certified-services",
  labels: { singular: "Certified Services", plural: "Certified Services" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "items",
      type: "array",
      dbName: "cert_serv_items",
      fields: [
        { name: "eyebrow", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
