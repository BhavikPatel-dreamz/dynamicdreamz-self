"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";

import { VideoModalClient } from "@/components/ui/VideoModalClient";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type HappyClientTestimonialItem = {
  name: string;
  company: string;
  quote: string | readonly string[];
  videoId: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export type TestimonialsSliderBlockProps = {
  heading?: string | readonly string[];
  description?: string | readonly string[];
  eyebrow?: string;
  items?: readonly HappyClientTestimonialItem[];
  controlsLabels?: { ariaLabel: string; previous: string; next: string };
  variant?: "client-stories";
  className?: string;
};

export type HappyClientSectionProps = TestimonialsSliderBlockProps;

function TestimonialCard({
  testimonial,
}: {
  testimonial: HappyClientTestimonialItem;
}) {
  return (
    <div className="happy-client-col flex h-full grow flex-col overflow-hidden rounded-[15px] border-0 bg-white shadow-[0_4px_18px_rgb(0_0_0/8%)]">
      <div className="card-item relative min-h-[285px] shrink-0">
        <VideoModalClient
          className="!rounded-none min-h-[285px]"
          poster={testimonial.image}
          posterAlt={testimonial.imageAlt}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) calc((100vw - 115px)/2), 527px"
          title={`${testimonial.name} testimonial video`}
          videoId={testimonial.videoId}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-black/30"
        />
        {testimonial.logo ? (
          <span className="pointer-events-none absolute top-5 right-5 z-20 flex h-[70px] w-[140px] items-center justify-end max-[1199px]:top-4 max-[1199px]:right-4 max-[1199px]:h-[50px] max-[1199px]:w-[120px] max-[767px]:top-3 max-[767px]:right-3 max-[767px]:h-[45px] max-[767px]:w-[90px]">
            <Image
              alt={testimonial.logoAlt ?? `${testimonial.company} logo`}
              className="h-auto max-h-full w-auto max-w-full object-contain"
              height={testimonial.logoHeight ?? 70}
              src={testimonial.logo}
              width={testimonial.logoWidth ?? 140}
            />
          </span>
        ) : null}
        <h3 className="pointer-events-none absolute bottom-[15px] left-[15px] max-[1199px]:bottom-3 max-[1199px]:left-3 z-20 m-0 inline-block rounded-[5px] border-l-[3px] border-brand-red bg-black/80 px-[15px] py-[10px] max-[1199px]:px-[14px] max-[1199px]:py-[7px] text-left font-display text-[15px] font-semibold leading-[21px] text-white max-[1199px]:text-sm">
          {testimonial.name}
          <span className="mt-[5px] block text-[12px] font-medium leading-normal">
            {testimonial.company}
          </span>
        </h3>
      </div>

      <div className="client-review-text min-h-[184px] h-full grow px-5 py-[18px]">
        <p className="mb-0 text-sm font-medium leading-6 text-[#535353] before:mr-2 before:inline-block before:h-[15px] before:w-[20px] before:align-top before:bg-[url('/assets/testimonials/quote-mark.svg')] before:bg-contain before:bg-no-repeat before:content-['']">
          {formatBrText(testimonial.quote)}
        </p>
      </div>
    </div>
  );
}

const baseSettings: Settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const controlButtonClassName =
  "flex size-[45px] max-[767px]:size-[40px] cursor-pointer items-center justify-center rounded-full border border-[rgb(173_81_81/10%)] bg-[rgb(173_81_81/15%)] text-[#ad5151] transition-colors hover:bg-[rgb(173_81_81/20%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-[rgb(173_81_81/15%)]";

