import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { homeAnswerSummary, homeSectionCopy, proofLogos } from "@/content/home";

export type ProofLogoItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
};

export type AgencyHeroBlockProps = {
  established?: string;
  partnerBadge?: string;
  title?: string;
  description?: string;
  discoveryCta?: string;
  discoveryCtaHref?: string;
  shopifyWorkCta?: string;
  shopifyWorkCtaHref?: string;
  proofLogos?: ProofLogoItem[];
};

export function AgencyHeroBlock({
  established = homeSectionCopy.established,
  partnerBadge = homeSectionCopy.partnerBadge,
  title = homeSectionCopy.heroTitle,
  description = homeAnswerSummary,
  discoveryCta = homeSectionCopy.discoveryCta,
  discoveryCtaHref = homeSectionCopy.discoveryCtaHref,
  shopifyWorkCta = homeSectionCopy.shopifyWorkCta,
  shopifyWorkCtaHref = homeSectionCopy.shopifyWorkCtaHref,
  proofLogos: logos = proofLogos,
}: AgencyHeroBlockProps) {
  return (
    <section className="flex h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fbeed5_16.38%,rgb(251_238_213/0%)_100%)] pt-[90px] max-[992px]:pt-16">
      <Container className="text-center max-[767px]:px-4">
        <div className="banner-badge mb-6">
          <div className="eyebrow mx-auto inline-flex items-center justify-center text-muted uppercase min-[768px]:max-[992px]:text-[13px] min-[768px]:max-[992px]:leading-[13px] max-[640px]:w-max max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-2.5 max-[640px]:text-xs max-[640px]:leading-none">
            <span className="relative mr-2.5 inline-flex items-center pr-2.5 text-sm font-semibold leading-[1.2] before:mr-3 before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] after:absolute after:right-[-2px] after:h-[3px] after:w-[3px] after:rounded-full after:bg-muted after:content-[''] max-[640px]:after:hidden max-[640px]:before:mr-2.5 max-[640px]:before:w-[25px]">
              {established}
            </span>
            <span className="text-sm font-semibold leading-[1.2]">{partnerBadge}</span>
          </div>
        </div>
        <h1 className="mx-auto mb-5 max-w-[1100px] font-montreal-medium text-[56px] font-normal leading-[1.14] text-ink min-[768px]:max-[992px]:text-[38px] min-[768px]:max-[992px]:leading-12 max-[767px]:mb-4 max-[767px]:max-w-[358px] max-[767px]:text-[27px] max-[767px]:leading-[37px]">
          {title}
        </h1>
        <p className="mx-auto mb-[30px] max-w-[940px] text-base font-medium leading-7 text-muted max-[1199px]:leading-6 max-[767px]:mb-6 max-[767px]:max-w-[358px] max-[767px]:text-sm">
          {description}
        </p>
        <div className="mx-auto flex max-w-[1100px] justify-center max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-0">
          {discoveryCta && discoveryCtaHref ? (
            <Button
              className="px-6 py-[15px] text-base leading-[normal] max-[992px]:min-h-[42px] max-[992px]:px-6 max-[992px]:py-3 max-[992px]:text-sm max-[767px]:ml-0"
              variant="primary"
              href={discoveryCtaHref}
            >
              {discoveryCta}
            </Button>
          ) : null}
          {shopifyWorkCta && shopifyWorkCtaHref ? (
            <Button
              className="ml-[15px] px-6 py-[15px] text-base leading-[normal] max-[992px]:ml-3.5 max-[992px]:min-h-[42px] max-[992px]:px-6 max-[992px]:py-3 max-[992px]:text-sm max-[767px]:ml-0 max-[767px]:mt-[14px]"
              variant="outline"
              href={shopifyWorkCtaHref}
            >
              {shopifyWorkCta}
            </Button>
          ) : null}
        </div>
        {logos && logos.length > 0 ? (
          <div
            className="relative flex justify-center pt-[60px] max-[1199px]:pb-[60px] max-[767px]:-mb-10 max-[767px]:flex-wrap max-[767px]:pb-10 before:hidden max-[767px]:before:absolute max-[767px]:before:top-[calc(50%-20px)] max-[767px]:before:left-0 max-[767px]:before:block max-[767px]:before:h-px max-[767px]:before:w-full max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] after:hidden max-[767px]:after:absolute max-[767px]:after:top-10 max-[767px]:after:left-[calc(50%-1px)] max-[767px]:after:block max-[767px]:after:h-[calc(100%-120px)] max-[767px]:after:w-px max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
            aria-label="Partnerships and independent review profiles"
          >
            {logos.map((logo) => (
              <a
                className="relative flex w-max items-center justify-center border-r border-[#d9d9d9] lg:px-[35px] px-[20px] last:border-r-0 max-[767px]:mb-10 max-[767px]:w-1/2 max-[767px]:max-w-1/2 max-[767px]:border-r-0 max-[767px]:px-[15px]"
                key={logo.src}
                href={logo.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Image
                  className="h-auto w-auto max-h-[54px] min-[768px]:max-[992px]:max-h-11 max-[767px]:max-h-11 max-[767px]:max-w-[126px]"
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width ?? 136}
                  height={logo.height ?? 44}
                  sizes="(max-width: 767px) 126px, 160px"
                  loading="eager"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export { AgencyHeroBlock as HomeHeroSection };
export type { AgencyHeroBlockProps as HomeHeroSectionProps };
