import type { HappyClientTestimonialItem } from "@/components/sections/happy-client-card";
import { HappyClientCarousel } from "@/components/sections/happy-client-carousel";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { sharedUiCopy } from "@/content/common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

export type { HappyClientTestimonialItem };

export type HappyClientSectionProps = {
  heading?: string | readonly string[];
  description?: string | readonly string[];
  eyebrow?: string;
  items?: readonly HappyClientTestimonialItem[];
  controlsLabels?: { ariaLabel: string; previous: string; next: string };
  variant?: "client-stories";
  className?: string;
  hasTopPadding?: boolean;
};

export function HappyClientSection({
  heading = shopifyPlusAgencyTestimonials.heading,
  description = shopifyPlusAgencyTestimonials.description,
  eyebrow = sharedUiCopy.testimonials.eyebrow,
  items = shopifyPlusAgencyTestimonials.items,
  controlsLabels = sharedUiCopy.testimonials,
  variant,
  className,
  hasTopPadding = false,
}: HappyClientSectionProps = {}) {
  const carouselAriaLabel = controlsLabels.ariaLabel;
  const isWhite = variant === "client-stories";

  return (
    <section
      className={cn(
        "happy-client-sec overflow-hidden",
        hasTopPadding
          ? "pt-20 pb-20 max-[991px]:py-[50px]"
          : "pt-0 pb-20 max-[991px]:pt-0 max-[991px]:pb-[50px]",
        isWhite ? "bg-white" : undefined,
        className,
      )}
      data-section="testimonials"
      id="client-testimonials"
    >
      <Container>
        <SplitSectionHeading
          description={description}
          eyebrow={eyebrow}
          heading={heading}
          variant="left"
        />
        <div data-aos="fade-up">
          <HappyClientCarousel
            ariaLabel={carouselAriaLabel}
            controls={{ nextLabel: controlsLabels.next, previousLabel: controlsLabels.previous }}
            items={items}
          />
        </div>
      </Container>
    </section>
  );
}
