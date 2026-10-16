import type { Block } from "payload";

export const PartnerDirectoryProofBlock: Block = {
  slug: "partner-directory-proof",
  labels: { singular: "Partner Directory Proof", plural: "Partner Directory Proof" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "href", type: "text", required: true },
    {
      name: "items",
      type: "array",
      dbName: "pdp_items",
      fields: [
        { name: "kind", type: "select", options: ["image", "rating", "text"], defaultValue: "text" },
        { name: "label", type: "text", required: true },
        { name: "value", type: "text" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
        { name: "imageAlt", type: "text" },
        { name: "imageWidth", type: "number" },
        { name: "imageHeight", type: "number" },
      ],
    },
  ],
};
