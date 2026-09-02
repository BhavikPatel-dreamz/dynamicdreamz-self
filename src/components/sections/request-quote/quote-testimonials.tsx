"use client";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import { requestQuoteContent } from "@/content/request-quote";

type ArrowProps = {
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      type="button"
      className="absolute -bottom-[52px] right-[61px] z-10 flex size-10 cursor-pointer items-center justify-center rounded-[5px] border-0 bg-white shadow-sm transition-opacity hover:opacity-80 max-[767px]:right-[55px]"
      onClick={onClick}
      aria-label="Previous testimonial"
    >
      <Image
        className="-scale-x-100"
        src="/assets/request-quote/icons/right-arrow.svg"
        alt=""
        width={7}
        height={12}
      />
    </button>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      type="button"
      className="absolute -bottom-[52px] right-[5px] z-10 flex size-10 cursor-pointer items-center justify-center rounded-[5px] border-0 bg-white shadow-sm transition-opacity hover:opacity-80"
      onClick={onClick}
      aria-label="Next testimonial"
    >
      <Image
        src="/assets/request-quote/icons/right-arrow.svg"
        alt=""
        width={7}
        height={12}
      />
    </button>
  );
}

export function QuoteTestimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="testimonial-slider relative -mx-[5px] pb-[52px] [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full [&_.slick-track]:flex [&_.slick-track]:items-stretch max-[575px]:[&_.slick-list]:w-[calc(100%_-_25px)] max-[575px]:[&_.slick-list]:!overflow-visible max-[575px]:[&_.slick-list]:[clip-path:inset(0_-100vw_0_5px)]">
      <Slider {...settings}>
        {requestQuoteContent.testimonials.map((testimonial) => (
          <div key={testimonial.name} className="h-full px-[5px]">
            <div className="flex h-full rounded-[10px] bg-[linear-gradient(to_right,#15c064,#00d1ff)] p-[1px] max-[575px]:min-h-[285px]">
              <div className="flex min-h-0 flex-1 flex-col justify-between rounded-[10px] bg-white p-[32px_45px_32px_32px] max-[1199px]:p-5">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        className="size-12 rounded-full object-cover"
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        width={48}
                        height={48}
                      />
                      <span className="font-montserrat text-lg leading-[23px] font-bold text-[#090909] max-[767px]:text-base">
                        {testimonial.name}
                      </span>
                    </div>
                    <div className="qoute-icon w-12 shrink-0 max-[767px]:w-[34px]">
                      <Image
                        className="h-auto w-full"
                        src="/assets/request-quote/icons/quote-icon.svg"
                        alt=""
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <Image
                      className="mb-[15px] h-5 w-[118px]"
                      src="/assets/request-quote/icons/request-star.svg"
                      alt="5 star rating"
                      width={118}
                      height={20}
                    />
                    <p className="m-0 text-base leading-7 font-medium text-[#535353] max-[767px]:text-sm max-[767px]:leading-7">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
