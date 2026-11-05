import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";

export type CityOfficeAddress = {
  title: string;
  address: string;
  link: {
    label: string;
    href: string;
  };
};

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
  address?: CityOfficeAddress;
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
        "seo_safe_shopify_migration_section py-20 max-[992px]:py-15 max-[768px]:py-10",
        isDark && "box-bg-green",
        className,
      )}
      id={id}
    >
      <Container>
        <div
          data-aos="fade-up"
          className={cn(
            "seo-safe-main rounded-[30px] p-10 max-[992px]:rounded-[20px] max-[992px]:p-[30px] max-[768px]:p-5",
            isDark ? "bg-[#192019]" : "bg-[#EFF4EF]",
          )}
        >
          <div className="wrapper flex flex-wrap items-center justify-between">
            <div className="left-col w-[49%] max-[1200px]:w-[41%] max-[992px]:w-full">
              <div className="text-block">
                {content.eyebrow ? (
                  <Eyebrow className="mb-4" tone={isDark ? "inverse" : "muted"}>
                    {content.eyebrow}
                  </Eyebrow>
                ) : null}
                <h2
                  className={cn(
                    "mb-3 font-montreal-medium text-[35px] font-normal leading-[1.2] tracking-normal max-[1200px]:text-[30px] max-[1200px]:leading-[36px] max-[768px]:text-2xl max-[768px]:leading-[28.8px]",
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
                    <ButtonLink href={content.cta.href} variant="primaryDark">
                      {content.cta.label}
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
              {content.address ? (
                <div className="address-block mt-5 rounded-[16px] border border-white/12 bg-white/[0.045] p-[15px]">
                  <h4 className="mb-2 text-sm leading-[1.2] text-white">
                    {content.address.title}
                  </h4>
                  <p className="mb-[5px] text-xs leading-normal text-white/[0.58]">
                    {content.address.address}
                  </p>
                  <Link
                    className="text-arrow-link text-brand-red group inline-flex items-center text-[10px] font-bold uppercase hover:text-white"
                    href={content.address.link.href}
                  >
                    {content.address.link.label}
                    <svg
                      aria-hidden="true"
                      className="ml-2 h-auto w-2 shrink-0"
                      fill="none"
                      height="12"
                      viewBox="0 0 12 12"
                      width="12"
                    >
                      <path
                        d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              ) : null}
            </div>

            <div className="right-col w-[49%] max-[1200px]:w-[55%] max-[992px]:mt-5 max-[992px]:w-full">
              <div className="ai-tools-wrapp grid grid-cols-2 gap-4 max-[768px]:flex max-[768px]:flex-col">
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
                      <p className="font-sans text-sm font-medium leading-relaxed text-[#535353]">
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
