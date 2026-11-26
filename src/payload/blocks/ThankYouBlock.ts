import type { Block } from "payload";

export const ThankYouBlock: Block = {
  slug: "thank-you",
  labels: {
    singular: "Thank You Page Section",
    plural: "Thank You Page Sections",
  },
  fields: [
    {
      name: "buttonPlacement",
      type: "select",
      defaultValue: "above-contact",
      required: true,
      options: [
        { label: "Above Contact Card (Enquiry)", value: "above-contact" },
        { label: "Below Contact Card (Career Apply)", value: "below-contact" },
      ],
    },
    { name: "heading", type: "text", required: true, label: "Heading (H1)" },
    { name: "descriptionLine1", type: "text", required: true, label: "Description Line 1" },
    { name: "descriptionLine2", type: "text", required: true, label: "Description Line 2" },
    {
      name: "homeCta",
      type: "group",
      label: "Back Home CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Back Home" },
        { name: "href", type: "text", required: true, defaultValue: "/" },
      ],
    },
    {
      name: "contactPhone",
      type: "group",
      label: "Phone Contact Item",
      fields: [
        { name: "label", type: "text", required: true, label: "Display Phone Number" },
        { name: "href", type: "text", required: true, label: "tel: Link" },
        { name: "icon", type: "upload", relationTo: "media", label: "Phone Icon" },
        {
          name: "iconSrc",
          type: "text",
          defaultValue: "/assets/thank-you/call-icon.svg",
          label: "Static Phone Icon Fallback Path",
        },
        { name: "iconAlt", type: "text", defaultValue: "Call Icon", label: "Icon Alt Text" },
      ],
    },
    {
      name: "contactEmail",
      type: "group",
      label: "Email Contact Item",
      fields: [
        { name: "label", type: "text", required: true, label: "Display Email" },
        { name: "href", type: "text", required: true, label: "mailto: Link" },
        { name: "icon", type: "upload", relationTo: "media", label: "Email Icon" },
        {
          name: "iconSrc",
          type: "text",
          defaultValue: "/assets/thank-you/mail-icon.svg",
          label: "Static Email Icon Fallback Path",
        },
        { name: "iconAlt", type: "text", defaultValue: "Mail Icon", label: "Icon Alt Text" },
      ],
    },
  ],
};
