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
  theme?: "white" | "cyan";
};

export function EvaluationFrameworkSection({
  content = shopifyPlusAgencyHowToChoose,
  id = "evaluation-framework",
  className,
  theme = "white",
}: EvaluationFrameworkSectionProps) {
  const isPt0 = className?.includes("pt-0");
  const isPb0 = className?.includes("pb-0");
  const paddingClass = isPt0 && isPb0
    ? "pt-0 pb-0 max-[992px]:pt-0 max-[992px]:pb-0 max-[768px]:pt-0 max-[768px]:pb-0"
    : isPt0
    ? "pt-0 pb-20 max-[992px]:pt-0 max-[992px]:pb-15 max-[768px]:pt-0 max-[768px]:pb-10"
    : isPb0
    ? "pt-20 pb-0 max-[992px]:pt-15 max-[992px]:pb-0 max-[768px]:pt-10 max-[768px]:pb-0"
    : "py-20 max-[992px]:py-15 max-[768px]:py-10";

  const isCyan = theme === "cyan";

  return (
    <section
      className={cn(
        "how-to-choose-spa-sec",
        isCyan ? "bg-cyan bg-[#eff4ef]" : "bg-white",
        paddingClass,
        className
      )}
      data-section="evaluation-framework"
      id={id}
    >
      <Container>
        <SplitSectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div className="spa-wrapper flex flex-wrap border-t border-l border-[#2828281c]" data-aos="fade-up">
          {content.items.map((item, index) => (
            <div
              className="spa-col w-1/4 max-[992px]:w-1/2 max-[768px]:w-full"
              key={index}
            >
              <article className="spa-item flex h-full flex-col border-r border-b border-[#2828281c] p-6 max-[1400px]:p-5">
                <div className="spa-title">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mb-5 flex size-[34px] items-center justify-center rounded-full font-montserrat text-[10px] font-bold text-brand-red max-[992px]:mb-2.5",
                      isCyan ? "bg-white" : "bg-[#fbefd7]"
                    )}
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
