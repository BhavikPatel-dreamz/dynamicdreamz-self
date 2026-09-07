import Image from "next/image";

import { Container } from "@/components/ui/container";
import type { MagentoWebHero } from "@/content/magento-web-development";
import { cn } from "@/lib/class-names";

import styles from "./magento-web-hero-section.module.css";

export type MagentoWebHeroSectionProps = {
  content: MagentoWebHero;
};

export function MagentoWebHeroSection({ content }: MagentoWebHeroSectionProps) {
  return (
    <section className="inner-hero-sec new-web-magento-sec relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[140px]">
      <Container>
        <div className="inner-wrapper flex flex-wrap items-center justify-between border-b border-[#DFDFDF] pb-[60px] max-[991px]:flex-col-reverse">
          <div className="left-col w-[55.7%] max-[991px]:w-full">
            <div className="inner-hero-content">
              <h1 className="inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-[#121212] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.title}
              </h1>
              <p className="mt-5 text-[18px] font-medium leading-[34.2px] text-[#535353] max-[991px]:text-base max-[991px]:leading-[30.4px]">
                {content.description}
              </p>
            </div>
          </div>
          <div className="right-col relative w-[41%] max-[991px]:mb-[100px] max-[991px]:w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 h-[468px] w-[408px] -translate-x-1/2 -translate-y-1/2 bg-[url('/assets/magento-web-development/hero-polygon-background.webp')] bg-contain bg-center bg-no-repeat max-[767px]:h-[380px] max-[767px]:w-[330px]"
            />
            <div className="inner-web-magneto-img relative flex min-h-[342px] items-center justify-center text-center max-[767px]:min-h-[282px]">
              <Image
                alt={content.image.alt}
                className={cn(
                  "relative z-[1] mx-auto h-auto max-h-[342px] w-auto object-contain max-[767px]:max-h-[282px]",
                  styles.floatingImage,
                )}
                height={content.image.height}
                priority
                src={content.image.src}
                width={content.image.width}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
