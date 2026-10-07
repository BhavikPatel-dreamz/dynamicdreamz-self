import type { CollectionConfig } from "payload";
import { safeRevalidatePath } from "@/lib/revalidate";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      () => {
        safeRevalidatePath("/blogs");
      },
    ],
    afterDelete: [
      () => {
        safeRevalidatePath("/blogs");
      },
    ],
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "role", type: "text" },
    { name: "avatar", type: "upload", relationTo: "media" },
    { name: "linkedin", type: "text" },
    { name: "bio", type: "textarea" },
  ],
};
