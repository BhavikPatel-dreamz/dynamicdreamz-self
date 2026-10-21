import Image from "next/image";
import {
  ServiceHeroReviews,
  type ServiceHeroReviewItem,
} from "@/components/sections/service-hero-reviews";
import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyHero } from "@/content/shopify-plus-agency";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type { ServiceHeroReviewItem } from "@/components/sections/service-hero-reviews";

export type ServiceHeroCoBranding = {
  leftLogo: { src: string; alt: string; width: number; height: number };
  separator: { src: string; alt: string; width: number; height: number };
  rightLogo: { src: string; alt: string; width: number; height: number };
};

export type ServiceHeroContent = {
  title: string | readonly string[];
  description?: string | readonly string[];
  subheading?: string | readonly string[];
  secondaryDescription?: string | readonly string[];
  paragraphs?: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imageContainerClassName?: string;
  reviews?: readonly ServiceHeroReviewItem[];
  coBranding?: ServiceHeroCoBranding;
  maxWidthClassName?: string;
  eyebrows?: readonly string[];
  videoSrc?: string;
  badges?: readonly {
    name: string;
    src: string;
    href: string;
    alt: string;
    width: number;
    height: number;
  }[];
  videoLogo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ServiceHeroSectionProps = {
  content?: ServiceHeroContent;
  className?: string;
  variant?: "split" | "centered";
  showReviews?: boolean;
  headingClassName?: string;
  leftColClassName?: string;
  rightColClassName?: string;
  imageClassName?: string;
  reviewClassName?: string;
  bodyClassName?: string;
  videoLogoClassName?: string;
};

export function ServiceHeroSection({
  content = shopifyPlusAgencyHero,
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
}: ServiceHeroSectionProps) {
  const ctaHref = content.ctaHref ?? siteConfig.quotePath;

  const isRisks = Boolean(
    typeof content.title === "string" &&
      content.title.toLowerCase().includes("risks"),
  );
  const isCoBranding = Boolean(content.coBranding);
  const isShopifyPlus = Boolean(
    content.videoLogo ||
      (typeof content.title === "string" &&
        content.title.toLowerCase().includes("shopify plus")),
  );

  if (variant === "centered") {
    const maxWidth = content.maxWidthClassName ?? "max-w-[770px]";
    const sectionClass =
      className ??
      (isRisks
        ? "inner-hero-sec relative overflow-hidden bg-white pt-[190px] pb-[130px] max-[1199px]:pt-[140px] max-[1199px]:pb-[60px] max-[767px]:pt-[120px]"
        : isCoBranding
        ? "inner-hero-sec full-width-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[992px]:pt-[100px]"
        : "inner-hero-sec full-width-sec shopify-theme-customization-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[992px]:pt-[100px]");
    const headingClass =
      headingClassName ??
      (isRisks ? "!font-montreal-medium !font-medium !tracking-[0]" : undefined);
    const bodyClass =
      bodyClassName ??
      (isRisks ? "!mt-2 !mb-0 !text-base !font-normal !leading-[30.4px]" : undefined);

    return (
      <section className={sectionClass}>
        <Container>
          <div className="inner-wrapper flex flex-col">
            <div className="left-col w-full">
              <div className={`inner-hero-content mx-auto ${maxWidth} text-center`}>
                {content.coBranding && (
                  <div className="mobile-app-wrapper mb-[35px] flex items-center justify-center max-[767px]:mb-[25px]">
                    <Image
                      alt={content.coBranding.leftLogo.alt}
                      className="h-[37px] w-auto max-[767px]:h-[30px]"
                      height={content.coBranding.leftLogo.height}
                      src={content.coBranding.leftLogo.src}
                      width={content.coBranding.leftLogo.width}
                    />
                    <Image
                      alt={content.coBranding.separator.alt}
                      className="mx-5 h-[29px] w-auto max-[767px]:mx-[15px] max-[767px]:h-5"
                      height={content.coBranding.separator.height}
                      src={content.coBranding.separator.src}
                      width={content.coBranding.separator.width}
                    />
                    <Image
                      alt={content.coBranding.rightLogo.alt}
                      className="h-[39px] w-auto max-[992px]:max-w-[130px] max-[767px]:h-[30px] max-[767px]:max-w-[104px]"
                      height={content.coBranding.rightLogo.height}
                      src={content.coBranding.rightLogo.src}
                      width={content.coBranding.rightLogo.width}
                    />
                  </div>
                )}
                <h1 className={cn(
                  "inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[379px]:text-[28px] max-[379px]:leading-[38px]",
                  headingClass,
                )}>
                  {formatBrText(content.title, "max-[1199px]:hidden")}
                </h1>
                {content.subheading ? (
                  <p className="mt-2.5 mb-0 font-montserrat text-base font-semibold leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                    {content.subheading}
                  </p>
                ) : null}
                {content.paragraphs ? (
                  content.paragraphs.map((paragraph, idx) => (
                    <p
                      className={cn(
                        "mt-4 mb-4 font-sans text-base font-normal leading-[30.4px] text-muted first:mt-6 last:mb-6",
                        bodyClass,
                      )}
                      key={idx}
                    >
                      {formatBrText(paragraph)}
                    </p>
                  ))
                ) : content.description ? (
                  <>
                    <p
                      className={cn(
                        "mt-6 mb-6 font-sans text-base font-normal leading-[30.4px] text-muted max-[992px]:my-4",
                        bodyClass,
                      )}
                    >
                      {formatBrText(content.description)}
                    </p>
                    {content.secondaryDescription && (
                      <p
                        className={cn(
                          "mt-4 mb-6 font-sans text-base font-normal leading-[30.4px] text-muted",
                          bodyClassName,
                        )}
                      >
                        {formatBrText(content.secondaryDescription)}
                      </p>
                    )}
                  </>
                ) : null}
                {content.secondaryCta ? (
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-[15px] max-[575px]:flex-col">
                    {content.ctaLabel && (
                      <ButtonLink
                        className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                        aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                        href={ctaHref}
                        variant="primary"
                      >
                        {content.ctaLabel}
                      </ButtonLink>
                    )}
                    <ButtonLink
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={content.secondaryCta.ariaLabel ?? `Dynamic Dreamz - ${content.secondaryCta.label}`}
                      href={content.secondaryCta.href}
                      variant="outline"
                    >
                      {content.secondaryCta.label}
                    </ButtonLink>
                  </div>
                ) : content.ctaLabel ? (
                  <div className="mt-2">
                    <ButtonLink
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </div>
            {showReviews ? (
              <div className="right-col mx-auto w-full max-w-[480px]">
                {content.reviews && content.reviews.length > 0 ? (
                  <ServiceHeroReviews items={content.reviews} />
                ) : (
                  <div className="review_animation_main my-[30px]">
                    <div className="mx-auto w-full max-w-[450px]">
                      <ReviewAnimation />
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  const defaultLeftCol = isShopifyPlus
    ? "left-col w-[51%] max-[1199px]:w-full max-[1199px]:text-center"
    : content.image
    ? "left-col w-[58%] max-[1199px]:w-full max-[1199px]:text-center"
    : "left-col w-[55.7%] max-[1199px]:w-full max-[1199px]:text-center";

  const defaultRightCol = isShopifyPlus
    ? "right-col w-[43.182%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[992px]:w-full"
    : content.image
    ? "right-col w-[40%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[992px]:w-full"
    : "right-col w-[41%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[992px]:w-full";

  const splitSectionClass =
    className ??
    (isShopifyPlus
      ? "inner-hero-sec hero-new-section shopify-plus-experts relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[992px]:pt-16 max-[992px]:pb-0"
      : "inner-hero-sec relative overflow-hidden bg-white pt-[158px] pb-[55px] max-[992px]:pt-[100px]");

  const splitBodyClass =
    bodyClassName ??
    (isShopifyPlus
      ? "!text-[16px] !leading-[28px] max-[1199px]:!leading-6 max-[767px]:!text-[16px] max-[767px]:!leading-6"
      : undefined);

  return (
    <section className={splitSectionClass}>
      <Container>
        <div className="inner-wrapper flex flex-wrap items-center justify-between">
          <div className={leftColClassName ?? defaultLeftCol}>
            <div className="inner-hero-content">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[767px]:pl-6 max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                  {content.eyebrows.map((item, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "relative inline-flex items-center font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] max-[1199px]:text-[12px] max-[767px]:text-[10px]",
                        idx > 0 &&
                          "ml-2.5 pl-2.5 after:absolute after:-left-[2px] after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#535353] after:content-['']",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <h1 className={cn(
                "mb-2.5 inline-block max-w-[770px] font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]",
                headingClassName,
              )}>
                {formatBrText(content.title, "max-[1199px]:hidden")}
              </h1>
              {content.subheading ? (
                <p className="mt-2.5 mb-0 font-montserrat text-base font-semibold leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                  {content.subheading}
                </p>
              ) : null}
              {content.paragraphs ? (
                content.paragraphs.map((paragraph, idx) => (
                  <p
                    className={cn(
                      "mt-4 mb-4 text-sm font-normal leading-6 text-muted first:mt-6 last:mb-6 max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                      splitBodyClass,
                    )}
                    key={idx}
                    >
                      {formatBrText(paragraph)}
                    </p>
                ))
              ) : content.description ? (
                <>
                  <p
                    className={cn(
                      "mt-3 mb-3.75 text-sm font-normal leading-6 text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                      splitBodyClass,
                    )}
                  >
                    {formatBrText(content.description)}
                  </p>
                  {content.secondaryDescription && (
                    <p
                      className={cn(
                        "mt-3 mb-3.75 text-sm font-normal leading-[24px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                        splitBodyClass,
                      )}
                    >
                      {formatBrText(content.secondaryDescription)}
                    </p>
                  )}
                </>
              ) : null}
              {content.secondaryCta ? (
                <div className="services-hero-btn mt-2.5 flex flex-wrap items-center gap-5 max-[1199px]:justify-center max-[575px]:flex-col max-[575px]:items-center max-[575px]:gap-[13px]">
                  {content.ctaLabel && (
                    <ButtonLink
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  )}
                  <ButtonLink
                    className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                    aria-label={content.secondaryCta.ariaLabel ?? `Dynamic Dreamz - ${content.secondaryCta.label}`}
                    href={content.secondaryCta.href}
                    variant="outline"
                  >
                    {content.secondaryCta.label}
                  </ButtonLink>
                </div>
              ) : content.ctaLabel ? (
                <ButtonLink
                  className="services-hero-btn"
                  aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                  href={ctaHref}
                  variant="primary"
                >
                  {content.ctaLabel}
                </ButtonLink>
              ) : null}

              {content.badges && content.badges.length > 0 && (
                <div
                  className="global_brands_grid_wrap relative mt-10 flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
                  aria-label="Partnerships and independent review profiles"
                >
                  {content.badges.map((badge, idx) => (
                    <div
                      className="global_brands_item relative border-r border-[#d9d9d9] px-4 first:pl-0 last:border-r-0 max-[767px]:w-1/2 max-[767px]:border-0 max-[767px]:p-3.5 max-[767px]:text-center"
                      key={`${badge.href}-${idx}`}
                    >
                      <a
                        className="flex items-center justify-center"
                        href={badge.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <Image
                          className="h-auto max-h-11 w-auto object-contain"
                          src={badge.src}
                          alt={badge.alt}
                          width={badge.width}
                          height={badge.height}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={cn(rightColClassName ?? defaultRightCol, content.videoSrc && "max-[767px]:hidden")}>
            {content.videoSrc ? (
              <div className="video-wrapper relative aspect-[1.5] max-[767px]:hidden">
                <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <video
                    aria-hidden="true"
                    autoPlay
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    tabIndex={-1}
                  >
                    <source src={content.videoSrc} type="video/mp4" />
                  </video>
                </div>
                {content.videoLogo ? (
                  <span className={cn("video-logo absolute top-[70px] left-[-90px] z-10 flex h-[61px] w-[174px] items-center justify-center rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)] max-[1199px]:left-5", videoLogoClassName)}>
                    <Image
                      alt={content.videoLogo.alt}
                      className="h-auto w-auto brightness-0"
                      height={content.videoLogo.height}
                      src={content.videoLogo.src}
                      width={content.videoLogo.width}
                    />
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[83px] top-full z-1 hidden h-[53px] w-[38px] min-[1200px]:block"
                      fill="none"
                      height="53"
                      viewBox="0 0 38 53"
                      width="38"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M37.2609 50.6641C18.0942 52.6641 -5.73839 50.6641 2.76131 0.164062"
                        stroke="#AD5151"
                        strokeDasharray="5 3"
                        strokeOpacity="0.3"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                ) : null}
              </div>
            ) : content.image ? (
              <>
                <div className={cn("service-img flex justify-center", content.imageContainerClassName)}>
                  <Image
                    alt={content.image.alt}
                    className={cn(
                      "h-auto",
                      imageClassName,
                    )}
                    height={content.image.height}
                    priority
                    src={content.image.src}
                    width={content.image.width}
                  />
                </div>
                {content.reviews && content.reviews.length > 0 && (
                  <ServiceHeroReviews
                    className={reviewClassName}
                    items={content.reviews}
                  />
                )}
              </>
            ) : (
              <ReviewAnimation />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
