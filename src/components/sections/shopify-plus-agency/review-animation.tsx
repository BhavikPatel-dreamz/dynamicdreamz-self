"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { shopifyPlusAgencyReviews } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

const STAR_PATHS = {
  red: [
    "M9.59375 0.535156L12.3411 6.25381L18.6288 7.09949L14.039 11.4795L15.1777 17.7208L9.59375 14.7092L4.00979 17.7208L5.14851 11.4795L0.558713 7.09949L6.84644 6.25381L9.59375 0.535156Z",
    "M32.75 0.535156L35.3256 6.25381L41.2203 7.09949L36.9174 11.4795L37.985 17.7208L32.75 14.7092L27.515 17.7208L28.5826 11.4795L24.2797 7.09949L30.1744 6.25381L32.75 0.535156Z",
    "M55.9062 0.535156L58.6536 6.25381L64.9413 7.09949L60.3515 11.4795L61.4902 17.7208L55.9062 14.7092L50.3223 17.7208L51.461 11.4795L46.8712 7.09949L53.1589 6.25381L55.9062 0.535156Z",
    "M79.6562 0.535156L82.4036 6.25381L88.6913 7.09949L84.1015 11.4795L85.2402 17.7208L79.6562 14.7092L74.0723 17.7208L75.211 11.4795L70.6212 7.09949L76.9089 6.25381L79.6562 0.535156Z",
    "M103.406 0.535156L106.154 6.25381L112.441 7.09949L107.851 11.4795L108.99 17.7208L103.406 14.7092L97.8223 17.7208L98.961 11.4795L94.3712 7.09949L100.659 6.25381L103.406 0.535156Z",
  ],
  blue: [
    "M11.5986 6.0752L11.791 6.47656L12.2314 6.53516L16.8184 7.15137L13.4697 10.3486L13.1484 10.6553L13.2285 11.0918L14.0586 15.6445L9.98535 13.4482L9.59375 13.2373L9.20215 13.4482L5.12793 15.6445L5.95898 11.0918L6.03906 10.6553L5.71777 10.3486L2.36816 7.15137L6.95605 6.53516L7.39648 6.47656L7.58887 6.0752L9.59375 1.90234L11.5986 6.0752Z",
    "M34.5742 6.05664L34.7598 6.46973L35.209 6.53418L39.4912 7.14844L36.3291 10.3672L36.0342 10.668L36.1055 11.083L36.877 15.5977L33.1611 13.46L32.75 13.2236L32.3389 13.46L28.6221 15.5977L29.3945 11.083L29.4658 10.668L29.1709 10.3672L26.0078 7.14844L30.291 6.53418L30.7402 6.46973L30.9258 6.05664L32.75 2.00586L34.5742 6.05664Z",
    "M57.9111 6.0752L58.1035 6.47656L58.5439 6.53516L63.1309 7.15137L59.7822 10.3486L59.4609 10.6553L59.541 11.0918L60.3711 15.6445L56.2979 13.4482L55.9062 13.2373L55.5146 13.4482L51.4404 15.6445L52.2715 11.0918L52.3516 10.6553L52.0303 10.3486L48.6807 7.15137L53.2686 6.53516L53.709 6.47656L53.9014 6.0752L55.9062 1.90234L57.9111 6.0752Z",
    "M81.6611 6.0752L81.8535 6.47656L82.2939 6.53516L86.8809 7.15137L83.5322 10.3486L83.2109 10.6553L83.291 11.0918L84.1211 15.6445L80.0479 13.4482L79.6562 13.2373L79.2646 13.4482L75.1904 15.6445L76.0215 11.0918L76.1016 10.6553L75.7803 10.3486L72.4307 7.15137L77.0186 6.53516L77.459 6.47656L77.6514 6.0752L79.6562 1.90234L81.6611 6.0752Z",
    "M105.411 6.0752L105.604 6.47656L106.044 6.53516L110.631 7.15137L107.282 10.3486L106.961 10.6553L107.041 11.0918L107.871 15.6445L103.798 13.4482L103.406 13.2373L103.015 13.4482L98.9404 15.6445L99.7715 11.0918L99.8516 10.6553L99.5303 10.3486L96.1807 7.15137L100.769 6.53516L101.209 6.47656L101.401 6.0752L103.406 1.90234L105.411 6.0752Z",
  ],
} as const;

function ReviewStars({
  review,
  starsVisible,
}: {
  review: (typeof shopifyPlusAgencyReviews)[number];
  starsVisible: number;
}) {
  const paths = STAR_PATHS[review.starPaths];
  const viewBoxHeight = review.starPaths === "blue" ? 19 : 20;

  return (
    <svg
      aria-hidden="true"
      className="block"
      height={20}
      viewBox={`0 0 113 ${viewBoxHeight}`}
      width={113}
    >
      {paths.map((d, index) => (
        <path
          className="[transition:opacity_.3s_ease]"
          d={d}
          fill={review.starFill}
          key={d}
          stroke={review.starPaths === "blue" ? review.starFill : undefined}
          strokeWidth={review.starPaths === "blue" ? 1.64814 : undefined}
          style={{ opacity: index < starsVisible ? 1 : 0 }}
        />
      ))}
    </svg>
  );
}

