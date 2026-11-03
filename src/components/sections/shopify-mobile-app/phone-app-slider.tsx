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

export function PhoneAppSlider({ slides = [], frameImage }: PhoneAppSliderProps) {
  // Pad slides to at least 6 items so hidden zones exist seamlessly on both sides
  const minBuffer = 6;
  const slideCount = slides?.length || 0;
  const copies = slideCount > 0 ? Math.ceil(minBuffer / slideCount) : 0;
  const bufferedSlides = copies > 0 ? Array.from({ length: copies }, () => slides).flat() : [];
  const total = bufferedSlides.length;
  const half = Math.floor(total / 2);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (total === 0) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    // Initial mount: disable animation for first paint, then enable (matching live site no-anim-init)
    const frameId = requestAnimationFrame(() => {
      setIsReady(true);
    });

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      motionPreference.removeEventListener("change", updateMotionPreference);
    };
  }, [total]);

  useEffect(() => {
    if (total === 0 || !isVisible || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isVisible, prefersReducedMotion, total]);

  if (total === 0) return null;

  return (
    <div
      ref={containerRef}
      className="app-slider-wrap relative flex w-full items-center justify-center overflow-hidden py-[100px] max-[1200px]:pt-[60px] max-[1200px]:pr-0 max-[1200px]:pb-0 max-[1200px]:pl-[10px]"
      aria-label="Shopify mobile application interactive preview slider"
    >
      <div className="app-slider-track relative h-[466px] w-full max-[1200px]:h-[400px]">
        {bufferedSlides.map((slide, i) => {
          const diff = (i - activeIndex + total) % total;
          let transform = "translateX(140%) scale(0.6)";
          let opacity = 0;
          let zIndex = 1;

          if (diff === 0) {
            transform = "translateX(0) scale(1)";
            opacity = 1;
            zIndex = 3;
          } else if (diff === 1) {
            transform = "translateX(95%) scale(0.68)";
            opacity = 1;
            zIndex = 2;
          } else if (diff === total - 1) {
            transform = "translateX(-95%) scale(0.68)";
            opacity = 1;
            zIndex = 2;
          } else if (diff > half) {
            transform = "translateX(-140%) scale(0.6)";
            opacity = 0;
            zIndex = 0;
          }

          return (
            <div
              key={`${slide.src}-${i}`}
              className="app-slide absolute top-1/2 left-1/2 h-[466px] w-[220px] -mt-[233px] -ml-[110px] overflow-hidden rounded-[24px] bg-[#0d0730] min-[1200px]:max-[1400px]:h-[386px] min-[1200px]:max-[1400px]:w-[200px] min-[1200px]:max-[1400px]:-mt-[235px] min-[1200px]:max-[1400px]:-ml-[100px] max-[1200px]:h-[339px] max-[1200px]:w-[175px] max-[1200px]:-mt-[244px] max-[1200px]:-ml-[96px]"
              style={{
                transform,
                opacity,
                zIndex,
                transition:
                  isReady && !prefersReducedMotion
                    ? "transform 0.8s cubic-bezier(0.65, 0.05, 0.36, 1), opacity 0.8s ease"
                    : "none",
                willChange: "transform, opacity",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                className="h-full w-full object-cover object-top"
                priority={i === 0}
              />
            </div>
          );
        })}
      </div>

      {/* Frame overlay */}
      <div className="frame-main pointer-events-none absolute top-1/2 left-1/2 z-[5] h-[466px] w-[220px] -mt-[233px] -ml-[110px] min-[1200px]:max-[1400px]:h-[390px] min-[1200px]:max-[1400px]:w-[200px] min-[1200px]:max-[1400px]:-mt-[215px] min-[1200px]:max-[1400px]:-ml-[100px] max-[1200px]:h-[339px] max-[1200px]:w-[178px] max-[1200px]:-mt-[192px] max-[1200px]:-ml-[91px]">
        <Image
          src={frameImage.src}
          alt=""
          aria-hidden="true"
          width={frameImage.width}
          height={frameImage.height}
          className="app-slider-frame pointer-events-none absolute top-1/2 left-1/2 z-[5] h-[466px] w-[220px] -mt-[233px] -ml-[110px] min-[1200px]:max-[1400px]:h-[390px] min-[1200px]:max-[1400px]:w-[200px] min-[1200px]:max-[1400px]:-mt-[215px] min-[1200px]:max-[1400px]:-ml-[100px] max-[1200px]:h-[339px] max-[1200px]:w-[178px] max-[1200px]:-mt-[192px] max-[1200px]:-ml-[91px]"
          priority
        />
        {/* Frame bottom drop shadow */}
        <span
          className="pointer-events-none absolute -bottom-[10px] left-1/2 block h-4 w-[400px] -translate-x-1/2 rounded-[429px] opacity-50 blur-[5.5px] min-[1200px]:max-[1400px]:bottom-[5px] min-[1200px]:max-[1400px]:w-[300px] max-[1200px]:bottom-[10px] max-[1200px]:w-[280px]"
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
