/**
 * Infers the HTML <source> MIME type from a video asset URL or filename.
 */
export function getVideoMimeType(src: string): string {
  const cleanPath = src.split(/[?#]/, 1)[0].toLowerCase();
  if (cleanPath.endsWith(".webm")) return "video/webm";
  if (cleanPath.endsWith(".ogg") || cleanPath.endsWith(".ogv")) return "video/ogg";
  if (cleanPath.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

/**
 * Extracts the bare filename from a local asset path or full media URL.
 */
export function getMediaFilename(src: string): string {
  const cleanPath = src.split(/[?#]/, 1)[0];
  return cleanPath.split("/").pop() || "";
}
