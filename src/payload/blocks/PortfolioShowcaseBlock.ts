import type { Block } from "payload";

export const PortfolioShowcaseBlock: Block = {
  slug: "portfolio-showcase",
  labels: {
    singular: "Portfolio Showcase",
    plural: "Portfolio Showcase Sections",
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
      defaultValue: "Selected Ecommerce Work",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "default",
      options: [
        { label: "Portfolio Showcase Grid (Default)", value: "default" },
        { label: "Live Store Grid", value: "liveGrid" },
        { label: "Case Studies Slider (Services)", value: "case-studies-slider" },
        { label: "Case Study Cards (Shopify Plus)", value: "case-studies-cards" },
      ],
    },
    {
      name: "columns",
      type: "select",
      defaultValue: "4",
      options: [
        { label: "4 Columns (Default Grid)", value: "4" },
        { label: "3 Columns Grid", value: "3" },
        { label: "2 Columns Large Grid", value: "2" },
      ],
    },
    {
      name: "headerLayout",
      type: "select",
      defaultValue: "split",
      options: [
        { label: "Split Heading (Left Title, Right Description)", value: "split" },
        { label: "Centered Heading", value: "centered" },
      ],
    },
    {
      name: "cardVariant",
      type: "select",
      defaultValue: "default",
      options: [
        { label: "Default Portfolio Card", value: "default" },
        { label: "Our Work Refresh Card", value: "ourWorkRefresh" },
      ],
    },
    {
      name: "hideCta",
      type: "checkbox",
      defaultValue: false,
      label: "Hide Bottom CTA Buttons",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "View All Projects",
      label: "Primary CTA Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/our-work",
      label: "Primary CTA Link",
    },
    {
      name: "secondaryCtaLabel",
      type: "text",
      label: "Secondary CTA Label",
    },
    {
      name: "secondaryCtaHref",
      type: "text",
      label: "Secondary CTA Link",
    },
    {
      name: "platformMark",
      type: "group",
      label: "Platform Mark (e.g. Shopify Plus Badge)",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Platform Logo Badge",
        },
        {
          name: "src",
          type: "text",
          label: "Static Badge Fallback Path",
        },
        {
          name: "width",
          type: "number",
          defaultValue: 130,
        },
        {
          name: "height",
          type: "number",
          defaultValue: 36,
        },
      ],
    },
    {
      name: "items",
      type: "array",
      dbName: "ps_items",
      label: "Portfolio Showcase Projects",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Project / Brand Name",
        },
        {
          name: "href",
          type: "text",
          label: "Case Study / Live URL",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Project Mockup / Thumbnail",
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
          name: "category",
          type: "text",
          label: "Industry / Category Tag",
        },
        {
          name: "metrics",
          type: "text",
          label: "Key Result / Metric (Optional)",
        },
      ],
    },
  ],
};
