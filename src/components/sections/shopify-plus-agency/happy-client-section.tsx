"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider, { type Settings } from "react-slick";

import { Container } from "@/components/ui/container";
import { VideoDialog } from "@/components/ui/video-dialog";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

function slidesForWidth(width: number) {
  return width < 767 ? 1 : 2;
}

export function HappyClientSection() {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const update = () => setSlidesToShow(slidesForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings: Settings = {
    arrows: false,
    autoplay: false,
    centerMode: true,
    centerPadding: "25px",
    dots: false,
    draggable: true,
    infinite: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow,
    speed: 500,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
  };

  return (
    <section className="happy-client-sec pt-0 pb-20 overflow-hidden" data-section="testimonials">
      <Container>
        <div className="mb-[50px] text-center">
          <h2 className="mb-2.5 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink">
            {shopifyPlusAgencyTestimonials.heading}
          </h2>
          <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted">
            {shopifyPlusAgencyTestimonials.description.split("<br>").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
              </span>
            ))}
          </p>
        </div>
        <div className="overflow-hidden" aria-label="Client video testimonials">
          <Slider {...settings} key={`${slidesToShow}`}>
            {shopifyPlusAgencyTestimonials.items.map((testimonial) => (
              <div className="px-[12.5px] max-[767px]:px-[5px]" key={testimonial.name}>
                <div className="h-full overflow-hidden rounded-[15px] border border-[#d9d9d9]">
                  <div className="relative min-h-[324px] max-[1199px]:min-h-[240px]">
                    <VideoDialog
                      className="min-h-[324px] !rounded-none max-[1199px]:min-h-[240px]"
                      overlay="/assets/shopify-plus-agency/quotes/qoute-icon.svg"
                      overlayClassName="hidden"
                      overlayHeight={40}
                      overlayWidth={46}
                      playClassName="max-[1199px]:size-12"
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
                    <h3 className="pointer-events-none absolute bottom-[22px] left-[36px] z-20 m-0 inline-block rounded-[30px] bg-white px-4 py-[10px] text-center text-base leading-[21px] font-semibold text-ink max-[1199px]:bottom-5 max-[1199px]:left-5 max-[1199px]:px-3.5 max-[1199px]:py-[7px] max-[1199px]:text-sm max-[1199px]:leading-[21px]">
                      {testimonial.name}
                      <span className="ml-[11px] border-l border-[#dbdbdb] pr-0 pl-[11px] text-base leading-[21px] font-normal max-[1199px]:ml-[7px] max-[1199px]:pl-[7px] max-[1199px]:text-xs">
                        {testimonial.company}
                      </span>
                    </h3>
                    <Image
                      aria-hidden="true"
                      className="pointer-events-none absolute top-[26px] right-[26px] z-20 h-10 w-[46px]"
                      src="/assets/shopify-plus-agency/quotes/qoute-icon.svg"
                      alt=""
                      width={46}
                      height={40}
                    />
                  </div>
                  <div className="p-[33px_36px_39px] max-[1199px]:p-5">
                    <p className="mb-6 text-base leading-[28.64px] font-normal text-[#535353]">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}