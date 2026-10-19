"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import {
  serviceHeroReviewLogos,
  type ServiceHeroReviewPlatform,
} from "@/content/service-hero-reviews";
import { aboutHero, aboutSectionCopy } from "@/content/about";
import { resourcesHero } from "@/content/resources";
import { shopifyPlusAgencyHero, shopifyPlusAgencyReviews } from "@/content/shopify-plus-agency";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type ServiceHeroReviewItem = {
  platform: string;
  reviewCount: string;
  rating: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  href: string;
  starsAlt?: string;
};

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

const STAR_PATHS = {
  red: [
    "M9.59375 0.535156L12.3411 6.25381L18.6288 7.09949L14.039 11.4795L15.1777 17.7208L9.59375 14.7092L4.00979 17.7208L5.14851 11.4795L0.558713 7.09949L6.84644 6.25381L9.59375 0.535156Z",
    "M32.75 0.535156L35.3256 6.25381L41.2203 7.09949L36.9174 11.4795L37.985 17.7208L32.75 14.7092L27.515 17.7208L28.5826 11.4795L24.2797 7.09949L30.1744 6.25381L32.75 0.535156Z",
    "M55.9062 0.535156L58.6536 6.25381L64.9413 7.09949L60.3515 11.4795L61.4902 17.7208L55.9062 14.7092L50.3223 17.7208L51.461 11.4795L46.8712 7.09949L53.1589 6.25381L55.9062 0.535156Z",
    "M79.6562 0.535156L82.4036 6.25381L88.6913 7.09949L84.1015 11.4795L85.2402 17.7208L79.6562 14.7092L74.0723 17.7208L75.211 11.4795L70.6212 7.09949L76.9089 6.25381L79.6562 0.535156Z",
    "M103.406 0.535156L106.154 6.25381L112.441 7.09949L107.851 11.4795L108.99 17.7208L103.406 14.7092L97.8223 17.7208L98.961 11.4795L94.3712 7.09949L100.659 6.25381L103.406 0.535156Z",
  ],
  blue: [
    "M11.5986 6.0752L11.791 6.47656L12.2314 6.53516L16.8184 7.15137L13.4697 10.3486L13.1484 10.6553L13.2285 11.0918L14.0586 15.6445L9.98535 13.4482L9.59375 13.2373L9.20215 13.4482L5.12793 15.6445L5.95898 11.0918L6.03906 10.6553L5.71777 10.3486L2.36816 7.15137L6.95605 6.53516L7.39648 6.47656L7.58887 6.0752L9.59375 1.90234L11.5986 6.0752Z",
    "M34.5742 6.05664L34.7598 6.46973L35.209 6.53418L39.4912 7.14844L36.3291 10.3672L36.0342 10.668L36.1055 11.083L36.877 15.5977L33.1611 13.46L32.75 13.2236L32.3389 13.46L28.6221 15.5977L29.3945 11.083L29.4658 10.668L29.1709 10.3672L26.0078 7.14844L30.291 6.53418L30.7402 6.46973L30.9258 6.05664L32.75 2.00586L34.5742 6.05664Z",
    "M57.9111 6.0752L58.1035 6.47656L58.5439 6.53516L63.1309 7.15137L59.7822 10.3486L59.4609 10.6553L59.541 11.0918L60.3711 15.6445L56.2979 13.4482L55.9062 13.2373L55.5146 13.4482L51.4404 15.6445L52.2715 11.0918L52.3516 10.6553L52.0303 10.3486L48.6807 7.15137L53.2686 6.53516L53.709 6.47656L53.9014 6.0752L55.9062 1.90234L57.9111 6.0752Z",
    "M81.6611 6.0752L81.8535 6.47656L82.2939 6.53516L86.8809 7.15137L83.5322 10.3486L83.2109 10.6553L83.291 11.0918L84.1211 15.6445L80.0479 13.4482L79.6562 13.2373L79.2646 13.4482L75.1904 15.6445L76.0215 11.0918L76.1016 10.6553L75.7803 10.3486L72.4307 7.15137L77.0186 6.53516L77.459 6.47656L77.6514 6.0752L79.6562 1.90234L81.6611 6.0752Z",
    "M105.411 6.0752L105.604 6.47656L106.044 6.53516L110.631 7.15137L107.282 10.3486L106.961 10.6553L107.041 11.0918L107.871 15.6445L103.798 13.4482L103.406 13.2373L103.015 13.4482L98.9404 15.6445L99.7715 11.0918L99.8516 10.6553L99.5303 10.3486L96.1807 7.15137L100.769 6.53516L101.209 6.47656L101.401 6.0752L103.406 1.90234L105.411 6.0752Z",
  ],
} as const;

