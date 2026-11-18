import type { Block } from "payload";

export const MobileAppWorkBlock: Block = {
  slug: "mobile-app-work",
  labels: {
    singular: "Mobile App Work Archive",
    plural: "Mobile App Work Archive Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Explore Our Work",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "View our work",
      label: "Primary CTA Button Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/our-work",
      label: "Primary CTA Button URL",
    },
    {
      name: "ctaAriaLabel",
      type: "text",
      label: "Primary CTA ARIA Label",
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA Button (e.g. View Pricing)",
      fields: [
        { name: "label", type: "text", label: "Button Label" },
        { name: "href", type: "text", label: "Button URL" },
        { name: "ariaLabel", type: "text", label: "Button ARIA Label" },
      ],
    },
    {
      name: "items",
      type: "array",
      dbName: "maw_items",
      label: "Portfolio Projects",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "App / Brand Name",
        },
        {
          name: "category",
          type: "text",
          label: "Category (e.g. Android App Development, Shopify Mobile App)",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Project Card Mockup Image",
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
          name: "href",
          type: "text",
          label: "Direct Project Link (Optional)",
        },
        {
          name: "appStoreUrl",
          type: "text",
          label: "Apple App Store URL (Optional)",
        },
        {
          name: "playStoreUrl",
          type: "text",
          label: "Google Play Store URL (Optional)",
        },
      ],
    },
  ],
};
