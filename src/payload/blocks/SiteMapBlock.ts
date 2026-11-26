import type { Block } from "payload";

export const SiteMapBlock: Block = {
  slug: "site-map",
  labels: {
    singular: "HTML Site Map Directory",
    plural: "HTML Site Map Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      defaultValue: "Site Map",
      label: "Screen-Reader H1 Title",
    },
    {
      name: "checkIcon",
      type: "upload",
      relationTo: "media",
      label: "Bullet Check Icon",
    },
    {
      name: "checkIconSrc",
      type: "text",
      defaultValue: "/assets/icons/gradient-check.svg",
      label: "Static Bullet Icon Fallback Path",
    },
    {
      name: "links",
      type: "array",
      dbName: "sm_links",
      label: "Top-Level Links",
      fields: [
        { name: "label", type: "text", required: true, label: "Link Label" },
        { name: "href", type: "text", required: true, label: "Link URL / Path" },
        {
          name: "children",
          type: "array",
          dbName: "sm_chld",
          label: "Nested Child Links",
          fields: [
            { name: "label", type: "text", required: true, label: "Child Link Label" },
            { name: "href", type: "text", required: true, label: "Child Link URL / Path" },
          ],
        },
      ],
    },
  ],
};
