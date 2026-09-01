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
  items?: readonly HappyClientTestimonialItem[];
  className?: string;
  variant?: "client-stories";
  controlsLabels?: { ariaLabel: string; previous: string; next: string };
};

export function HappyClientSection({
  heading = shopifyPlusAgencyTestimonials.heading,
  description = shopifyPlusAgencyTestimonials.description,
  eyebrow = sharedUiCopy.testimonials.eyebrow,
  items = shopifyPlusAgencyTestimonials.items,
  className,
  controlsLabels = sharedUiCopy.testimonials,
}: HappyClientSectionProps = {}) {
  const carouselAriaLabel = controlsLabels.ariaLabel;

  return (
    <section className={cn("happy-client-sec overflow-hidden py-20 max-[992px]:py-[50px]", className)} data-section="testimonials" id="client-testimonials">
      <Container>
        <div className="mb-[50px] grid grid-cols-2 gap-12 text-left max-[992px]:mb-[30px] max-[992px]:grid-cols-1 max-[992px]:gap-3">
          <div>
            {eyebrow ? <Eyebrow className="mb-[16px] text-muted">{eyebrow}</Eyebrow> : null}
            <h2 className="font-montreal-medium text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
              {heading}
            </h2>
          </div>
          <p className="happy-client-desc mx-auto max-w-[800px] text-[16px] font-medium leading-[30.4px] text-muted max-[992px]:text-sm max-[992px]:leading-[25px]">
            {description.replaceAll("<br>", " ")}
          </p>
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
