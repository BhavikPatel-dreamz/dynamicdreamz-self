import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type CaseStudyPreviewItem = {
  title?: string;
  name?: string;
  href: string;
  image: string;
  imageAlt: string;
  technology?: string;
  platform?: string;
  industry?: string;
  tags?: readonly string[];
  chips?: readonly string[];
  ctaLabel?: string;
  description?: string;
};

export type CaseStudyCardItem = CaseStudyPreviewItem;

export type CaseStudyCardsContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  ctaLabel?: string;
  items: readonly CaseStudyPreviewItem[];
};

export type CaseStudySpotlightBlockProps = {
  eyebrow?: string;
  heading?: string | readonly string[];
  title?: string | readonly string[];
  description?: string | readonly string[];
  items?: readonly CaseStudyPreviewItem[];
  id?: string;
  content?: CaseStudyCardsContent;
  className?: string;
  [key: string]: any;
};

export type ServicesCaseStudiesSectionProps = CaseStudySpotlightBlockProps;

export function CaseStudySpotlightBlock({
  eyebrow: directEyebrow,
  heading: directHeading,
  title: directTitle,
  description: directDescription,
  items: directItems,
  id = "case-studies",
  content,
  className,
}: CaseStudySpotlightBlockProps) {
  const eyebrow = directEyebrow ?? content?.eyebrow;
  const heading = directHeading ?? directTitle ?? content?.heading ?? "";
  const description = directDescription ?? content?.description;
  const items = directItems ?? content?.items ?? [];

  const isMobileApp =
    id === "shopify-mobile-app-case-studies" ||
    (typeof heading === "string" && heading.toLowerCase().includes("mobile app"));
  const containerClass = isMobileApp
    ? "min-[1400px]:max-w-[1408px] px-[15px]"
    : undefined;

  return (
    <section
      className={cn(
        "see-the-work-sec bg-[#eff4ef] py-20 max-[991px]:py-[50px] max-[575px]:py-10",
        className,
      )}
      data-section="case-studies"
      id={id}
    >
      <Container className={containerClass}>
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
              <div className="eyebrow relative mb-4 inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:before:top-[6px] max-[767px]:pl-6 max-[767px]:before:top-[4px] max-[767px]:before:w-[15px]">
                <span className="font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[1199px]:text-xs max-[767px]:text-[10px]">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2 className="m-0 font-montreal-medium text-[35px] font-normal leading-[49px] text-[#282828] max-[1199px]:[&_br]:hidden max-[991px]:mb-2.5 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {formatBrText(heading, "max-[1199px]:hidden")}
            </h2>
          </div>
          {description && (
            <div className="section_text w-[48.3%] max-[1199px]:w-[50%] max-[991px]:w-full max-[991px]:mt-2.5">
              <p className="m-0 font-sans text-base font-medium leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6">
                {formatBrText(description)}
              </p>
            </div>
          )}
        </div>

        <div className="cs-listing-main three-col grid grid-cols-3 gap-5 max-[992px]:grid-cols-2 max-[992px]:gap-4 max-[767px]:grid-cols-1">
          {items.map((item) => {
            const title = item.title ?? item.name ?? "";
            const tech = item.technology ?? item.platform;
            const tags = item.tags ?? item.chips ?? [];
            const ctaLabel = item.ctaLabel ?? content?.ctaLabel ?? sharedUiCopy.viewCaseStudy;

            return (
              <article
                key={item.href || title}
                data-aos="fade-up"
                className="group/case cs-listing-row relative flex min-h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-[0.23s_ease] hover:shadow-[0_10px_50px_rgba(94,94,94,0.08)]"
              >
                <Link
                  href={item.href}
                  className="cs_list_img cs-col-left relative block overflow-hidden pb-[50%] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ad5151]"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt || title}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 991px) calc(50vw - 40px), 390px"
                    className="object-cover shadow-[1px_-3px_10px_0_rgba(0,0,0,0.1)] transition-transform duration-1000 group-hover/case:scale-105"
                  />
                </Link>
                <div className="cs-col-right flex flex-1 flex-col justify-between p-[18px]">
                  <div className="cs-text flex flex-1 flex-col justify-between">
                    <div className="cs-title">
                      <Link
                        href={item.href}
                        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"
                      >
                        {(tech || item.industry) && (
                          <div className="cs-cate-wrapp mb-[7px] flex flex-wrap items-center">
                            {tech && (
                              <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                                {tech}
                              </span>
                            )}
                            {item.industry && (
                              <>
                                <span className="relative mx-[7px] inline-block size-[3px] rounded-full bg-brand-red align-middle" />
                                <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                                  {item.industry}
                                </span>
                              </>
                            )}
                          </div>
                        )}
                        <h3 className="mb-[15px] line-clamp-2 font-montreal-medium text-[20px] font-normal leading-[1.4] text-[#282828]">
                          {title}
                        </h3>
                      </Link>
                      {tags.length > 0 && (
                        <div className="cs-meta flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="cs-chip inline-flex items-center rounded-[50px] border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] font-montserrat text-[10px] font-semibold uppercase leading-[normal] text-[#565656]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="cs-visit mt-5 flex border-t border-[rgba(40,40,40,0.08)] pt-5">
                      <Link
                        href={item.href}
                        className="group inline-flex items-center font-montserrat text-sm font-bold uppercase leading-none text-brand-red transition-colors duration-300 hover:text-[#282828]"
                      >
                        {ctaLabel}
                        <svg
                          aria-hidden="true"
                          className="ml-2.5 h-[12px] w-[10px] shrink-0 fill-brand-red transition-colors duration-300 group-hover:fill-[#282828]"
                          viewBox="0 0 12 12"
                        >
                          <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                        </svg>
                      </Link>
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

export const ServicesCaseStudiesSection = CaseStudySpotlightBlock;
export const CaseStudyCardsSection = CaseStudySpotlightBlock;
export const OurWorkCaseStudiesSection = CaseStudySpotlightBlock;
