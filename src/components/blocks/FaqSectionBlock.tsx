import { Container } from "@/components/ui/container";
import { AccordionClient, type FaqAccordionItem } from "@/components/ui/AccordionClient";
import { sharedUiCopy } from "@/content/common";
import { homeFaqs, homeSectionCopy } from "@/content/home";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type FaqSectionBlockProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  heading?: string | readonly string[];
  headingClassName?: string;
  headingBrClassName?: string;
  description?: string | readonly string[];
  eyebrow?: string;
  sectionId?: string;
  animateOnReveal?: boolean;
  lazyAccordion?: boolean;
  lazyRootMargin?: string;
  answerClassName?: string;
  questionClassName?: string;
  triggerClassName?: string;
  itemClassName?: string;
  panelContentClassName?: string;
  iconVariant?: "default" | "circle-cross";
};

export type SplitFaqSectionProps = FaqSectionBlockProps;

export function FaqSectionBlock({
  items,
  idPrefix,
  heading = sharedUiCopy.faq.heading,
  headingClassName,
  headingBrClassName,
  description,
  eyebrow,
  sectionId,
  animateOnReveal = false,
  answerClassName,
  questionClassName,
  triggerClassName,
  itemClassName,
  panelContentClassName,
  iconVariant = "circle-cross",
}: FaqSectionBlockProps) {
  const titleId = `${idPrefix}-title`;

  const isSkyBlue =
    idPrefix.startsWith("white-label-website-design") ||
    idPrefix.startsWith("white-label-wordpress") ||
    idPrefix.startsWith("white-label-shopify") ||
    idPrefix.startsWith("shopify-certified-developers");
  const isWhite = idPrefix.startsWith("food-beverage");
  const isPt0 = idPrefix.startsWith("risks-of-shopify-outsourcing");
  const isMobileAppFaq = idPrefix.startsWith("shopify-mobile-app");

  const bgClass = isSkyBlue
    ? "bg-sky-blue"
    : isWhite
    ? "bg-white"
    : "bg-[#fafaf7]";
  const paddingClass = isPt0
    ? "pt-0 pb-20 max-[767px]:pb-[50px]"
    : "py-[60px] max-[991px]:py-10 max-[767px]:pb-5";
  const containerClass = isMobileAppFaq
    ? "min-[1400px]:max-w-[1408px] px-[15px]"
    : undefined;

  return (
    <section
      aria-labelledby={titleId}
      className={cn("faq-sec", bgClass, paddingClass)}
      data-section="faq"
      id={sectionId ?? `${idPrefix}-section`}
    >
      <Container className={containerClass}>
        <div className="wrapper flex justify-between gap-[105px] max-[1399px]:gap-8 max-[991px]:flex-col max-[991px]:gap-[30px]">
          <div className="w-[41%] max-[1199px]:w-[44%] max-[991px]:w-full" data-aos="fade-up">
            <header className="header-text mb-0 flex flex-col items-start text-left min-[992px]:sticky min-[992px]:top-[20px]">
              {eyebrow ? (
                <div className="eyebrow relative mb-4 inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:before:top-[6px] max-[767px]:pl-6 max-[767px]:before:top-[4px] max-[767px]:before:w-[15px]">
                  <span className="font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[1199px]:text-xs max-[767px]:text-[10px]">
                    {eyebrow}
                  </span>
                </div>
              ) : null}
              <h2
                className={cn(
                  "mb-2.5 font-montreal-medium text-[35px] leading-[48.475px] font-normal tracking-normal text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]",
                  headingClassName,
                )}
                id={titleId}
              >
                {formatBrText(heading, headingBrClassName ?? "max-[1199px]:hidden")}
              </h2>
              {description ? (
                <p className="max-w-[518px] text-base leading-[28px] font-medium text-[#535353] max-[767px]:text-sm max-[767px]:leading-[24px]">
                  {formatBrText(description, "max-[1199px]:hidden")}
                </p>
              ) : null}
            </header>
          </div>
          <div className="accordion-main w-[57%] max-w-[654px] grow max-[1199px]:w-[53%] max-[1199px]:max-w-none max-[991px]:w-full" data-aos="fade-up">
            <AccordionClient
              animateOnReveal={animateOnReveal}
              answerClassName={answerClassName}
              iconClassName="right-0 size-[30px] max-[991px]:top-1/2 max-[991px]:right-0 max-[991px]:size-[26px] max-[991px]:-translate-y-1/2"
              iconVariant={iconVariant}
              idPrefix={idPrefix}
              itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent !py-6 max-[767px]:!py-5 last:!border-b-0", itemClassName)}
              items={items}
              panelContentClassName={cn("!px-0 !pt-5 !pb-0", panelContentClassName)}
              questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[28px] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[640px]:!text-base max-[640px]:!leading-6", questionClassName)}
              triggerClassName={cn("!pl-0 !pr-[37px] !py-0", triggerClassName)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export const SplitFaqSection = FaqSectionBlock;

export function HomeFaqSection() {
  return (
    <FaqSectionBlock
      description={homeSectionCopy.homeFaqDescription}
      heading={homeSectionCopy.homeFaqTitle}
      idPrefix="home-faq"
      items={homeFaqs}
    />
  );
}
