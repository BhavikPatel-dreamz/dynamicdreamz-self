import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import type { IndustryPageContent } from "@/types/industry";

type IndustryHeroSectionProps = {
  content?: IndustryPageContent;
  title?: string;
  description?: string;
  descriptionBeforeBreak?: string;
  descriptionAfterBreak?: string;
  eyebrow?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  ctaLabel?: string;
  ctaHref?: string;
  showEyebrow?: boolean;
  showCta?: boolean;
  variant?: "gradient" | "white";
  className?: string;
  slug?: string;
};

export function IndustryHeroSection({
  content,
  title,
  description,
  descriptionBeforeBreak,
  descriptionAfterBreak,
  eyebrow,
  image,
  ctaLabel,
  ctaHref,
  showEyebrow,
  showCta,
  variant = "gradient",
  className,
  slug: propSlug,
}: IndustryHeroSectionProps) {
  const hero = content?.hero;
  const slug = propSlug ?? content?.slug ?? "hero";

  const resolvedTitle = title ?? hero?.title ?? "";
  const resolvedEyebrow = eyebrow ?? hero?.eyebrow;
  const resolvedShowEyebrow = showEyebrow ?? Boolean(resolvedEyebrow);
  const resolvedShowCta = showCta ?? (hero ? true : false);
  const resolvedImage = image ?? hero?.image;
  const resolvedCtaLabel = ctaLabel ?? sharedUiCopy.requestQuote;
  const resolvedCtaHref = ctaHref ?? siteConfig.quotePath;

  const resolvedDescBefore = descriptionBeforeBreak ?? hero?.descriptionBeforeBreak;
  const resolvedDescAfter = descriptionAfterBreak ?? hero?.descriptionAfterBreak;
  const fullDescription = description;

  return (
    <section
      className={cn(
        "industries-hero-sec overflow-hidden pt-[190px] max-[992px]:pt-[150px]",
        variant === "white"
          ? "bg-white"
          : "bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)]",
        className,
      )}
      aria-labelledby={`${slug}-title`}
      data-industry="hero"
    >
      <Container className="max-[575px]:px-4">
        <div className="industries-hero-content text-center">
          {resolvedShowEyebrow && resolvedEyebrow ? (
            <span className="mb-1 block text-base leading-[19px] font-bold tracking-[-0.32px] text-black uppercase">
              {resolvedEyebrow}
            </span>
          ) : null}
          <h1
            className="mb-2.5 text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[992px]:text-[40px] max-[992px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
            id={`${slug}-title`}
          >
            {resolvedTitle}
          </h1>
          {fullDescription ? (
            <p className="mb-6 text-lg leading-[34.2px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]">
              {fullDescription}
            </p>
          ) : (
            <p className="mb-6 text-lg leading-[34.2px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]">
              {resolvedDescBefore}
              {resolvedDescAfter ? (
                <>
                  <br className="max-[1199px]:hidden" /> {resolvedDescAfter}
                </>
              ) : null}
            </p>
          )}
          {resolvedShowCta ? (
            <ButtonLink
              className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] max-[992px]:min-h-[42px] max-[992px]:py-3 max-[992px]:text-sm"
              href={resolvedCtaHref}
              variant="primary"
            >
              {resolvedCtaLabel}
            </ButtonLink>
          ) : null}
        </div>

        {resolvedImage ? (
          <div className="industries-img mx-auto mt-[55px] mb-[-80px] w-full max-w-[840px] pb-[5px] max-[992px]:mt-[60.4px] max-[992px]:pb-[10px] max-[767px]:mt-[30.4px] max-[767px]:mb-[-70px] max-[575px]:pb-[10.75px]">
            <Image
              className="h-auto w-full"
              src={resolvedImage.src}
              alt={resolvedImage.alt}
              width={resolvedImage.width}
              height={resolvedImage.height}
              sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 767px) 500px, (max-width: 991px) 680px, 840px"
              preload
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

