import type { Block } from "payload";

export const CaseStudiesBlock: Block = {
  slug: "case-studies-block",
  labels: { singular: "Case Studies Grid", plural: "Case Studies Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "caseStudies",
      type: "relationship",
      relationTo: "case-studies",
      hasMany: true,
    },
  ],
};
