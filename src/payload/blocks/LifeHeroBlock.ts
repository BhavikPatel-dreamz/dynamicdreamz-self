import type { Block } from "payload";

export const LifeHeroBlock: Block = {
  slug: "life-hero",
  labels: {
    singular: "Life Hero Section",
    plural: "Life Hero Sections",
  },
  fields: [
    { name: "titleBeforeTeamwork", type: "text" },
    { name: "teamwork", type: "text" },
    { name: "titleAfterTeamwork", type: "text" },
    { name: "lead", type: "text" },
    { name: "description", type: "textarea", required: true },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "imageAlt", type: "text" },
  ],
};
