import Image from "next/image";
import Link from "next/link";

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
    <section className="bg-[#eff4ef] py-20 max-[767px]:py-[50px]" aria-labelledby="related-case-studies-heading">
      <Container>
        <div className="mb-10 max-[767px]:mb-6">
          <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#282828] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
            <span>{caseStudiesUiCopy.relatedEyebrow}</span>
          </div>
          <h2
            id="related-case-studies-heading"
            className="mb-4 font-montserrat text-[35px] font-bold leading-[1.38] text-[#282828] max-[1199px]:text-[28px] max-[767px]:text-2xl"
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
                          <h3 className="mb-2.5 line-clamp-2 font-montserrat text-[20px] font-semibold leading-[1.4] tracking-[-.4px] text-[#090909] transition-colors group-hover/title:text-[#ad5151] max-[767px]:text-[18px]">
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
                        <Link
                          href={href}
                          className="group/visit inline-flex items-center gap-2 font-montserrat text-sm font-bold uppercase text-[#ad5151] transition-colors hover:text-[#282828] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad5151]"
                        >
                          {caseStudiesUiCopy.viewCaseStudy}
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 12 12"
                            className="size-3 fill-current transition-transform group-hover/visit:translate-x-1"
                          >
                            <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                          </svg>
                        </Link>
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
