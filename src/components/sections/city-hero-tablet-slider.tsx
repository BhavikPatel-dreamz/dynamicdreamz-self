"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type CityPageHeroSlide = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CityPageHeroTabletSlider = {
  slides: readonly CityPageHeroSlide[];
  topBadge: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bottomBadge: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bgShapeSrc?: string;
};

export type CityHeroTabletSliderProps = {
  slider: CityPageHeroTabletSlider;
};

export function CityHeroTabletSlider({ slider }: CityHeroTabletSliderProps) {
  const { slides, topBadge, bottomBadge, bgShapeSrc } = slider;
  // Pad with first slide for seamless infinite looping
  const extendedSlides = slides.length > 0 ? [...slides, slides[0]] : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
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
      if (isVisible && !isPaused) {
        setIsTransitioning(true);
        setActiveIndex((prev) => {
          const next = prev + 1;
          if (next === slides.length) {
            // Reached clone of first slide: allow transition to finish, then snap back
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
  }, [slides.length, isPaused]);

  return (
    <div
      ref={containerRef}
      className="tablet-slider-wrap relative mb-[-40px] flex w-full items-center justify-center px-10 pt-[60px] pb-0 max-[1199px]:mb-[-70px] max-[1199px]:pt-[30px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Interactive showcase preview"
    >
      <div className="tablet-frame relative h-[593px] w-[420px] shrink-0 rounded-[22px] bg-[#171326] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.18)] max-[1199px]:h-[500px] max-[1199px]:w-[345px]">
        {/* Background decorative shape */}
        {bgShapeSrc && (
          <div
            className="pointer-events-none absolute -top-5 -left-[15px] z-0 h-[calc(100%+50px)] w-[calc(100%+30px)] bg-top bg-no-repeat bg-contain max-[1199px]:-top-[11px] max-[1199px]:h-[calc(100%+30px)]"
            style={{ backgroundImage: `url('${bgShapeSrc}')` }}
            aria-hidden="true"
          />
        )}

        {/* Screen / Slides inner container */}
        <div className="tablet-slides relative z-1 h-full w-full overflow-hidden rounded-[14px] bg-white">
          <div
            className={`tablet-slick flex h-full will-change-transform ${
              isTransitioning
                ? "transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0.05,0.36,1)]"
                : ""
            }`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {extendedSlides.map((slide, idx) => (
              <div
                key={`${slide.src}-${idx}`}
                className="tablet-slide-item h-full w-full shrink-0"
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

      {/* Floating Badges */}
      <div className="tablet-badge tablet-badge-top absolute top-[100px] -right-[15px] z-[9999] max-w-[173px] max-[1199px]:top-[60px] max-[1199px]:max-w-[150px]">
        <Image
          src={topBadge.src}
          alt={topBadge.alt}
          width={topBadge.width}
          height={topBadge.height}
          className="block h-auto max-w-full"
        />
      </div>

      <div className="tablet-badge tablet-badge-bottom absolute bottom-[80px] -left-[5px] z-[9999] max-w-[130px] max-[1199px]:bottom-[60px] max-[1199px]:-left-[15px] max-[1199px]:max-w-[110px]">
        <Image
          src={bottomBadge.src}
          alt={bottomBadge.alt}
          width={bottomBadge.width}
          height={bottomBadge.height}
          className="block h-auto max-w-full"
        />
      </div>
    </div>
  );
}
