
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type CityPageCounterItem = {
  value: string;
  label: string;
  subLabel?: string;
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
  eyebrowVariant?: "pill" | "dash";
};

export function CityPageCounterSection({
  content,
  className,
}: CityPageCounterSectionProps) {
  return (
    <section
      className={cn(
        "city-page-counter py-20 max-[991px]:py-[50px]",
        className,
      )}
    >
      <Container>
        <SplitSectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          textColumnClassName="max-w-[560px]"
          titleColumnClassName="max-w-[620px]"
          variant="left"
        />

        <div data-aos="fade-up" className="wrapper flex flex-wrap">
          {content.items.map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                "item w-1/4 p-5 border-t border-r border-b border-[rgba(40,40,40,0.11)]",
                idx === 0 && "border-l",
                "max-[991px]:w-1/2 max-[991px]:[&:nth-child(odd)]:border-l max-[991px]:[&:nth-last-child(-n+2)]:border-t-0",
                "max-[767px]:w-full max-[767px]:border-t! max-[767px]:border-l! max-[767px]:border-r! max-[767px]:border-b-0! max-[767px]:p-[18px] max-[767px]:last:border-b!",
              )}
            >
              <h3 className="text-[28px] font-normal leading-tight text-ink mb-1.5 max-[767px]:text-[22px] max-[767px]:mb-1">
                {item.value}
              </h3>
              {item.subLabel ? (
                <>
                  <span className="mb-4 block text-xs font-semibold uppercase leading-none text-brand-red">
                    {item.label}
                  </span>
                  <p className="text-sm font-medium leading-[22px] text-[#535353]">
                    {item.subLabel}
                  </p>
                </>
              ) : (
                <p className="text-sm font-medium leading-[22px] text-[#535353]">
                  {item.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
