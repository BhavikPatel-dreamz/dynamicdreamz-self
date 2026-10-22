"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";

import { VideoModalClient } from "@/components/ui/VideoModalClient";
import { Container, Eyebrow } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { homeSectionCopy, testimonials as defaultBrandTestimonials, type Testimonial } from "@/content/home-client";
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
  contentOnly?: boolean;
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
        <h3 className="pointer-events-none absolute bottom-[15px] left-[15px] max-[1199px]:bottom-3 max-[1199px]:left-3 z-20 m-0 inline-block rounded-[5px] border-l-[3px] border-brand-red bg-black/80 px-[15px] py-[10px] max-[1199px]:px-[14px] max-[1199px]:py-[7px] text-left font-sans text-[15px] font-semibold leading-[21px] text-white max-[1199px]:text-sm">
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
  contentOnly = false,
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

  const sliderBody = (
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
  );

  if (contentOnly) {
    return sliderBody;
  }

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
              <Eyebrow as="span" className="mb-4">
                {eyebrow}
              </Eyebrow>
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

        {sliderBody}
      </Container>
    </section>
  );
}

export function BrandTestimonialSlide({ item }: { item: Testimonial }) {
  return (
    <div className="testimonial_img_text_wrap flex h-full max-[991px]:flex-col-reverse">
      <div className="col_content flex flex-1 flex-col justify-center rounded-[30px] border border-[#dfdfdf] bg-white/50 p-[45px_30px] max-[991px]:rounded-b-[20px] max-[991px]:rounded-t-none max-[767px]:p-4">
        {item.logo ? (
          <div className="logo_wrap mb-[26px] max-[767px]:mb-4">
            <Image
              src={item.logo}
              alt={item.logoAlt ?? `${item.company} logo`}
              width={120}
              height={45}
              className="h-10 max-h-10 w-auto object-contain max-[767px]:max-h-8"
            />
          </div>
        ) : null}
        <h3 className="mb-5 pr-[78px] font-montreal-medium text-[26px] font-normal leading-[1.4] tracking-normal text-ink max-[1199px]:text-[22px] max-[991px]:pr-0 max-[767px]:mb-4 max-[767px]:text-lg max-[767px]:leading-normal">
          {item.title}
        </h3>
        <p className="mb-[26px] max-w-[90%] font-sans text-sm font-normal leading-6 text-muted max-[767px]:mb-4 max-[767px]:max-w-full">
          {item.quote}
        </p>
        <div className="user_content_btm mt-auto flex items-center border-t border-[#dfdfdf] pt-[26px] max-[767px]:pt-4">
          <div className="user_thumb_wrap flex flex-1 items-center">
            <div className="thumb_wrap mr-3.5 size-[60px] shrink-0 overflow-hidden rounded-full max-[767px]:size-12">
              <Image
                src={item.avatar}
                alt={item.name}
                width={60}
                height={60}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="user_content_wrap">
              <div className="title font-montserrat text-xl font-semibold leading-[1.295] text-ink max-[767px]:text-base">
                {item.name}
              </div>
              <div className="sub_title text-lg font-medium leading-[1.295] text-muted max-[767px]:text-sm">
                {item.companyHref ? (
                  <a
                    href={item.companyHref}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="transition-colors hover:text-brand-red"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col_img relative aspect-square w-1/2 shrink-0 overflow-hidden rounded-[30px] max-[991px]:w-full max-[991px]:max-h-[346px] max-[991px]:rounded-t-[20px] max-[991px]:rounded-b-none">
        {item.videoId ? (
          <VideoModalClient
            className="!rounded-none h-full w-full"
            poster={item.portrait}
            posterAlt={`${item.name} testimonial portrait`}
            title={`${item.name} testimonial video`}
            videoId={item.videoId}
          />
        ) : (
          <Image
            src={item.portrait}
            alt={`${item.name} testimonial`}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

export function BrandTestimonialSlider({
  items = defaultBrandTestimonials,
}: {
  items?: readonly Testimonial[];
}) {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const isAtStart = activeSlide === 0;
  const isAtEnd = activeSlide >= items.length - 1;

  const brandSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setActiveSlide,
    adaptiveHeight: false,
  };

  return (
    <div className="brand_testimonial_slider_wrap relative">
      <div className="brand_testimonial_nav absolute -top-[75px] right-0 z-10 flex items-center gap-[14px] max-[991px]:relative max-[991px]:top-auto max-[991px]:right-auto max-[991px]:mt-6 max-[991px]:justify-center">
        <button
          aria-label={sharedUiCopy.testimonials.previous}
          className="slider_arrow prev flex size-14 cursor-pointer items-center justify-center rounded-[10px] bg-white text-[#282828] transition-colors hover:bg-brand-red hover:text-white disabled:pointer-events-none disabled:opacity-60 max-[767px]:size-[42px] max-[767px]:rounded-[6px]"
          disabled={isAtStart}
          onClick={() => sliderRef.current?.slickPrev()}
          type="button"
        >
          <svg
            className="size-5 max-[767px]:size-[15px]"
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          aria-label={sharedUiCopy.testimonials.next}
          className="slider_arrow next flex size-14 cursor-pointer items-center justify-center rounded-[10px] bg-white text-[#282828] transition-colors hover:bg-brand-red hover:text-white disabled:pointer-events-none disabled:opacity-60 max-[767px]:size-[42px] max-[767px]:rounded-[6px]"
          disabled={isAtEnd}
          onClick={() => sliderRef.current?.slickNext()}
          type="button"
        >
          <svg
            className="size-5 max-[767px]:size-[15px]"
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      <div className="brand_testimonial_inner overflow-hidden rounded-[30px] max-[1199px]:rounded-[20px]">
        <Slider ref={sliderRef} {...brandSettings}>
          {items.map((testimonial) => (
            <div key={testimonial.name} className="outline-none">
              <BrandTestimonialSlide item={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export type TestimonialsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: readonly Testimonial[];
};

export function TestimonialsSection({
  title = homeSectionCopy.testimonialsTitle,
  description = homeSectionCopy.testimonialsDescription,
  eyebrow,
  items,
}: TestimonialsSectionProps = {}) {
  return (
    <section className="brand_testimonial bg-[#f7f4e9] py-[60px] max-[767px]:py-[50px]" aria-labelledby="testimonials-title">
      <Container>
        <div
          data-aos="fade-up"
          className="section_title_with_eyebrow mb-[100px] flex flex-wrap items-end justify-between gap-8 max-[1199px]:mb-10 max-[991px]:mb-[30px] max-[992px]:gap-0"
        >
          <div className="title w-[42%] max-[1199px]:w-full max-[1199px]:mb-2.5">
            {eyebrow ? (
              <Eyebrow as="span" className="mb-4">
                {eyebrow}
              </Eyebrow>
            ) : null}
            <h2 id="testimonials-title" className="m-0 font-montreal-medium text-[35px] leading-[48.475px] font-normal tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
              {title}
            </h2>
          </div>
          <div className="w-[48%] max-[1199px]:w-full">
            <p className="font-sans text-base leading-7 font-medium text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
              {description}
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <BrandTestimonialSlider items={items} />
        </div>
      </Container>
    </section>
  );
}

export {
  TestimonialsSliderBlock as HappyClientSection,
};
