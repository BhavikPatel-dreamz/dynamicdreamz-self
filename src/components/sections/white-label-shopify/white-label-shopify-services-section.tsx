import { WhiteLabelShopifyServiceAccordion } from "@/components/sections/white-label-shopify/white-label-shopify-service-accordion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { whiteLabelShopifyServices } from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";

export function WhiteLabelShopifyServicesSection() {
  return (
    <section className="bg-[#171e16] py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <h2 className="mb-16 text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-white max-[1199px]:mb-[50px] max-[991px]:mb-10 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
          Comprehensive White Label Shopify Development Services
        </h2>
        <WhiteLabelShopifyServiceAccordion services={whiteLabelShopifyServices} />
        <div className="text-center max-[991px]:pb-[10.4px]">
          <ButtonLink
            className="max-[991px]:min-h-0 max-[991px]:py-3 max-[991px]:text-sm max-[991px]:leading-[18px]"
            href={siteConfig.quotePath}
            variant="light"
          >
            Let me give you a hand to help you
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
