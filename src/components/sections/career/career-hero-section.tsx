import Image from "next/image";
import { useId } from "react";

import styles from "@/components/sections/career/career-hero-section.module.css";
import { ClientAfterViewport } from "@/components/ui/client-after-viewport";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { careerHero } from "@/content/career";
import { cn } from "@/lib/class-names";

export type CareerHeroBadgeItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
};

export type CareerHeroImageItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CareerHeroSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  badges?: CareerHeroBadgeItem[];
  scrollingImages?: CareerHeroImageItem[];
};

export function CareerHeroSection({
  eyebrow = careerHero.eyebrow,
  title = careerHero.title,
  description = careerHero.description,
  badges = careerHero.badges,
  scrollingImages = careerHero.scrollingImages,
}: CareerHeroSectionProps = {}) {
  const scrollingTrackId = useId();

  return (
    <section className="hero-new-section hide-logo relative overflow-hidden bg-[#f7f4e9] pt-[91px] max-[992px]:pt-16">
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between max-[992px]:flex-col">
          <div className="left-col z-1 flex w-[51%] flex-col justify-center py-[60px] max-[1200px]:w-1/2 max-[992px]:w-full max-[992px]:py-8 max-[992px]:text-center">
            <div className="hero-content">
              {eyebrow ? (
                <Eyebrow
                  align="responsive-center"
                  className="mb-[15px]"
                  linePosition="overlay"
                >
                  {eyebrow}
                </Eyebrow>
              ) : null}

              <h1 className="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-[#282828] max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]">
                {title}
              </h1>

              <p className="mt-3 font-montserrat text-base font-medium leading-7 text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[24px]">
                {description}
              </p>
            </div>

            <div
              className="global_brands_grid_wrap relative -mx-[15px] mt-[30px] flex items-center max-[1200px]:justify-center max-[768px]:-mx-[15px] max-[768px]:w-[calc(100%+30px)] max-[768px]:flex-wrap max-[768px]:overflow-hidden"
              aria-label="Partnerships and independent review profiles"
            >
              {badges.map((badge, idx) => (
                <div
                  className={cn(
                    "global_brands_item relative border-r border-[#d9d9d9] px-[15px] last:border-r-0",
                    "max-[768px]:w-1/3 max-[768px]:border-r max-[768px]:border-[#d9d9d9] max-[768px]:last:border-r-0 max-[768px]:p-2.5 max-[768px]:text-center",
                  )}
                  key={`${badge.href}-${idx}`}
                >
                  <a
                    className="flex items-center justify-center"
                    href={badge.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt={badge.alt}
                      className="h-auto w-auto max-w-[100px] object-contain"
                      height={badge.height}
                      src={badge.src}
                      width={badge.width}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="right-col relative flex h-[580px] w-[48%] overflow-hidden max-[1200px]:w-[48%] max-[992px]:mt-6 max-[992px]:h-[260px] max-[992px]:w-full max-[768px]:hidden">
            <div className="scrolling_img_wrap relative h-full w-full overflow-hidden">
              <div className="scrolling_anim_img absolute inset-0 px-[68px] max-[1200px]:px-5 max-[992px]:relative max-[992px]:px-0">
                <div id={scrollingTrackId} className={cn("scrolling_track", styles.scrollingTrack)}>
                  <div className={cn("scrolling_img", styles.scrollingImg)}>
                    {scrollingImages.map((img, i) => (
                      <div
                        className="item_img mb-6 flex shrink-0 overflow-hidden rounded-[15.93px] shadow-[6.371px_6.371px_15.929px_0_rgba(0,0,0,0.06)] max-[992px]:mb-0 max-[992px]:mr-4 max-[992px]:h-[227px] max-[992px]:w-[342px] max-[992px]:rounded-[10px]"
                        key={`hero-img-${i}`}
                      >
                        <Image
                          alt={img.alt}
                          className="h-full w-full object-cover object-top"
                          height={img.height}
                          priority={i === 0}
                          src={img.src}
                          width={img.width}
                        />
                      </div>
                    ))}
                  </div>
                  <ClientAfterViewport rootId={scrollingTrackId}>
                    <div
                      aria-hidden="true"
                      data-career-track-clone
                      className={cn("scrolling_img", styles.scrollingImg)}
                    >
                      {scrollingImages.map((img, i) => (
                        <div
                          className="item_img mb-6 flex shrink-0 overflow-hidden rounded-[15.93px] shadow-[6.371px_6.371px_15.929px_0_rgba(0,0,0,0.06)] max-[992px]:mb-0 max-[992px]:mr-4 max-[992px]:h-[227px] max-[992px]:w-[342px] max-[992px]:rounded-[10px]"
                          key={`hero-img-dup-${i}`}
                        >
                          <Image
                            alt=""
                            className="h-full w-full object-cover object-top"
                            height={img.height}
                            src={img.src}
                            width={img.width}
                          />
                        </div>
                      ))}
                    </div>
                  </ClientAfterViewport>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
