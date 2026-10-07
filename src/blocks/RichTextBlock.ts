import type { Block } from "payload";

export const RichTextBlock: Block = {
  slug: "rich-text-content",
  labels: { singular: "Rich Text Content / Legal", plural: "Rich Text Content Sections" },
  fields: [
    { name: "heading", type: "text" },
    { name: "eyebrow", type: "text" },
    { name: "content", type: "richText", required: true },
    {
      name: "containerWidth",
      type: "select",
      defaultValue: "standard",
      options: [
        { label: "Narrow (Editorial / Legal)", value: "narrow" },
        { label: "Standard", value: "standard" },
        { label: "Full Width", value: "full" },
      ],
    },
  ],
};
