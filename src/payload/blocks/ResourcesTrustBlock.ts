import type { Block } from "payload";

export const ResourcesTrustBlock: Block = {
  slug: "resources-trust",
  labels: {
    singular: "Resources Trust & Animated Counters",
    plural: "Resources Trust Sections",
  },
  fields: [
    {
      name: "title",
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
      name: "stats",
      type: "array",
      dbName: "rt_stats",
      label: "Animated Stat Cards",
      fields: [
        { name: "value", type: "number", required: true, label: "Numeric Target Value" },
        { name: "suffix", type: "text", defaultValue: "+", label: "Suffix (e.g. +)" },
        { name: "label", type: "text", required: true, label: "Counter Label" },
      ],
    },
  ],
};
