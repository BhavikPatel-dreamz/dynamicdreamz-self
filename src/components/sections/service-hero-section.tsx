import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyHero } from "@/content/shopify-plus-agency";

export type ServiceHeroContent = {
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel: string;
  ctaHref?: string;
};

export type ServiceHeroSectionProps = {
  content?: ServiceHeroContent;
  className?: string;
};

export function ServiceHeroSection({
  content = shopifyPlusAgencyHero,
  className = "inner-hero-sec relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]",
}: ServiceHeroSectionProps) {
  const ctaHref = content.ctaHref ?? "/request-quote";

  return (
    <section className={className}>
      <Container>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-[55.7%] max-[1199px]:w-full max-[1199px]:text-center">
            <div className="inner-hero-content">
              <h1 className="inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]">
                {content.title}
              </h1>
              <p className="mt-6 mb-6 text-base font-normal leading-[30.4px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
                {content.description}
              </p>
              {content.secondaryDescription && (
                <p className="mt-4 mb-6 text-base font-normal leading-[30.4px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
                  {content.secondaryDescription}
                </p>
              )}
              <ButtonLink
                aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                href={ctaHref}
                variant="primary"
              >
                {content.ctaLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="w-[41%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[991px]:w-full">
            <ReviewAnimation />
          </div>
        </div>
      </Container>
    </section>
  );
}
