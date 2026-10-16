import type { Block } from "payload";

export const AboutTimelineBlock: Block = {
  slug: "about-timeline",
  labels: {
    singular: "About Timeline Section",
    plural: "About Timeline Sections",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "milestones",
      type: "array",
      dbName: "ab_tl_ms",
      fields: [
        { name: "year", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
      ],
    },
  ],
};
