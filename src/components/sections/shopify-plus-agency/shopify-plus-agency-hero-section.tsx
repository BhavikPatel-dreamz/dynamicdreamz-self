import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyHero } from "@/content/shopify-plus-agency";

import { ReviewAnimation } from "./review-animation";

export function ShopifyPlusAgencyHeroSection() {
  return (
    <div className="inner-hero-sec shopify-plus-experts relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]">      <Container>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-[55.7%] max-[1199px]:w-full max-[1199px]:text-center">
            <div className="inner-hero-content">
              <h1 className="inline-block font-sans text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]">
                {shopifyPlusAgencyHero.title}
              </h1>
              <p className="mt-6 mb-6 text-base leading-[30.4px] font-normal text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
                {shopifyPlusAgencyHero.description}
              </p>
              <ButtonLink
                aria-label="Dynamic Dreamz - request a quote"
                href={shopifyPlusAgencyHero.ctaHref}
                variant="primary"
              >
                {shopifyPlusAgencyHero.ctaLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="w-[41%] max-[1199px]:mt-[50px] max-[1199px]:mx-auto max-[1199px]:w-1/2 max-[991px]:w-full">
            <ReviewAnimation />
          </div>
        </div>
      </Container>
    </div>
  );
}