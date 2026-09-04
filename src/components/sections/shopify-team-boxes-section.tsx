import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";

export type TeamBoxItem = {
  title: string;
  description: string;
};

export type ShopifyTeamBoxesContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly TeamBoxItem[];
};

export type ShopifyTeamBoxesSectionProps = {
  content: ShopifyTeamBoxesContent;
  className?: string;
  id?: string;
};

export function ShopifyTeamBoxesSection({
  content,
  className,
  id = "shopify-dev-team",
}: ShopifyTeamBoxesSectionProps) {
  return (
    <section
      className={cn(
        "shopify-dev-team bg-[#192019] py-20 text-white max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between gap-y-8">
          <div className="section_title_with_eyebrow w-[45%] max-[1199px]:w-full">
            {content.eyebrow ? (
              <Eyebrow
                className="mb-4 font-montserrat text-[13px] font-bold uppercase tracking-[0.8px] text-white max-[767px]:text-[11px]"
                tone="inverse"
              >
                {content.eyebrow}
              </Eyebrow>
            ) : null}
            <h2 className="font-sans text-[44px] font-bold leading-[56px] text-white max-[1199px]:text-[38px] max-[1199px]:leading-[48px] max-[767px]:text-[28px] max-[767px]:leading-[38px]">
              {content.heading}
            </h2>
            <div className="section_text mt-5 max-[1199px]:mt-4">
              <p className="font-sans text-base font-medium leading-7 text-white/80 max-[767px]:text-sm max-[767px]:leading-6">
                {content.description}
              </p>
            </div>
          </div>

          <div className="right-block w-[50%] max-[1199px]:w-full">
            <div className="boxes-wrapper grid grid-cols-2 gap-3 max-[767px]:flex max-[767px]:flex-col">
              {content.items.map((item, index) => {
                const isFirst = index === 0;

                return (
                  <div
                    className={cn(
                      "item group rounded-[18px] border border-white/12 p-[22px] transition-all duration-200 max-[767px]:rounded-[16px] max-[767px]:p-5",
                      isFirst
                        ? "bg-[#ad5151]"
                        : "bg-white/[0.045] hover:bg-[#ad5151]",
                    )}
                    key={item.title}
                  >
                    <h3 className="font-sans text-[18px] font-bold leading-[1.4] text-white">
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 font-sans text-sm leading-relaxed transition-colors",
                        isFirst ? "text-white" : "text-white/60 group-hover:text-white",
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
