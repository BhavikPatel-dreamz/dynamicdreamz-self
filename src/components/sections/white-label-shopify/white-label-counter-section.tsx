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
      <Container className="max-[1199px]:max-w-full max-[1199px]:px-0">
        <div className="stats_container flex flex-wrap items-center justify-between max-[991px]:relative max-[991px]:after:absolute max-[991px]:after:top-1/2 max-[991px]:after:left-0 max-[991px]:after:h-[1px] max-[991px]:after:w-full max-[991px]:after:-translate-y-1/2 max-[991px]:after:bg-[rgba(40,40,40,0.10)] max-[991px]:after:content-['']">
          {counters.map((item, index) => (
            <div
              className={`stats_item w-1/4 py-[17px] text-center max-[1199px]:px-5 max-[991px]:w-1/2 max-[767px]:min-h-[94px] max-[767px]:p-4 ${
                index % 2 === 0
                  ? "border-r border-[rgba(40,40,40,0.10)]"
                  : index === 1
                    ? "border-r border-[rgba(40,40,40,0.10)] max-[991px]:border-r-0"
                    : "border-r-0"
              }`}
              key={item.label}
            >
              <div className="stats_box mx-auto w-fit max-[991px]:max-w-[205px]">
                <div className="stats_number flex items-center justify-center font-sans text-2xl font-bold leading-none text-[#282828] max-[1199px]:text-xl max-[767px]:text-base">
                  {item.value}
                </div>
                <p className="counter_title mt-2 font-montserrat text-[13px] font-medium leading-none text-[#535353] max-[1199px]:leading-[18px] max-[767px]:mx-auto max-[767px]:max-w-[135px]">
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