export function TestimonialsSliderBlock({
  heading = shopifyPlusAgencyTestimonials.heading,
  description = shopifyPlusAgencyTestimonials.description,
  eyebrow = sharedUiCopy.testimonials.eyebrow,
  items = shopifyPlusAgencyTestimonials.items,
  controlsLabels = sharedUiCopy.testimonials,
  variant,
  className,
}: TestimonialsSliderBlockProps) {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const finalSlide = Math.max(items.length - visibleSlides, 0);
  const isAtStart = activeSlide === 0;
  const isAtEnd = activeSlide >= finalSlide;

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(max-width: 991px)");
    const updateVisibleSlides = () => {
      setVisibleSlides(mobileQuery.matches ? 1 : tabletQuery.matches ? 2 : 3);
    };

    updateVisibleSlides();
    mobileQuery.addEventListener("change", updateVisibleSlides);
    tabletQuery.addEventListener("change", updateVisibleSlides);
    return () => {
      mobileQuery.removeEventListener("change", updateVisibleSlides);
      tabletQuery.removeEventListener("change", updateVisibleSlides);
    };
  }, []);

  const settings: Settings = {
    ...baseSettings,
    afterChange: setActiveSlide,
    slidesToShow: visibleSlides,
  };

  const isWhite = variant === "client-stories";

  return (
    <section
      className={cn(
        "happy-client-sec overflow-hidden pt-20 pb-20 max-[991px]:py-[50px]",
        isWhite ? "bg-white" : undefined,
        className,
      )}
      data-section="testimonials"
      id="client-testimonials"
    >
      <Container>
        <div
          className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between max-[991px]:mb-[30px] max-[991px]:flex-col max-[991px]:items-start max-[991px]:gap-3"
          data-aos="fade-up"
        >
          <div className="title w-[44%] max-[991px]:w-full">
            {eyebrow ? (
              <div className="eyebrow mb-4">
                <span className="font-montserrat text-sm font-semibold uppercase text-brand-red">
                  {eyebrow}
                </span>
              </div>
            ) : null}
            <h2 className="font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {formatBrText(heading)}
            </h2>
          </div>
          <div className="section_text w-[48.3%] max-[991px]:w-full">
            <p className="happy-client-desc text-base font-medium leading-7 text-[#535353] max-[992px]:text-sm max-[992px]:leading-6">
              {formatBrText(description)}
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div
            aria-label={controlsLabels.ariaLabel}
            className={cn(
              "happy-client-slider min-[1400px]:-mx-[15px]",
              "[&_.slick-track]:!flex [&_.slick-track]:!items-stretch [&_.slick-slide]:!h-auto [&_.slick-initialized_.slick-slide]:!flex [&_.slick-initialized_.slick-slide]:!flex-col [&_.slick-slide>div]:!h-full",
            )}
            role="region"
          >
            <Slider key={visibleSlides} ref={sliderRef} {...settings}>
              {items.map((testimonial) => (
                <div
                  className="flex h-full flex-col px-[15px] pb-5 items-stretch"
                  key={testimonial.name}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-8 flex items-center justify-end gap-3 max-[991px]:justify-center">
            <button
              aria-label={controlsLabels.previous}
              className={controlButtonClassName}
              disabled={isAtStart}
              onClick={() => sliderRef.current?.slickPrev()}
              type="button"
            >
              <svg className="size-4 rotate-180 fill-current" viewBox="0 0 16 16">
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <button
              aria-label={controlsLabels.next}
              className={controlButtonClassName}
              disabled={isAtEnd}
              onClick={() => sliderRef.current?.slickNext()}
              type="button"
            >
              <svg className="size-4 fill-current" viewBox="0 0 16 16">
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export type TestimonialsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function TestimonialsSection({
  title = sharedUiCopy.testimonials.defaultTitle,
  description = sharedUiCopy.testimonials.defaultDescription,
}: TestimonialsSectionProps = {}) {
  return (
    <section className="bg-[#FAF9F5] py-[60px] max-[767px]:py-[50px]" aria-labelledby="testimonials-title">
      <Container>
        <div
          data-aos="fade-up"
          className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between gap-8 max-[1199px]:mb-5 max-[992px]:gap-0"
        >
          <div className="title w-[42%] max-[1199px]:w-full max-[1199px]:mb-2.5">
            <h2 id="testimonials-title" className="m-0 font-display text-[43px] font-medium leading-[1.2] text-[#282828] max-[1199px]:text-[35px] max-[992px]:text-[28px] max-[767px]:text-[24px]">
              {title}
            </h2>
          </div>
          <p className="w-[48%] font-sans text-base leading-relaxed text-[#535353] max-[1199px]:w-full">
            {description}
          </p>
        </div>
        <div data-aos="fade-up" className="brand_testimonial_slider_wrap">
          <TestimonialsSliderBlock />
        </div>
      </Container>
    </section>
  );
}

export {
  TestimonialsSliderBlock as HappyClientSection,
};
