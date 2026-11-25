import Image from "next/image";
import Link from "next/link";
import { TextArrowLink } from "@/components/ui/text-arrow-link";

import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import { caseStudyDetails } from "@/content/case-study-details";
import { cn } from "@/lib/class-names";
import { SplitSectionHeading } from "../ui/split-section-heading";

type CaseStudyRelatedProps = {
  relatedSlugs?: string[];
};

export function CaseStudyRelated({ relatedSlugs }: CaseStudyRelatedProps) {
  if (!relatedSlugs || relatedSlugs.length === 0) {
    return null;
  }

  const relatedItems = relatedSlugs
    .map((slug) => caseStudyDetails.find((entry) => entry.slug === slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .slice(0, 3);

  if (relatedItems.length === 0) {
    return null;
  }

  const isTwoUp = relatedItems.length === 2;

  return (
    <section
      className="see-the-work-sec bg-[#eff4ef] py-20 max-[992px]:py-[50px]"
      aria-labelledby="related-case-studies-heading"
    >
      <Container>
        <SplitSectionHeading
          heading={caseStudiesUiCopy.relatedHeading}
          headingId="related-case-studies-heading"
          description={caseStudiesUiCopy.relatedDescription}
          eyebrow={caseStudiesUiCopy.relatedEyebrow}
          variant="left"
        />

        <div className="flex flex-wrap justify-start gap-[15px]">
          {relatedItems.map((item) => {
            const href = `/case-studies/${item.slug}/`;
            const cardTitle = item.archive?.title || item.title;
            const cardTechnology = item.archive?.technology || item.technology;
            const cardIndustry = item.archive?.industry || item.industry;
            const cardTags =
              item.archive?.tags && item.archive.tags.length > 0
                ? item.archive.tags
                : item.archive?.technology
                  ? [item.archive.technology]
                  : [];

            return (
              <article
                key={item.slug}
                data-aos="fade-up"
                className={cn(
                  "flex flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                  isTwoUp
                    ? "w-[calc(50%-10px)] max-[992px]:w-full"
                    : "w-[calc(33.333%-10px)] max-[1200px]:w-[calc(50%-10px)] max-[992px]:w-full",
                )}
              >
                <div className="flex h-full flex-col">
                  <div className="w-full">
                    <Link
                      href={href}
                      className="relative block overflow-hidden pb-[50%] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ad5151]"
                    >
                      <Image
                        src={item.hero.image.src}
                        alt={item.hero.image.alt}
                        fill
                        sizes="(max-width: 991px) 100vw, (max-width: 1199px) 50vw, 440px"
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-grow flex-col p-[18px] max-[1200px]:p-5 max-[768px]:p-[15px]">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <Link
                          href={href}
                          className="group/title block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"
                        >
                          <div className="mb-2.5 flex items-center">
                            <span className="relative mr-2.5 mb-1 shrink-0 pr-2.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151] after:absolute after:top-1/2 after:right-0 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#ad5151] after:content-['']">
                              {cardTechnology}
                            </span>
                            {cardIndustry ? (
                              <span className="mb-1 min-w-0 truncate font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151]">
                                {cardIndustry}
                              </span>
                            ) : null}
                          </div>
                          <h3 className="mb-2.5 line-clamp-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] tracking-normal text-[#090909] transition-colors group-hover/title:text-[#ad5151] max-[992px]:text-[18px] max-[992px]:leading-[26px]">
                            {cardTitle}
                          </h3>
                        </Link>
                        {cardTags.length > 0 && (
                          <div className="mt-[15px] flex flex-wrap gap-2">
                            {cardTags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] font-montserrat text-[10px] font-semibold uppercase leading-none text-[#565656]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="mt-5 border-t border-[rgba(40,40,40,0.08)] pt-5">
                        <TextArrowLink
                          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad5151]"
                          href={href}
                        >
                          {caseStudiesUiCopy.viewCaseStudy}
                        </TextArrowLink>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
