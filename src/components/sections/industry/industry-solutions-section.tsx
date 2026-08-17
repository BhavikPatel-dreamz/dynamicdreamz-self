import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import type { IndustryPageContent, IndustrySolution } from "@/types/industry";

type IndustrySolutionsSectionProps = {
  content: IndustryPageContent;
};

export function IndustrySolutionsSection({ content }: IndustrySolutionsSectionProps) {
  const { solutions } = content;
  const solutionRows: readonly IndustrySolution[] = Array.isArray(solutions)
    ? solutions
    : [solutions as IndustrySolution];

  return (
    <section
      className="py-20 max-[991px]:py-[50px]"
      aria-label={`${content.hero.title} solutions`}
      data-industry="solutions"
    >
      <Container className="max-[575px]:px-4">
        {solutionRows.map((solution, index) => {
          const imageFirst = solution.imagePosition === "start";
          const isLast = index === solutionRows.length - 1;
          const text = (
            <div
              className="left-col w-[49.6%] pb-[5px] max-[991px]:w-full max-[991px]:pb-[10.4px]"
              key={`${solution.title}-text`}
            >
              <h2 className="mb-[15px] text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
                {solution.title}
              </h2>
              <h3 className="mb-[17px] text-lg leading-7 font-medium tracking-[-0.36px] text-ink">
                {solution.subtitle}
              </h3>
              {[solution.description, ...(solution.additionalDescriptions ?? [])].map(
                (paragraph) => (
                  <p
                    className="mb-6 text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ),
              )}
              <ButtonLink
                aria-label={solution.cta?.ariaLabel}
                className="mt-1.5 min-h-[49px] px-6 py-[15px] text-base leading-[normal] max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm"
                href={solution.cta?.href ?? siteConfig.quotePath}
                variant="primary"
              >
                {solution.cta?.label ?? "get started"}
              </ButtonLink>
            </div>
          );
          const image = (
            <div
              className="right-col w-[45.3%] max-[991px]:mt-[30px] max-[991px]:w-full"
              key={`${solution.title}-image`}
            >
              <div className="relative h-0 overflow-hidden rounded-[10px] pb-[84%]">
                <Image
                  className="object-cover"
                  src={solution.image.src}
                  alt={solution.image.alt}
                  fill
                  sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 991px) 680px, 516px"
                />
              </div>
            </div>
          );

          return (
            <div
              className={`flex flex-wrap items-stretch justify-between ${
                isLast ? "mt-20 max-[991px]:mt-0" : ""
              } max-[991px]:flex-col`}
              data-industry-solution={index + 1}
              key={solution.title}
            >
              {imageFirst ? [image, text] : [text, image]}
            </div>
          );
        })}
      </Container>
    </section>
  );
}
