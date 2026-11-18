import type { Block } from "payload";

export const ShopifyMobileAppDtcBlock: Block = {
  slug: "shopify-mobile-app-dtc",
  labels: {
    singular: "Shopify Mobile App DTC Brands",
    plural: "Shopify Mobile App DTC Brands Sections",
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
      defaultValue: "Shopify Mobile App Development for DTC Brands",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description / Paragraph Text",
    },
    {
      name: "cards",
      type: "array",
      dbName: "smd_cards",
      label: "Brand Category Cards",
      fields: [
        {
          name: "tag",
          type: "text",
          label: "Category Tag (e.g. DTC BEAUTY BRANDS)",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Card Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Card Description",
        },
        {
          name: "showBadges",
          type: "checkbox",
          defaultValue: true,
          label: "Show App Store & Google Play Badges",
        },
      ],
    },
  ],
};
