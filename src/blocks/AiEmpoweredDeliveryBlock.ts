import type { Block } from "payload";

export const AiEmpoweredDeliveryBlock: Block = {
  slug: "ai-empowered-delivery",
  labels: { singular: "AI Empowered Delivery", plural: "AI Empowered Delivery" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "callout", type: "text" },
    {
      name: "variant",
      type: "select",
      options: ["default", "dark-green"],
      defaultValue: "default",
    },
    {
      name: "cta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "tools",
      type: "array",
      dbName: "aied_tools",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
