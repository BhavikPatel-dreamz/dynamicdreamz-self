import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  labels: { singular: "Hero Section", plural: "Hero Sections" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subheading", type: "text" },
    { name: "description", type: "textarea" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
    { name: "eyebrows", type: "array", fields: [{ name: "text", type: "text" }] },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "showReviews", type: "checkbox", defaultValue: true },
    {
      name: "variant",
      type: "select",
      defaultValue: "split",
      options: [
        { label: "Split (Text + Image)", value: "split" },
        { label: "Centered", value: "centered" },
      ],
    },
  ],
};
