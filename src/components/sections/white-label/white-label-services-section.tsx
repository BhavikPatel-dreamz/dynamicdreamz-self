import { WhiteLabelServiceAccordion } from "@/components/sections/white-label/white-label-service-accordion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { whiteLabelShopifyServices } from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";
import type { WhiteLabelService } from "@/types/white-label-service";

type WhiteLabelServicesSectionProps = {
  title?: string;
  services?: readonly WhiteLabelService[];
  idPrefix?: string;
  ctaLabel?: string;
};

export function WhiteLabelServicesSection({
  title = "Comprehensive White Label Shopify Development Services",
  services = whiteLabelShopifyServices,
  idPrefix = "white-label-shopify-service",
  ctaLabel = "Let me give you a hand to help you",
}: WhiteLabelServicesSectionProps) {
  return (
    <section className="bg-[#171e16] py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <h2 className="mb-16 text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-white max-[1199px]:mb-[50px] max-[991px]:mb-10 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
          {title}
        </h2>
        <WhiteLabelServiceAccordion idPrefix={idPrefix} services={services} />
        <div className="text-center max-[991px]:pb-[10.4px]">
          <ButtonLink
            className="max-[991px]:min-h-0 max-[991px]:py-3 max-[991px]:text-sm max-[991px]:leading-[18px]"
            href={siteConfig.quotePath}
            variant="light"
          >
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
