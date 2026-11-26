import type { Block } from "payload";

export const BookDiscoveryCallBlock: Block = {
  slug: "book-discovery-call",
  labels: {
    singular: "Book a Discovery Call Section",
    plural: "Book a Discovery Call Sections",
  },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow Text" },
    { name: "title", type: "text", required: true, label: "Main Heading (H1)" },
    { name: "description", type: "textarea", label: "Description" },
    {
      name: "host",
      type: "group",
      label: "Call Host Profile",
      fields: [
        { name: "name", type: "text", required: true, label: "Host Name" },
        { name: "role", type: "text", required: true, label: "Host Role" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Host Avatar",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Avatar Fallback Path",
        },
        { name: "imageAlt", type: "text", label: "Avatar Alt Text" },
      ],
    },
    {
      name: "benefits",
      type: "array",
      dbName: "bdc_bens",
      label: "Call Benefits",
      fields: [
        { name: "icon", type: "text", required: true, label: "Badge Icon / Text (e.g. 30, CTO, ✓)" },
        { name: "title", type: "text", required: true, label: "Benefit Title" },
        { name: "description", type: "textarea", required: true, label: "Benefit Description" },
      ],
    },
    {
      name: "calendar",
      type: "group",
      label: "Calendly Embed Settings",
      fields: [
        { name: "heading", type: "text", label: "Calendar Header Title" },
        { name: "details", type: "text", label: "Calendar Duration Details" },
        { name: "iframeTitle", type: "text", label: "Iframe Accessible Title" },
        { name: "src", type: "text", required: true, label: "Calendly Embed URL" },
      ],
    },
  ],
};
