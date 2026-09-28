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
  description: string;
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
  className?: string;
  paddingClassName?: string;
};

export function CityPageHeroSection({
  content,
  className,
  paddingClassName = "pt-[91px] pb-0 max-[991px]:pt-16 max-[991px]:pb-0",
}: CityPageHeroSectionProps) {
  const hasTabletSlider = Boolean(content.tabletSlider);

  return (
    <section
      className={cn(
        "hero-new-section relative overflow-hidden bg-[#f7f4e9]",
        paddingClassName,
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "wrapper flex",
            hasTabletSlider
              ? "flex-wrap items-end justify-between max-[991px]:flex-col max-[991px]:items-center"
              : "max-[991px]:flex-col",
          )}
        >
          <div
            className={cn(
              "left-col z-1 flex flex-col justify-center",
              hasTabletSlider
                ? "w-[51%] py-[60px] max-[1199px]:w-1/2 max-[991px]:w-full max-[991px]:text-center max-[991px]:py-8"
                : "w-full max-w-[760px] max-[1199px]:max-w-none max-[1199px]:text-center",
            )}
          >
            <div className="hero-content">
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:text-[12px] max-[1199px]:justify-center max-[767px]:pl-6 max-[767px]:text-[10px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                  {content.eyebrows.map((item, idx) => (
                    <span
                      key={item}
                      className={cn(
                        "relative inline-flex items-center",
                        idx > 0 &&
                          "ml-2.5 pl-2.5 after:absolute after:-left-[2px] after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#535353] after:content-['']",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="mb-2.5 font-heading text-[50px] font-normal leading-[60px] tracking-normal text-[#282828] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.title}
              </h1>
              <p className="mt-3 font-montserrat text-base font-medium leading-7 text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[24px]">
                {content.description}
              </p>
              {(content.primaryCta || content.secondaryCta) && (
                <div className="btn-group mt-6 flex items-center gap-3.5 max-[1199px]:justify-center max-[767px]:flex-col max-[767px]:gap-2.5">
                  {content.primaryCta && (
                    <ButtonLink
                      variant="primary"
                      href={content.primaryCta.href}
                      className="max-[767px]:w-full"
                    >
                      {content.primaryCta.label}
                    </ButtonLink>
                  )}
                  {content.secondaryCta && (
                    <ButtonLink
                      variant="outline"
                      href={content.secondaryCta.href}
                      className="max-[767px]:w-full"
                    >
                      {content.secondaryCta.label}
                    </ButtonLink>
                  )}
                </div>
              )}
            </div>

            {content.badges && content.badges.length > 0 && (
              <div
                className="global_brands_grid_wrap relative mt-[30px] -mx-[15px] flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
                aria-label="Partnerships and independent review profiles"
              >
                {content.badges.map((badge, idx) => (
                  <div
                    className="global_brands_item relative border-r border-[#d9d9d9] px-[15px] first:pl-[15px] last:border-r-0 max-[767px]:w-1/2 max-[767px]:border-0 max-[767px]:p-3.5 max-[767px]:text-center"
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
            <div className="right-col flex w-[43.182%] items-end max-[1199px]:w-[48%] max-[991px]:hidden">
              <CityHeroTabletSlider slider={content.tabletSlider} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
