import type { Block } from "payload";

export const DiscoveryCallBlock: Block = {
  slug: "discovery-call",
  labels: {
    singular: "Discovery Call Section",
    plural: "Discovery Call Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "host",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "role", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "imageAlt", type: "text" },
      ],
    },
    {
      name: "benefits",
      type: "array",
      dbName: "disc_bens",
      fields: [
        { name: "icon", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "text", required: true },
      ],
    },
    {
      name: "calendar",
      type: "group",
      fields: [
        { name: "heading", type: "text" },
        { name: "details", type: "text" },
        { name: "src", type: "text" },
        { name: "iframeTitle", type: "text" },
      ],
    },
  ],
};
