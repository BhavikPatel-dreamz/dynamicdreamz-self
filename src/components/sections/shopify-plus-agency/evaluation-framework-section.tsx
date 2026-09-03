import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { shopifyPlusAgencyHowToChoose } from "@/content/shopify-plus-agency";

export type EvaluationFrameworkContent = typeof shopifyPlusAgencyHowToChoose;

export function EvaluationFrameworkSection({
  content,
}: {
  content: EvaluationFrameworkContent;
}) {
  return (
    <section className="bg-white py-20 max-[992px]:py-[50px]" data-section="evaluation-framework" id="evaluation-framework">
      <Container>
        <div className="mb-[50px] flex flex-wrap items-end justify-between gap-6 max-[991px]:mb-[30px] max-[991px]:items-start">
          <div className="w-[42%] max-[991px]:w-full">
            <Eyebrow className="mb-4" lineThickness="thin" lineWidth="fixed">
              {content.eyebrow}
            </Eyebrow>
            <h2 className="m-0 font-montreal-medium text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {content.heading}
            </h2>
          </div>
          <p className="m-0 w-[50%] text-base font-medium leading-[27px] text-muted max-[991px]:w-full max-[767px]:text-sm max-[767px]:leading-6">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-4 border-t border-l border-black/10 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <article className="border-r border-b border-black/10 p-6 max-[1199px]:p-5" key={item.title}>
              <span aria-hidden="true" className="mb-5 flex size-[52px] items-center justify-center rounded-full bg-[#f7f4e9] font-montreal-medium text-base font-medium leading-none text-brand-red">
                {String(content.items.indexOf(item) + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2.5 font-montserrat text-base font-bold leading-6 text-ink">
                {item.title}
              </h3>
              <p className="m-0 text-sm font-medium leading-[22px] text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
