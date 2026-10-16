import Image, { type ImageProps } from "next/image";
import React from "react";

const getMediaBaseURL = () =>
  (process.env.MEDIA_SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL || "https://media.dynamicdreamz.net").replace(
    /\/+$/,
    "",
  );

export type PayloadMediaDoc = {
  id?: string | number;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  width?: number | null;
  height?: number | null;
  sizes?: Record<string, { url?: string; filename?: string; width?: number; height?: number }>;
};

export type PayloadMediaProps = Omit<ImageProps, "src" | "alt"> & {
  media?: PayloadMediaDoc | string | number | null;
  fallbackSrc?: string;
  alt?: string;
  sizePreference?: "thumbnail" | "card" | "hero";
};

/**
 * PayloadMedia: Production-grade dual-resolution asset component.
 * Resolves Payload CMS media uploaded to the dedicated media server
 * (https://media.dynamicdreamz.net) while seamlessly falling back to canonical
 * local static assets (/assets/...) when CMS media is null or unpopulated.
 */
export function PayloadMedia({
  media,
  fallbackSrc = "",
  alt = "",
  sizePreference,
  width,
  height,
  className,
  priority,
  sizes,
  fill,
  ...rest
}: PayloadMediaProps) {
  let resolvedSrc = "";
  let resolvedAlt = alt;
  let resolvedWidth = width;
  let resolvedHeight = height;

  if (media && typeof media === "object") {
    const doc = media as PayloadMediaDoc;
    resolvedAlt = doc.alt || alt || "";

    // Check size preference if available
    if (sizePreference && doc.sizes?.[sizePreference]?.filename) {
      const sizeDoc = doc.sizes[sizePreference];
      resolvedSrc = `${getMediaBaseURL()}/files/uploads/${encodeURIComponent(sizeDoc.filename!)}`;
      resolvedWidth = resolvedWidth || sizeDoc.width || undefined;
      resolvedHeight = resolvedHeight || sizeDoc.height || undefined;
    } else if (doc.url) {
      resolvedSrc = doc.url.startsWith("http") || doc.url.startsWith("/")
        ? doc.url
        : `${getMediaBaseURL()}/files/uploads/${encodeURIComponent(doc.filename || doc.url)}`;
      resolvedWidth = resolvedWidth || doc.width || undefined;
      resolvedHeight = resolvedHeight || doc.height || undefined;
    } else if (doc.filename) {
      resolvedSrc = `${getMediaBaseURL()}/files/uploads/${encodeURIComponent(doc.filename)}`;
      resolvedWidth = resolvedWidth || doc.width || undefined;
      resolvedHeight = resolvedHeight || doc.height || undefined;
    }
  } else if (typeof media === "string" && media.trim().length > 0) {
    resolvedSrc = media;
  }

  // Fallback to local static asset
  if (!resolvedSrc && fallbackSrc) {
    resolvedSrc = fallbackSrc;
  }

  if (!resolvedSrc) {
    return null;
  }

  // Handle SVG or non-raster formats if fill or dimensions are not supplied
  const isFill = fill ?? (!resolvedWidth && !resolvedHeight);

  if (isFill) {
    return (
      <Image
        src={resolvedSrc}
        alt={resolvedAlt}
        fill
        sizes={sizes ?? "100vw"}
        className={className}
        priority={priority}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={resolvedAlt}
      width={Number(resolvedWidth) || 800}
      height={Number(resolvedHeight) || 600}
      sizes={sizes}
      className={className}
      priority={priority}
      {...rest}
    />
  );
}
