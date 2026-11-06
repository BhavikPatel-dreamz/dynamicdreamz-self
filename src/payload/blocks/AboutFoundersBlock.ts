import type { Block } from "payload";

export const AboutFoundersBlock: Block = {
  slug: "about-founders",
  labels: {
    singular: "Founders & Leadership",
    plural: "About Founders Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      defaultValue: "Leadership",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Meet the Founders",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "founders",
      type: "array",
      dbName: "af_items",
      label: "Founders & Leaders",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Name",
        },
        {
          name: "role",
          type: "text",
          required: true,
          label: "Role (e.g. Co-founder & CEO)",
        },
        {
          name: "bio",
          type: "textarea",
          label: "Short Bio",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Profile Photo",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Photo Fallback Path",
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
        },
        {
          name: "linkedin",
          type: "text",
          label: "LinkedIn Profile URL",
        },
      ],
    },
  ],
};
