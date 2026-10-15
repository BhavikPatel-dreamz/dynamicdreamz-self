import type { Block } from "payload";

export const CityWhyChooseBoxesBlock: Block = {
  slug: "city-why-choose-boxes",
  labels: { singular: "City Why Choose Boxes", plural: "City Why Choose Boxes" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "columns", type: "number", defaultValue: 3 },
    {
      name: "boxes",
      type: "array",
      dbName: "cwcb_boxes",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "iconName", type: "text" },
        { name: "icon", type: "upload", relationTo: "media" },
        { name: "iconSrc", type: "text" },
        { name: "iconAlt", type: "text" },
      ],
    },
  ],
};
