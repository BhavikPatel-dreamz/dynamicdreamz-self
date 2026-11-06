import type { Block } from "payload";

export const B2bArchitectureBlock: Block = {
  slug: "b2b-architecture",
  labels: {
    singular: "B2B Architecture & Approach",
    plural: "B2B Architecture Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "B2B Architecture",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Choose the Right Shopify B2B Architecture for Your Growth",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "approaches",
      type: "array",
      dbName: "ba_apps",
      label: "B2B Architecture Approaches",
      fields: [
        {
          name: "badge",
          type: "text",
          label: "Badge (e.g. Recommended)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Approach Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Summary",
        },
        {
          name: "points",
          type: "array",
          dbName: "ba_pts",
          label: "Key Features / Points",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "isHighlighted",
          type: "checkbox",
          defaultValue: false,
          label: "Highlight Card",
        },
      ],
    },
    {
      name: "proofs",
      type: "array",
      dbName: "ba_prfs",
      label: "Proof Items",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Proof Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Proof Description",
        },
      ],
    },
  ],
};
