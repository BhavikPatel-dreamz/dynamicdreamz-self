import Image from "next/image";

import styles from "@/components/sections/career/career-hero-section.module.css";
import { Container } from "@/components/ui/container";
import { careerHero } from "@/content/career";
import { cn } from "@/lib/class-names";

export function CareerHeroSection() {
  return (
    <section className="hero-new-section hide-logo relative overflow-hidden bg-[#f7f4e9] pt-[91px] max-[991px]:pt-16">
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between max-[991px]:flex-col">
          <div className="left-col z-1 flex w-[51%] flex-col justify-center py-[60px] max-[1199px]:w-1/2 max-[991px]:w-full max-[991px]:py-8 max-[991px]:text-center">
            <div className="hero-content">
              {careerHero.eyebrow ? (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:justify-center max-[1199px]:text-[12px] max-[767px]:pl-6 max-[767px]:text-[10px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                  <span>{careerHero.eyebrow}</span>
                </div>
              ) : null}

              <h1 className="mb-2.5 font-montreal-medium text-[50px] font-medium leading-[60px] tracking-normal text-[#282828] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {careerHero.title}
              </h1>

              <p className="mt-3 font-montserrat text-base font-medium leading-7 text-[#535353] max-[992px]:text-[14px] max-[992px]:leading-[24px]">
                {careerHero.description}
              </p>
            </div>

            <div
              className="global_brands_grid_wrap relative -mx-[15px] mt-[30px] flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden"
              aria-label="Partnerships and independent review profiles"
            >
              {careerHero.badges.map((badge, idx) => (
                <div
                  className={cn(
                    "global_brands_item relative border-r border-[#d9d9d9] px-[15px] last:border-r-0",
                    "max-[767px]:w-1/3 max-[767px]:border-r max-[767px]:border-[#d9d9d9] max-[767px]:last:border-r-0 max-[767px]:p-2.5 max-[767px]:text-center",
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

          <div className="right-col relative flex h-[580px] w-[48%] overflow-hidden max-[1199px]:w-[48%] max-[991px]:mt-6 max-[991px]:h-[260px] max-[991px]:w-full max-[767px]:h-[240px]">
            <div className="scrolling_img_wrap relative h-full w-full overflow-hidden">
              <div className="scrolling_anim_img absolute inset-0 px-[68px] max-[1199px]:px-5 max-[991px]:relative max-[991px]:px-0">
                <div className={cn("scrolling_track", styles.scrollingTrack)}>
                  <div className={cn("scrolling_img", styles.scrollingImg)}>
                    {careerHero.scrollingImages.map((img, i) => (
                      <div
                        className="item_img mb-6 flex shrink-0 overflow-hidden rounded-[15.93px] shadow-[6.371px_6.371px_15.929px_0_rgba(0,0,0,0.06)] max-[991px]:mb-0 max-[991px]:mr-4 max-[991px]:h-[227px] max-[991px]:w-[342px] max-[991px]:rounded-[10px]"
                        key={`hero-img-${i}`}
                      >
                        <Image
                          alt={img.alt}
                          className="h-full w-full object-cover object-top"
                          height={img.height}
                          priority={i < 2}
                          src={img.src}
                          width={img.width}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className={cn("scrolling_img", styles.scrollingImg)}
                  >
                    {careerHero.scrollingImages.map((img, i) => (
                      <div
                        className="item_img mb-6 flex shrink-0 overflow-hidden rounded-[15.93px] shadow-[6.371px_6.371px_15.929px_0_rgba(0,0,0,0.06)] max-[991px]:mb-0 max-[991px]:mr-4 max-[991px]:h-[227px] max-[991px]:w-[342px] max-[991px]:rounded-[10px]"
                        key={`hero-img-dup-${i}`}
                      >
                        <Image
                          alt={img.alt}
                          className="h-full w-full object-cover object-top"
                          height={img.height}
                          src={img.src}
                          width={img.width}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
