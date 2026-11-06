import type { Block } from "payload";

export const BrandPartnersBlock: Block = {
  slug: "brand-partners",
  labels: {
    singular: "Brand Partners",
    plural: "Brand Partners Sections",
  },
  fields: [
    {
      name: "variant",
      type: "select",
      defaultValue: "slider",
      options: [
        { label: "Logo Slider (Marquee / Rail)", value: "slider" },
        { label: "Brand Grid", value: "grid" },
        { label: "Home Brand Partners", value: "home" },
        { label: "Platform & App Integrations", value: "integrations" },
        { label: "White Label Tools Grid (Categorized Logos)", value: "tools-grid" },
        { label: "Full-Stack Technologies Stack (Tabbed / Categorized)", value: "tech-stack" },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "density",
      type: "select",
      defaultValue: "standard",
      options: [
        { label: "Standard (84px rail, 31% heading col)", value: "standard" },
        { label: "Compact (70px rail, 33% heading col)", value: "compact" },
        { label: "Flexible (70px rail, 30% heading col)", value: "flexible" },
      ],
    },
    {
      name: "mobileSpacing",
      type: "select",
      defaultValue: "standard",
      options: [
        { label: "Standard", value: "standard" },
        { label: "Spacious", value: "spacious" },
      ],
    },
    {
      name: "showHeading",
      type: "checkbox",
      defaultValue: true,
      label: "Show Heading Column",
    },
    {
      name: "brands",
      type: "array",
      dbName: "bp_items",
      label: "Partner & Client Logos",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Brand Name",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Brand Logo",
        },
        {
          name: "src",
          type: "text",
          label: "Static Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
        },
        {
          name: "width",
          type: "number",
          defaultValue: 120,
        },
        {
          name: "height",
          type: "number",
          defaultValue: 44,
        },
        {
          name: "href",
          type: "text",
          label: "Link URL (Optional)",
        },
      ],
    },
  ],
};
