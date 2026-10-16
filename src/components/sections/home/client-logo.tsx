import Image from "next/image";

import type { ImageItem } from "@/content/home";

export function ClientLogo({
  logo,
  decorative = false,
  sizes = "(max-width: 767px) 120px, 180px",
}: {
  logo: ImageItem;
  decorative?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={logo.src}
      alt={decorative ? "" : logo.alt}
      width={logo.width}
      height={logo.height}
      sizes={sizes}
    />
  );
}
