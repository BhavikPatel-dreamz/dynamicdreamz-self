import type { Block } from "payload";

export const CityPageHeroBlock: Block = {
  slug: "city-page-hero",
  labels: { singular: "City Page Hero", plural: "City Page Heroes" },
  fields: [
    {
      name: "eyebrows",
      type: "array",
      dbName: "cph_eb",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "title", type: "text", required: true },
    { name: "titleHighlight", type: "text" },
    { name: "subtitle", type: "text" },
    { name: "description", type: "textarea", required: true },
    { name: "secondaryDescription", type: "textarea" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
    {
      name: "primaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "badges",
      type: "array",
      dbName: "cph_bdg",
      fields: [
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "src", type: "text" },
        { name: "alt", type: "text", required: true },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "tabletSlider",
      type: "group",
      fields: [
        { name: "bgShape", type: "upload", relationTo: "media" },
        { name: "bgShapeSrc", type: "text" },
        {
          name: "slides",
          type: "array",
          dbName: "cph_sld",
          fields: [
            { name: "image", type: "upload", relationTo: "media" },
            { name: "src", type: "text" },
            { name: "alt", type: "text", required: true },
            { name: "width", type: "number" },
            { name: "height", type: "number" },
          ],
        },
      ],
    },
    { name: "className", type: "text" },
  ],
};
