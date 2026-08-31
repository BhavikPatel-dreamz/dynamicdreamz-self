import { WhiteLabelServiceAccordion } from "@/components/sections/white-label/white-label-service-accordion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { whiteLabelShopifySectionCopy, whiteLabelShopifyServices } from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";
import type { WhiteLabelService } from "@/types/white-label-service";

type WhiteLabelServicesSectionProps = {
  title?: string;
  description?: string;
  services?: readonly WhiteLabelService[];
  idPrefix?: string;
  ctaLabel?: string;
  showCta?: boolean;
};

export function WhiteLabelServicesSection({
  title = whiteLabelShopifySectionCopy.servicesTitle,
  description,
  services = whiteLabelShopifyServices,
  idPrefix = "white-label-shopify-service",
  ctaLabel = sharedUiCopy.whiteLabelServicesCta,
  showCta = true,
}: WhiteLabelServicesSectionProps) {
  return (
    <section className="bg-[#171e16] py-20 max-[992px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <h2 className={description ? "mb-5 text-center font-sans text-[35px] leading-[48.475px] font-bold text-white max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]" : "mb-16 text-center font-sans text-[35px] leading-[48.475px] font-bold text-white max-[1199px]:mb-[50px] max-[992px]:mb-10 max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px]"}>
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mb-16 max-w-[605px] text-center text-base leading-[30.4px] font-medium text-white/80 max-[1199px]:mb-[50px] max-[992px]:mb-10 max-[992px]:text-[15px] max-[992px]:leading-[26px] max-[767px]:mb-[30px]">
            {description}
          </p>
        ) : null}
        <WhiteLabelServiceAccordion flushEnd={!showCta} idPrefix={idPrefix} services={services} />
        {showCta ? (
          <div className="text-center max-[992px]:pb-[10.4px]">
            <ButtonLink
              className="max-[992px]:min-h-0 max-[992px]:py-3 max-[992px]:text-sm max-[992px]:leading-[18px]"
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
