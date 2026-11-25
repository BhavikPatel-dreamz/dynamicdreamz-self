import { Container } from "@/components/ui/container";
import type { CaseStudyKeyMetrics as KeyMetricsType } from "@/types/case-study";

type CaseStudyKeyMetricsProps = {
  keyMetrics: KeyMetricsType;
};

export function CaseStudyKeyMetrics({ keyMetrics }: CaseStudyKeyMetricsProps) {
  if (!keyMetrics || !keyMetrics.items || keyMetrics.items.length === 0) {
    return null;
  }

  return (
    <section
      className="pt-20 pb-0 max-[992px]:pt-[50px]"
      aria-label={keyMetrics.heading}
      data-aos="fade-up"
    >
      <Container>
        <div className="flex flex-wrap overflow-hidden rounded-[22px] bg-[#182019] max-[768px]:rounded-[16px]">
          <div className="flex w-[22%] items-center p-[25px] max-[992px]:w-full max-[992px]:border-b max-[992px]:border-[#424842] max-[992px]:py-4 max-[992px]:px-5 max-[768px]:px-[15px] max-[768px]:py-5">
            <h2 className="m-0 font-montserrat text-[12px] font-semibold uppercase leading-[20px] tracking-[1px] text-white">
              {keyMetrics.heading}
            </h2>
          </div>
          <div className="flex w-[78%] flex-wrap max-[992px]:w-full">
            {keyMetrics.items.map((item, index) => (
              <div
                key={`${item.stat}-${index}`}
                className="flex-1 border-l border-[#424842] p-[25px] max-[992px]:flex-[1_1_calc(50%-10px)] max-[992px]:first:border-l-0 max-[768px]:w-full max-[768px]:flex-auto max-[768px]:border-l-0 max-[768px]:border-t max-[768px]:border-[#424842] max-[768px]:first:border-t-0 max-[768px]:p-[15px]"
              >
                <h3 className="mb-[5px] font-montreal-medium text-[24px] font-normal leading-[1.2] text-white max-[768px]:text-[20px]">
                  {item.stat}
                </h3>
                <span className="block font-sans text-[13px] leading-[1.2] text-[#c9c6c0] whitespace-pre-line">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
