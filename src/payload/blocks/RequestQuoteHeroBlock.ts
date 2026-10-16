import type { Block } from "payload";

export const RequestQuoteHeroBlock: Block = {
  slug: "request-quote-hero",
  labels: {
    singular: "Request Quote Hero Section",
    plural: "Request Quote Hero Sections",
  },
  fields: [
    { name: "heroTitle", type: "text" },
    { name: "heroDescription", type: "textarea" },
    { name: "formTitle", type: "text" },
    {
      name: "counters",
      type: "array",
      dbName: "rq_cnts",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "count", type: "text", required: true },
        { name: "unit", type: "text" },
      ],
    },
    {
      name: "badges",
      type: "array",
      dbName: "rq_bdgs",
      fields: [
        { name: "href", type: "text" },
        { name: "ariaLabel", type: "text" },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
    {
      name: "testimonials",
      type: "array",
      dbName: "rq_tests",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "quote", type: "textarea", required: true },
        { name: "avatar", type: "upload", relationTo: "media" },
      ],
    },
    {
      name: "budgetOptions",
      type: "array",
      dbName: "rq_bopts",
      fields: [{ name: "option", type: "text", required: true }],
    },
  ],
};
