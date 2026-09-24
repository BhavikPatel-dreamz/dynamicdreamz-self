import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

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
  hideCardDescription?: boolean;
  headingClassName?: string;
  containerClassName?: string;
};

export function ServicesCaseStudiesSection({
  eyebrow,
  heading,
  description,
  items,
  className,
  id,
  hideCardDescription = false,
  headingClassName,
  containerClassName,
}: ServicesCaseStudiesSectionProps) {
  return (
    <section
      className={cn(
        "see-the-work-sec bg-[#eff4ef] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container className={containerClassName}>
        <div
          className={cn(
            "section_title_with_eyebrow mb-10 max-[991px]:mb-[30px] max-[767px]:mb-5",
            description &&
              "flex flex-wrap items-end justify-between max-[991px]:flex-col max-[991px]:items-start",
          )}
        >
          <div
            className={cn("title", description && "w-[44%] max-[991px]:w-full")}
          >
            {eyebrow && (
              <div className="eyebrow relative mb-4 inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:before:top-[6px] max-[767px]:mb-3 max-[767px]:pl-[23px] max-[767px]:before:top-[4px] max-[767px]:before:w-[15px]">
                <span className="font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[1199px]:text-xs max-[767px]:text-[10px]">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2
              className={cn(
                "m-0 font-montreal-medium text-[35px] font-normal leading-[49px] text-[#282828] max-[1199px]:[&_br]:hidden max-[991px]:mb-2.5 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]",
                headingClassName,
              )}
            >
              {formatBrText(heading, "max-[1199px]:hidden")}
            </h2>
          </div>
          {description && (
            <div className="section_text w-[48.3%] max-[1199px]:w-[50%] max-[991px]:w-full max-[991px]:mt-2.5">
              <p className="m-0 font-sans text-base font-medium leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6">
                {description}
              </p>
            </div>
          )}
        </div>

        <div className="cs-listing-main three-col flex flex-wrap gap-5">
          {items.map((item) => (
            <article
              key={item.href}
              className="cs-listing-row flex w-[calc(33.333%-14px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-[1199px]:w-[calc(50%-10px)] max-[992px]:w-full"
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
                      {item.description && !hideCardDescription ? (
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
