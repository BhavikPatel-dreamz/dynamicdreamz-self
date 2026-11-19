import type { Block } from "payload";

export const TextBoxBlock: Block = {
  slug: "text-box",
  labels: {
    singular: "Text Box Section",
    plural: "Text Box Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading (Optional)",
    },
    {
      name: "paragraphs",
      type: "array",
      dbName: "tb_paras",
      label: "Paragraphs",
      fields: [
        {
          name: "text",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "listItems",
      type: "array",
      dbName: "tb_items",
      label: "List Items (Optional)",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "green",
      options: [
        { label: "Pista Green Tint (#EFF4EF)", value: "green" },
        { label: "Cream Tint", value: "cream" },
      ],
    },
  ],
};
