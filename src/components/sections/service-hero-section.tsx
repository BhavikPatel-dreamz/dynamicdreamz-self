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
        ? "inner-hero-sec risk-shopify-sec relative overflow-hidden bg-white pt-[190px] pb-[130px] max-[1199px]:pt-[140px] max-[1199px]:pb-[60px] max-[991px]:pt-[100px] max-[767px]:pt-[120px]"
        : isCoBranding
        ? "inner-hero-sec full-width-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[991px]:pt-[100px]"
        : "inner-hero-sec full-width-sec shopify-theme-customization-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[991px]:pt-[100px]");
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
                  <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:justify-center max-[767px]:flex max-[767px]:w-full max-[767px]:justify-start max-[767px]:pl-6 max-[767px]:text-left max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
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
                      className="h-[39px] w-auto max-[991px]:max-w-[130px] max-[767px]:h-[30px] max-[767px]:max-w-[104px]"
                      height={content.coBranding.rightLogo.height}
                      src={content.coBranding.rightLogo.src}
                      width={content.coBranding.rightLogo.width}
                    />
                  </div>
                )}
                <h1
                  className={cn(
                    "mb-2.5 inline-block font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[379px]:text-[28px] max-[379px]:leading-[38px]",
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
                    "max-[1199px]:hidden",
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
                  <span className="h4 mb-2.5 block font-montserrat text-[16px] font-semibold leading-[28px] text-[#535353] max-[1199px]:text-[14px] max-[1199px]:leading-[24px] max-[767px]:text-[16px] max-[767px]:leading-[27px]">
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
                        "mt-6 mb-6 font-sans text-base font-normal leading-[30.4px] text-[#535353] max-[991px]:my-4",
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
                  <div className="btn-group pt-2.5 flex flex-wrap items-center justify-center gap-[15px] max-[575px]:flex-col">
                    {content.ctaLabel && (
                      <ButtonLink
                        className="max-[991px]:!px-5 max-[991px]:!py-3 max-[575px]:!w-full"
                        aria-label={content.ctaLabel}
                        href={ctaHref}
                        variant="primary"
                      >
                        {content.ctaLabel}
                      </ButtonLink>
                    )}
                    <ButtonLink
                      className="max-[991px]:!px-5 max-[991px]:!py-3 max-[575px]:!w-full"
                      aria-label={content.secondaryCta.ariaLabel ?? content.secondaryCta.label}
                      href={content.secondaryCta.href}
                      variant="outline"
                    >
                      {content.secondaryCta.label}
                    </ButtonLink>
                  </div>
                ) : content.ctaLabel ? (
                  <div className="btn-group pt-2.5 flex justify-center">
                    <ButtonLink
                      className="max-[991px]:!px-5 max-[991px]:!py-3 max-[575px]:!w-full"
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
    ? "left-col flex w-[51%] max-[1399px]:w-[50%] max-[1199px]:w-full max-[1199px]:items-center max-[1199px]:text-center max-[1199px]:pb-[30px] max-[991px]:py-10 max-[767px]:py-8 py-[60px] flex-col items-start justify-center"
    : content.image
    ? "left-col w-[58%] max-[1199px]:w-full max-[1199px]:text-center"
    : "left-col w-[55.7%] max-[1199px]:w-full max-[1199px]:text-center";

  const defaultRightCol = isHeroNew
    ? "right-col w-[43.182%] max-[1399px]:w-[40%] max-[1199px]:w-[60%] max-[1199px]:mx-auto max-[1199px]:mb-10 max-[991px]:hidden flex"
    : content.image
    ? "right-col w-[40%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[991px]:w-full"
    : "right-col w-[43.182%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[991px]:w-full";

  const splitSectionClass =
    className ??
    (isHeroNew
      ? "hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[991px]:pt-16"
      : "inner-hero-sec relative overflow-hidden bg-white pt-[158px] pb-[55px] max-[991px]:pt-[100px]");

  const splitBodyClass =
    bodyClassName ??
    (isHeroNew
      ? "!font-medium !text-[16px] !leading-[28px] max-[1199px]:!text-[14px] max-[1199px]:!leading-[24px] max-[767px]:!text-[14px] max-[767px]:!leading-[27px] !text-[#535353]"
      : undefined);

  return (
    <section className={splitSectionClass}>
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between">
          <div className={cn(defaultLeftCol, leftColClassName)}>
            <div className="hero-content w-full">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:justify-center max-[767px]:flex max-[767px]:w-full max-[767px]:justify-start max-[767px]:pl-6 max-[767px]:text-left max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
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
              <h1
                className={cn(
                  "mb-2.5 inline-block font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]",
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
                  "max-[1199px]:hidden",
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
                <span className="h4 mb-2.5 block font-montserrat text-[16px] font-semibold leading-[28px] text-[#535353] max-[1199px]:text-[14px] max-[1199px]:leading-[24px] max-[767px]:text-[16px] max-[767px]:leading-[27px]">
                  {content.subheading}
                </span>
              ) : null}
              {content.paragraphs ? (
                content.paragraphs.map((paragraph, idx) => (
                  <p
                    className={cn(
                      "mt-0 mb-2.5 font-sans text-[16px] font-medium leading-[28px] text-[#535353] max-[1199px]:text-[14px] max-[1199px]:leading-[24px] max-[767px]:leading-[27px]",
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
                      "mt-0 mb-2.5 font-sans text-[16px] font-medium leading-[28px] text-[#535353] max-[1199px]:text-[14px] max-[1199px]:leading-[24px] max-[767px]:leading-[27px]",
                      splitBodyClass,
                    )}
                  >
                    {formatBrText(content.description)}
                  </p>
                  {content.secondaryDescription && (
                    <p
                      className={cn(
                        "mt-0 mb-2.5 font-sans text-[16px] font-medium leading-[28px] text-[#535353] max-[1199px]:text-[14px] max-[1199px]:leading-[24px] max-[767px]:leading-[27px]",
                        splitBodyClass,
                      )}
                    >
                      {formatBrText(content.secondaryDescription)}
                    </p>
                  )}
                </>
              ) : null}
              {content.secondaryCta ? (
                <div className="btn-group pt-2.5 flex flex-wrap items-center max-[1199px]:justify-center max-[767px]:flex-col max-[767px]:items-center">
                  {content.ctaLabel && (
                    <ButtonLink
                      className="max-[991px]:!px-5 max-[991px]:!py-3 max-[575px]:!w-full"
                      aria-label={content.ctaLabel}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  )}
                  <ButtonLink
                    className="ml-2.5 max-[991px]:!px-5 max-[991px]:!py-3 max-[767px]:!ml-0 max-[767px]:!mt-2.5 max-[575px]:!w-full"
                    aria-label={content.secondaryCta.ariaLabel ?? content.secondaryCta.label}
                    href={content.secondaryCta.href}
                    variant="outline"
                  >
                    {content.secondaryCta.label}
                  </ButtonLink>
                </div>
              ) : content.ctaLabel ? (
                <div className="btn-group pt-2.5 max-[1199px]:text-center">
                  <ButtonLink
                    className="max-[991px]:!px-5 max-[991px]:!py-3 max-[575px]:!w-full"
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
                    "global_brands_grid_wrap mt-[30px] -mx-[15px] flex items-center flex-wrap max-[1199px]:justify-center max-[991px]:mx-auto",
                    content.badges.length === 4
                      ? "max-[767px]:relative max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
                      : "",
                  )}
                  aria-label="Partnerships and independent review profiles"
                >
                  {content.badges.map((badge, idx) => (
                    <div
                      className={cn(
                        "global_brands_item relative px-[15px] max-[1199px]:px-3 border-r border-[#d9d9d9] last:border-r-0",
                        content.badges && content.badges.length === 4
                          ? "max-[767px]:w-1/2 max-[767px]:p-[15px] max-[767px]:text-center max-[767px]:border-0"
                          : "max-[767px]:w-1/3 max-[767px]:p-[15px] max-[767px]:text-center max-[767px]:border-r max-[767px]:border-[#d9d9d9] max-[767px]:last:border-r-0",
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
