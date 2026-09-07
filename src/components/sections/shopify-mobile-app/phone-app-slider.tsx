"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { HeroSlideItem } from "@/content/shopify-mobile-app-development";

type PhoneAppSliderProps = {
  slides: readonly HeroSlideItem[];
  frameImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export function PhoneAppSlider({ slides, frameImage }: PhoneAppSliderProps) {
  // Pad slides to at least 6 items so hidden zones exist seamlessly on both sides
  const minBuffer = 6;
  const copies = Math.ceil(minBuffer / slides.length);
  const bufferedSlides = Array.from({ length: copies }, () => slides).flat();
  const total = bufferedSlides.length;
  const half = Math.floor(total / 2);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
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
      </div>

      {/* Frame overlay */}
      <div className="frame-main pointer-events-none absolute top-1/2 left-1/2 z-[5] h-[466px] w-[220px] -mt-[233px] -ml-[110px] max-[1399px]:h-[390px] max-[1399px]:w-[200px] max-[1399px]:-mt-[215px] max-[1399px]:-ml-[100px] max-[1199px]:h-[339px] max-[1199px]:w-[178px] max-[1199px]:-mt-[192px] max-[1199px]:-ml-[91px]">
        <Image
          src={frameImage.src}
          alt=""
          aria-hidden="true"
          width={frameImage.width}
          height={frameImage.height}
          className="h-full w-full object-contain"
          priority
        />
        {/* Frame bottom drop shadow */}
        <span
          className="absolute -bottom-[10px] left-1/2 block h-4 w-[400px] -translate-x-1/2 rounded-[429px] opacity-50 blur-[5.5px] max-[1399px]:bottom-[5px] max-[1399px]:w-[300px] max-[1199px]:bottom-[10px] max-[1199px]:w-[280px]"
          style={{
            background:
              "radial-gradient(47.55% 42.84% at 50% 50%, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
