import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { beautyIndustrySolutions } from "@/content/beauty-cosmetics";
import { siteConfig } from "@/data/site";

export function BeautyIndustrySolutionsSection() {
  return (
    <section className="py-20 max-[991px]:py-[50px]" data-beauty="solutions">
      <Container className="max-[575px]:px-4">
        <div className="mt-20 flex flex-wrap items-stretch justify-between max-[991px]:mt-[50px] max-[991px]:flex-col">
          <div className="w-[49.6%] pb-[5px] max-[991px]:w-full max-[991px]:pb-[10.4px]">
            <h2 className="mb-[15px] text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
              {beautyIndustrySolutions.title}
            </h2>
            <h3 className="mb-[17px] text-lg leading-7 font-medium tracking-[-0.36px] text-ink">
              {beautyIndustrySolutions.subtitle}
            </h3>
            <p className="mb-6 text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
              {beautyIndustrySolutions.description}
            </p>
            <ButtonLink
              className="mt-1.5 min-h-[49px] px-6 py-[15px] text-base leading-[normal] max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm"
              href={siteConfig.quotePath}
              variant="primary"
            >
              Get started
            </ButtonLink>
          </div>

          <div className="w-[45.3%] max-[991px]:mb-[30px] max-[991px]:w-full">
            <div className="relative h-0 overflow-hidden rounded-[10px] pb-[84%]">
              <Image
                className="object-cover"
                src={beautyIndustrySolutions.image.src}
                alt={beautyIndustrySolutions.image.alt}
                fill
                sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 991px) 680px, 516px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
