import Image from "next/image";
import Link from "next/link";
import { TextArrowLink } from "@/components/ui/text-arrow-link";

import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import { caseStudyDetails } from "@/content/case-study-details";

type CaseStudyRelatedProps = {
  currentSlug: string;
  relatedSlugs?: string[];
  technology: string;
  industry: string;
};

export function CaseStudyRelated({
  currentSlug,
  relatedSlugs,
  technology,
  industry,
}: CaseStudyRelatedProps) {
  const allEntries = caseStudyDetails;

  // Resolve related entries: use relatedSlugs if provided, else filter by technology/industry
  let relatedItems = (relatedSlugs ?? [])
    .map((slug) => allEntries.find((entry) => entry.slug === slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  if (relatedItems.length === 0) {
    relatedItems = allEntries
      .filter(
        (entry) =>
          entry.slug !== currentSlug &&
          (entry.technology === technology || entry.industry === industry),
      )
      .slice(0, 3);
  }

  if (relatedItems.length === 0) {
    relatedItems = allEntries.filter((entry) => entry.slug !== currentSlug).slice(0, 3);
  }

  // Limit to at most 3 items
  relatedItems = relatedItems.slice(0, 3);

  if (relatedItems.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#eff4ef] py-20 max-[991px]:py-[50px]" aria-labelledby="related-case-studies-heading">
      <Container>
        <div >
          <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
            <span>{caseStudiesUiCopy.relatedEyebrow}</span>
          </div>
          <h2
            id="related-case-studies-heading"
            className="mb-4 font-montreal-medium text-[35px] font-normal leading-[1.38] text-ink max-[1199px]:text-[28px] max-[767px]:text-2xl"
          >
            {caseStudiesUiCopy.relatedHeading}
          </h2>
          <p className="m-0 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[767px]:text-sm">
            {caseStudiesUiCopy.relatedDescription}
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-5">
          {relatedItems.map((item) => {
            const href = `/case-studies/${item.slug}`;
            return (
              <article
                key={item.slug}
                className="flex w-[calc(33.333%-14px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-[1199px]:w-[calc(50%-10px)] max-[767px]:w-full"
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
                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 380px"
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-grow flex-col p-5 max-[767px]:p-[15px]">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <Link
                          href={href}
                          className="group/title block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"
                        >
                          <div className="mb-2.5 flex flex-wrap items-center">
                            <span className="relative mr-2.5 mb-1 pr-2.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151] after:absolute after:top-1/2 after:right-0 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#ad5151] after:content-['']">
                              {item.technology}
                            </span>
                            <span className="mb-1 font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151]">
                              {item.industry}
                            </span>
                          </div>
                          <h3 className="mb-2.5 line-clamp-2 font-display text-[20px] font-medium leading-[1.4] tracking-[-.4px] text-[#090909] transition-colors group-hover/title:text-[#ad5151] max-[767px]:text-[18px]">
                            {item.title}
                          </h3>
                        </Link>
                        {item.archive?.technology && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] font-montserrat text-[10px] font-semibold uppercase leading-none text-[#565656]">
                              {item.archive.technology}
                            </span>
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
