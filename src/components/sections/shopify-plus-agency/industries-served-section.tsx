"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider, { type Settings } from "react-slick";

import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyIndustries } from "@/content/shopify-plus-agency";

export type IndustriesServedContent = {
  heading: string;
  description: string;
  items: readonly {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
};

function slidesForWidth(width: number) {
  return width < 992 ? 1 : 2;
}

function centerPaddingForWidth(width: number) {
  return width < 992 ? "25px" : "30px";
}

export function IndustriesServedSection({
  content = shopifyPlusAgencyIndustries,
  alignDesktopToContentEdge = false,
}: {
  content?: IndustriesServedContent;
  alignDesktopToContentEdge?: boolean;
}) {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [centerPadding, setCenterPadding] = useState("30px");

  useEffect(() => {
    const update = () => {
      setSlidesToShow(slidesForWidth(window.innerWidth));
      setCenterPadding(centerPaddingForWidth(window.innerWidth));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings: Settings = {
    arrows: false,
    autoplay: false,
    centerMode: alignDesktopToContentEdge ? slidesToShow === 1 : true,
    centerPadding,
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
    <section className="industries-served-sec pt-0 pb-0" data-section="industries">
      <Container>
        <div className="mb-[50px] text-center">
          <h2 className="mb-2.5 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink">
            {content.heading}
          </h2>
          <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted">
            {content.description.split("<br>").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
              </span>
            ))}
          </p>
        </div>
        <div className="overflow-hidden py-[10px]" aria-label="Industries served by Dynamic Dreamz">
          <Slider {...settings} key={`${slidesToShow}-${centerPadding}`}>
            {content.items.map((item) => (
              <div className="px-2.5" key={item.title}>
                <div className="group relative h-full rounded-[10px] border-[1.5px] border-[#dfdfdf] bg-white pt-[30px] pr-[30px] pl-[30px] pb-[45px] transition-colors duration-300 hover:border-transparent max-[1199px]:p-5">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-[2px] -z-10 rounded-[10px] bg-gradient-to-r from-[#15c064] to-[#00d1ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative mb-[25px] overflow-hidden rounded-lg pb-[57%]">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 991px) calc(100vw - 32px), 590px"
                    />
                  </div>
                  <h3 className="mb-[10px] text-base leading-[26.72px] font-bold tracking-[0.32px] text-ink">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-base leading-[27.2px] font-medium tracking-[0.32px] text-[#535353]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}
