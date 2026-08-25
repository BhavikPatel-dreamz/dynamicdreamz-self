import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import type { IndustryPageContent } from "@/types/industry";

type IndustryHeroSectionProps = {
  content: IndustryPageContent;
};

export function IndustryHeroSection({ content }: IndustryHeroSectionProps) {
  const { hero, slug } = content;

  return (
    <section
      className="overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-[190px] max-[991px]:pt-[150px]"
      aria-labelledby={`${slug}-title`}
      data-industry="hero"
    >
      <Container className="max-[575px]:px-4">
        <div className="text-center">
          <span className="mb-1 block text-base leading-[19px] font-bold tracking-[-0.32px] text-black uppercase">
            {hero.eyebrow}
          </span>
          <h1
            className="mb-2.5 text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
            id={`${slug}-title`}
          >
            {hero.title}
          </h1>
          <p className="mb-6 text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
            {hero.descriptionBeforeBreak}
            <br className="max-[1199px]:hidden" /> {hero.descriptionAfterBreak}
          </p>
          <ButtonLink
            className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm"
            href={siteConfig.quotePath}
            variant="primary"
          >
              {sharedUiCopy.requestQuote}
          </ButtonLink>
        </div>

        <div className="mx-auto mt-[55px] mb-[-80px] w-full max-w-[840px] pb-[5px] max-[991px]:mt-[60.4px] max-[991px]:pb-[10px] max-[767px]:mt-[30.4px] max-[767px]:mb-[-70px] max-[575px]:pb-[10.75px]">
          <Image
            className="h-auto w-full"
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 767px) 500px, (max-width: 991px) 680px, 840px"
            preload
          />
        </div>
      </Container>
    </section>
  );
}
