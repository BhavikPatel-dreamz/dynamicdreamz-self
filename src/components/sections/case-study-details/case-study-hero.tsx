import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyDetail } from "@/types/case-study";

type CaseStudyHeroProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const eyebrowBadges =
    caseStudy.heroEyebrows && caseStudy.heroEyebrows.length > 0
      ? caseStudy.heroEyebrows
      : [caseStudy.technology, caseStudy.industry].filter(Boolean);

  return (
    <section className="relative bg-[#F7F4E9] py-[60px] max-[992px]:py-10 max-[767px]:py-8" aria-labelledby="case-study-title">
      <Container>
        <div className="flex flex-wrap items-center justify-between max-[992px]:flex-col-reverse max-[992px]:gap-0">
          <div className="w-[47%] max-[1199px]:w-[50%] max-[992px]:mt-10 max-[992px]:w-full">
            {eyebrowBadges.length > 0 && (
              <div className="relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                {eyebrowBadges.map((badge, index) => (
                  <span
                    key={badge}
                    className={`font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#282828] max-[1199px]:text-[12px] max-[767px]:text-[10px] ${
                      index > 0
                        ? "relative ml-2.5 pl-2.5 after:absolute after:left-[-2px] after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#535353] after:content-['']"
                        : ""
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <h1
              id="case-study-title"
              className="mb-[22px] font-montserrat text-[38px] font-bold leading-[48px] tracking-[-0.76px] text-[#282828] max-[1199px]:text-[30px] max-[1199px]:leading-tight max-[767px]:mb-4 max-[767px]:text-[24px] max-[767px]:leading-[1.3]"
            >
              {caseStudy.title}
            </h1>
            <p className="mb-6 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[767px]:text-[14px] max-[767px]:leading-[26px]">
              {caseStudy.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2.5">
              {caseStudy.websiteUrl ? (
                <ButtonLink
                  href={caseStudy.websiteUrl}
                  external
                  variant="primary"
                  aria-label={caseStudiesUiCopy.visitWebsite}
                >
                  {caseStudiesUiCopy.visitWebsite}
                </ButtonLink>
              ) : null}
              <ButtonLink
                href="#explore"
                variant="outline"
                aria-label={caseStudiesUiCopy.exploreCaseStudy}
              >
                {caseStudiesUiCopy.exploreCaseStudy}
              </ButtonLink>
            </div>
          </div>

          <div className="w-[46%] max-[1199px]:w-[47%] max-[992px]:w-full">
            <div className="overflow-hidden rounded-[20px] shadow-[0_28px_65px_rgba(40,40,40,0.11)] max-[992px]:mx-auto max-[992px]:max-w-[680px]">
              <Image
                src={caseStudy.hero.image.src}
                alt={caseStudy.hero.image.alt}
                width={caseStudy.hero.image.width}
                height={caseStudy.hero.image.height}
                sizes="(max-width: 991px) calc(100vw - 40px), 571px"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
