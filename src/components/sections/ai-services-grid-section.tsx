import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type AiServiceGridItem = {
  label?: string;
  title: string;
  description: string;
  useCasesHeading?: string;
  useCases?: string;
};

export type AiServicesGridContent = {
  id?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly AiServiceGridItem[];
};

export type AiServicesGridSectionProps = {
  content: AiServicesGridContent;
  className?: string;
  id?: string;
};

export function AiServicesGridSection({
  content,
  className,
  id,
}: AiServicesGridSectionProps) {
  const sectionId = id ?? content.id ?? "our_ai_services";

  return (
    <section
      className={cn(
        "our-ai-services-section bg-[#eff4ef] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={sectionId}
    >
      <Container>
        <SplitSectionHeading
          className="mb-10 gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div className="ai-service-grid -mx-[10px] -mb-5 flex flex-wrap">
          {content.items.map((item) => (
            <div
              className="ai-service-col mb-5 w-1/2 px-[10px] max-[767px]:w-full"
              key={item.title}
            >
              <div className="ai-service-card flex h-full flex-col justify-between rounded-[20px] border border-[rgba(40,40,40,0.11)] bg-white p-[25px] max-[767px]:p-5">
                <div className="ai-content">
                  {item.label ? (
                    <div className="service-label mb-[15px] font-montserrat text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                      {item.label}
                    </div>
                  ) : null}
                  <h3 className="mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[1199px]:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-normal leading-[24px] text-[#535353]">
                    {item.description}
                  </p>
                </div>
                {item.useCases ? (
                  <div className="tech mt-5 border-t border-[rgba(40,40,40,0.11)] pt-5 max-[767px]:mt-[15px] max-[767px]:pt-[15px]">
                    {item.useCasesHeading ? (
                      <h4 className="mb-2 font-montserrat text-xs font-semibold uppercase leading-normal text-ink">
                        {item.useCasesHeading}
                      </h4>
                    ) : null}
                    <p className="font-sans text-[13px] leading-[21px] text-[#535353]">
                      {item.useCases}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