function ReviewStars({
  review,
  starsVisible,
}: {
  review: (typeof shopifyPlusAgencyReviews)[number];
  starsVisible: number;
}) {
  const paths = STAR_PATHS[review.starPaths];
  const viewBoxHeight = review.starPaths === "blue" ? 19 : 20;

  return (
    <svg
      aria-hidden="true"
      className="block"
      height={20}
      viewBox={`0 0 113 ${viewBoxHeight}`}
      width={113}
    >
      {paths.map((d, index) => (
        <path
          className="[transition:opacity_.3s_ease]"
          d={d}
          fill={review.starFill}
          key={d}
          stroke={review.starPaths === "blue" ? review.starFill : undefined}
          strokeWidth={review.starPaths === "blue" ? 1.64814 : undefined}
          style={{ opacity: index < starsVisible ? 1 : 0 }}
        />
      ))}
    </svg>
  );
}

function ReviewCircle({
  review,
  active,
  zoomed,
  wrapperVisible,
  starsVisible,
  ratingsVisible,
  pillVisible,
}: {
  review: (typeof shopifyPlusAgencyReviews)[number];
  active: boolean;
  zoomed: boolean;
  wrapperVisible: boolean;
  starsVisible: number;
  ratingsVisible: boolean;
  pillVisible: boolean;
}) {
  const visible = active && zoomed;
  const contentVisible = active && wrapperVisible;
  const ratingIsVisible = active && ratingsVisible;
  const pillIsVisible = active && pillVisible;

  return (
    <div
      className={cn(
        "review_animation absolute inset-x-0 top-0 mx-auto flex size-[420px] items-center justify-center rounded-full text-center [transition:transform_.6s_ease,opacity_.6s_ease] max-[767px]:size-[275px]",
        active && "relative z-10",
        visible
          ? "[transform:scale(1)] opacity-100"
          : "[transform:scale(0)] opacity-0",
      )}
      style={{ backgroundColor: review.backgroundColor }}
      aria-hidden={!active}
    >
      <div className="review_animation_box">
        <div
          className={cn(
            "review_animation_wrapper [transition:opacity_.6s_ease,transform_.6s_ease]",
            contentVisible
              ? "[transform:translateY(0)] opacity-100"
              : "[transform:translateY(30px)] opacity-0",
          )}
        >
          <div className="review_animation_text mb-6 text-center text-base leading-normal font-bold text-black max-[767px]:mb-[10px] max-[767px]:text-sm">
            {sharedUiCopy.reviewedOn}
          </div>
          <div className="review_animation_box_logo mb-5 max-[767px]:mb-0">
            <Image
              className="mx-auto h-auto w-auto max-[767px]:max-h-10 max-[767px]:max-w-[130px]"
              src={review.wordmark}
              alt={review.wordmarkAlt}
              width={review.wordmarkWidth}
              height={review.wordmarkHeight}
              priority={active}
              style={{ width: `${review.wordmarkWidth}px` }}
            />
          </div>
        </div>
        <div className="review_animation_ratings mb-[18px] flex items-center max-[767px]:mb-[10px]">
          <ReviewStars
            review={review}
            starsVisible={active ? starsVisible : 0}
          />
          <div
            className={cn(
              "review_ratings ml-[10px] text-[20px] font-semibold text-black [transition:opacity_.6s_ease] max-[767px]:text-[15px]",
              ratingIsVisible ? "opacity-100" : "opacity-0",
            )}
          >
            {review.rating}
          </div>
        </div>
        <div
          className={cn(
            "review_total_ratings [transition:transform_1s_cubic-bezier(.95,-.42,.15,1.26),opacity_.6s_ease] max-[767px]:inline-flex max-[767px]:items-center",
            pillIsVisible
              ? "[transform:translateY(0)] opacity-100"
              : "[transform:translateY(150px)] opacity-0",
          )}
        >
          <a
            className="inline-block rounded-[60.664px] px-[18px] py-2 text-[19.413px] leading-normal font-bold text-white max-[767px]:text-sm"
            href={review.pillHref}
            rel="nofollow"
            style={{
              backgroundColor: review.pillColor,
              border: `${review.pillBorderWidth}px solid ${review.pillColor}`,
            }}
            target="_blank"
          >
            {review.pillLabel}
            <Image
              className="ml-[10px] inline h-auto w-auto max-[767px]:ml-[5px] max-[767px]:w-[10px]"
              src="/assets/icons/arrow-up-right.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ReviewAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [wrapperVisible, setWrapperVisible] = useState(false);
  const [starsVisible, setStarsVisible] = useState(0);
  const [ratingsVisible, setRatingsVisible] = useState(false);
  const [pillVisible, setPillVisible] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const timeouts = timeoutsRef.current;
    timeouts.push(setTimeout(() => setZoomed(true), 100));
    timeouts.push(setTimeout(() => setWrapperVisible(true), 400));
    STAR_PATHS[shopifyPlusAgencyReviews[activeIndex].starPaths].forEach((_, index) => {
      timeouts.push(setTimeout(() => setStarsVisible(index + 1), 400 + index * 200));
    });
    timeouts.push(setTimeout(() => setRatingsVisible(true), 1700));
    timeouts.push(setTimeout(() => setPillVisible(true), 2000));

    return () => {
      timeouts.forEach(clearTimeout);
      timeouts.length = 0;
    };
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoomed(false);
      setWrapperVisible(false);
      setStarsVisible(0);
      setRatingsVisible(false);
      setPillVisible(false);
      setActiveIndex((index) => (index + 1) % shopifyPlusAgencyReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review_animation_main relative overflow-hidden">
      {shopifyPlusAgencyReviews.map((review, index) => (
        <ReviewCircle
          active={index === activeIndex}
          key={review.name}
          pillVisible={pillVisible}
          ratingsVisible={ratingsVisible}
          review={review}
          starsVisible={starsVisible}
          wrapperVisible={wrapperVisible}
          zoomed={zoomed}
        />
      ))}
    </div>
  );
}

function ServiceHeroReviews({
  items,
  className,
}: {
  items: readonly ServiceHeroReviewItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "review-wrap mt-[57px] flex justify-center gap-[15px] max-[992px]:mt-[50px] max-[992px]:flex-col max-[992px]:items-center max-[992px]:gap-4",
        className,
      )}
    >
      {items.map((review) => {
        const sharedLogo =
          review.platform in serviceHeroReviewLogos
            ? serviceHeroReviewLogos[review.platform as ServiceHeroReviewPlatform]
            : null;

        return (
          <a
            className="review-box relative z-0 w-[calc(33.33%-10px)] rounded-lg p-[17px_12px_10px] text-center shadow-sm transition-transform hover:-translate-y-0.5 before:absolute max-[992px]:before:-inset-[1px] before:-inset-[2px] before:-z-20 before:rounded-[10px] before:bg-linear-to-r before:from-[#15c064] before:to-[#00d1ff] after:absolute after:inset-0 after:-z-10 after:rounded-[10px] after:bg-white max-[992px]:flex max-[992px]:w-full max-[992px]:max-w-[400px] max-[992px]:flex-row-reverse max-[992px]:items-center max-[992px]:justify-between max-[992px]:p-[18px_24px]"
            href={review.href}
            key={review.platform}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <div className="total-review relative -mt-[34px] mb-2.5 rounded-[30px] border-[1.5px] border-[#efefef] bg-white max-[992px]:m-0 max-[992px]:inline-block">
              <span className="block px-2.5 py-1 text-center text-[10px] font-semibold leading-normal text-black">
                {review.reviewCount}
              </span>
            </div>
            <div className="rating-wrap flex flex-col items-center justify-center max-[992px]:items-start">
              <Image
                alt={review.logoAlt}
                className="object-contain"
                height={sharedLogo?.height ?? review.logoHeight}
                src={sharedLogo?.src ?? review.logoSrc}
                width={sharedLogo?.width ?? review.logoWidth}
              />
              <span className="mt-1 block text-xs font-semibold text-ink">
                {review.rating}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

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
  deliveryTitle,
  statistics,
  badges,
  scrollingImages,
  showcaseImages,
  proofLogos,
  fullBleedShowcaseAtTablet,
  layout,
  typography,
  primaryCta,
  secondaryCta,
  titleAccentPosition = "end",
  titleAccentClassName,
  titleAccentTag,
  breakClassName,
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
    ...(deliveryTitle !== undefined ? { deliveryTitle } : {}),
    ...(statistics !== undefined ? { statistics } : {}),
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

  const isRisks = Boolean(
    typeof content.title === "string" && content.title.toLowerCase().includes("risks"),
  );
  const isCoBranding = Boolean(content.coBranding);
  const isShopifyPlus = Boolean(
    content.videoLogo ||
      (typeof content.title === "string" && content.title.toLowerCase().includes("shopify plus")),
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
                {normalizedEyebrows.length > 0 && (
                  <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[767px]:pl-6 max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                    {normalizedEyebrows.map((item: any, idx: number) => (
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
                      className="h-[39px] w-auto max-[992px]:max-w-[130px] max-[767px]:h-[30px] max-[767px]:max-w-[104px]"
                      height={content.coBranding.rightLogo.height}
                      src={content.coBranding.rightLogo.src}
                      width={content.coBranding.rightLogo.width}
                    />
                  </div>
                )}
                <h1
                  className={cn(
                    "inline-block font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[379px]:text-[28px] max-[379px]:leading-[38px]",
                    headingClass,
                  )}
                >
                  {formatBrText(content.title, "max-[1199px]:hidden")}
                </h1>
                {subtitleText ? (
                  <p className="mt-2.5 mb-0 font-montserrat text-base font-semibold leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                    {subtitleText}
                  </p>
                ) : null}
                {content.paragraphs ? (
                  content.paragraphs.map((paragraph: any, idx: number) => (
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
                {secondaryCtaObj ? (
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-[15px] max-[575px]:flex-col">
                    {ctaLabelText && (
                      <Button
                        className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                        aria-label={`Dynamic Dreamz - ${ctaLabelText}`}
                        href={ctaHref}
                        variant="primary"
                      >
                        {ctaLabelText}
                      </Button>
                    )}
                    <Button
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={
                        secondaryCtaObj.ariaLabel ??
                        `Dynamic Dreamz - ${secondaryCtaObj.label}`
                      }
                      href={secondaryCtaObj.href}
                      variant="outline"
                    >
                      {secondaryCtaObj.label}
                    </Button>
                  </div>
                ) : ctaLabelText ? (
                  <div className="mt-2">
                    <Button
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={`Dynamic Dreamz - ${ctaLabelText}`}
                      href={ctaHref}
                      variant="primary"
                    >
                      {ctaLabelText}
                    </Button>
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
              {normalizedEyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[767px]:pl-6 max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                  {normalizedEyebrows.map((item: any, idx: number) => (
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
                  "mb-2.5 inline-block max-w-[770px] font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]",
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
              {subtitleText ? (
                <p className="mt-2.5 mb-0 font-montserrat text-base font-semibold leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                  {subtitleText}
                </p>
              ) : null}
              {content.paragraphs ? (
                content.paragraphs.map((paragraph: any, idx: number) => (
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
              {secondaryCtaObj ? (
                <div className="services-hero-btn mt-2.5 flex flex-wrap items-center gap-5 max-[1199px]:justify-center max-[575px]:flex-col max-[575px]:items-center max-[575px]:gap-[13px]">
                  {ctaLabelText && (
                    <Button
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={`Dynamic Dreamz - ${ctaLabelText}`}
                      href={ctaHref}
                      variant="primary"
                    >
                      {ctaLabelText}
                    </Button>
                  )}
                  <Button
                    className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                    aria-label={
                      secondaryCtaObj.ariaLabel ??
                      `Dynamic Dreamz - ${secondaryCtaObj.label}`
                    }
                    href={secondaryCtaObj.href}
                    variant="outline"
                  >
                    {secondaryCtaObj.label}
                  </Button>
                </div>
              ) : ctaLabelText ? (
                <div className="services-hero-btn mt-2.5 max-[1199px]:text-center">
                  <Button
                    aria-label={`Dynamic Dreamz - ${ctaLabelText}`}
                    href={ctaHref}
                    variant="primary"
                  >
                    {ctaLabelText}
                  </Button>
                </div>
              ) : null}

              {normalizedBadges.length > 0 && (
                <div
                  className="global_brands_grid_wrap relative mt-10 flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
                  aria-label="Partnerships and independent review profiles"
                >
                  {normalizedBadges.map((badge: any, idx: number) => (
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
          <div
            className={cn(
              rightColClassName ?? defaultRightCol,
              videoSource && "max-[767px]:hidden",
            )}
          >
            {videoSource ? (
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
                    <source src={videoSource} type="video/mp4" />
                  </video>
                </div>
                {content.videoLogo ? (
                  <span
                    className={cn(
                      "video-logo absolute top-[70px] left-[-90px] z-10 flex h-[61px] w-[174px] items-center justify-center rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)] max-[1199px]:left-5",
                      videoLogoClassName,
                    )}
                  >
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
                <div
                  className={cn(
                    "service-img flex justify-center",
                    content.imageContainerClassName,
                  )}
                >
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
      <Container className="min-[1440px]:!max-w-[1180px]">
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
