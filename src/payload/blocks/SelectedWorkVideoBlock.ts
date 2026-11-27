import type { Block } from "payload";

export const SelectedWorkVideoBlock: Block = {
  slug: "home-selected-work",
  labels: {
    singular: "Home Selected Work Showcase",
    plural: "Home Selected Work Showcase Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Selected Work",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "View All Projects",
      label: "CTA Label",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "/our-work/",
      label: "CTA Link",
    },
    {
      name: "projects",
      type: "array",
      dbName: "hsw_projs",
      label: "Showcase Projects",
      fields: [
        { name: "name", type: "text", required: true, label: "Project Name" },
        { name: "technology", type: "text", required: true, label: "Technology / Services" },
        { name: "href", type: "text", required: true, label: "Project URL" },
        {
          name: "mediaType",
          type: "select",
          defaultValue: "image",
          required: true,
          options: [
            { label: "Image", value: "image" },
            { label: "Video (MP4)", value: "video" },
          ],
        },
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
          name: "video",
          type: "upload",
          relationTo: "media",
          label: "Video File (MP4 / WebM)",
        },
        { name: "videoSrc", type: "text", label: "Static Video Fallback Path (MP4)" },
        {
          name: "videoPoster",
          type: "upload",
          relationTo: "media",
          label: "Video Poster Image",
        },
        {
          name: "videoPosterSrc",
          type: "text",
          label: "Static Video Poster Fallback Path",
        },
      ],
    },
  ],
};
