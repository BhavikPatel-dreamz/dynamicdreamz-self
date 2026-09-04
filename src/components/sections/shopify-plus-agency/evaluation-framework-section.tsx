import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyPlusAgencyHowToChoose } from "@/content/shopify-plus-agency";

export type EvaluationFrameworkContent = typeof shopifyPlusAgencyHowToChoose;

export function EvaluationFrameworkSection({
  content,
}: {
  content: EvaluationFrameworkContent;
}) {
  return (
    <section
      className="how-to-choose-spa-sec bg-white py-20 max-[992px]:py-[50px]"
      data-section="evaluation-framework"
      id="evaluation-framework"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          textColumnClassName="w-[48%] max-[992px]:w-full"
          titleColumnClassName="w-[44%] max-[992px]:w-full"
          variant="left"
        />

        <div className="spa-wrapper flex flex-wrap border-t border-l border-[#2828281c]">
          {content.items.map((item, index) => (
            <div
              className="spa-col w-1/4 max-[991px]:w-1/2 max-[767px]:w-full"
              key={item.title}
            >
              <article className="spa-item flex h-full flex-col border-r border-b border-[#2828281c] p-6 max-[1399px]:p-5">
                <div className="spa-title">
                  <span
                    aria-hidden="true"
                    className="mb-5 flex size-[34px] items-center justify-center rounded-full bg-[#fbefd7] font-montserrat text-[10px] font-bold text-brand-red max-[991px]:mb-2.5"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 mb-2.5 font-montserrat text-base font-bold leading-6 text-ink">
                    {item.title}
                  </h3>
                </div>
                <div className="spa-text">
                  <p className="m-0 font-sans text-sm font-medium leading-[22px] text-[#535353]">
                    {item.description}
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
