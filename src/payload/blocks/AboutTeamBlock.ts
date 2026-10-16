import type { Block } from "payload";

export const AboutTeamBlock: Block = {
  slug: "about-team",
  labels: {
    singular: "About Team Section",
    plural: "About Team Sections",
  },
  fields: [
    {
      name: "keyManagers",
      type: "array",
      dbName: "ab_tm_mgrs",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "role", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
      ],
    },
    {
      name: "departmentLeaders",
      type: "array",
      dbName: "ab_tm_ldrs",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "role", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "alt", type: "text" },
      ],
    },
  ],
};
