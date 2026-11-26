import type { Block } from "payload";

export const ResourcesStoryBlock: Block = {
  slug: "resources-story",
  labels: {
    singular: "Resources Story & Reviews Split",
    plural: "Resources Story Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Our Dynamic Story,",
      label: "Heading / Title",
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
    },
    {
      name: "paragraphs",
      type: "array",
      dbName: "rs_paras",
      label: "Narrative Paragraphs",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
    { name: "videoId", type: "text", label: "YouTube Video ID" },
    { name: "videoTitle", type: "text", label: "Video Title" },
    {
      name: "poster",
      type: "upload",
      relationTo: "media",
      label: "Video Poster Image",
    },
    {
      name: "posterSrc",
      type: "text",
      label: "Static Video Poster Fallback Path",
    },
    { name: "videoPosterAlt", type: "text", label: "Video Poster Alt Text" },
    {
      name: "overlay",
      type: "upload",
      relationTo: "media",
      label: "Video Overlay Watermark",
    },
    {
      name: "overlaySrc",
      type: "text",
      label: "Static Overlay Fallback Path",
    },
    {
      name: "starIcon",
      type: "upload",
      relationTo: "media",
      label: "Five-Star Rating Icon",
    },
    {
      name: "starIconSrc",
      type: "text",
      defaultValue: "/assets/reviews/five-stars.svg",
      label: "Static Star Icon Fallback Path",
    },
    {
      name: "reviews",
      type: "array",
      dbName: "rs_revs",
      label: "Review Platform Badges",
      fields: [
        { name: "name", type: "text", required: true, label: "Platform Name" },
        { name: "href", type: "text", required: true, label: "Profile URL" },
        { name: "reviews", type: "text", required: true, label: "Review Count Badge" },
        { name: "rating", type: "text", required: true, label: "Rating Score (e.g. 5.0)" },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Platform Wordmark Logo",
        },
        {
          name: "logoSrc",
          type: "text",
          label: "Static Logo Fallback Path",
        },
        { name: "logoWidth", type: "number", defaultValue: 78, label: "Logo Width" },
        { name: "logoHeight", type: "number", defaultValue: 23, label: "Logo Height" },
        { name: "logoClassName", type: "text", label: "Logo Tailwind Class" },
      ],
    },
  ],
};
