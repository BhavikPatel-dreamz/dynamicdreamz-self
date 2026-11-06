import type { Block } from "payload";

export const CtaBannerBlock: Block = {
  slug: "cta-banner",
  labels: {
    singular: "Final CTA Banner",
    plural: "Final CTA Banner Sections",
  },
  fields: [
    {
      name: "variant",
      type: "select",
      defaultValue: "gradient",
      options: [
        { label: "Gradient Strip (#15c064 -> #00d1ff)", value: "gradient" },
        { label: "Image Background Card", value: "image" },
        { label: "White Label Closing CTA", value: "white-label" },
        { label: "Home White Label Partner Split Banner", value: "home-white-label" },
        { label: "Two Column Image with Text CTA", value: "two-col-cta" },
      ],
    },
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Interested to know more about our dynamic work?",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description (Supporting Subtext)",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "Let's Talk",
      label: "Primary CTA Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/request-a-quote",
      label: "Primary CTA Link",
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA (Optional)",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Secondary CTA Label",
        },
        {
          name: "href",
          type: "text",
          label: "Secondary CTA Link",
        },
      ],
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      label: "Background Image (For Image Variant)",
    },
    {
      name: "backgroundImageSrc",
      type: "text",
      label: "Static Background Image Fallback Path",
    },
    {
      name: "imagePosition",
      type: "select",
      defaultValue: "left",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Featured Image (For Two Column CTA)",
    },
    {
      name: "imageSrc",
      type: "text",
      label: "Static Image Fallback Path",
    },
    {
      name: "imageAlt",
      type: "text",
      label: "Image Alt Text",
    },
    {
      name: "bullets",
      type: "array",
      dbName: "cb_blts",
      label: "Bullets / Tags",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
