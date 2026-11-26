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
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text (Tech Stack / Integrations)",
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
      name: "slug",
      type: "text",
      label: "Platform / Landing Slug (for aria-labelledby, e.g. shopify-migration)",
    },
    {
      name: "ariaLabel",
      type: "text",
      label: "Accessible Region Label (aria-label)",
    },
    {
      name: "toolsStyle",
      type: "select",
      defaultValue: "boxed",
      label: "Tools Grid Presentation",
      options: [
        { label: "Boxed Icons (Default)", value: "boxed" },
        { label: "Unboxed Icons (SEO Tools Variant)", value: "unboxed" },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.variant === "tools-grid",
      },
    },
    {
      name: "density",
      type: "select",
      defaultValue: "compact",
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
          name: "row",
          type: "select",
          defaultValue: "1",
          options: [
            { label: "Row 1 (Top / Forward)", value: "1" },
            { label: "Row 2 (Bottom / Reverse)", value: "2" },
          ],
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
    {
      name: "techCategories",
      type: "array",
      dbName: "bp_tcats",
      label: "Technology Categories (Full-Stack Tech Stack Variant)",
      fields: [
        {
          name: "category",
          type: "text",
          required: true,
          label: "Category Title",
        },
        {
          name: "technologies",
          type: "array",
          dbName: "bp_titems",
          label: "Technologies",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Technology Name",
            },
          ],
        },
      ],
    },
  ],
};
