import type { Block } from "payload";

export const ProofCountersBlock: Block = {
  slug: "proof-counters",
  labels: { singular: "Proof Counters", plural: "Proof Counters" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "counters",
      type: "array",
      fields: [
        { name: "value", type: "number", required: true },
        { name: "suffix", type: "text" },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
