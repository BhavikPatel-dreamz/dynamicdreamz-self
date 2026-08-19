import Image from "next/image";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { VideoDialog } from "@/components/ui/video-dialog";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

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
  items?: readonly HappyClientTestimonialItem[];
  className?: string;
};

export function HappyClientSection({
  heading = shopifyPlusAgencyTestimonials.heading,
  description = shopifyPlusAgencyTestimonials.description,
  items = shopifyPlusAgencyTestimonials.items,
  className = "happy-client-sec pt-0 pb-20 overflow-hidden max-[991px]:pb-[50px]",
}: HappyClientSectionProps = {}) {
  return (
    <section className={className} data-section="testimonials" id="client-testimonials">
      <Container>
        <div className="mb-[50px] text-center max-[767px]:mb-[30px]">
          <h2 className="mb-6 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {heading}
          </h2>
          <p className="mx-auto max-w-[800px] text-[18px] font-medium leading-[34.2px] text-muted max-[991px]:text-base max-[991px]:leading-[25px]">
            {description.split("<br>").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
              </span>
            ))}
          </p>
        </div>
        <HorizontalDragScroll
          ariaLabel="Client video testimonials"
          className="relative left-1/2 w-screen -translate-x-1/2 snap-x snap-mandatory [scroll-padding-inline-start:16px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[576px]:[scroll-padding-inline-start:calc((100vw-540px)/2+16px)] min-[768px]:[scroll-padding-inline-start:calc((100vw-720px)/2+20px)] min-[992px]:[scroll-padding-inline-start:calc((100vw-960px)/2+20px)] min-[1200px]:[scroll-padding-inline-start:calc((100vw-1180px)/2+20px)] min-[1400px]:[scroll-padding-inline-start:calc((100vw-1360px)/2+20px)]"
          trackClassName="flex w-max items-stretch gap-2.5 px-4 min-[576px]:px-[calc((100vw-540px)/2+16px)] min-[768px]:gap-[25px] min-[768px]:px-[calc((100vw-720px)/2+20px)] min-[992px]:px-[calc((100vw-960px)/2+20px)] min-[1200px]:px-[calc((100vw-1180px)/2+20px)] min-[1400px]:px-[calc((100vw-1360px)/2+20px)]"
        >
          {items.map((testimonial) => (
            <div
              className="snap-start [flex:0_0_calc(100vw-32px)] min-[576px]:[flex-basis:508px] min-[768px]:[flex-basis:327.5px] min-[992px]:[flex-basis:447.5px] min-[1200px]:[flex-basis:557.5px] min-[1400px]:[flex-basis:647.5px]"
              data-carousel-item
              key={testimonial.name}
            >
              <div className="h-full overflow-hidden rounded-[15px] border border-[#d9d9d9] bg-white">
                  <div className="relative min-h-[324px] max-[1199px]:min-h-[240px]">
                    <VideoDialog
                      className="min-h-[324px] !rounded-none max-[1199px]:min-h-[240px]"
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
                    <h3 className="pointer-events-none absolute bottom-[22px] left-[36px] z-20 m-0 inline-block rounded-[30px] bg-white px-4 py-[10px] text-center text-base font-semibold leading-[21px] text-ink max-[1199px]:bottom-5 max-[1199px]:left-5 max-[1199px]:px-3.5 max-[1199px]:py-[7px] max-[1199px]:text-sm max-[1199px]:leading-[21px]">
                      {testimonial.name}
                      <span className="ml-[11px] border-l border-[#dbdbdb] pr-0 pl-[11px] text-base font-normal leading-[21px] max-[1199px]:ml-[7px] max-[1199px]:pl-[7px] max-[1199px]:text-xs">
                        {testimonial.company}
                      </span>
                    </h3>
                    <Image
                      aria-hidden="true"
                      className="pointer-events-none absolute top-[26px] right-[26px] z-20 h-10 w-[46px]"
                      src="/assets/request-quote/icons/quote-icon.svg"
                      alt=""
                      width={46}
                      height={40}
                    />
                  </div>
                  <div className="p-[33px_36px_39px] max-[1199px]:p-5">
                    <p className="mb-6 text-base font-normal leading-[28.64px] text-[#535353]">
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
