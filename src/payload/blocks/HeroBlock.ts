import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  labels: { singular: "Hero Section", plural: "Hero Sections" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subheading", type: "text" },
    { name: "description", type: "textarea" },
    { name: "establishedText", type: "text" },
    { name: "partnerBadgeText", type: "text" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    { name: "eyebrows", type: "array", fields: [{ name: "text", type: "text" }] },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "showReviews", type: "checkbox", defaultValue: true },
    {
      name: "proofBadges",
      type: "array",
      dbName: "h_p_bdgs",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "href", type: "text" },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "split",
      options: [
        { label: "Split (Text + Image)", value: "split" },
        { label: "Centered", value: "centered" },
        { label: "Home Hero", value: "home" },
      ],
    },
  ],
};
