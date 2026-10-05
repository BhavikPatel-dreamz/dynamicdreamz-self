import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type ArchitecturePatternItem = {
  label: string;
  title: string;
  description: string;
  stack: string;
};

export type RecentArchitecturePatternsContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly ArchitecturePatternItem[];
};

export type RecentArchitecturePatternsSectionProps = {
  content: RecentArchitecturePatternsContent;
  className?: string;
  id?: string;
};

export function RecentArchitecturePatternsSection({
  content,
  className,
  id,
}: RecentArchitecturePatternsSectionProps) {
  return (
    <section
      className={cn(
        "recent_architecture_patterns_section py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-10 gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div className="wrapper -mx-[7.5px] -mb-[15px] flex flex-wrap">
          {content.items.map((item) => (
            <div
              className="recent_architecture_col mb-[15px] w-1/4 px-[7.5px] max-[1199px]:w-1/2 max-[767px]:w-full"
              key={item.title}
            >
              <article className="recent_architecture_item flex h-full flex-col justify-between gap-[30px] rounded-[20px] border border-[rgba(23,30,22,0.10)] bg-white p-[30px_18px]">
                <div className="top_text">
                  <div className="title">
                    <span className="mb-[15px] block font-montserrat text-sm font-bold uppercase leading-5 text-[#AD5151]">
                      {item.label}
                    </span>
                    <h3 className="font-montserrat text-[20px] font-bold leading-[130%] text-[#282828]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 font-sans text-sm font-medium leading-[24px] text-[#535353]">
                    {item.description}
                  </p>
                </div>
                <div className="bottom_text">
                  <p className="rounded-[10px] border border-[#D0D0CE] bg-[#FAFAF7] p-[8.5px_7px] text-center font-sans text-[10px] font-bold leading-[150%] tracking-[-0.33px] text-[#282828] max-[1399px]:flex max-[1399px]:min-h-[49px] max-[1399px]:items-center max-[1399px]:p-[8.5px_10px] max-[1399px]:text-left max-[1199px]:min-h-0 max-[1199px]:w-fit">
                    {item.stack}
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
