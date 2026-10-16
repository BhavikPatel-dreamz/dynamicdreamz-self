import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";
import { safeRevalidatePath } from "@/lib/revalidate";

export const revalidatePageAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  if (doc?.slug) {
    const path = doc.slug === "home" ? "/" : `/${doc.slug}`;
    safeRevalidatePath(path);
  }
  return doc;
};

export const revalidatePageAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  if (doc?.slug) {
    const path = doc.slug === "home" ? "/" : `/${doc.slug}`;
    safeRevalidatePath(path);
  }
  return doc;
};
