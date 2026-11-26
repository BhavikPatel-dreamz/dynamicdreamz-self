import type { Block } from "payload";

export const AboutTeamBlock: Block = {
  slug: "about-team",
  labels: {
    singular: "About Team & Department Leaders",
    plural: "About Team Sections",
  },
  fields: [
    {
      name: "keyManagers",
      type: "array",
      dbName: "at_km",
      label: "Key Managers",
      fields: [
        { name: "name", type: "text", required: true, label: "Name" },
        { name: "role", type: "text", required: true, label: "Role" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Profile Photo",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Photo Fallback Path",
        },
        { name: "alt", type: "text", label: "Image Alt Text" },
      ],
    },
    {
      name: "departmentLeaders",
      type: "array",
      dbName: "at_dl",
      label: "Department Leaders",
      fields: [
        { name: "name", type: "text", required: true, label: "Name" },
        { name: "role", type: "text", required: true, label: "Role" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Profile Photo",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Photo Fallback Path",
        },
        { name: "alt", type: "text", label: "Image Alt Text" },
      ],
    },
  ],
};
