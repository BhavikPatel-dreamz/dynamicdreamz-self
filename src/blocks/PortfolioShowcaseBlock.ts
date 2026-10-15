import type { Block } from "payload";

export const PortfolioShowcaseBlock: Block = {
  slug: "portfolio-showcase",
  labels: { singular: "Portfolio Showcase", plural: "Portfolio Showcases" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "category", type: "text" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
    { name: "secondaryCtaLabel", type: "text" },
    { name: "secondaryCtaHref", type: "text" },
    { name: "hideCta", type: "checkbox", defaultValue: false },
    { name: "columns", type: "number", defaultValue: 4 },
    {
      name: "variant",
      type: "select",
      options: ["default", "liveGrid"],
      defaultValue: "default",
    },
    {
      name: "cardVariant",
      type: "select",
      options: ["default", "ourWorkRefresh"],
      defaultValue: "default",
    },
    {
      name: "headerLayout",
      type: "select",
      options: ["centered", "split"],
      defaultValue: "split",
    },
    { name: "sectionId", type: "text", defaultValue: "our_work" },
    {
      name: "items",
      type: "array",
      dbName: "port_show_items",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "href", type: "text" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageSrc", type: "text" },
        { name: "imageAlt", type: "text" },
        { name: "category", type: "text" },
      ],
    },
  ],
};
