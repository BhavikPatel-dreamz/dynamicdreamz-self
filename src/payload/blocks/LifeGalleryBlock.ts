import type { Block } from "payload";

export const LifeGalleryBlock: Block = {
  slug: "life-gallery",
  labels: {
    singular: "Life Gallery Section",
    plural: "Life Gallery Sections",
  },
  fields: [
    {
      name: "images",
      type: "array",
      dbName: "lg_imgs",
      fields: [
        { name: "image", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
      ],
    },
  ],
};
