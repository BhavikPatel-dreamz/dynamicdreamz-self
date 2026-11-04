import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PhoneAppSlider } from "@/components/sections/shopify-mobile-app/phone-app-slider";
import { cn } from "@/lib/class-names";

export type MobileAppHeroBadge = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export type MobileAppHeroSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MobileAppHeroContent = {
  eyebrows?: readonly string[];
  title: string;
  titleAccent?: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  badges?: readonly MobileAppHeroBadge[];
  /**
   * Mobile (<768px) layout for the badge row.
   *
   * - `divided` (default): two-column grid with a cross divider drawn between
   *   the two rows. Preserves the original behavior for existing consumers.
   * - `row`: every badge shares one row at equal width, with vertical rules
   *   between items and no cross divider. Use when the number of visible
   *   badges divides evenly across the row.
   */
  mobileBadgeLayout?: "divided" | "row";
  slides: readonly MobileAppHeroSlide[];
  frameImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ShopifyMobileAppHeroSectionProps = {
  content: MobileAppHeroContent;
};

export function ShopifyMobileAppHeroSection({
  content,
}: ShopifyMobileAppHeroSectionProps) {
  const mobileBadgeLayout = content.mobileBadgeLayout ?? "divided";
  const badgeRowLayout = mobileBadgeLayout === "row";
  const frameImage = content.frameImage ?? {
    src: "/assets/services/shopify-mobile-app-development/hero/phone-frame.png",
    alt: "Mobile app frame mockup",
    width: 235,
    height: 498,
  };

  return (
    <section className="hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] max-[992px]:pt-16">
      <Container className="max-w-[1408px] px-[15px]">
        <div className="wrapper flex items-center justify-between max-[1200px]:flex-col">
          <div className="left-col z-1 w-[53%] min-[1400px]:w-[51%] min-[1200px]:max-[1400px]:w-[50%] py-[60px] max-[1200px]:w-full max-[1200px]:py-10 max-[1200px]:text-center max-[768px]:py-8">
            <div className="hero-content">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <Eyebrow
                  align="responsive-center"
                  as="div"
                  className="mb-[15px]"
                  items={content.eyebrows}
                  linePosition="overlay"
                />
              )}

              <h1 className="mb-3 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-[#282828] max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]">
                {content.title}{" "}
                <i className="font-normal not-italic text-[#ad5151]">
                  {content.titleAccent}
                </i>
              </h1>

              <p className="mt-0 mb-[30px] text-base font-medium leading-[28px] text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[25.2px]">
                {content.description}
              </p>

              <div className="btn-group mt-[30px] flex flex-wrap items-center gap-[15px] max-[1200px]:justify-center max-[768px]:flex-col max-[768px]:items-stretch max-[575px]:w-full [&_a]:max-[575px]:w-full">
                <ButtonLink
                  href={content.primaryCta.href}
                  variant="primary"
                  aria-label={content.primaryCta.ariaLabel}
                >
                  {content.primaryCta.label}
                </ButtonLink>
                {content.secondaryCta && (
                  <ButtonLink
                    href={content.secondaryCta.href}
                    variant="outline"
                    aria-label={content.secondaryCta.ariaLabel}
                  >
                    {content.secondaryCta.label}
                  </ButtonLink>
                )}
              </div>

              {content.badges && content.badges.length > 0 && (
                <div
                  className={cn(
                    "global_brands_grid_wrap relative mt-[30px] flex items-center -mx-[15px] max-[1200px]:justify-center max-[768px]:-mx-[15px] max-[768px]:w-[calc(100%+30px)] max-[768px]:flex-wrap max-[768px]:overflow-hidden",
                    !badgeRowLayout &&
                      "max-[768px]:before:absolute max-[768px]:before:top-0 max-[768px]:before:left-1/2 max-[768px]:before:block max-[768px]:before:h-full max-[768px]:before:w-px max-[768px]:before:-translate-x-1/2 max-[768px]:before:bg-[#d9d9d9] max-[768px]:before:content-[''] max-[768px]:after:absolute max-[768px]:after:top-1/2 max-[768px]:after:left-5 max-[768px]:after:block max-[768px]:after:h-px max-[768px]:after:w-[calc(100%-40px)] max-[768px]:after:bg-[#d9d9d9] max-[768px]:after:content-['']",
                  )}
                  aria-label="Shopify partnership credentials and client rating badges"
                >
                  {content.badges.map((badge, idx) => (
                    <div
                      className={cn(
                        "global_brands_item relative px-[15px] border-r border-[#d9d9d9] last:border-r-0",
                        badgeRowLayout
                          ? "max-[768px]:w-1/3 max-[768px]:p-[15px] max-[768px]:text-center"
                          : "max-[768px]:w-1/2 max-[768px]:border-0 max-[768px]:p-[15px] max-[768px]:text-center",
                      )}
                      key={`${badge.href}-${idx}`}
                    >
                      <a
                        className="flex items-center justify-center"
                        href={badge.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <Image
                          className="h-auto max-w-[100px] w-auto object-contain max-[768px]:max-h-11"
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

          <div className="right-col w-[48%] max-[1200px]:w-[50%] max-[1200px]:mx-auto max-[1200px]:mt-5 max-[992px]:hidden">
            <PhoneAppSlider
              slides={content.slides}
              frameImage={frameImage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
