import Image from "next/image";
import { Fragment } from "react";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { VideoDialog } from "@/components/ui/video-dialog";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

export type HappyClientTestimonialItem = {
  name: string;
  company: string;
  quote: string;
  videoId: string;
  image: string;
  imageAlt: string;
};

export type HappyClientSectionProps = {
  heading?: string;
  description?: string;
  eyebrow?: string;
  items?: readonly HappyClientTestimonialItem[];
  className?: string;
  variant?: "classic" | "client-stories";
  controlsLabels?: { ariaLabel: string; previous: string; next: string };
};

export function HappyClientSection({
  heading = shopifyPlusAgencyTestimonials.heading,
  description = shopifyPlusAgencyTestimonials.description,
  eyebrow,
  items = shopifyPlusAgencyTestimonials.items,
  className,
  variant = "classic",
  controlsLabels,
}: HappyClientSectionProps = {}) {
  const clientStories = variant === "client-stories";

  return (
    <section className={cn("happy-client-sec overflow-hidden pb-20 max-[991px]:pb-[50px]", clientStories ? "pt-20 max-[991px]:pt-[50px]" : "pt-0", className)} data-section="testimonials" id="client-testimonials">
      <Container>
        <div className={cn("mb-[50px] max-[767px]:mb-[30px]", clientStories ? "grid grid-cols-2 gap-12 text-left max-[991px]:grid-cols-1 max-[991px]:gap-5" : "text-center")}>
          <div>
            {clientStories && eyebrow ? <p className="mb-[16px] flex items-center gap-3 text-sm font-semibold uppercase leading-5 text-ink before:h-[2px] before:w-7.5 before:bg-[#ad3434] before:content-['']">{eyebrow}</p> : null}
            <h2 className={cn("font-montreal-medium text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]", clientStories ? "mb-0" : "mb-6")}>
              {heading}
            </h2>
          </div>
          <p className="happy-client-desc mx-auto max-w-[800px] text-[16px] font-medium leading-[30.4px] text-muted max-[991px]:text-sm max-[991px]:leading-[25px]">
            {description.split("<br>").map((line, index, lines) => (
              <Fragment key={index}>
                {line}
                {index < lines.length - 1 ? <br className="hidden" /> : null}
              </Fragment>
            ))}
          </p>
        </div>
        <HorizontalDragScroll
          ariaLabel={controlsLabels?.ariaLabel ?? "Client video testimonials"}
          className={cn("snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", clientStories ? "w-full" : "relative left-1/2 w-screen -translate-x-1/2 [scroll-padding-inline-start:16px] min-[576px]:[scroll-padding-inline-start:calc((100vw-540px)/2+16px)] min-[768px]:[scroll-padding-inline-start:calc((100vw-720px)/2+20px)] min-[992px]:[scroll-padding-inline-start:calc((100vw-960px)/2+20px)] min-[1200px]:[scroll-padding-inline-start:calc((100vw-1180px)/2+20px)] min-[1400px]:[scroll-padding-inline-start:calc((100vw-1360px)/2+20px)]")}
          trackClassName={cn("flex items-stretch", clientStories ? "w-full gap-[30px]" : "w-max gap-2.5 px-4 min-[576px]:px-[calc((100vw-540px)/2+16px)] min-[768px]:gap-[25px] min-[768px]:px-[calc((100vw-720px)/2+20px)] min-[992px]:px-[calc((100vw-960px)/2+20px)] min-[1200px]:px-[calc((100vw-1180px)/2+20px)] min-[1400px]:px-[calc((100vw-1360px)/2+20px)]")}
          controls={clientStories && controlsLabels ? {
            className: "mt-[30px] flex justify-center gap-3",
            buttonClassName: "flex size-[46px] cursor-pointer items-center justify-center rounded-full border border-[#efd1d1] bg-[#fae8e8] text-[#ad3434] transition-colors hover:bg-[#f4dada] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad3434] disabled:cursor-not-allowed",
            disabledButtonClassName: "opacity-45",
            previousLabel: controlsLabels.previous,
            nextLabel: controlsLabels.next,
          } : undefined}
        >
          {items.map((testimonial) => (
            <div
              className={cn("snap-start", clientStories ? "[flex:0_0_100%] min-[768px]:[flex-basis:calc((100%_-_30px)/2)] min-[1200px]:[flex-basis:calc((100%_-_60px)/3)]" : "[flex:0_0_calc(100vw-32px)] min-[576px]:[flex-basis:508px] min-[768px]:[flex-basis:327.5px] min-[992px]:[flex-basis:447.5px] min-[1200px]:[flex-basis:557.5px] min-[1400px]:[flex-basis:647.5px] max-[767px]:[flex-basis:calc(100vw-36px)] max-[767px]:pr-[0]")}
              data-carousel-item
              key={testimonial.name}
            >
              <div className={cn("h-full overflow-hidden rounded-[15px] bg-white", clientStories ? "shadow-[0_8px_24px_rgba(0,0,0,0.06)]" : "border border-[#d9d9d9]")}>
                  <div className={cn("relative", clientStories ? "min-h-[285px]" : "min-h-[324px] max-[1199px]:min-h-[240px]")}>
                    <VideoDialog
                      className={cn("!rounded-none", clientStories ? "min-h-[285px]" : "min-h-[324px] max-[1199px]:min-h-[240px]")}
                      overlay="/assets/request-quote/icons/quote-icon.svg"
                      overlayClassName="hidden"
                      overlayHeight={40}
                      overlayWidth={46}
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
                  <h3 className={cn("pointer-events-none font-montserrat absolute z-20 m-0 inline-block text-[15px] font-semibold leading-[21px] max-[1199px]:text-sm max-[1199px]:leading-[21px]", clientStories ? "bottom-[15px] left-[15px] rounded-[4px] border-l-[3px] border-brand-red bg-black/80 px-[14px] py-[10px] text-left text-white" : "bottom-[22px] left-[36px] rounded-[30px] bg-white px-4 py-[10px] text-center text-ink max-[1199px]:bottom-5 max-[1199px]:left-5 max-[1199px]:px-3.5 max-[1199px]:py-[7px]")}>
                      {testimonial.name}
                      <span className={cn("font-medium", clientStories ? "mt-1 block text-[15px] leading-5" : "ml-[11px] border-l border-[#dbdbdb] pr-0 pl-[11px] text-base leading-[21px] max-[1199px]:ml-[7px] max-[1199px]:pl-[7px] max-[1199px]:text-xs")}>
                        {testimonial.company}
                      </span>
                    </h3>
                    {!clientStories ? <Image
                      aria-hidden="true"
                      className="pointer-events-none absolute top-[26px] right-[26px] z-20 h-10 w-[46px]"
                      src="/assets/request-quote/icons/quote-icon.svg"
                      alt=""
                      width={46}
                      height={40}
                    /> : null}
                  </div>
                  <div className={cn(clientStories ? "min-h-[184px] px-5 py-[18px]" : "p-[33px_36px_39px] max-[1199px]:p-5")}>
                    <p className={cn("text-sm font-normal text-[#535353]", clientStories ? "mb-0 leading-6 before:mr-2 before:text-[34px] before:font-bold before:leading-4 before:text-[#b64a4a] before:content-['“']" : "mb-6 leading-[28.64px]")}>
                      {testimonial.quote}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </HorizontalDragScroll>
      </Container>
    </section>
  );
}
