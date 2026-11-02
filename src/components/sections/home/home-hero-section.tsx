import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { homeAnswerSummary, homeSectionCopy, proofLogos } from "@/content/home";

export type ProofLogoItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
};

export type HomeHeroSectionProps = {
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

export function HomeHeroSection({
  established = homeSectionCopy.established,
  partnerBadge = homeSectionCopy.partnerBadge,
  title = homeSectionCopy.heroTitle,
  description = homeAnswerSummary,
  discoveryCta = homeSectionCopy.discoveryCta,
  discoveryCtaHref = homeSectionCopy.discoveryCtaHref,
  shopifyWorkCta = homeSectionCopy.shopifyWorkCta,
  shopifyWorkCtaHref = homeSectionCopy.shopifyWorkCtaHref,
  proofLogos: logos = proofLogos,
}: HomeHeroSectionProps = {}) {
  return (
    <section className="flex h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fbeed5_16.38%,rgb(251_238_213/0%)_100%)] pt-[90px] max-[992px]:pt-16">
      <Container className="text-center">
        <div className="banner-badge mb-6">
          <div className="eyebrow mx-auto inline-flex items-center justify-center text-muted uppercase max-[1199px]:text-[12px] max-[767px]:text-[10px] max-[640px]:w-max">
            <span className="relative mr-2.5 leading-[1.2] inline-flex items-center pr-2.5 text-sm font-semibold max-[1199px]:text-[12px] max-[767px]:text-[10px] before:mr-3 before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] after:absolute after:right-[-2px] after:h-[3px] after:w-[3px] after:rounded-full after:bg-muted after:content-[''] max-[640px]:before:mr-2.5 max-[640px]:before:w-[25px]">
              {established}
            </span>
            <span className="leading-[1.2] text-sm font-semibold max-[1199px]:text-[12px] max-[767px]:text-[10px]">{partnerBadge}</span>
          </div>
        </div>
        <h1 className="mx-auto mb-5 max-w-[1100px] font-montreal-medium text-[56px] leading-[1.14] font-normal text-ink max-[1199px]:text-[48px] max-[1199px]:leading-[60px] max-[992px]:text-[38px] max-[992px]:leading-[48px] max-[767px]:mb-4 max-[767px]:max-w-[358px] max-[767px]:text-[27px] max-[767px]:leading-[37px]">
          {title}
        </h1>
        <p className="mx-auto mb-[30px] max-w-[940px] text-base leading-7 font-medium text-muted max-[1199px]:leading-6 max-[767px]:mb-6 max-[767px]:max-w-[358px] max-[767px]:text-sm">
          {description}
        </p>
        <div className="mx-auto flex max-w-[1100px] justify-center gap-[15px] max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-3.5 [&_a]:w-fit [&_a]:max-[767px]:mx-auto">
          {discoveryCta && discoveryCtaHref ? (
            <ButtonLink className="normal-case" variant="primary" href={discoveryCtaHref}>
              {discoveryCta}
            </ButtonLink>
          ) : null}
          {shopifyWorkCta && shopifyWorkCtaHref ? (
            <ButtonLink className="normal-case" variant="outline" href={shopifyWorkCtaHref}>
              {shopifyWorkCta}
            </ButtonLink>
          ) : null}
        </div>
        <div className="relative flex justify-center pt-[60px] max-[1199px]:pb-[60px] max-[767px]:p-0 max-[767px]:mt-[40px] max-[767px]:-mb-[40px] max-[767px]:flex-wrap before:hidden max-[767px]:before:absolute max-[767px]:before:top-1/2 max-[767px]:before:left-5 max-[767px]:before:block max-[767px]:before:h-px max-[767px]:before:w-[calc(100%-40px)] max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] after:hidden max-[767px]:after:absolute max-[767px]:after:top-0 max-[767px]:after:left-1/2 max-[767px]:after:block max-[767px]:after:h-full max-[767px]:after:w-px max-[767px]:after:-translate-x-1/2 max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']" aria-label="Partnerships and independent review profiles">
          {logos.map((logo) => (
            <a className="relative flex w-max items-center justify-center border-r border-[#d9d9d9] lg:px-[35px] px-[20px] last:border-r-0 max-[767px]:w-1/2 max-[767px]:max-w-1/2 max-[767px]:border-r-0 max-[767px]:px-[15px] max-[767px]:py-5" key={logo.src} href={logo.href} target="_blank" rel="nofollow noopener noreferrer">
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
      </Container>
    </section>
  );
}
