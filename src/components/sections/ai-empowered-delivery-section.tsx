import { ButtonLink } from "@/components/ui/button-link";
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
  callout?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export type AiEmpoweredDeliverySectionProps = {
  content: AiEmpoweredDeliveryContent;
  className?: string;
  id?: string;
  variant?: "default" | "dark-green";
};

export function AiEmpoweredDeliverySection({
  content,
  className,
  id,
  variant = "default",
}: AiEmpoweredDeliverySectionProps) {
  const isDark = variant === "dark-green" || className?.includes("box-bg-green");

  return (
    <section
      className={cn(
        "seo_safe_shopify_migration_section py-20 max-[992px]:py-[50px]",
        isDark && "box-bg-green",
        className,
      )}
      id={id}
    >
      <Container>
        <div
          className={cn(
            "seo-safe-main rounded-[30px] p-10 max-[991px]:rounded-[20px] max-[991px]:p-[30px] max-[767px]:p-5",
            isDark ? "bg-[#192019]" : "bg-[#EFF4EF]",
          )}
        >
          <div className="wrapper flex flex-wrap items-center justify-between">
            <div className="left-col w-[49%] max-[1199px]:w-[41%] max-[991px]:w-full">
              <div className="text-block">
                {content.eyebrow ? (
                  <Eyebrow className="mb-4" tone={isDark ? "inverse" : "ink"}>
                    {content.eyebrow}
                  </Eyebrow>
                ) : null}
                <h2
                  className={cn(
                    "mb-3 font-montreal-medium text-[35px] font-normal leading-[1.2] tracking-normal max-[992px]:text-[30px] max-[767px]:text-2xl",
                    isDark ? "text-white" : "text-ink",
                  )}
                >
                  {content.heading}
                </h2>
                <p
                  className={cn(
                    "font-sans text-sm font-normal leading-6",
                    // Live only keeps the 15px gap when a CTA button follows.
                    content.cta && "mb-[15px]",
                    isDark ? "text-white" : "text-[#535353]",
                  )}
                >
                  {content.description}
                </p>
                {content.cta ? (
                  <div className="btn-wrap">
                    <ButtonLink href={content.cta.href} variant="primary">
                      {content.cta.label}
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="right-col w-[49%] max-[1199px]:w-[55%] max-[991px]:mt-5 max-[991px]:w-full">
              <div className="ai-tools-wrapp grid grid-cols-2 gap-4 max-[767px]:flex max-[767px]:flex-col">
                {content.tools.map((tool) => (
                  <div
                    className={cn(
                      "ai-tools-item rounded-[16px] p-[15px]",
                      isDark
                        ? "border border-white/12 bg-white/[0.045]"
                        : "border border-[rgba(40,40,40,0.11)] bg-white",
                    )}
                    key={tool.name}
                  >
                    <span
                      className={cn(
                        "mb-[5px] block font-montserrat text-sm font-semibold uppercase leading-6",
                        isDark ? "text-white" : "text-brand-red",
                      )}
                    >
                      {tool.name}
                    </span>
                    <p
                      className={cn(
                        "font-sans text-sm font-normal leading-6",
                        isDark ? "text-white/[0.58]" : "text-[#535353]",
                      )}
                    >
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>

              {content.callout ? (
                <div className="seo-checks mt-5 flex flex-wrap">
                  <div className="seo-col w-full">
                    <div className="code border-l-2 border-[#ad5151] bg-[rgba(173,81,81,0.07)] p-[7px_12px]">
                      <p className="font-sans text-sm font-medium leading-relaxed text-[#282828]">
                        {content.callout}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