function ReviewCircle({
  review,
  active,
  zoomed,
  wrapperVisible,
  starsVisible,
  ratingsVisible,
  pillVisible,
}: {
  review: (typeof shopifyPlusAgencyReviews)[number];
  active: boolean;
  zoomed: boolean;
  wrapperVisible: boolean;
  starsVisible: number;
  ratingsVisible: boolean;
  pillVisible: boolean;
}) {
  const visible = active && zoomed;
  const contentVisible = active && wrapperVisible;
  const ratingIsVisible = active && ratingsVisible;
  const pillIsVisible = active && pillVisible;

  return (
    <div
      className={cn(
        "review_animation absolute inset-x-0 top-0 mx-auto flex size-[420px] items-center justify-center rounded-full text-center [transition:transform_.6s_ease,opacity_.6s_ease] max-[767px]:size-[275px]",
        active && "relative z-10",
        visible
          ? "[transform:scale(1)] opacity-100"
          : "[transform:scale(0)] opacity-0",
      )}
      style={{ backgroundColor: review.backgroundColor }}
      aria-hidden={!active}
    >
      <div className="review_animation_box">
        <div
          className={cn(
            "review_animation_wrapper [transition:opacity_.6s_ease,transform_.6s_ease]",
            contentVisible
              ? "[transform:translateY(0)] opacity-100"
              : "[transform:translateY(30px)] opacity-0",
          )}
        >
          <div className="review_animation_text mb-6 text-center text-base leading-normal font-bold text-black max-[767px]:mb-[10px] max-[767px]:text-sm">REVIEWED ON</div>
          <div className="review_animation_box_logo mb-5 max-[767px]:mb-0">
            <Image
              className="mx-auto h-auto w-auto max-[767px]:max-h-10 max-[767px]:max-w-[130px]"
              src={review.wordmark}
              alt={review.wordmarkAlt}
              width={review.wordmarkWidth}
              height={review.wordmarkHeight}
              priority={active}
            />
          </div>
        </div>
        <div className="review_animation_ratings mb-[18px] flex items-center max-[767px]:mb-[10px]">
          <ReviewStars
            review={review}
            starsVisible={active ? starsVisible : 0}
          />
          <div
            className={cn(
              "review_ratings ml-[10px] text-[20px] font-semibold text-black [transition:opacity_.6s_ease] max-[767px]:text-[15px]",
              ratingIsVisible ? "opacity-100" : "opacity-0",
            )}
          >
            {review.rating}
          </div>
        </div>
        <div
          className={cn(
            "review_total_ratings [transition:transform_1s_cubic-bezier(.95,-.42,.15,1.26),opacity_.6s_ease] max-[767px]:inline-flex max-[767px]:items-center",
            pillIsVisible
              ? "[transform:translateY(0)] opacity-100"
              : "[transform:translateY(150px)] opacity-0",
          )}
        >
          <a
            className="inline-block rounded-[60.664px] px-[18px] py-2 text-[19.413px] leading-normal font-bold text-white max-[767px]:text-sm"
            href={review.pillHref}
            rel="nofollow"
            style={{
              backgroundColor: review.pillColor,
              border: `${review.pillBorderWidth}px solid ${review.pillColor}`,
            }}
            target="_blank"
          >
            {review.pillLabel}
            <Image
              className="ml-[10px] inline h-auto w-auto max-[767px]:ml-[5px] max-[767px]:w-[10px]"
              src="/assets/shopify-plus-agency/reviews/arrow-up-right.svg"
              alt=""
              width={14}
              height={15}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ReviewAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [wrapperVisible, setWrapperVisible] = useState(false);
  const [starsVisible, setStarsVisible] = useState(0);
  const [ratingsVisible, setRatingsVisible] = useState(false);
  const [pillVisible, setPillVisible] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const timeouts = timeoutsRef.current;
    timeouts.push(setTimeout(() => setZoomed(true), 100));
    timeouts.push(setTimeout(() => setWrapperVisible(true), 400));
    STAR_PATHS[shopifyPlusAgencyReviews[activeIndex].starPaths].forEach((_, index) => {
      timeouts.push(setTimeout(() => setStarsVisible(index + 1), 400 + index * 200));
    });
    timeouts.push(setTimeout(() => setRatingsVisible(true), 1700));
    timeouts.push(setTimeout(() => setPillVisible(true), 2000));

    return () => {
      timeouts.forEach(clearTimeout);
      timeouts.length = 0;
    };
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoomed(false);
      setWrapperVisible(false);
      setStarsVisible(0);
      setRatingsVisible(false);
      setPillVisible(false);
      setActiveIndex((index) => (index + 1) % shopifyPlusAgencyReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review_animation_main relative overflow-hidden">
      {shopifyPlusAgencyReviews.map((review, index) => (
        <ReviewCircle
          active={index === activeIndex}
          key={review.name}
          pillVisible={pillVisible}
          ratingsVisible={ratingsVisible}
          review={review}
          starsVisible={starsVisible}
          wrapperVisible={wrapperVisible}
          zoomed={zoomed}
        />
      ))}
    </div>
  );
}
