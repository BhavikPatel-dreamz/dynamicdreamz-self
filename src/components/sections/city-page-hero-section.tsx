import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
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
};

export function CityPageHeroSection({
  content,
  className,
}: CityPageHeroSectionProps) {
  const hasTabletSlider = Boolean(content.tabletSlider);

  return (
    <section
      className={cn(
        "hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[150px] pb-10 max-[992px]:pt-[100px] max-[767px]:pt-20",
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
                <div className="eyebrow mb-4 inline-flex items-center text-[14px] leading-1.2 font-semibold uppercase text-ink relative pl-10 before:content-[''] before:w-[30px] before:h-0.5 before:bg-brand-red before:absolute before:left-0 before:top-1.5 max-[1199px]:text-[12px] max-[767px]:text-[10px] max-[1199px]:justify-center">
                  {content.eyebrows.map((item, idx) => (
                    <span
                      key={item}
                      className={cn(
                        "relative inline-flex items-center",
                        idx > 0 &&
                          "ml-2.5 pl-2.5 after:content-[''] after:absolute after:-left-[2px] after:size-[3px] after:rounded-full after:bg-[#535353]",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.title}
              </h1>
              <p className="mt-3 text-base font-medium leading-[190%] text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[25.2px]">
                {content.description}
              </p>
              {(content.primaryCta || content.secondaryCta) && (
                <div className="btn-group mt-6 flex items-center gap-3.5 max-[1199px]:justify-center max-[767px]:flex-col max-[767px]:gap-2.5">
                  {content.primaryCta && (
                    <Link
                      href={content.primaryCta.href}
                      className="btn inline-flex min-h-[50px] items-center justify-center rounded-[50px] bg-[#ad5151] px-8 text-sm font-bold uppercase tracking-[0.5px] text-white transition-all duration-300 hover:bg-[#8f3f3f] max-[767px]:w-full"
                    >
                      {content.primaryCta.label}
                    </Link>
                  )}
                  {content.secondaryCta && (
                    <Link
                      href={content.secondaryCta.href}
                      className="btn scroll_down_link inline-flex min-h-[50px] items-center justify-center rounded-[50px] border border-[rgba(40,40,40,0.2)] bg-transparent px-8 text-sm font-bold uppercase tracking-[0.5px] text-ink transition-all duration-300 hover:bg-black hover:text-white max-[767px]:w-full"
                    >
                      {content.secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {content.badges && content.badges.length > 0 && (
              <div
                className="global_brands_grid_wrap relative mt-10 flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
                aria-label="Partnerships and independent review profiles"
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
