import Image from "next/image";

import type { ImageItem } from "@/content/home";

export function ClientLogo({ logo, decorative = false }: { logo: ImageItem; decorative?: boolean }) {
  return <Image src={logo.src} alt={decorative ? "" : logo.alt} width={logo.width} height={logo.height} />;
}
