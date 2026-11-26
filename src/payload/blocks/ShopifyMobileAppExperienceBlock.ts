import type { Block } from "payload";

export const ShopifyMobileAppExperienceBlock: Block = {
  slug: "shopify-mobile-app-experience",
  labels: {
    singular: "Shopify Mobile App Experience",
    plural: "Shopify Mobile App Experience Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Bring Mobile Shopping Moments Closer to Your Customers",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description / Paragraph Text",
    },
    {
      name: "columns",
      type: "select",
      defaultValue: "4",
      options: [
        { label: "4 Columns (Default)", value: "4" },
        { label: "3 Columns Grid", value: "3" },
      ],
    },
    {
      name: "sectionId",
      type: "text",
      label: "HTML Section ID (e.g. shopping_eperience, why-choose-dd)",
    },
    {
      name: "moments",
      type: "array",
      dbName: "sme_moments",
      label: "Shopping Experience Moments",
      fields: [
        {
          name: "step",
          type: "text",
          required: true,
          label: "Step Number (e.g. 01, 02)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Moment Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Moment Description",
        },
        {
          name: "points",
          type: "array",
          dbName: "sme_pts",
          label: "Bullet Points / Capabilities",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Bullet Point",
            },
          ],
        },
      ],
    },
  ],
};
