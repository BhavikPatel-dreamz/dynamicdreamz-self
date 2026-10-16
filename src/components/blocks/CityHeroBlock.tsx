"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type CityPageHeroSlide = {
  src?: string;
  image?: string;
  alt?: string;
  imageAlt?: string;
  title?: string;
  width?: number;
  height?: number;
};

export type CityPageHeroTabletSlider = {
  slides?: readonly CityPageHeroSlide[];
  items?: readonly CityPageHeroSlide[];
  topBadge?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bottomBadge?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bgShapeSrc?: string;
};

export type CityPageHeroBadge = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export type CityPageHeroContent = {
  eyebrows?: readonly string[];
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  badges?: readonly CityPageHeroBadge[];
  tabletSlider?: CityPageHeroTabletSlider;
};

export type CityHeroBlockProps = {
  content?: CityPageHeroContent | any;
  [key: string]: any;
};

export type CityPageHeroSectionProps = CityHeroBlockProps;

function CityHeroTabletSlider({ slider }: { slider: CityPageHeroTabletSlider }) {
  const { topBadge, bottomBadge, bgShapeSrc } = slider;
  const rawSlides = slider.slides ?? slider.items ?? [];
  const slides = rawSlides.map((s) => ({
    src: s.src ?? s.image ?? "",
    alt: s.alt ?? s.imageAlt ?? "",
    width: s.width ?? 300,
    height: s.height ?? 600,
  }));
  const extendedSlides = slides.length > 0 ? [...slides, slides[0]] : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || slides.length <= 1) return;

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const interval = setInterval(() => {
      if (isVisible) {
        setIsTransitioning(true);
        setActiveIndex((prev) => {
          const next = prev + 1;
          if (next === slides.length) {
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = setTimeout(() => {
              setIsTransitioning(false);
              setActiveIndex(0);
            }, 600);
          }
          return next;
        });
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      observer.disconnect();
    };
  }, [slides.length]);

  return (
    <div
      ref={containerRef}
      className="tablet-slider-wrap relative mb-[-40px] flex w-full items-center justify-center px-10 pt-[60px] pb-0 max-[1199px]:mb-[-70px] max-[1199px]:pt-[30px]"
      aria-label="Interactive showcase preview"
    >
      <div className="tablet-frame relative h-[593px] w-[420px] shrink-0 rounded-[22px] bg-[#171326] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.18)] max-[1199px]:h-[500px] max-[1199px]:w-[345px]">
        {bgShapeSrc && (
          <div
            className="pointer-events-none absolute -top-5 -left-[15px] z-0 h-[calc(100%+50px)] w-[calc(100%+30px)] bg-top bg-contain bg-no-repeat max-[1199px]:-top-[11px] max-[1199px]:h-[calc(100%+30px)]"
            style={{ backgroundImage: `url('${bgShapeSrc}')` }}
            aria-hidden="true"
          />
        )}

        <div className="tablet-slides relative z-1 h-full w-full overflow-hidden rounded-[14px] bg-white">
          <div
            className={`tablet-slick flex h-full will-change-transform ${
              isTransitioning
                ? "transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0.05,0.36,1)]"
                : ""
            }`}
            style={{
              width: `${extendedSlides.length * 100}%`,
              transform: `translateX(-${(activeIndex * 100) / extendedSlides.length}%)`,
            }}
          >
            {extendedSlides.map((slide, idx) => (
              <div
                key={`${slide.src}-${idx}`}
                className="tablet-slide-item h-full flex-1 shrink-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width ?? 1600}
                  height={slide.height ?? 2380}
                  className="h-full w-full object-cover object-top"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {topBadge?.src ? (
        <div className="tablet-badge tablet-badge-top absolute top-[100px] -right-[15px] z-[9999] max-w-[173px] max-[1199px]:top-[60px] max-[1199px]:max-w-[150px]">
          <Image
            src={topBadge.src}
            alt={topBadge.alt}
            width={topBadge.width}
            height={topBadge.height}
            className="block h-auto max-w-full"
          />
        </div>
      ) : null}

      {bottomBadge?.src ? (
        <div className="tablet-badge tablet-badge-bottom absolute bottom-[80px] -left-[5px] z-[9999] max-w-[130px] max-[1199px]:bottom-[60px] max-[1199px]:-left-[15px] max-[1199px]:max-w-[110px]">
          <Image
            src={bottomBadge.src}
            alt={bottomBadge.alt}
            width={bottomBadge.width}
            height={bottomBadge.height}
            className="block h-auto max-w-full"
          />
        </div>
      ) : null}
    </div>
  );
}

export function CityHeroBlock(props: CityHeroBlockProps = {}) {
  const content = props.content ?? props;
  if (!content || (!content.title && !content.heading)) return null;
  const hasTabletSlider = Boolean(content.tabletSlider);
  const primaryCta =
    content.primaryCta ??
    (content.ctaLabel && content.ctaHref
      ? { label: content.ctaLabel, href: content.ctaHref }
      : undefined);
  const isHideLogo = Boolean(content.badges && content.badges.length === 3);

  return (
    <section className="hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[991px]:pt-16 max-[991px]:pb-0">
      <Container>
        <div
          className={cn(
            "wrapper flex",
            hasTabletSlider
              ? "flex-wrap items-end justify-between max-[991px]:flex-col max-[991px]:items-center"
              : "max-[991px]:flex-col",
          )}
        >
          <div
            className={cn(
              "left-col z-1 flex flex-col justify-center",
              hasTabletSlider
                ? "w-[51%] py-[60px] max-[1199px]:w-1/2 max-[991px]:w-full max-[991px]:py-8 max-[991px]:text-center"
                : "w-full max-w-[760px] max-[1199px]:max-w-none max-[1199px]:text-center",
            )}
          >
            <div className="hero-content">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:justify-center max-[767px]:pl-6 max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                  {content.eyebrows.map((item: any, idx: number) => (
                    <span
                      key={item}
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
              <h1 className="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-[#282828] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.title}
                {content.titleHighlight ? (
                  <> <i className="not-italic text-brand-red">{content.titleHighlight}</i></>
                ) : null}
              </h1>
              {content.subtitle && (
                <span className="h4 mb-2.5 block font-montserrat text-base font-semibold leading-7 text-[#535353] max-[991px]:text-sm max-[991px]:leading-6 max-[767px]:text-base max-[767px]:leading-[27px]">
                  {content.subtitle}
                </span>
              )}
              <p className="mt-3 font-montserrat text-base font-medium leading-7 text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[24px]">
                {content.description}
              </p>
              {content.secondaryDescription && (
                <p className="mt-3 font-montserrat text-base font-medium leading-7 text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[24px]">
                  {content.secondaryDescription}
                </p>
              )}
              {(primaryCta || content.secondaryCta) && (
                <div className="btn-group mt-6 flex items-center gap-3.5 max-[1199px]:justify-center max-[767px]:flex-col max-[767px]:gap-2.5">
                  {primaryCta && (
                    <Button
                      variant="primary"
                      href={primaryCta.href}
                      className="max-[767px]:w-full"
                    >
                      {primaryCta.label}
                    </Button>
                  )}
                  {content.secondaryCta && (
                    <Button
                      variant="outline"
                      href={content.secondaryCta.href}
                      className="max-[767px]:w-full"
                    >
                      {content.secondaryCta.label}
                    </Button>
                  )}
                </div>
              )}
            </div>

            {content.badges && content.badges.length > 0 && (
              <div
                className={cn(
                  "global_brands_grid_wrap relative mt-[30px] -mx-[15px] flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden",
                  isHideLogo
                    ? "max-[767px]:before:hidden max-[767px]:after:hidden"
                    : "max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']",
                )}
                aria-label="Partnerships and independent review profiles"
              >
                {content.badges.map((badge: any, idx: number) => (
                  <div
                    className={cn(
                      "global_brands_item relative border-r border-[#d9d9d9] px-[15px] first:pl-[15px] last:border-r-0",
                      isHideLogo
                        ? "max-[767px]:w-1/3 max-[767px]:border-r max-[767px]:border-[#d9d9d9] max-[767px]:last:border-r-0 max-[767px]:p-2.5 max-[767px]:text-center"
                        : "max-[767px]:w-1/2 max-[767px]:border-0 max-[767px]:p-3.5 max-[767px]:text-center",
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
                        className="h-auto w-auto max-w-[100px] object-contain"
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

          {content.tabletSlider && (
            <div className="right-col flex w-[43.182%] items-end max-[1199px]:w-[48%] max-[991px]:hidden">
              <CityHeroTabletSlider slider={content.tabletSlider} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export {
  CityHeroBlock as CityPageHeroSection,
  CityHeroBlock as ShopifyHoursHeroSection,
  CityHeroBlock as CaseStudiesHero,
};
