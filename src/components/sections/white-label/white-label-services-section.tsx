import { WhiteLabelServiceAccordion } from "@/components/sections/white-label/white-label-service-accordion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { sharedUiCopy } from "@/content/common";
import { whiteLabelShopifySectionCopy, whiteLabelShopifyServices } from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";
import type { WhiteLabelService } from "@/types/white-label-service";

type WhiteLabelServicesSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  services?: readonly WhiteLabelService[];
  idPrefix?: string;
  ctaLabel?: string;
  showCta?: boolean;
};

export function WhiteLabelServicesSection({
  eyebrow,
  title = whiteLabelShopifySectionCopy.servicesTitle,
  description,
  services = whiteLabelShopifyServices,
  idPrefix = "white-label-shopify-service",
  ctaLabel = sharedUiCopy.whiteLabelServicesCta,
  showCta = true,
}: WhiteLabelServicesSectionProps) {
  return (
    <section className="bg-[#192019] py-20 max-[991px]:py-[50px]">
      <Container>
        <SplitSectionHeading
          dark
          description={description}
          eyebrow={eyebrow}
          heading={title || ""}
          textColumnClassName="max-w-[560px]"
          titleColumnClassName="max-w-[620px]"
          variant={eyebrow ? "left" : "centered"}
        />
        <WhiteLabelServiceAccordion flushEnd={!showCta} idPrefix={idPrefix} services={services} />
        {showCta ? (
          <div data-aos="fade-up" className="text-center max-[992px]:pb-[10.4px]">
            <ButtonLink
              
              href={siteConfig.quotePath}
              variant="light"
            >
              {ctaLabel}
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
