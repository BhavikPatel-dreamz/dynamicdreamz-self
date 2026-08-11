import Image from "next/image";

import { AboutTimelineCarousel } from "@/components/sections/about/about-timeline-carousel";
import styles from "@/components/sections/about/about-timeline-section.module.css";
import { Container } from "@/components/ui/container";
import { milestones } from "@/content/about";

export function AboutTimelineSection() {
  return (
    <section data-about="timeline" aria-labelledby="about-timeline-title" className="overflow-hidden bg-[#fbf7ed] pt-[100px] pb-[60px] max-[991px]:py-[50px]">
      <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
        <div className="-mx-[15px] mb-[60px] flex items-center max-[991px]:mx-0 max-[991px]:mb-0 max-[991px]:block max-[991px]:text-center">
          <div className="w-1/2 px-[15px] max-[991px]:mb-[10px] max-[991px]:w-full max-[991px]:p-0">
            <h2 id="about-timeline-title" className="text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
              How we started
            </h2>
          </div>
          <div className="w-1/2 px-[15px] max-[991px]:w-full max-[991px]:p-0">
            <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
              We Create Robust Strategic Plans That Always Begin with Getting to know you and What you’re trying to achieve
            </p>
          </div>
        </div>
      </Container>

      <div className="mx-auto w-full max-w-[1440px]">
        <AboutTimelineCarousel>
          <ol className="flex h-[535px] w-max snap-x snap-mandatory">
          {milestones.map((milestone, index) => {
            const imageFirst = index % 2 === 0;
            const isLast = !milestone.year;

            return (
              <li className="relative h-[535px] w-[410px] shrink-0 snap-start px-[15px] text-center max-[575px]:w-[320px]" key={milestone.image}>
                {isLast ? (
                  <div className="flex h-full items-center justify-center">
                    <Image className="h-auto max-w-full" src={milestone.image} alt={milestone.alt} width={milestone.width} height={milestone.height} sizes="(max-width: 575px) 290px, 380px" draggable={false} />
                  </div>
                ) : (
                <div className={`flex h-[535px] ${imageFirst ? "flex-col" : "flex-col-reverse"}`}>
                <div className={`relative min-h-[220px] ${imageFirst ? "mb-[90px]" : "mt-[90px]"}`}>
                  <Image
                    className="absolute inset-x-0 top-0 mx-auto h-full w-auto max-w-full object-cover pt-[30px]"
                    src={milestone.image}
                    alt={milestone.alt}
                    width={milestone.width}
                    height={milestone.height}
                    sizes="(max-width: 575px) 290px, 380px"
                    draggable={false}
                  />
                </div>
                <div className="relative h-[225px]">
                  <span className={`${styles.marker} ${imageFirst ? styles.forwardMarker : styles.reverseMarker} ${index === 0 ? styles.firstMarker : ""} ${index === milestones.length - 2 ? styles.penultimateMarker : ""}`} aria-hidden="true">
                    <Image className="relative z-10 size-[26px]" src="/assets/about/timeline/location-marker.svg" alt="" width={26} height={26} />
                  </span>
                    <div className="bg-[linear-gradient(97deg,#15c064_37.46%,#00d1ff_120.9%)] bg-clip-text text-[70px] leading-[86px] font-bold text-transparent max-[767px]:text-[50px]">
                      {milestone.year}
                    </div>
                    <p className="line-clamp-5 h-[139px] text-base leading-7 font-normal text-muted max-[1199px]:text-[14px] max-[1199px]:leading-6">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                )}
                {milestone.year === "2025" ? (
                  <Image className="absolute top-1/2 left-1/2 z-10 h-9 w-[113px] -translate-x-1/2" src="/assets/about/timeline/shopify-platinum-partner-badge.svg" alt="" width={113} height={36} />
                ) : null}
              </li>
            );
          })}
          </ol>
        </AboutTimelineCarousel>
      </div>
    </section>
  );
}
