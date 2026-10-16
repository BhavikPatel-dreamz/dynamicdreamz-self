import type { Block } from "payload";

export const AboutStoryBlock: Block = {
  slug: "about-story",
  labels: {
    singular: "About Story Section",
    plural: "About Story Sections",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "caption", type: "text", required: true },
    { name: "videoId", type: "text", required: true },
    { name: "videoTitle", type: "text", required: true },
    { name: "poster", type: "upload", relationTo: "media" },
    { name: "posterAlt", type: "text" },
    { name: "overlay", type: "upload", relationTo: "media" },
  ],
};
