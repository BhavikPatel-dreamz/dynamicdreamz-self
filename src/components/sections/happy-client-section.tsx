import { Fragment } from "react";

import { HappyClientCard, type HappyClientTestimonialItem } from "@/components/sections/happy-client-card";
import { HappyClientCarousel } from "@/components/sections/happy-client-carousel";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

export type { HappyClientTestimonialItem };

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
  const carouselAriaLabel = controlsLabels?.ariaLabel ?? "Client video testimonials";

  return (
    <section className={cn("happy-client-sec overflow-hidden pb-20 max-[991px]:pb-[50px]", clientStories ? "pt-20 max-[991px]:pt-[50px]" : "pt-0", className)} data-section="testimonials" id="client-testimonials">
      <Container>
        <div className={cn("mb-[50px] max-[767px]:mb-[30px]", clientStories ? "grid grid-cols-2 gap-12 text-left max-[991px]:grid-cols-1 max-[991px]:gap-3" : "text-center")}>
          <div>
            {clientStories && eyebrow ? <Eyebrow className="mb-[16px] text-muted">{eyebrow}</Eyebrow> : null}
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
        {clientStories ? (
          <HappyClientCarousel
            ariaLabel={carouselAriaLabel}
            controls={controlsLabels ? { nextLabel: controlsLabels.next, previousLabel: controlsLabels.previous } : undefined}
            items={items}
          />
        ) : (
          <HorizontalDragScroll
            ariaLabel={carouselAriaLabel}
            className="overflow-hidden relative left-1/2 w-screen -translate-x-1/2 [scroll-padding-inline-start:16px] min-[576px]:[scroll-padding-inline-start:calc((100vw-540px)/2+16px)] min-[768px]:[scroll-padding-inline-start:calc((100vw-720px)/2+20px)] min-[992px]:[scroll-padding-inline-start:calc((100vw-960px)/2+20px)] min-[1200px]:[scroll-padding-inline-start:calc((100vw-1180px)/2+20px)] min-[1400px]:[scroll-padding-inline-start:calc((100vw-1360px)/2+20px)]"
            trackClassName="flex items-stretch snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-max px-4 min-[576px]:px-[calc((100vw-540px)/2+16px)] min-[768px]:px-[calc((100vw-720px)/2+20px)] min-[992px]:px-[calc((100vw-960px)/2+20px)] min-[1200px]:px-[calc((100vw-1180px)/2+20px)] min-[1400px]:px-[calc((100vw-1360px)/2+20px)]"
          >
            {items.map((testimonial) => (
              <div
                className="carousel-item snap-start mx-[5px] mb-5 [flex:0_0_calc(100vw-42px)] min-[576px]:[flex-basis:508px] min-[768px]:mx-[12.5px] min-[768px]:[flex-basis:327.5px] min-[992px]:[flex-basis:447.5px] min-[1200px]:[flex-basis:557.5px] min-[1400px]:[flex-basis:647.5px] max-[767px]:pr-0"
                data-carousel-item
                key={testimonial.name}
              >
                <HappyClientCard testimonial={testimonial} variant="classic" />
              </div>
            ))}
          </HorizontalDragScroll>
        )}
      </Container>
    </section>
  );
}
