import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "clientName",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "clientName", type: "text", required: true },
    { name: "role", type: "text" },
    { name: "company", type: "text", required: true },
    { name: "content", type: "textarea", required: true },
    { name: "rating", type: "number", defaultValue: 5 },
    { name: "avatar", type: "upload", relationTo: "media" },
    { name: "companyLogo", type: "upload", relationTo: "media" },
    { name: "videoUrl", type: "text" },
  ],
};
