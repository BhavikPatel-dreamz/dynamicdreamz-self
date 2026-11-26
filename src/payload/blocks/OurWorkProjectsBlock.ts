import type { Block } from "payload";

export const OurWorkProjectsBlock: Block = {
  slug: "our-work-projects",
  labels: {
    singular: "Our Work Filterable Projects",
    plural: "Our Work Projects Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "Portfolio",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Selected Projects That Delivered Real Business Impact",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "filters",
      type: "array",
      dbName: "owp_flts",
      label: "Platform Filter Tabs",
      fields: [
        { name: "filterId", type: "text", required: true, label: "Filter Key (all, shopify, wordpress, apps, magento, bigCommerce)" },
        { name: "label", type: "text", required: true, label: "Tab Label" },
      ],
    },
    {
      name: "projects",
      type: "array",
      dbName: "owp_projs",
      label: "Portfolio Projects",
      fields: [
        { name: "projectId", type: "text", required: true, label: "Project ID (e.g. project-001)" },
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            { label: "Shopify / Shopify Plus", value: "shopify" },
            { label: "WordPress", value: "wordpress" },
            { label: "Mobile Apps", value: "apps" },
            { label: "Magento", value: "magento" },
            { label: "BigCommerce", value: "bigCommerce" },
          ],
        },
        { name: "name", type: "text", required: true, label: "Project Name" },
        { name: "category", type: "text", required: true, label: "Category Subtitle" },
        { name: "href", type: "text", label: "Project URL (Optional)" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Preview Image",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Image Fallback Path",
        },
        { name: "imageAlt", type: "text", label: "Image Alt Text" },
        {
          name: "platformMark",
          type: "group",
          label: "Platform Overlay Mark",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Platform Mark SVG/Logo",
            },
            { name: "src", type: "text", label: "Static Mark Fallback Path" },
            { name: "width", type: "number", label: "Width" },
            { name: "height", type: "number", label: "Height" },
          ],
        },
        {
          name: "appLinks",
          type: "array",
          dbName: "owp_alinks",
          label: "App Store Links",
          fields: [
            { name: "label", type: "text", required: true, label: "Store Name" },
            { name: "href", type: "text", required: true, label: "Store URL" },
            {
              name: "icon",
              type: "upload",
              relationTo: "media",
              label: "Store Icon",
            },
            { name: "iconSrc", type: "text", label: "Static Icon Fallback Path" },
          ],
        },
      ],
    },
  ],
};
