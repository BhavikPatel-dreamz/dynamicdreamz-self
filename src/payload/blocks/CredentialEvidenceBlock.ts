import type { Block } from "payload";

export const CredentialEvidenceBlock: Block = {
  slug: "credential-evidence",
  labels: { singular: "Credential Evidence", plural: "Credential Evidence" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "note", type: "text" },
    {
      name: "items",
      type: "array",
      dbName: "ce_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "count", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
        { name: "imageAlt", type: "text" },
        { name: "href", type: "text" },
      ],
    },
  ],
};
