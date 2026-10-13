import type { Block } from "payload";

export const SiteMapDirectoryBlock: Block = {
  slug: "sitemap-directory",
  labels: {
    singular: "Site Map Directory",
    plural: "Site Map Directories",
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "groups",
      type: "array",
      dbName: "smap_grps",
      fields: [
        { name: "title", type: "text" },
        {
          name: "links",
          type: "array",
          dbName: "smap_lnks",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },
  ],
};
