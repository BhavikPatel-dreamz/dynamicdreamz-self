"use client";

import { useEffect, useRef, useState } from "react";
import Slider, { type Settings } from "react-slick";

import { HappyClientCard, type HappyClientTestimonialItem } from "@/components/sections/happy-client-card";
import { cn } from "@/lib/class-names";

export type HappyClientCarouselProps = {
  items: readonly HappyClientTestimonialItem[];
  ariaLabel: string;
  controls?: {
    previousLabel: string;
    nextLabel: string;
  };
};

const baseSettings: Settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const controlButtonClassName =
  "flex size-[46px] cursor-pointer items-center justify-center rounded-full border border-[#efd1d1] bg-[#fae8e8] text-[#ad3434] transition-colors hover:bg-[#f4dada] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad3434] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-[#fae8e8]";

export function HappyClientCarousel({ items, ariaLabel, controls }: HappyClientCarouselProps) {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const finalSlide = Math.max(items.length - visibleSlides, 0);
  const isAtStart = activeSlide === 0;
  const isAtEnd = activeSlide >= finalSlide;

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1200) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  useEffect(() => {
    if (activeSlide <= finalSlide) return;
    sliderRef.current?.slickGoTo(finalSlide, true);
  }, [activeSlide, finalSlide]);

  const settings: Settings = {
    ...baseSettings,
    afterChange: setActiveSlide,
  };

  return (
    <>
      <div
        aria-label={ariaLabel}
        className={cn(
          "happy-client-slider min-[1400px]:-mx-[15px]",
          "[&_.slick-track]:!flex [&_.slick-track]:!items-stretch [&_.slick-slide]:!h-auto [&_.slick-initialized_.slick-slide]:!flex [&_.slick-initialized_.slick-slide]:!flex-col [&_.slick-slide>div]:!h-full",
        )}
        role="region"
      >
        <Slider ref={sliderRef} {...settings}>
          {items.map((testimonial) => (
            <div className="flex h-full flex-col px-[15px] pb-5 items-stretch" key={testimonial.name}>
              <HappyClientCard testimonial={testimonial} variant="client-stories" />
            </div>
          ))}
        </Slider>
      </div>

      {controls ? (
        <div aria-label={`${ariaLabel} controls`} className="mt-[30px] flex justify-center gap-3" role="group">
          <button
            aria-label={controls.previousLabel}
            className={controlButtonClassName}
            disabled={isAtStart}
            onClick={() => sliderRef.current?.slickPrev()}
            type="button"
          >
            <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
              <path d="m12.5 4.5-5.5 5.5 5.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            aria-label={controls.nextLabel}
            className={controlButtonClassName}
            disabled={isAtEnd}
            onClick={() => sliderRef.current?.slickNext()}
            type="button"
          >
            <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
              <path d="m7.5 4.5 5.5 5.5-5.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
}
