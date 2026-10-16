import type { CollectionConfig } from "payload";
import { safeRevalidatePath } from "@/lib/revalidate";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "clientName",
    defaultColumns: ["clientName", "company", "title"],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      () => {
        safeRevalidatePath("/", "layout");
        safeRevalidatePath("/");
        safeRevalidatePath("/case-studies");
      },
    ],
    afterDelete: [
      () => {
        safeRevalidatePath("/", "layout");
        safeRevalidatePath("/");
        safeRevalidatePath("/case-studies");
      },
    ],
  },
  fields: [
    { name: "clientName", type: "text", required: true },
    { name: "company", type: "text", required: true },
    { name: "quote", type: "textarea", required: true },
    { name: "title", type: "text" },
    { name: "role", type: "text" },
    { name: "videoId", type: "text" },
    { name: "videoUploadDate", type: "text" },
    { name: "avatar", type: "upload", relationTo: "media" },
    { name: "portrait", type: "upload", relationTo: "media" },
    { name: "companyLogo", type: "upload", relationTo: "media" },
    { name: "companyLogoAlt", type: "text" },
    { name: "companyHref", type: "text" },
    {
      name: "tags",
      type: "array",
      dbName: "test_tags",
      fields: [{ name: "tag", type: "text" }],
    },
    { name: "rating", type: "number", defaultValue: 5 },
  ],
};
