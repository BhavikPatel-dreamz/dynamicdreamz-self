import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";

export type AiDeliveryTool = {
  name: string;
  description: string;
};

export type AiEmpoweredDeliveryContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  tools: readonly AiDeliveryTool[];
  callout: string;
};

export type AiEmpoweredDeliverySectionProps = {
  content: AiEmpoweredDeliveryContent;
  className?: string;
  id?: string;
};

export function AiEmpoweredDeliverySection({
  content,
  className,
  id,
}: AiEmpoweredDeliverySectionProps) {
  return (
    <section
      className={cn(
        "seo_safe_shopify_migration_section py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div className="seo-safe-main rounded-[30px] bg-[#EFF4EF] p-10 max-[991px]:rounded-[20px] max-[991px]:p-[30px] max-[767px]:p-5">
          <div className="wrapper flex flex-wrap items-center justify-between">
            <div className="left-col w-[49%] max-[1199px]:w-[41%] max-[991px]:w-full">
              <div className="text-block">
                {content.eyebrow ? (
                  <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>
                ) : null}
                <h2 className="mb-4 font-montreal-medium text-[35px] font-medium leading-[1.2] tracking-normal text-ink max-[992px]:text-[30px] max-[767px]:text-2xl">
                  {content.heading}
                </h2>
                <p className="font-sans text-base font-medium leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6">
                  {content.description}
                </p>
              </div>
            </div>

            <div className="right-col w-[49%] max-[1199px]:w-[55%] max-[991px]:mt-5 max-[991px]:w-full">
              <div className="ai-tools-wrapp grid grid-cols-2 gap-2 max-[767px]:flex max-[767px]:flex-col">
                {content.tools.map((tool) => (
                  <div
                    className="ai-tools-item rounded-[16px] border border-[rgba(40,40,40,0.11)] bg-white p-[15px]"
                    key={tool.name}
                  >
                    <span className="mb-[5px] block font-montserrat text-xs font-semibold uppercase text-brand-red">
                      {tool.name}
                    </span>
                    <p className="font-sans text-sm font-medium leading-normal text-[#535353]">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="seo-checks mt-5 flex flex-wrap">
                <div className="seo-col w-full">
                  <div className="code border-l-2 border-[#ad5151] bg-[rgba(173,81,81,0.07)] p-[7px_12px]">
                    <p className="font-sans text-sm font-medium leading-relaxed text-[#282828]">
                      {content.callout}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
