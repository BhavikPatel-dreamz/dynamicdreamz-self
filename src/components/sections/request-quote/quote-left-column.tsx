import Image from "next/image";

import { QuoteTestimonials } from "@/components/sections/request-quote/quote-testimonials";
import { requestQuoteContent } from "@/content/request-quote";

export function QuoteLeftColumn() {
  const { badges, counters, hero } = requestQuoteContent;

  return (
    <div className="left-col relative w-full py-[150px] pr-[46px] pb-[140px] max-[1199px]:pr-[30px] max-[991px]:pt-[50px] max-[991px]:pr-0 max-[991px]:pb-[100px]">
      <h1 className="font-montserrat text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[1199px]:text-[29px] max-[359px]:text-2xl">
        {hero.title}
      </h1>
      <p className="mt-2 text-lg leading-[34.2px] font-medium text-[#535353] min-[768px]:mt-5 min-[992px]:mt-6 max-[1199px]:text-base max-[1199px]:leading-[30.4px] max-[767px]:text-sm max-[767px]:leading-7">
        {hero.description}
      </p>

      <div className="deliver-wrapper mt-[50px] flex items-center max-[1199px]:mt-[30px] max-[767px]:mt-5">
        {counters.map((counter, index) => (
          <div
            key={counter.label}
            className={
              index === 0
                ? "deliver-counter"
                : "deliver-counter ml-[52px] border-l border-[rgba(0,0,0,0.08)] pl-[52px] max-[1299px]:ml-10 max-[1299px]:pl-10 max-[1199px]:ml-[25px] max-[1199px]:pl-[25px] max-[767px]:ml-[15px] max-[767px]:pl-[15px]"
            }
          >
            <div className="text-counter mb-1 text-left text-lg leading-[20.7px] font-semibold text-[rgba(9,9,9,0.63)] uppercase max-[1199px]:text-base max-[767px]:mb-0 max-[767px]:text-sm max-[359px]:text-xs">
              {counter.label}
            </div>
            <div className="counter-text flex items-center text-left text-[35px] leading-[43.925px] font-bold text-black max-[1199px]:text-[30px] max-[767px]:text-[26px] max-[359px]:text-2xl">
              <div>{counter.count}</div>
              <span>{counter.suffix}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="review-wraper my-[50px] flex flex-wrap items-center justify-between gap-y-2.5 max-[1199px]:my-[30px] max-[767px]:flex-col max-[767px]:gap-y-0 max-[767px]:[&>div:not(:last-child)]:mb-2.5">
        {badges.map((badge) => (
          <div
            key={badge.alt}
            className="review-col w-[calc(25%-5px)] max-[1199px]:w-[calc(50%-5px)] max-[767px]:w-full"
          >
            <div className="review-link relative rounded-[9px] bg-[linear-gradient(to_right,#15c064,#00d1ff)] p-[1px] after:absolute after:inset-0 after:-z-10 after:rounded-[9px] after:bg-black/10 after:blur-[9px] after:content-['']">
              <a
                className="flex h-full w-full items-center justify-center rounded-[9px] bg-white px-2.5 py-[19.5px] transition-opacity hover:opacity-90 max-[1199px]:h-[76px] max-[1199px]:py-[15px]"
                href={badge.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={badge.ariaLabel}
              >
                <Image
                  className="max-h-full min-h-[44px] w-auto max-[1199px]:min-h-0"
                  src={badge.image}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <QuoteTestimonials />
    </div>
  );
}
