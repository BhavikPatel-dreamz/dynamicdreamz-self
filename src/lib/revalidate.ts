import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Safely revalidates a Next.js route path without throwing an error when invoked
 * outside an active Next.js request context (e.g. CLI seed scripts or background tasks).
 */
export function safeRevalidatePath(
  path: string,
  type?: "page" | "layout",
): void {
  try {
    if (type) {
      revalidatePath(path, type);
    } else {
      revalidatePath(path);
    }
  } catch {
    // Gracefully ignore when outside Next.js request context
  }
}

/**
 * Safely revalidates a Next.js cache tag without throwing an error when invoked
 * outside an active Next.js request context.
 */
export function safeRevalidateTag(
  tag: string,
  profile: string | { expire?: number } = "max",
): void {
  try {
    revalidateTag(tag, profile);
  } catch {
    // Gracefully ignore when outside Next.js request context
  }
}
