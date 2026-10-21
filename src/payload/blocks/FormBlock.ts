import type { Block } from "payload";

export const FormBlock: Block = {
  slug: "form-block",
  labels: {
    singular: "Form Section",
    plural: "Form Sections",
  },
  fields: [
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
      label: "Select Form",
    },
    {
      name: "enableIntro",
      type: "checkbox",
      label: "Enable Intro Content",
      defaultValue: false,
    },
    {
      name: "introContent",
      type: "richText",
      label: "Intro Content",
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.enableIntro),
      },
    },
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      label: "Section Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Section Description",
    },
    {
      name: "containerWidth",
      type: "select",
      label: "Container Width",
      defaultValue: "standard",
      options: [
        { label: "Standard", value: "standard" },
        { label: "Narrow", value: "narrow" },
        { label: "Wide", value: "wide" },
      ],
    },
  ],
};
