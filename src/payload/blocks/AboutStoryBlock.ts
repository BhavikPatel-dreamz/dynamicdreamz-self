import type { Block } from "payload";

export const AboutStoryBlock: Block = {
  slug: "about-story",
  labels: {
    singular: "About Story & Video",
    plural: "About Story & Video Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "We Are Dynamic Dreamz",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Narrative Description",
    },
    {
      name: "caption",
      type: "text",
      label: "Video Overlay Caption",
    },
    {
      name: "videoId",
      type: "text",
      label: "YouTube / Vimeo Video ID",
    },
    {
      name: "videoTitle",
      type: "text",
      label: "Video Title",
    },
    {
      name: "poster",
      type: "upload",
      relationTo: "media",
      label: "Video Poster Image",
    },
    {
      name: "posterSrc",
      type: "text",
      label: "Static Poster Image Fallback Path",
    },
    {
      name: "posterAlt",
      type: "text",
      label: "Poster Alt Text",
    },
    {
      name: "overlay",
      type: "upload",
      relationTo: "media",
      label: "Video Overlay Artwork / Watermark",
    },
    {
      name: "overlaySrc",
      type: "text",
      label: "Static Overlay Fallback Path",
    },
  ],
};
