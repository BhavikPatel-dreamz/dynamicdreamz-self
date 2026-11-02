import { Container } from "@/components/ui/container";
import { whiteLabelShopifyCounters } from "@/content/white-label-shopify-development";

export type CounterItem = {
  value: string;
  label: string;
};

type WhiteLabelCounterSectionProps = {
  counters?: readonly CounterItem[];
};

export function WhiteLabelCounterSection({
  counters = whiteLabelShopifyCounters,
}: WhiteLabelCounterSectionProps) {
  return (
    <section className="white_label_counter_section relative border-y border-[rgba(0,0,0,0.10)] bg-white py-0">
      <Container variant="fullBleedTablet">
        <div
          data-aos="fade-up"
          className="stats_container flex flex-wrap items-center justify-between max-[992px]:relative max-[992px]:after:absolute max-[992px]:after:top-1/2 max-[992px]:after:left-0 max-[992px]:after:h-[1px] max-[992px]:after:w-full max-[992px]:after:-translate-y-1/2 max-[992px]:after:bg-[rgba(40,40,40,0.10)] max-[992px]:after:content-['']"
        >
          {counters.map((item, index) => (
            <div
              className={`stats_item w-1/4 py-[17px] text-center max-[1200px]:px-5 max-[992px]:w-1/2 max-[768px]:min-h-[94px] max-[768px]:p-4 ${
                index % 2 === 0
                  ? "border-r border-[rgba(40,40,40,0.10)]"
                  : index === 1
                    ? "border-r border-[rgba(40,40,40,0.10)] max-[992px]:border-r-0"
                    : "border-r-0"
              }`}
              key={item.label}
            >
              <div className="stats_box text-left mx-auto w-fit max-[992px]:max-w-[205px]">
                <div className="stats_number font-sans text-2xl font-bold leading-none text-[#282828] max-[1200px]:text-xl max-[768px]:text-base">
                  {item.value}
                </div>
                <p className="counter_title mt-2 font-montserrat text-[13px] font-medium leading-none text-[#535353] max-[1200px]:leading-[18px] max-[768px]:mx-auto max-[768px]:max-w-[135px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
