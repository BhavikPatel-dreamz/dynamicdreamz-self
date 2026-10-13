import type { Block } from "payload";

export const CityPageCounterBlock: Block = {
  slug: "city-page-counter",
  labels: { singular: "City Page Counter", plural: "City Page Counters" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "counters",
      type: "array",
      dbName: "cpc_counters",
      fields: [
        { name: "count", type: "text", required: true },
        { name: "unit", type: "text" },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
