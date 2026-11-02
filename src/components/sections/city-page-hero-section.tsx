import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/class-names";
import {
  CityHeroTabletSlider,
  type CityPageHeroTabletSlider,
} from "@/components/sections/city-hero-tablet-slider";

export type CityPageHeroBadge = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export type CityPageHeroContent = {
  eyebrows?: readonly string[];
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  badges?: readonly CityPageHeroBadge[];
  tabletSlider?: CityPageHeroTabletSlider;
};

export type CityPageHeroSectionProps = {
  content: CityPageHeroContent;
};

export function CityPageHeroSection({
  content,
}: CityPageHeroSectionProps) {
  const hasTabletSlider = Boolean(content.tabletSlider);
  const primaryCta =
    content.primaryCta ??
    (content.ctaLabel && content.ctaHref
      ? { label: content.ctaLabel, href: content.ctaHref }
      : undefined);
  const isHideLogo = Boolean(
    content.badges && content.badges.length === 3,
  );

  return (
    <section
      className="hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[992px]:pt-16 max-[992px]:pb-0"
    >
      <Container>
        <div
          className={cn(
            "wrapper flex",
            hasTabletSlider
              ? "flex-wrap items-end justify-between max-[992px]:flex-col max-[992px]:items-center"
              : "max-[992px]:flex-col",
          )}
        >
          <div
            className={cn(
              "left-col z-1 flex flex-col justify-center",
              hasTabletSlider
                ? "w-[51%] py-[60px] max-[1200px]:w-1/2 max-[992px]:w-full max-[992px]:text-center max-[992px]:py-8"
                : "w-full max-w-[760px] max-[1200px]:max-w-none max-[1200px]:text-center",
            )}
          >
            <div className="hero-content">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[1200px]:mx-auto max-[1200px]:justify-center max-[768px]:mx-auto max-[768px]:justify-center max-[768px]:pl-6 max-[768px]:before:top-1 max-[768px]:before:w-[15px]">
                  {content.eyebrows.map((item, idx) => (
                    <span
                      key={item}
                      className={cn(
                        "relative inline-flex items-center font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] max-[1200px]:text-[12px] max-[768px]:text-[10px]",
                        idx > 0 &&
                          "ml-2.5 pl-2.5 after:absolute after:-left-[2px] after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#535353] after:content-['']",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-[#282828] max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]">
                {content.title}
                {content.titleHighlight ? (
                  <> <i className="not-italic text-brand-red">{content.titleHighlight}</i></>
                ) : null}
              </h1>
              {content.subtitle && (
                <span className="h4 mb-2.5 block font-montserrat text-base font-semibold leading-7 text-[#535353] max-[992px]:text-sm max-[992px]:leading-6 max-[768px]:text-base max-[768px]:leading-[27px]">
                  {content.subtitle}
                </span>
              )}
              <p className="mt-3 font-montserrat text-base font-medium leading-7 text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[24px]">
                {content.description}
              </p>
              {content.secondaryDescription && (
                <p className="mt-3 font-montserrat text-base font-medium leading-7 text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[24px]">
                  {content.secondaryDescription}
                </p>
              )}
              {(primaryCta || content.secondaryCta) && (
                <div className="btn-group mt-6 flex items-center gap-3.5 max-[1200px]:justify-center max-[768px]:flex-col max-[768px]:gap-2.5 [&_a]:max-[768px]:w-full [&_button]:max-[768px]:w-full">
                  {primaryCta && (
                    <ButtonLink
                      variant="primary"
                      href={primaryCta.href}
                    >
                      {primaryCta.label}
                    </ButtonLink>
                  )}
                  {content.secondaryCta && (
                    <ButtonLink
                      variant="outline"
                      href={content.secondaryCta.href}
                    >
                      {content.secondaryCta.label}
                    </ButtonLink>
                  )}
                </div>
              )}
            </div>

            {content.badges && content.badges.length > 0 && (
              <div
                className={cn(
                  "global_brands_grid_wrap relative mt-[30px] -mx-[15px] flex items-center max-[1200px]:justify-center max-[768px]:-mx-[15px] max-[768px]:w-[calc(100%+30px)] max-[768px]:flex-wrap max-[768px]:overflow-hidden",
                  isHideLogo
                    ? "max-[768px]:before:hidden max-[768px]:after:hidden"
                    : "max-[768px]:before:absolute max-[768px]:before:top-0 max-[768px]:before:left-1/2 max-[768px]:before:block max-[768px]:before:h-full max-[768px]:before:w-px max-[768px]:before:-translate-x-1/2 max-[768px]:before:bg-[#d9d9d9] max-[768px]:before:content-[''] max-[768px]:after:absolute max-[768px]:after:top-1/2 max-[768px]:after:left-5 max-[768px]:after:block max-[768px]:after:h-px max-[768px]:after:w-[calc(100%-40px)] max-[768px]:after:bg-[#d9d9d9] max-[768px]:after:content-['']",
                )}
                aria-label="Partnerships and independent review profiles"
              >
                {content.badges.map((badge, idx) => (
                  <div
                    className={cn(
                      "global_brands_item relative border-r border-[#d9d9d9] px-[15px] first:pl-[15px] last:border-r-0",
                      isHideLogo
                        ? "max-[768px]:w-1/3 max-[768px]:border-r max-[768px]:border-[#d9d9d9] max-[768px]:last:border-r-0 max-[768px]:p-2.5 max-[768px]:text-center"
                        : "max-[768px]:w-1/2 max-[768px]:border-0 max-[768px]:p-3.5 max-[768px]:text-center",
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
                        className="h-auto w-auto max-w-[100px] object-contain"
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

          {content.tabletSlider && (
            <div className="right-col flex w-[43.182%] items-end max-[1200px]:w-[48%] max-[992px]:hidden">
              <CityHeroTabletSlider slider={content.tabletSlider} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
