import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type CityPageCounterItem = {
  value: string;
  label: string;
};

export type CityPageCounterContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly CityPageCounterItem[];
};

export type CityPageCounterSectionProps = {
  content: CityPageCounterContent;
  className?: string;
};

export function CityPageCounterSection({
  content,
  className,
}: CityPageCounterSectionProps) {
  return (
    <section
      className={cn(
        "city-page-counter py-20 max-[992px]:py-[50px]",
        className,
      )}
    >
      <Container>
        <div className="section_title_with_eyebrow mb-12 flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col max-[991px]:gap-4">
          <div className="title max-w-[620px]">
            {content.eyebrow && (
              <div className="eyebrow mb-3">
                <span className="inline-block rounded-[30px] border border-[rgba(40,40,40,0.12)] bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.5px] text-[#4d5577]">
                  {content.eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-sans text-[35px] font-bold leading-[48px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {content.heading}
            </h2>
          </div>
          <div className="section_text max-w-[560px]">
            <p className="text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
              {content.description}
            </p>
          </div>
        </div>

        <div className="wrapper flex flex-wrap">
          {content.items.map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                "item w-1/4 p-5 border-t border-r border-b border-[rgba(40,40,40,0.11)]",
                idx === 0 && "border-l",
                "max-[991px]:w-1/2 max-[991px]:[&:nth-child(odd)]:border-l max-[991px]:[&:nth-last-child(-n+2)]:border-t-0",
                "max-[767px]:w-full max-[767px]:border-t max-[767px]:border-l max-[767px]:border-r max-[767px]:border-b-0 max-[767px]:p-[18px] max-[767px]:last:border-b",
              )}
            >
              <h3 className="text-[28px] font-bold leading-tight text-ink mb-1.5 max-[767px]:text-[22px] max-[767px]:mb-1">
                {item.value}
              </h3>
              <p className="text-sm font-medium leading-[22px] text-[#535353]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
