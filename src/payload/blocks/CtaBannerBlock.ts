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
      ],
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
  ],
};
