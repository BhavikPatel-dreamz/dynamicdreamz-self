import { ClientLogo } from "@/components/sections/home/client-logo";
import type { ImageItem } from "@/content/home";

type LoopingLogoTrackProps = {
  logos: readonly ImageItem[];
  className: string;
  logoClassName: string;
  decorative?: boolean;
  trackCount?: number;
};

export function LoopingLogoTrack({
  logos,
  className,
  logoClassName,
  decorative = false,
  trackCount = 3,
}: LoopingLogoTrackProps) {
  return Array.from({ length: trackCount }, (_, trackIndex) => {
    const isClone = trackIndex > 0;

    return (
      <div
        aria-hidden={isClone ? true : undefined}
        className={className}
        key={trackIndex}
      >
        {logos.map((logo) => (
          <span className={logoClassName} key={logo.src}>
            <ClientLogo logo={logo} decorative={decorative || isClone} />
          </span>
        ))}
      </div>
    );
  });
}
