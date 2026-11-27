import type { Block } from "payload";

export const ShopifyPlusAgencySplitBlock: Block = {
  slug: "home-shopify-plus-agency",
  labels: {
    singular: "Home Shopify Plus Agency Split",
    plural: "Home Shopify Plus Agency Split Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Heading / Title",
    },
    {
      name: "intro",
      type: "textarea",
      label: "Intro Subtext",
    },
    {
      name: "paragraphs",
      type: "array",
      dbName: "hspa_paras",
      label: "Narrative Paragraphs",
      fields: [
        {
          name: "text",
          type: "textarea",
          required: true,
          label: "Paragraph Text",
        },
      ],
    },
    {
      name: "video",
      type: "upload",
      relationTo: "media",
      label: "Agency Video (MP4 / WebM)",
    },
    {
      name: "videoSrc",
      type: "text",
      defaultValue: "/assets/home/why-dynamic-dreamz.mp4",
      label: "Static Video Fallback Path (MP4)",
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
      defaultValue: "/assets/about/hero-video-poster.webp",
      label: "Static Poster Fallback Path",
    },
    {
      name: "counters",
      type: "array",
      dbName: "hspa_cntrs",
      label: "Proof Metric Cards",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
          label: "Counter Value (e.g. 150+)",
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Counter Label",
        },
        {
          name: "note",
          type: "text",
          label: "Optional Note / Subtext",
        },
        {
          name: "tone",
          type: "select",
          defaultValue: "green",
          options: [
            { label: "Green (#eff4ef)", value: "green" },
            { label: "Stone (#f4f2ef)", value: "stone" },
            { label: "Peach (#f6eee5)", value: "peach" },
            { label: "Lime (#f0f6e5)", value: "lime" },
          ],
        },
      ],
    },
  ],
};
