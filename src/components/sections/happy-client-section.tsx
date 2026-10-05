import type { HappyClientTestimonialItem } from "@/components/sections/happy-client-card";
import { HappyClientCarousel } from "@/components/sections/happy-client-carousel";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { sharedUiCopy } from "@/content/common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

export type { HappyClientTestimonialItem };

export type HappyClientSectionProps = {
  heading?: string;
  description?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  items?: readonly HappyClientTestimonialItem[];
  className?: string;
  variant?: "client-stories";
  controlsLabels?: { ariaLabel: string; previous: string; next: string };
};

export function HappyClientSection({
  heading = shopifyPlusAgencyTestimonials.heading,
  description = shopifyPlusAgencyTestimonials.description,
  eyebrow = sharedUiCopy.testimonials.eyebrow,
  eyebrowClassName,
  items = shopifyPlusAgencyTestimonials.items,
  className,
  controlsLabels = sharedUiCopy.testimonials,
}: HappyClientSectionProps = {}) {
  const carouselAriaLabel = controlsLabels.ariaLabel;

  return (
    <section className={cn("happy-client-sec overflow-hidden py-20 max-[992px]:py-[50px]", className)} data-section="testimonials" id="client-testimonials">
      <Container>
        <div className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between max-[992px]:mb-[30px] max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-3">
          <div className="title w-[44%] max-[991px]:w-full">
            {eyebrow ? <Eyebrow className={cn("mb-4", eyebrowClassName)}>{eyebrow}</Eyebrow> : null}
            <h2 className="font-montreal-medium text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
              {heading}
            </h2>
          </div>
          <div className="section_text w-[48.3%] max-[991px]:w-full">
            <p className="happy-client-desc text-base font-medium leading-7 text-[#535353] max-[992px]:text-sm max-[992px]:leading-6">
              {description.replaceAll("<br>", " ")}
            </p>
          </div>
        </div>
        <HappyClientCarousel
          ariaLabel={carouselAriaLabel}
          controls={{ nextLabel: controlsLabels.next, previousLabel: controlsLabels.previous }}
          items={items}
        />
      </Container>
    </section>
  );
}
