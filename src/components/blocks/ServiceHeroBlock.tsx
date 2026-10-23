import React from "react";
import { Container } from "@/components/ui/container";
import { aboutHero, aboutSectionCopy } from "@/content/about";
import { resourcesHero } from "@/content/resources";
import { shopifyPlusAgencyHero } from "@/content/shopify-plus-agency";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import {
  ServiceHeroSection as BaseServiceHeroSection,
  type ServiceHeroContent,
  type ServiceHeroCoBranding,
  type ServiceHeroReviewItem,
} from "@/components/sections/service-hero-section";

export type { ServiceHeroReviewItem, ServiceHeroCoBranding, ServiceHeroContent };

export type ServiceHeroBlockProps = {
  content?: any;
  className?: string;
  variant?: "split" | "centered" | "theme" | "video" | "mobileApp" | string;
  showReviews?: boolean;
  headingClassName?: string;
  leftColClassName?: string;
  rightColClassName?: string;
  imageClassName?: string;
  reviewClassName?: string;
  bodyClassName?: string;
  videoLogoClassName?: string;
  wrapperClassName?: string;
  titleAccentTag?: "i" | "span";
  titleAccentClassName?: string;
  titleAccentPosition?: "start" | "end";
  breakClassName?: string;
  title?: any;
  eyebrow?: any;
  description?: any;
  deliveryTitle?: any;
  statistics?: any;
  badges?: any;
  scrollingImages?: any;
  showcaseImages?: any;
  proofLogos?: any;
  fullBleedShowcaseAtTablet?: boolean;
  layout?: string;
  typography?: string;
  primaryCta?: any;
  secondaryCta?: any;
  [key: string]: any;
};

export type ServiceHeroSectionProps = ServiceHeroBlockProps;

export function ServiceHeroBlock({
  content: propContent,
  className,
  variant = "split",
  showReviews = true,
  headingClassName,
  leftColClassName,
  rightColClassName,
  imageClassName,
  reviewClassName,
  bodyClassName,
  videoLogoClassName,
  title,
  eyebrow,
  description,
  badges,
  primaryCta,
  secondaryCta,
  titleAccentPosition = "end",
  titleAccentClassName,
  ...rest
}: ServiceHeroBlockProps) {
  const content = propContent ?? {
    ...shopifyPlusAgencyHero,
    ...(title !== undefined ? { title } : {}),
    ...(eyebrow !== undefined ? { eyebrow } : {}),
    ...(description !== undefined ? { description } : {}),
    ...(primaryCta !== undefined ? { primaryCta } : {}),
    ...(secondaryCta !== undefined ? { secondaryCta } : {}),
    ...(badges !== undefined ? { badges } : {}),
    ...rest,
  };
  const ctaLabelText = content.ctaLabel ?? content.cta ?? primaryCta?.label;
  const ctaHref = content.ctaHref ?? content.ctaLink ?? primaryCta?.href ?? siteConfig.quotePath;
  const secondaryCtaObj = content.secondaryCta ?? secondaryCta;
  const videoSource = content.videoSrc ?? content.video;
  const subtitleText = content.subtitle ?? content.subheading ?? content.lead;

  const rawEyebrow = content.eyebrows ?? content.eyebrow ?? content.eyebrowSpans ?? eyebrow;
  const normalizedEyebrows: readonly string[] = Array.isArray(rawEyebrow)
    ? rawEyebrow
    : typeof rawEyebrow === "string"
    ? rawEyebrow.includes(" • ")
      ? rawEyebrow.split(" • ")
      : rawEyebrow.includes(" | ")
      ? rawEyebrow.split(" | ")
      : [rawEyebrow]
    : [];

  const rawBadges = content.badges ?? badges ?? [];
  const normalizedBadges = Array.isArray(rawBadges)
    ? rawBadges.map((b: any) => ({
        src: b.src ?? b.icon ?? "",
        alt: b.alt ?? b.label ?? b.name ?? "",
        href: b.href ?? "#",
        width: b.width ?? 136,
        height: b.height ?? 44,
      }))
    : [];

  const normalizedContent: ServiceHeroContent = {
    ...content,
    ctaLabel: ctaLabelText,
    ctaHref,
    secondaryCta: secondaryCtaObj,
    videoSrc: videoSource,
    subheading: subtitleText,
    eyebrows: normalizedEyebrows.length > 0 ? normalizedEyebrows : content.eyebrows,
    badges: normalizedBadges.length > 0 ? normalizedBadges : content.badges,
  };

  return (
    <BaseServiceHeroSection
      content={normalizedContent}
      className={className}
      variant={variant === "centered" ? "centered" : "split"}
      showReviews={showReviews}
      headingClassName={headingClassName}
      leftColClassName={leftColClassName}
      rightColClassName={rightColClassName}
      imageClassName={imageClassName}
      reviewClassName={reviewClassName}
      bodyClassName={bodyClassName}
      videoLogoClassName={videoLogoClassName}
      titleAccentPosition={titleAccentPosition}
      titleAccentClassName={titleAccentClassName}
    />
  );
}

