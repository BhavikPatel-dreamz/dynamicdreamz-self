"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type MobileAppHeroBadge = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export type MobileAppHeroSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MobileAppHeroContent = {
  eyebrows?: readonly string[];
  title: string;
  titleAccent?: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  badges?: readonly MobileAppHeroBadge[];
  mobileBadgeLayout?: "divided" | "row";
  slides: readonly MobileAppHeroSlide[];
  frameImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type MobileAppInteractiveShowcaseBlockProps = {
  content: MobileAppHeroContent;
  className?: string;
};

export type ShopifyMobileAppHeroSectionProps = MobileAppInteractiveShowcaseBlockProps;

function PhoneAppSlider({
  slides = [],
  frameImage,
}: {
  slides: readonly MobileAppHeroSlide[];
  frameImage: { src: string; alt: string; width: number; height: number };
}) {
  const minBuffer = 6;
  const slideCount = slides?.length || 0;
  const copies = slideCount > 0 ? Math.ceil(minBuffer / slideCount) : 0;
  const bufferedSlides = copies > 0 ? Array.from({ length: copies }, () => slides).flat() : [];
  const total = bufferedSlides.length;
  const half = Math.floor(total / 2);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (total === 0) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

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
      if (isVisible && !isPaused) {
        setActiveIndex((prev) => (prev + 1) % total);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [total, isPaused]);

  if (total === 0) return null;

  return (
    <div
      ref={containerRef}
      className="app-slider-wrap relative flex w-full items-center justify-center overflow-hidden py-10 min-[1200px]:py-[100px] max-[1199px]:pt-[60px] max-[1199px]:pb-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Shopify mobile application interactive preview slider"
    >
      <div className="app-slider-track relative h-[466px] w-full max-[1199px]:h-[400px]">
        {bufferedSlides.map((slide, i) => {
          const diff = (i - activeIndex + total) % total;
          let positionStyle = "translate-x-[140%] scale-[0.6] opacity-0 z-[1]";

          if (diff === 0) {
            positionStyle = "translate-x-0 scale-100 opacity-100 z-[3]";
          } else if (diff === 1) {
            positionStyle = "translate-x-[95%] scale-[0.68] opacity-100 z-[2]";
          } else if (diff === total - 1) {
            positionStyle = "-translate-x-[95%] scale-[0.68] opacity-100 z-[2]";
          } else if (diff > half) {
            positionStyle = "-translate-x-[140%] scale-[0.6] opacity-0 z-0";
          }

          return (
            <div
              key={`${slide.src}-${i}`}
              className={`app-slide absolute top-1/2 left-1/2 h-[466px] w-[220px] -mt-[233px] -ml-[110px] overflow-hidden rounded-[24px] bg-[#0d0730] transition-all duration-[800ms] ease-[cubic-bezier(0.65,0.05,0.36,1)] will-change-transform max-[1399px]:h-[386px] max-[1399px]:w-[200px] max-[1399px]:-mt-[235px] max-[1399px]:-ml-[100px] max-[1199px]:h-[339px] max-[1199px]:w-[175px] max-[1199px]:-mt-[244px] max-[1199px]:-ml-[96px] ${positionStyle}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                className="h-full w-full object-cover object-top"
                priority={diff === 0}
              />
            </div>
          );
        })}

        <div className="phone-frame pointer-events-none absolute top-1/2 left-1/2 z-[4] h-[574px] w-[280px] -mt-[287px] -ml-[140px] max-[1399px]:h-[475px] max-[1399px]:w-[232px] max-[1399px]:-mt-[280px] max-[1399px]:-ml-[116px] max-[1199px]:h-[418px] max-[1199px]:w-[204px] max-[1199px]:-mt-[284px] max-[1199px]:-ml-[111px]">
          <Image
            src={frameImage.src}
            alt={frameImage.alt}
            width={frameImage.width}
            height={frameImage.height}
            className="size-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export function MobileAppInteractiveShowcaseBlock({
  content,
  className,
}: MobileAppInteractiveShowcaseBlockProps) {
  const mobileBadgeLayout = content.mobileBadgeLayout ?? "divided";
  const badgeRowLayout = mobileBadgeLayout === "row";
  const frameImage = content.frameImage ?? {
    src: "/assets/shopify-mobile-app/phone-frame.png",
    alt: "Phone frame",
    width: 280,
    height: 574,
  };

  return (
    <section
      className={cn(
        "hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] max-[991px]:pt-16",
        className,
      )}
    >
      <Container className="max-w-[1408px] px-[15px]">
        <div className="wrapper flex items-center justify-between max-[1199px]:flex-col">
          <div className="left-col z-1 w-[53%] py-[60px] max-[1199px]:w-full max-[1199px]:py-10 max-[1199px]:text-center max-[767px]:py-8 min-[1400px]:w-[51%]">
            <div className="hero-content">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:top-1/2 before:left-0 before:inline-block before:h-[2px] before:w-[30px] before:-translate-y-1/2 before:bg-brand-red before:content-[''] max-[1199px]:mx-auto max-[767px]:pl-6 max-[767px]:before:w-[15px]">
                  {content.eyebrows.map((item, idx) => (
                    <span
                      key={item}
                      className={cn(
                        "relative inline-flex items-center font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[767px]:text-[11px]",
                        idx > 0 &&
                          "ml-2.5 pl-2.5 after:absolute after:top-1/2 after:-left-[2px] after:inline-block after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#535353] after:content-['']",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="mb-5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-[#282828] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.title}{" "}
                <i className="font-normal not-italic text-[#ad5151]">{content.titleAccent}</i>
              </h1>

              <p className="m-0 mb-[30px] font-sans text-base font-normal leading-7 text-[#535353] max-[1199px]:mx-auto max-[1199px]:max-w-[700px] max-[767px]:mb-5 max-[767px]:text-sm max-[767px]:leading-6">
                {formatBrText(content.description)}
              </p>

              <div className="btn-group flex items-center gap-3.5 max-[1199px]:justify-center max-[767px]:flex-col max-[767px]:gap-2.5 [&_a]:max-[767px]:w-full [&_button]:max-[767px]:w-full">
                <Button
                  aria-label={content.primaryCta.ariaLabel ?? content.primaryCta.label}
                  href={content.primaryCta.href}
                  variant="primary"
                >
                  {content.primaryCta.label}
                </Button>
                {content.secondaryCta && (
                  <Button
                    aria-label={content.secondaryCta.ariaLabel ?? content.secondaryCta.label}
                    href={content.secondaryCta.href}
                    variant="outline"
                  >
                    {content.secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>

            {content.badges && content.badges.length > 0 && (
              <div
                className={cn(
                  "global_brands_grid_wrap relative mt-10 -mx-[15px] flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden",
                  badgeRowLayout
                    ? "max-[767px]:flex-nowrap"
                    : "max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']",
                )}
                aria-label="Partnerships and independent review profiles"
              >
                {content.badges.map((badge, idx) => (
                  <div
                    className={cn(
                      "global_brands_item relative border-r border-[#d9d9d9] px-[15px] first:pl-[15px] last:border-r-0",
                      badgeRowLayout
                        ? "max-[767px]:flex-1 max-[767px]:p-2.5 max-[767px]:text-center"
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

          <div className="right-col flex w-[47%] items-center justify-center max-[1199px]:w-full min-[1400px]:w-[49%]">
            <PhoneAppSlider frameImage={frameImage} slides={content.slides} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { MobileAppInteractiveShowcaseBlock as ShopifyMobileAppHeroSection };
