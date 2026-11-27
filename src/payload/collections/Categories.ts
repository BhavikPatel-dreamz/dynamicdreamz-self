import type { CollectionConfig } from "payload";
import { safeRevalidatePath, safeRevalidateTag } from "@/lib/revalidate";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      () => {
        safeRevalidatePath("/blogs/");
        safeRevalidateTag("posts");
      },
    ],
    afterDelete: [
      () => {
        safeRevalidatePath("/blogs/");
        safeRevalidateTag("posts");
      },
    ],
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "description", type: "textarea" },
  ],
};
