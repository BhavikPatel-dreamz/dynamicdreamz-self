import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

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

export type PerformanceBenchmarksBlockProps = {
  content: AiEmpoweredDeliveryContent;
  className?: string;
  id?: string;
  variant?: "default" | "dark-green";
};

export type AiEmpoweredDeliverySectionProps = PerformanceBenchmarksBlockProps;

export function PerformanceBenchmarksBlock({
  content,
  className,
  id,
  variant = "default",
}: PerformanceBenchmarksBlockProps) {
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
          data-aos="fade-up"
          className={cn(
            "seo-safe-main rounded-[30px] p-10 max-[991px]:rounded-[20px] max-[991px]:p-[30px] max-[767px]:p-5",
            isDark ? "bg-[#192019]" : "bg-[#EFF4EF]",
          )}
        >
          <div className="wrapper flex flex-wrap items-center justify-between">
            <div className="left-col w-[49%] max-[1199px]:w-[41%] max-[991px]:w-full">
              <div className="text-block">
                {content.eyebrow ? (
                  <div className="eyebrow mb-4">
                    <span
                      className={cn(
                        "font-montserrat text-sm font-semibold uppercase",
                        isDark ? "text-white" : "text-[#535353]",
                      )}
                    >
                      {content.eyebrow}
                    </span>
                  </div>
                ) : null}
                <h2
                  className={cn(
                    "mb-3 font-montreal-medium text-[35px] font-normal leading-[1.2] tracking-normal max-[992px]:text-[30px] max-[767px]:text-2xl",
                    isDark ? "text-white" : "text-ink",
                  )}
                >
                  {formatBrText(content.heading)}
                </h2>
                <p
                  className={cn(
                    "font-sans text-sm font-normal leading-6",
                    content.cta && "mb-[15px]",
                    isDark ? "text-white" : "text-[#535353]",
                  )}
                >
                  {formatBrText(content.description)}
                </p>
                {content.cta ? (
                  <div className="btn-wrap">
                    <Button href={content.cta.href} variant="primary">
                      {content.cta.label}
                    </Button>
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
                    <h3
                      className={cn(
                        "mb-2 font-display text-base font-semibold leading-snug",
                        isDark ? "text-white" : "text-ink",
                      )}
                    >
                      {tool.name}
                    </h3>
                    <p
                      className={cn(
                        "font-sans text-xs font-normal leading-relaxed",
                        isDark ? "text-white/70" : "text-muted",
                      )}
                    >
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
              {content.callout && (
                <div
                  className={cn(
                    "mt-4 rounded-[12px] p-3 text-center text-xs font-medium",
                    isDark ? "bg-white/10 text-white" : "bg-brand-red/10 text-brand-red",
                  )}
                >
                  {content.callout}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { PerformanceBenchmarksBlock as AiEmpoweredDeliverySection };
