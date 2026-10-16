import type { Block } from "payload";

export const TextBoxBlock: Block = {
  slug: "text-box",
  labels: { singular: "Text Box Section", plural: "Text Box Sections" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "text" },
    {
      name: "paragraphs",
      type: "array",
      dbName: "tb_paras",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
    {
      name: "listItems",
      type: "array",
      dbName: "tb_items",
      fields: [{ name: "text", type: "text", required: true }],
    },
    {
      name: "variant",
      type: "select",
      options: [
        { label: "Green", value: "green" },
        { label: "Cream", value: "cream" },
      ],
      defaultValue: "green",
    },
  ],
};
