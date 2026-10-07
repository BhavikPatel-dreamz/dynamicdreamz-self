import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { TextArrowLink } from "@/components/ui/text-arrow-link";
import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type CaseStudyPreviewItem = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  technology: string;
  industry: string;
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
  headingClassName,
  containerClassName,
}: ServicesCaseStudiesSectionProps) {
  return (
    <section
      className={cn(
        "see-the-work-sec bg-[#eff4ef] py-20 max-[991px]:py-[50px] max-[575px]:py-10",
        className,
      )}
      id={id}
    >
      <Container className={containerClassName}>
        <div
          data-aos="fade-up"
          className={cn(
            "section_title_with_eyebrow mb-10 max-[991px]:mb-[30px]",
            description &&
              "flex flex-wrap items-end justify-between max-[991px]:flex-col max-[991px]:items-start",
          )}
        >
          <div
            className={cn("title", description && "w-[44%] max-[991px]:w-full")}
          >
            {eyebrow && (
              <div className="eyebrow relative mb-4 inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:before:top-[6px] max-[767px]:pl-[23px] max-[767px]:before:top-[4px] max-[767px]:before:w-[15px]">
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

        <div className="cs-listing-main three-col -mb-5 flex flex-wrap justify-between">
          {items.map((item) => (
            <article
              key={item.href}
              data-aos="fade-up"
              className="cs-listing-row relative mb-5 flex min-h-full w-[calc(33.33%-10px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-[0.23s_ease] max-[1199px]:w-[calc(50%-10px)] max-[991px]:w-full"
            >
              <Link
                href={item.href}
                className="cs_list_img cs-col-left relative block overflow-hidden pb-[50%] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ad5151]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 991px) 100vw, 430px"
                  className="object-cover shadow-[1px_-3px_10px_0_rgba(0,0,0,0.1)] transition-all duration-1000 hover:scale-105"
                />
              </Link>
              <div className="cs-col-right flex flex-1 flex-col p-[18px]">
                <div className="cs-text flex flex-1 flex-col justify-between">
                  <div className="cs-title">
                    <Link
                      href={item.href}
                      className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"
                    >
                      <div className="cs-cate-wrapp overflow-hidden">
                        <span className="cs-cate-label relative mb-[7px] line-clamp-1 align-middle font-montserrat text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                          {item.technology}
                          <span className="relative mx-[7px] after:absolute after:right-0 after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-brand-red after:content-['']" />
                          {item.industry}
                        </span>
                      </div>
                      <h3 className="mb-[15px] line-clamp-2 font-montreal-medium text-[20px] font-normal leading-[1.4] text-[#282828]">
                        {item.title}
                      </h3>
                    </Link>
                    {item.tags && item.tags.length > 0 ? (
                      <div className="cs-meta flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="cs-chip inline-flex items-center rounded-[50px] border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] font-montserrat text-[10px] font-semibold uppercase leading-[normal] text-[#565656]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div className="cs-visit mt-5 flex border-t border-[rgba(40,40,40,0.08)] pt-5">
                    <TextArrowLink href={item.href}>
                      {item.ctaLabel ?? sharedUiCopy.viewCaseStudy}
                    </TextArrowLink>
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
