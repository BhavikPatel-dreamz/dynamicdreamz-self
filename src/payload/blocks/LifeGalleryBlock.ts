import type { Block } from "payload";

export const LifeGalleryBlock: Block = {
  slug: "life-gallery",
  labels: {
    singular: "Life & Culture Gallery",
    plural: "Life Gallery Sections",
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
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "images",
      type: "array",
      dbName: "lg_imgs",
      label: "Gallery Photos",
      fields: [
        {
          name: "caption",
          type: "text",
          label: "Caption / Description",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Photo Upload",
        },
        {
          name: "src",
          type: "text",
          label: "Static Photo Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
        },
        {
          name: "width",
          type: "number",
          defaultValue: 334,
        },
        {
          name: "height",
          type: "number",
          defaultValue: 406,
        },
      ],
    },
  ],
};
