import { Container } from "@/components/ui/container";
import { whiteLabelShopifyCounters } from "@/content/white-label-shopify-development";

type WhiteLabelCounterSectionProps = {
  counters?: typeof whiteLabelShopifyCounters;
};

export function WhiteLabelCounterSection({
  counters = whiteLabelShopifyCounters,
}: WhiteLabelCounterSectionProps) {
  return (
    <section className="white_label_counter_section relative border-y border-[rgba(0,0,0,0.10)] bg-white py-0">
      <Container className="max-[1199px]:max-w-full max-[1199px]:px-0">
        <div className="stats_container flex flex-wrap items-center justify-between max-[1199px]:relative">
          {counters.map((item, index) => (
            <div
              className={`stats_item w-1/4 py-[17px] text-center max-[1199px]:w-1/2 max-[1199px]:px-5 ${
                index % 2 === 0
                  ? "border-r border-[rgba(40,40,40,0.10)]"
                  : index === 1
                    ? "border-r-0 min-[1200px]:border-r min-[1200px]:border-[rgba(40,40,40,0.10)]"
                    : index === 2
                      ? "border-r border-[rgba(40,40,40,0.10)]"
                      : "border-r-0"
              }`}
              key={item.label}
            >
              <div className="stats_box mx-auto w-fit">
                <div className="stats_number flex items-center justify-center font-sans text-2xl font-bold leading-none text-[#282828] max-[1199px]:text-xl">
                  {item.value}
                </div>
                <p className="counter_title mt-2 font-montserrat text-[13px] font-medium leading-none text-[#535353] max-[1199px]:leading-[18px]">
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