export function InnerHeroSection({
  title,
  headingId = "blogs-page-title",
}: {
  title?: string;
  headingId?: string;
}) {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-40 pb-[85px] text-center max-[991px]:pt-[140px] max-[991px]:pb-[46px]"
      aria-labelledby={headingId}
      data-blogs-hero
    >
      <Container>
        <div className="mx-auto max-w-[770px]">
          <h1
            id={headingId}
            className="m-0 inline-block max-w-full font-display text-[50px] leading-[60px] font-medium text-ink max-[991px]:text-[30px] max-[991px]:leading-[60px] max-[767px]:leading-10"
            data-blogs-heading
          >
            {title}
          </h1>
        </div>
      </Container>
    </section>
  );
}

export function ResourcesHeroSection({
  title = resourcesHero.title,
  description = resourcesHero.description,
  className,
}: {
  title?: string | readonly string[];
  description?: string | readonly string[];
  className?: string;
} = {}) {
  const renderedDescription = Array.isArray(description)
    ? description.join(" ")
    : description;

  return (
    <section
      className={cn("inner-hero-sec pt-[210px] max-[991px]:pt-[140px]", className)}
      aria-labelledby="resources-title"
    >
      <Container variant="narrow">
        <div className="inner-hero-content text-center">
          <h1
            id="resources-title"
            className="mb-6 text-[50px] font-medium leading-[66px] max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
          >
            {title}
          </h1>
          <p className="text-[18px] font-medium leading-[34.2px] text-muted max-[991px]:text-[16px] max-[991px]:leading-[30.4px]">
            {renderedDescription}
          </p>
        </div>
      </Container>
    </section>
  );
}

export type AboutHeroSectionProps = {
  title?: string;
  description?: string;
  deliveryTitle?: string;
  statistics?: readonly { label: string; value: string }[];
};

export function AboutHeroSection({
  title = aboutHero.title,
  description = aboutHero.description,
  deliveryTitle = aboutSectionCopy.deliveryTitle,
  statistics = aboutHero.statistics,
}: AboutHeroSectionProps = {}) {
  return (
    <>
      <section className="inner-hero-sec relative overflow-hidden bg-[#fafaf7] pt-[200px] pb-[130px] max-[1199px]:pt-[160px] max-[1199px]:pb-[120px] max-[767px]:pt-[150px] max-[767px]:pb-[110px]">
        <Container>
          <div data-aos="fade-up" className="inner-hero-content mx-auto max-w-[930px] text-center">
            <h1 className="m-0 font-montreal-medium text-[55px] font-normal leading-[1.1] text-ink max-[1199px]:text-[45px] max-[1199px]:leading-[50px] max-[767px]:text-[32px] max-[767px]:leading-[40px]">
              {title}
            </h1>
            <p className="mt-5 mb-0 font-sans text-base font-medium leading-[28px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-[24px]">
              {description}
            </p>
          </div>
        </Container>
      </section>

      <section className="team-deliver-sec relative z-10 -mt-[78px] px-4 max-[1199px]:-mt-[64px]" id="team_deliver_sec">
        <Container>
          <div
            data-aos="fade-up"
            className="team-deliver-wrap flex flex-wrap items-center justify-between rounded-[26px] bg-black px-[75px] py-[38px] max-[1199px]:p-[30px] max-[991px]:flex-col max-[991px]:p-[25px_20px] max-[767px]:rounded-[20px]"
          >
            <div className="left-col w-[35%] max-[991px]:w-full max-[991px]:text-center">
              <h2 className="m-0 font-montreal-medium text-[28px] font-normal leading-[40.42px] tracking-[-0.56px] text-white max-[1199px]:text-[25px] max-[991px]:mb-5 max-[767px]:text-[24px] max-[767px]:leading-[34px]">
                {deliveryTitle}
              </h2>
            </div>
            <div className="right-col w-[60%] max-[991px]:w-full">
              <div className="deliver-wrapper flex items-center justify-end max-[991px]:justify-center">
                {statistics.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "deliver-counter",
                      idx > 0 && "ml-[30px] border-l border-white/25 pl-[30px] max-[1199px]:ml-5 max-[1199px]:pl-5 max-[767px]:ml-2.5 max-[767px]:pl-2.5",
                      "max-[991px]:text-center",
                    )}
                  >
                    <div className="text-counter mb-3 font-montserrat text-base font-bold uppercase leading-[18.4px] text-white/60 max-[1199px]:text-sm max-[767px]:mb-0 max-[767px]:text-[9px] max-[767px]:leading-[14px]">
                      {stat.label}
                    </div>
                    <div className="counter-text flex items-center font-montreal-medium text-[45px] font-semibold leading-[45px] tracking-[-0.56px] text-white max-[1199px]:text-[40px] max-[1199px]:leading-[35px] max-[767px]:justify-center max-[767px]:text-[20px] max-[767px]:leading-[30px]">
                      <span>{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export {
  ServiceHeroBlock as ServiceHeroSection,
  ServiceHeroBlock as OurWorkHeroSection,
  ServiceHeroBlock as CareerHeroSection,
  ServiceHeroBlock as ServiceHeroVideoSection,
  ServiceHeroBlock as IndustryHeroSection,
  ServiceHeroBlock as ShopifyAppsHeroSection,
};
