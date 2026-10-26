import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import { cn } from "@/lib/class-names";
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
    <section
      className="case-study-hero relative bg-[#F7F4E9] pt-[151px] pb-[60px] max-[991px]:pt-[124px] max-[992px]:pt-[124px] max-[767px]:px-1 max-[768px]:px-1"
      aria-labelledby="case-study-title"
    >
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between max-[991px]:flex-col-reverse max-[992px]:flex-col-reverse max-[991px]:gap-0 max-[992px]:gap-0">
          <div className="left-col w-[47%] max-[1199px]:w-1/2 max-[991px]:mt-10 max-[992px]:mt-10 max-[991px]:w-full max-[992px]:w-full">
            {eyebrowBadges.length > 0 && (
              <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-6 max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                {eyebrowBadges.map((badge, index) => (
                  <span
                    key={badge}
                    className={cn(
                      "font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#282828]",
                      index > 0 &&
                        "relative ml-2.5 pl-2.5 after:absolute after:left-[-2px] after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#535353] after:content-['']",
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <h1
              id="case-study-title"
              className="mb-3 font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-[#282828] max-[767px]:text-2xl max-[768px]:text-2xl max-[767px]:leading-[31.2px] max-[768px]:leading-[31.2px]"
            >
              {caseStudy.title}
            </h1>
            <p className="mb-[15px] font-sans text-sm font-normal leading-6 text-[#535353]">
              {caseStudy.summary}
            </p>
            <div className="btns_group flex flex-wrap items-center gap-2.5 pt-2.5 max-[575px]:w-full max-[575px]:flex-col [&_a]:max-[575px]:w-full [&_a]:text-center">
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

          <div className="right-col w-[46%] max-[1199px]:w-[47%] max-[991px]:w-full max-[992px]:w-full">
            <div className="overflow-hidden rounded-[20px] shadow-[0_28px_65px_rgba(40,40,40,0.11)] max-[991px]:mx-auto max-[992px]:mx-auto max-[991px]:max-w-[680px] max-[992px]:max-w-[680px]">
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
