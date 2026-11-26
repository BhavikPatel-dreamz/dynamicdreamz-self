import Image from "next/image";

import { PricingPackageSelector } from "@/components/sections/buy-shopify-development-hours/pricing-package-selector";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  shopifyHoursHero,
  shopifyHoursPackages,
  type ShopifyHoursPackage,
} from "@/content/buy-shopify-development-hours";

export type ShopifyHoursHeroContent = {
  eyebrows: readonly string[];
  title: string;
  emphasizedTitle?: string;
  description: string;
  highlightsHeading: string;
  highlights: readonly string[];
  pricingHeading: {
    prefix: string;
    accent: string;
    suffix: string;
  };
  quoteLabel: string;
  quoteHref: string;
};

export type ShopifyHoursHeroSectionProps = {
  content?: ShopifyHoursHeroContent;
  packages?: readonly ShopifyHoursPackage[];
};

export function ShopifyHoursHeroSection({
  content = shopifyHoursHero,
  packages = shopifyHoursPackages,
}: ShopifyHoursHeroSectionProps = {}) {
  const titleStart = content.emphasizedTitle
    ? content.title.replace(content.emphasizedTitle, "")
    : content.title;

  return (
    <section
      aria-labelledby="shopify-hours-hero-title"
      className="inner-hero-sec hire-shopify-dev-flexi-hours relative mb-20 overflow-hidden rounded-b-[50px] bg-cream pt-40 pb-20 max-[1200px]:mb-[60px] max-[992px]:pt-[100px] max-[992px]:pb-10"
    >
      <Container>
        <div data-aos="fade-up" className="hire-shopify-dev-flexi-hours-row flex flex-wrap items-center">
          <div className="hire-shopify-dev-left w-[51%] max-[992px]:w-full">
            <div className="section_title_with_eyebrow mb-[10px]">
              {/* The live eyebrow sits inline inside the 24px `.title` line box,
                  so the same 14px/24px context is reproduced here. */}
              <div className="title w-full text-[14px] leading-6 max-[992px]:flex">
                <Eyebrow
                  as="span"
                  items={content.eyebrows}
                  linePosition="overlay"
                  tone="muted"
                />
              </div>
            </div>
            <h1
              className="mb-3 font-montreal-medium text-[50px] leading-[60px] font-normal text-ink max-[992px]:text-[40px] max-[992px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-10"
              id="shopify-hours-hero-title"
            >
              {titleStart}
              {content.emphasizedTitle ? <span>{content.emphasizedTitle}</span> : null}
            </h1>
            <p className="mt-3 mb-[15px] font-sans text-[16px] leading-[28px] font-medium text-muted max-[1200px]:text-sm max-[1200px]:leading-6">
              {content.description}
            </p>
            <div className="hire-shopify-dev-list w-full max-w-[460px] pt-2.5">
              <h5 className="mb-5 font-montserrat text-base font-semibold text-brand-red">
                {content.highlightsHeading}
              </h5>
              <ul>
                {content.highlights.map((highlight) => (
                  <li
                    className="relative mb-[13px] border-b border-black/10 pb-[13px] pl-[27px] font-sans text-sm leading-[normal] font-medium text-ink last:mb-0 last:border-b-0 last:pb-0 max-[768px]:pl-[31px] max-[768px]:leading-[22px]"
                    key={highlight}
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-[21px] w-[17px] max-[768px]:top-0 max-[768px]:size-[19px]"
                      height={21}
                      src="/assets/buy-shopify-development-hours/icons/key-highlights.svg"
                      width={17}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" className="hire-shopify-dev-right w-[49%] pl-[50px] max-[992px]:w-full max-[992px]:pt-[50px] max-[992px]:pl-0">
            <PricingPackageSelector
              heading={content.pricingHeading}
              packages={packages}
              quoteHref={content.quoteHref}
              quoteLabel={content.quoteLabel}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
