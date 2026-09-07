import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PhoneAppSlider } from "@/components/sections/shopify-mobile-app/phone-app-slider";
import { cn } from "@/lib/class-names";
import type { shopifyMobileAppHero } from "@/content/shopify-mobile-app-development";

type ShopifyMobileAppHeroSectionProps = {
  content: typeof shopifyMobileAppHero;
};

export function ShopifyMobileAppHeroSection({
  content,
}: ShopifyMobileAppHeroSectionProps) {
  return (
    <section className="hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-[55px] max-[991px]:pt-16 max-[991px]:pb-10">
      <Container>
        <div className="wrapper flex items-center justify-between max-[1199px]:flex-col">
          <div className="left-col z-1 w-[50%] py-[60px] max-[1199px]:w-full max-[1199px]:py-10 max-[1199px]:text-center max-[767px]:py-8">
            <div className="hero-content">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:mx-auto max-[767px]:pl-6 max-[767px]:before:w-[15px]">
                  {content.eyebrows.map((item, idx) => (
                    <span
                      key={item}
                      className={cn(
                        "relative inline-flex items-center font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[767px]:text-[11px]",
                        idx > 0 &&
                          "ml-2.5 pl-2.5 after:absolute after:-left-[2px] after:top-1/2 after:-translate-y-1/2 after:inline-block after:size-[3px] after:rounded-full after:bg-[#535353] after:content-['']",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="font-montserrat text-[50px] font-bold leading-[66px] tracking-[-1px] text-[#282828] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.title}{" "}
                <span className="font-bold text-[#ad5151]">
                  {content.titleAccent}
                </span>
              </h1>

              <p className="mt-3 text-base font-medium leading-[190%] text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[25.2px]">
                {content.description}
              </p>

              <div className="btn-group mt-6 flex flex-wrap items-center gap-4 max-[1199px]:justify-center max-[767px]:flex-col max-[767px]:items-stretch">
                <ButtonLink
                  href={content.primaryCta.href}
                  variant="primary"
                  aria-label={content.primaryCta.ariaLabel}
                >
                  {content.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={content.secondaryCta.href}
                  variant="outline"
                  aria-label={content.secondaryCta.ariaLabel}
                >
                  {content.secondaryCta.label}
                </ButtonLink>
              </div>

              {content.badges && content.badges.length > 0 && (
                <div
                  className="global_brands_grid_wrap relative mt-10 flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
                  aria-label="Shopify partnership credentials and client rating badges"
                >
                  {content.badges.map((badge, idx) => (
                    <div
                      className="global_brands_item relative border-r border-[#d9d9d9] px-4 first:pl-0 last:border-r-0 max-[767px]:w-1/2 max-[767px]:border-0 max-[767px]:p-3.5 max-[767px]:text-center"
                      key={`${badge.href}-${idx}`}
                    >
                      <a
                        className="flex items-center justify-center"
                        href={badge.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <Image
                          className="h-auto max-h-11 w-auto object-contain"
                          src={badge.src}
                          alt={badge.alt}
                          width={badge.width}
                          height={badge.height}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="right-col w-[48%] max-[1199px]:w-[50%] max-[1199px]:mx-auto max-[991px]:hidden">
            <PhoneAppSlider
              slides={content.slides}
              frameImage={content.frameImage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
