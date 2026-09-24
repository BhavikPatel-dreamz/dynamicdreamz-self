import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { siteConfig } from "@/data/site";

import { cn } from "@/lib/class-names";

export const defaultCtaBannerCopy = {
  heading: sharedUiCopy.ctaBanner.heading,
  ctaLabel: sharedUiCopy.ctaBanner.label,
} as const;

export type CtaBannerSectionProps = {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  headingClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
};

export function CtaBannerSection({
  heading = defaultCtaBannerCopy.heading,
  description,
  ctaLabel = defaultCtaBannerCopy.ctaLabel,
  ctaHref = siteConfig.quotePath,
  headingClassName,
  buttonClassName,
  containerClassName,
}: CtaBannerSectionProps = {}) {
  return (
    <section
      className="request-banner flex min-h-[119px] items-center bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] py-[35px]"
      aria-labelledby="cta-banner-title"
    >
      <Container className={containerClassName}>
        <div className="flex flex-wrap items-center justify-center gap-8 text-center max-[1199px]:gap-5">
          <div className="text-center">
            <h2
              id="cta-banner-title"
              className={cn(
                "font-montserrat text-[30px] font-bold leading-[43.2px] tracking-[-0.6px] text-white max-[1199px]:text-[26px] max-[1199px]:leading-9 max-[767px]:text-[20px] max-[767px]:leading-7",
                headingClassName,
              )}
            >
              {heading}
            </h2>
            {description ? (
              <p className="mt-2 text-base font-medium text-white/90 max-[767px]:text-sm">
                {description}
              </p>
            ) : null}
          </div>
          <ButtonLink
            href={ctaHref}
            variant="light"
            className={cn(
              "min-h-[42px] px-6 py-3 font-montserrat text-[13px] font-bold uppercase text-[#121212]",
              buttonClassName,
            )}
          >
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
