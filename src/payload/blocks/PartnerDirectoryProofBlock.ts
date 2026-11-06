import type { Block } from "payload";

export const PartnerDirectoryProofBlock: Block = {
  slug: "partner-directory-proof",
  labels: {
    singular: "Shopify Partner Directory Proof",
    plural: "Shopify Partner Directory Proof Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "href",
      type: "text",
      label: "Directory Profile URL",
    },
    {
      name: "items",
      type: "array",
      dbName: "pdp_items",
      label: "Proof Metric Badges",
      fields: [
        {
          name: "kind",
          type: "select",
          defaultValue: "text",
          options: [
            { label: "Text / Number", value: "text" },
            { label: "Rating Stars", value: "rating" },
            { label: "Partner Badge Image", value: "image" },
          ],
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Badge Subtitle / Label",
        },
        {
          name: "value",
          type: "text",
          label: "Numeric / Rating Value",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Badge Image (For Image Kind)",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Badge Fallback Path",
        },
        {
          name: "imageAlt",
          type: "text",
          label: "Image Alt Text",
        },
      ],
    },
  ],
};
