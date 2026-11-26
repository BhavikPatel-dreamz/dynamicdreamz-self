import Image from "next/image";

import type { ImageItem } from "@/content/home";

export function ClientLogo({
  logo,
  decorative = false,
  loading = "eager",
  sizes = "(max-width: 767px) 120px, 180px",
}: {
  logo: ImageItem;
  decorative?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
}) {
  if (!logo?.src) return null;

  return (
    <Image
      src={logo.src}
      alt={decorative ? "" : logo.alt}
      width={logo.width}
      height={logo.height}
      loading={loading}
      sizes={sizes}
    />
  );
}
