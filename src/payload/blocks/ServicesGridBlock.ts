import type { Block } from "payload";

export const ServicesGridBlock: Block = {
  slug: "services-grid",
  labels: {
    singular: "Services & Capabilities Grid",
    plural: "Services Grid Sections",
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
      defaultValue: "stage-services",
      options: [
        { label: "Shopify Stage Services (Pills & Stage Cards)", value: "stage-services" },
        { label: "Theme Customization Boxes (Numbered Icon Cards)", value: "theme-boxes" },
        { label: "Agency Services (Interactive 3-Col Cards)", value: "agency-services" },
        { label: "Shopify Migration Services", value: "migration-services" },
      ],
    },
    {
      name: "cardVariant",
      type: "select",
      defaultValue: "green",
      options: [
        { label: "Green Accent (#15c064)", value: "green" },
        { label: "Yellow Accent", value: "yellow" },
        { label: "Transparent Background", value: "transparent" },
      ],
    },
    {
      name: "sixCards",
      type: "checkbox",
      defaultValue: false,
      label: "Display 6-card grid layout",
    },
    {
      name: "lastColFull",
      type: "checkbox",
      defaultValue: false,
      label: "Expand last column to 100% width",
    },
    {
      name: "isRoundedNumber",
      type: "checkbox",
      defaultValue: false,
      label: "Display rounded circle badge numbers",
    },
    {
      name: "bottomNote",
      type: "text",
      label: "Bottom Note / Clarification Text",
    },
    {
      name: "services",
      type: "array",
      dbName: "sg_items",
      label: "Service Cards",
      fields: [
        {
          name: "tag",
          type: "text",
          label: "Eyebrow / Category Tag",
        },
        {
          name: "number",
          type: "text",
          label: "Number / Sequence (e.g. 01)",
        },
        {
          name: "badge",
          type: "text",
          label: "Badge Text",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Card Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Card Description",
        },
        {
          name: "pills",
          type: "array",
          dbName: "sg_pills",
          label: "Feature Pills",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "bullets",
          type: "array",
          dbName: "sg_blts",
          label: "Feature Bullets",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Card Icon / Illustration",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        {
          name: "iconAlt",
          type: "text",
          label: "Icon Alt Text",
        },
        {
          name: "ctaLabel",
          type: "text",
          label: "Card CTA Label",
        },
        {
          name: "ctaHref",
          type: "text",
          label: "Card CTA Link",
        },
      ],
    },
  ],
};
