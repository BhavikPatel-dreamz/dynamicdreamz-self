import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type CaseStudyPreviewItem = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  technology: string;
  industry: string;
  description: string;
  tags?: readonly string[];
  ctaLabel?: string;
};

export type ServicesCaseStudiesSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly CaseStudyPreviewItem[];
  className?: string;
  id?: string;
};

export function ServicesCaseStudiesSection({
  eyebrow,
  heading,
  description,
  items,
  className,
  id,
}: ServicesCaseStudiesSectionProps) {
  return (
    <section
      className={cn(
        "see-the-work-sec bg-[#eff4ef] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div className="section_title_with_eyebrow mb-[50px] max-[767px]:mb-[30px]">
          <div className="title">
            {eyebrow && (
              <div className="eyebrow mb-2">
                <span className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-[1px] text-[#ad5151] before:inline-block before:h-[2px] before:w-5 before:bg-[#ad5151] before:content-['']">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {heading}
            </h2>
          </div>
          {description && (
            <div className="section_text mt-2.5">
              <p className="font-sans text-base font-medium leading-[30.4px] text-muted">
                {description}
              </p>
            </div>
          )}
        </div>

        <div className="cs-listing-main three-col flex flex-wrap gap-5">
          {items.map((item) => (
            <article
              key={item.href}
              className="cs-listing-row flex w-[calc(33.333%-14px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-[992px]:w-full"
            >
              <div className="flex h-full flex-col">
                <Link
                  href={item.href}
                  className="relative block overflow-hidden pb-[50%] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ad5151]"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 380px"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </Link>
                <div className="flex flex-grow flex-col p-5 max-[767px]:p-[15px]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <Link
                        href={item.href}
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
                        <h3 className="mb-2.5 line-clamp-2 font-montserrat text-[20px] font-semibold leading-[1.4] tracking-[-.48px] text-[#090909] transition-colors group-hover/title:text-[#ad5151]">
                          {item.title}
                        </h3>
                      </Link>
                      {item.description ? (
                        <p className="m-0 font-sans text-[13px] font-medium leading-[1.75] text-[#535353]">
                          {item.description}
                        </p>
                      ) : null}
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] text-[10px] font-semibold uppercase leading-none text-[#565656]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-5 border-t border-[rgba(40,40,40,0.08)] pt-5">
                      <Link
                        href={item.href}
                        className="group/visit inline-flex items-center gap-2 font-montserrat text-sm font-bold uppercase text-[#ad5151] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad5151]"
                      >
                        {item.ctaLabel ?? "View Case study"}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 12 12"
                          className="size-3 transition-transform group-hover/visit:translate-x-1"
                        >
                          <path
                            d="m.33 10.26 11.34-9.26M11.99 2.05 11.05 11.04M11.99 2.05 2.07 1.53"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
