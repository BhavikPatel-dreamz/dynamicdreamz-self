"use client";

import Slider, { type Settings } from "react-slick";

import { ClientLogo } from "@/components/sections/home/client-logo";
import styles from "@/components/sections/resources/resources-brand-strip.module.css";
import { resourcesClientLogos } from "@/content/resources";

const settings: Settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  draggable: true,
  infinite: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  slidesToScroll: 1,
  slidesToShow: 6,
  speed: 500,
  swipe: true,
  swipeToSlide: true,
  touchMove: true,
  responsive: [
    { breakpoint: 1025, settings: { slidesToShow: 4 } },
    { breakpoint: 769, settings: { slidesToShow: 3 } },
    { breakpoint: 577, settings: { slidesToShow: 2 } },
  ],
};

export function ResourcesBrandSlider() {
  return (
    <Slider {...settings} className={styles.slider}>
      {resourcesClientLogos.map((logo) => (
        <div key={logo.src}>
          <div className={styles.item}>
            <ClientLogo logo={logo} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
