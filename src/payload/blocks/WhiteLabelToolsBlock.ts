import type { Block } from "payload";

export const WhiteLabelToolsBlock: Block = {
  slug: "white-label-tools",
  labels: {
    singular: "White Label Tools & Technologies",
    plural: "White Label Tools & Technologies",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "ariaLabel", type: "text" },
    {
      name: "topRow",
      type: "array",
      dbName: "wlt_top",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "image", type: "text" },
      ],
    },
    {
      name: "bottomRow",
      type: "array",
      dbName: "wlt_bot",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "image", type: "text" },
      ],
    },
  ],
};
