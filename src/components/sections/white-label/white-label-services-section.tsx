import { WhiteLabelServiceAccordion } from "@/components/sections/white-label/white-label-service-accordion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
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
    <section className="bg-[#171e16] py-20 max-[992px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        {eyebrow ? (
          <div data-aos="fade-up" className="section_title_with_eyebrow mb-12 flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col max-[991px]:gap-4">
            <div className="title max-w-[620px]">
              <div className="eyebrow mb-3">
                <Eyebrow tone="inverse">{eyebrow}</Eyebrow>
              </div>
              <h2 className="font-sans text-[35px] font-bold leading-[48px] tracking-[-0.7px] text-white max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
                {title}
              </h2>
            </div>
            {description ? (
              <div className="section_text max-w-[560px]">
                <p className="text-base font-medium leading-[27px] text-white/80 max-[767px]:text-sm max-[767px]:leading-6">
                  {description}
                </p>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <h2 data-aos="fade-up" className={description ? "mb-5 text-center font-sans text-[35px] leading-[48.475px] font-bold text-white max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]" : "mb-16 text-center font-sans text-[35px] leading-[48.475px] font-bold text-white max-[1199px]:mb-[50px] max-[992px]:mb-10 max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px]"}>
              {title}
            </h2>
            {description ? (
              <p data-aos="fade-up" className="mx-auto mb-16 max-w-[605px] text-center text-base leading-[30.4px] font-medium text-white/80 max-[1199px]:mb-[50px] max-[992px]:mb-10 max-[992px]:text-[15px] max-[992px]:leading-[26px] max-[767px]:mb-[30px]">
                {description}
              </p>
            ) : null}
          </>
        )}
        <WhiteLabelServiceAccordion flushEnd={!showCta} idPrefix={idPrefix} services={services} />
        {showCta ? (
          <div data-aos="fade-up" className="text-center max-[992px]:pb-[10.4px]">
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
