import type { Block } from "payload";

export const AgencyServicesBlock: Block = {
  slug: "agency-services",
  labels: { singular: "Agency Services", plural: "Agency Services" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "idAttr", type: "text" },
    {
      name: "cardVariant",
      type: "select",
      options: ["default", "services-box"],
      defaultValue: "services-box",
    },
    {
      name: "items",
      type: "array",
      dbName: "as_items",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "badge", type: "text" },
        { name: "href", type: "text" },
        { name: "iconName", type: "text" },
        {
          name: "features",
          type: "array",
          dbName: "as_features",
          fields: [{ name: "feature", type: "text", required: true }],
        },
      ],
    },
  ],
};
