import Image from "next/image";
import {
  ServiceHeroReviews,
  type ServiceHeroReviewItem,
} from "@/components/sections/service-hero-reviews";
import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
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
  titleAccent?: string;
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
    name?: string;
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
  titleAccentPosition?: "start" | "end";
  titleAccentClassName?: string;
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
  titleAccentPosition = "end",
  titleAccentClassName,
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
  const hasVideo = Boolean(content.videoSrc);

  if (variant === "centered") {
    const maxWidth = content.maxWidthClassName ?? (isRisks ? "max-w-[830px]" : "max-w-[770px]");
    const sectionClass =
      className ??
      (isRisks
        ? "inner-hero-sec risk-shopify-sec relative overflow-hidden bg-white pt-[190px] pb-[130px] max-[1200px]:pt-[140px] max-[1200px]:pb-[60px] max-[992px]:pt-[100px] max-[768px]:pt-[120px]"
        : isCoBranding
        ? "inner-hero-sec full-width-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[992px]:pt-[100px]"
        : "inner-hero-sec full-width-sec shopify-theme-customization-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[992px]:pt-[100px]");
    const headingClass =
      headingClassName ??
      (isRisks ? "!font-montreal-medium !font-normal !tracking-normal" : undefined);
    const bodyClass =
      bodyClassName ??
      (isRisks ? "!mt-2 !mb-0 !text-base !font-normal !leading-[30.4px] !text-[#535353]" : undefined);

    const shouldShowReviews = showReviews && !isRisks;

    return (
      <section className={sectionClass}>
        <Container>
          <div className="inner-wrapper flex flex-col">
            <div className="left-col w-full">
              <div className={`inner-hero-content mx-auto ${maxWidth} text-center`}>
                {content.eyebrows && content.eyebrows.length > 0 && (
                  <Eyebrow
                    align="center"
                    as="div"
                    className="mb-[15px] mx-auto w-fit max-[768px]:w-full max-[768px]:justify-start"
                    items={content.eyebrows}
                    linePosition="overlay"
                  />
                )}
                {content.coBranding && (
                  <div className="mobile-app-wrapper mb-[35px] flex items-center justify-center max-[768px]:mb-[25px]">
                    <Image
                      alt={content.coBranding.leftLogo.alt}
                      className="h-[37px] w-auto max-[768px]:h-[30px]"
                      height={content.coBranding.leftLogo.height}
                      src={content.coBranding.leftLogo.src}
                      width={content.coBranding.leftLogo.width}
                    />
                    <Image
                      alt={content.coBranding.separator.alt}
                      className="mx-5 h-[29px] w-auto max-[768px]:mx-[15px] max-[768px]:h-5"
                      height={content.coBranding.separator.height}
                      src={content.coBranding.separator.src}
                      width={content.coBranding.separator.width}
                    />
                    <Image
                      alt={content.coBranding.rightLogo.alt}
                      className="h-[39px] w-auto max-[992px]:max-w-[130px] max-[768px]:h-[30px] max-[768px]:max-w-[104px]"
                      height={content.coBranding.rightLogo.height}
                      src={content.coBranding.rightLogo.src}
                      width={content.coBranding.rightLogo.width}
                    />
                  </div>
                )}
                <h1
                  className={cn(
                    "mb-2.5 block font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px] max-[379px]:text-[28px] max-[379px]:leading-[38px]",
                    headingClass,
                  )}
                >
                  {content.titleAccent && titleAccentPosition === "start" ? (
                    <>
                      <span className={cn("font-normal not-italic text-[#ad5151]", titleAccentClassName)}>
                        {content.titleAccent}
                      </span>{" "}
                    </>
                  ) : null}
                  {formatBrText(
                    content.titleAccent && typeof content.title === "string"
                      ? content.title.replace(content.titleAccent, "").trim()
                      : content.title,
                    "max-[1200px]:hidden",
                  )}
                  {content.titleAccent && titleAccentPosition !== "start" ? (
                    <>
                      {" "}
                      <span className={cn("font-normal not-italic text-[#ad5151]", titleAccentClassName)}>
                        {content.titleAccent}
                      </span>
                    </>
                  ) : null}
                </h1>
                {content.subheading ? (
                  <span className="h4 mb-2.5 block font-montserrat text-[16px] font-semibold leading-[28px] text-[#535353] max-[1200px]:text-[14px] max-[1200px]:leading-[24px] max-[768px]:text-[16px] max-[768px]:leading-[27px]">
                    {content.subheading}
                  </span>
                ) : null}
                {content.paragraphs ? (
                  content.paragraphs.map((paragraph, idx) => (
                    <p
                      className={cn(
                        "mt-4 mb-4 font-sans text-base font-normal leading-[30.4px] text-[#535353] first:mt-6 last:mb-6",
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
                        "mt-6 mb-6 font-sans text-base font-normal leading-[30.4px] text-[#535353] max-[992px]:my-4",
                        bodyClass,
                      )}
                    >
                      {formatBrText(content.description)}
                    </p>
                    {content.secondaryDescription && (
                      <p
                        className={cn(
                          "mt-4 mb-6 font-sans text-base font-normal leading-[30.4px] text-[#535353]",
                          bodyClassName,
                        )}
                      >
                        {formatBrText(content.secondaryDescription)}
                      </p>
                    )}
                  </>
                ) : null}
                {content.secondaryCta ? (
                  <div className="btn-group pt-2.5 flex flex-wrap items-center justify-center gap-[15px] max-[576px]:flex-col">
                    {content.ctaLabel && (
                      <ButtonLink
                        
                        aria-label={content.ctaLabel}
                        href={ctaHref}
                        variant="primary"
                      >
                        {content.ctaLabel}
                      </ButtonLink>
                    )}
                    <ButtonLink
                      
                      aria-label={content.secondaryCta.ariaLabel ?? `Dynamic Dreamz - ${content.secondaryCta.label}`}
                      href={content.secondaryCta.href}
                      variant="outline"
                    >
                      {content.secondaryCta.label}
                    </ButtonLink>
                  </div>
                ) : content.ctaLabel ? (
                  <div className="btn-group pt-2.5 flex justify-center">
                    <ButtonLink
                      
                      aria-label={content.ctaLabel}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </div>
            {shouldShowReviews ? (
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

  const isHeroNew = hasVideo || isShopifyPlus;

  const defaultLeftCol = isHeroNew
    ? "left-col flex w-[51%] max-[1400px]:w-[50%] max-[1200px]:w-full max-[1200px]:items-center max-[1200px]:text-center max-[1200px]:pb-[30px] max-[992px]:py-10 max-[768px]:py-8 py-[60px] flex-col items-start justify-center"
    : content.image
    ? "left-col w-[58%] max-[1200px]:w-full max-[1200px]:text-center"
    : "left-col w-[55.7%] max-[1200px]:w-full max-[1200px]:text-center";

  const defaultRightCol = isHeroNew
    ? "right-col w-[43.182%] max-[1400px]:w-[40%] max-[1200px]:w-[60%] max-[1200px]:mx-auto max-[1200px]:mb-10 max-[992px]:hidden flex"
    : content.image
    ? "right-col w-[40%] max-[1200px]:mx-auto max-[1200px]:mt-[50px] max-[1200px]:w-1/2 max-[992px]:w-full"
    : "right-col w-[43.182%] max-[1200px]:mx-auto max-[1200px]:mt-[50px] max-[1200px]:w-1/2 max-[992px]:w-full";

  const splitSectionClass =
    className ??
    (isHeroNew
      ? "hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[992px]:pt-16"
      : "inner-hero-sec relative overflow-hidden bg-white pt-[158px] pb-[55px] max-[992px]:pt-[100px]");

  const splitBodyClass =
    bodyClassName ??
    (isHeroNew
      ? "!font-medium !text-[16px] !leading-[28px] max-[1200px]:!text-[14px] max-[1200px]:!leading-[24px] max-[768px]:!text-[14px] max-[768px]:!leading-[27px] !text-[#535353]"
      : undefined);

  return (
    <section className={splitSectionClass}>
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between">
          <div className={cn(defaultLeftCol, leftColClassName)}>
            <div className="hero-content w-full">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <Eyebrow
                  align="responsive-center"
                  as="div"
                  className="mb-[15px] w-fit max-[1200px]:mx-auto"
                  items={content.eyebrows}
                  linePosition="overlay"
                />
              )}
              <h1
                className={cn(
                  "mb-2.5 block font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]",
                  headingClassName,
                )}
              >
                {content.titleAccent && titleAccentPosition === "start" ? (
                  <>
                    <span className={cn("font-normal not-italic text-[#ad5151]", titleAccentClassName)}>
                      {content.titleAccent}
                    </span>{" "}
                  </>
                ) : null}
                {formatBrText(
                  content.titleAccent && typeof content.title === "string"
                    ? content.title.replace(content.titleAccent, "").trim()
                    : content.title,
                  "max-[1200px]:hidden",
                )}
                {content.titleAccent && titleAccentPosition !== "start" ? (
                  <>
                    {" "}
                    <span className={cn("font-normal not-italic text-[#ad5151]", titleAccentClassName)}>
                      {content.titleAccent}
                    </span>
                  </>
                ) : null}
              </h1>
              {content.subheading ? (
                <span className="h4 mb-2.5 block font-montserrat text-[16px] font-semibold leading-[28px] text-[#535353] max-[1200px]:text-[14px] max-[1200px]:leading-[24px] max-[768px]:text-[16px] max-[768px]:leading-[27px]">
                  {content.subheading}
                </span>
              ) : null}
              {content.paragraphs ? (
                content.paragraphs.map((paragraph, idx) => (
                  <p
                    className={cn(
                      "mt-0 mb-2.5 font-sans text-[16px] font-medium leading-[28px] text-[#535353] max-[1200px]:text-[14px] max-[1200px]:leading-[24px]",
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
                      "mt-0 mb-[15px] font-sans text-[16px] font-medium leading-[28px] text-[#535353] max-[1200px]:text-[14px] max-[1200px]:leading-[24px]",
                      splitBodyClass,
                    )}
                  >
                    {formatBrText(content.description)}
                  </p>
                  {content.secondaryDescription && (
                    <p
                      className={cn(
                        "mt-0 mb-2.5 font-sans text-[16px] font-medium leading-[28px] text-[#535353] max-[1200px]:text-[14px] max-[1200px]:leading-[24px] max-[768px]:leading-[27px]",
                        splitBodyClass,
                      )}
                    >
                      {formatBrText(content.secondaryDescription)}
                    </p>
                  )}
                </>
              ) : null}
              {content.secondaryCta ? (
                <div className="services-hero-btn mt-3 flex flex-wrap items-center gap-5 max-[1200px]:justify-center max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-2.5 max-[576px]:w-full [&_a]:max-[576px]:w-full [&_button]:max-[576px]:w-full">
                  {content.ctaLabel && (
                    <ButtonLink
                      
                      aria-label={content.ctaLabel}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  )}
                  <ButtonLink
                    
                    aria-label={content.secondaryCta.ariaLabel ?? `Dynamic Dreamz - ${content.secondaryCta.label}`}
                    href={content.secondaryCta.href}
                    variant="outline"
                  >
                    {content.secondaryCta.label}
                  </ButtonLink>
                </div>
              ) : content.ctaLabel ? (
                <div className="btn-group pt-2.5 max-[1200px]:text-center">
                  <ButtonLink
                    className="max-[992px]:!px-5 max-[992px]:!py-3 max-[576px]:!w-full"
                    aria-label={content.ctaLabel}
                    href={ctaHref}
                    variant="primary"
                  >
                    {content.ctaLabel}
                  </ButtonLink>
                </div>
              ) : null}

              {content.badges && content.badges.length > 0 && (
                <div
                  className={cn(
                    "global_brands_grid_wrap mt-[30px] -mx-[15px] flex items-center flex-wrap max-[1200px]:justify-center max-[992px]:mx-auto",
                    content.badges.length === 4
                      ? "max-[768px]:relative max-[768px]:overflow-hidden max-[768px]:before:absolute max-[768px]:before:top-0 max-[768px]:before:left-1/2 max-[768px]:before:block max-[768px]:before:h-full max-[768px]:before:w-px max-[768px]:before:-translate-x-1/2 max-[768px]:before:bg-[#d9d9d9] max-[768px]:before:content-[''] max-[768px]:after:absolute max-[768px]:after:top-1/2 max-[768px]:after:left-5 max-[768px]:after:block max-[768px]:after:h-px max-[768px]:after:w-[calc(100%-40px)] max-[768px]:after:bg-[#d9d9d9] max-[768px]:after:content-['']"
                      : "",
                  )}
                  aria-label="Partnerships and independent review profiles"
                >
                  {content.badges.map((badge, idx) => (
                    <div
                      className={cn(
                        "global_brands_item relative px-[15px] max-[1200px]:px-3 border-r border-[#d9d9d9] last:border-r-0",
                        content.badges && content.badges.length === 4
                          ? "max-[768px]:w-1/2 max-[768px]:p-[15px] max-[768px]:text-center max-[768px]:border-0"
                          : "max-[768px]:w-1/3 max-[768px]:p-[15px] max-[768px]:text-center max-[768px]:border-r max-[768px]:border-[#d9d9d9] max-[768px]:last:border-r-0",
                      )}
                      key={`${badge.href}-${idx}`}
                    >
                      <a
                        className="flex items-center justify-center"
                        href={badge.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <Image
                          className="h-auto max-h-[44px] max-w-[100px] w-auto object-contain mx-auto"
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
          <div className={cn(defaultRightCol, rightColClassName)}>
            {content.videoSrc ? (
              <div className="video-wrapper relative w-full min-h-[386px]">
                {content.videoLogo ? (
                  <div
                    className={cn(
                      "video-logo absolute left-[-90px] top-[70px] z-10 rounded-[16px] bg-white p-[15px]",
                      videoLogoClassName,
                    )}
                  >
                    <Image
                      alt={content.videoLogo.alt}
                      className="block h-[30px] w-[143px]"
                      height={content.videoLogo.height ?? 30}
                      src={content.videoLogo.src}
                      width={content.videoLogo.width ?? 143}
                      priority
                    />
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[83px] top-full z-[1] block h-[53px] w-[38px]"
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
                  </div>
                ) : null}
                <video
                  aria-hidden="true"
                  autoPlay
                  className="w-full rounded-[20px]"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  tabIndex={-1}
                >
                  <source src={content.videoSrc} type="video/mp4" />
                </video>
              </div>
            ) : content.image ? (
              <>
                <div className={cn("service-img flex justify-center", content.imageContainerClassName)}>
                  <Image
                    alt={content.image.alt}
                    className={cn("h-auto", imageClassName)}
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
