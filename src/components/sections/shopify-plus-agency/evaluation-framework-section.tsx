import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyPlusAgencyHowToChoose } from "@/content/shopify-plus-agency";
import { formatBrText } from "@/lib/text-formatting";
import { cn } from "@/lib/class-names";

export type EvaluationFrameworkItem = {
  title: string | readonly string[];
  description: string | readonly string[];
};

export type EvaluationFrameworkContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  items: readonly EvaluationFrameworkItem[];
};

export type EvaluationFrameworkSectionProps = {
  content?: EvaluationFrameworkContent;
  id?: string;
  className?: string;
};

export function EvaluationFrameworkSection({
  content = shopifyPlusAgencyHowToChoose,
  id = "evaluation-framework",
  className,
}: EvaluationFrameworkSectionProps) {
  return (
    <section
      className={cn("how-to-choose-spa-sec bg-white py-20 max-[991px]:py-[50px]", className)}
      data-section="evaluation-framework"
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px]"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div className="spa-wrapper flex flex-wrap border-t border-l border-[#2828281c]" data-aos="fade-up">
          {content.items.map((item, index) => (
            <div
              className="spa-col w-1/4 max-[991px]:w-1/2 max-[767px]:w-full"
              key={typeof item.title === "string" ? item.title : Array.isArray(item.title) ? item.title.join(" ") : String(index)}
            >
              <article className="spa-item flex h-full flex-col border-r border-b border-[#2828281c] p-6 max-[1399px]:p-5">
                <div className="spa-title">
                  <span
                    aria-hidden="true"
                    className="mb-5 flex size-[34px] items-center justify-center rounded-full bg-[#fbefd7] font-montserrat text-[10px] font-bold text-brand-red max-[991px]:mb-2.5"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title ? (
                    <h3 className="m-0 mb-2.5 font-display text-base font-medium leading-6 text-ink">
                      {formatBrText(item.title)}
                    </h3>
                  ) : null}
                </div>
                <div className="spa-text">
                  <p className="m-0 font-sans text-sm font-normal leading-[22px] text-[#535353]">
                    {formatBrText(item.description)}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
