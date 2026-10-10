import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type CityWhyChooseBoxItem = {
  subtitle?: string;
  title: string | readonly string[];
  description: string | readonly string[];
  icon?: string;
  iconAlt?: string;
  iconNode?: ReactNode;
};

export type CityWhyChooseBoxesContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  items: readonly CityWhyChooseBoxItem[];
};

export type CityWhyChooseBoxesSectionProps = {
  content: CityWhyChooseBoxesContent;
  className?: string;
  id?: string;
  columns?: 3 | 4 | 5;
  bgClassName?: string;
  eyebrowVariant?: "pill" | "dash";
  cardClassName?: string;
  theme?: "light" | "dark";
};

export function CityWhyChooseBoxesSection({
  content,
  className,
  id,
  columns = 5,
  bgClassName,
  cardClassName,
  theme = "light",
}: CityWhyChooseBoxesSectionProps) {
  const isDark = theme === "dark";
  const defaultBg = isDark ? "bg-[#192019]" : "bg-[#eff4ef]";

  return (
    <section
      id={id}
      className={cn(
        "city-page-why-choose-boxes py-20 max-[992px]:py-[50px]",
        bgClassName ?? defaultBg,
        className,
      )}
    >
      <Container>
        <div className="section_title_with_eyebrow mb-12 flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col max-[991px]:gap-4" data-aos="fade-up">
          <div className="title max-w-[620px]">
            {content.eyebrow && (
              <div className="eyebrow mb-4">
                <Eyebrow as="span" tone={isDark ? "inverse" : "ink"}>
                  {content.eyebrow}
                </Eyebrow>
              </div>
            )}
            <h2
              className={cn(
                "font-sans text-[35px] font-bold leading-[48px] tracking-[-0.7px] max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]",
                isDark ? "text-white" : "text-ink",
              )}
            >
              {formatBrText(content.heading)}
            </h2>
          </div>
          {content.description ? (
            <div className="section_text max-w-[560px]">
              <p
                className={cn(
                  "text-base font-medium leading-[27px] max-[767px]:text-sm max-[767px]:leading-6",
                  isDark ? "text-white/80" : "text-[#535353]",
                )}
              >
                {formatBrText(content.description)}
              </p>
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            "why-choose-box-main",
            columns === 4 && "four-columns",
          )}
        >
          <div
            className={cn(
              "wrapper grid gap-[15px] max-[767px]:grid-cols-1",
              columns === 4
                ? "grid-cols-4 max-[1199px]:grid-cols-2"
                : columns === 3
                  ? "grid-cols-3 max-[1199px]:grid-cols-3"
                  : "grid-cols-5 max-[1199px]:grid-cols-3",
            )}
          >
            {content.items.map((item) => (
              <div
                key={typeof item.title === "string" ? item.title : item.title.join(" ")}
                data-aos="fade-up"
                className={cn(
                  "why-choose-box flex flex-col justify-start rounded-[18px] p-5 transition-transform duration-300 hover:-translate-y-1",
                  isDark
                    ? "border border-white/13 bg-white/[0.04]"
                    : "border border-[rgba(40,40,40,0.11)] bg-white",
                  cardClassName,
                )}
              >
                <div className="why-choose-box-text">
                  {item.iconNode || item.icon ? (
                    <div className="mb-2.5 size-6">
                      {item.iconNode ? (
                        item.iconNode
                      ) : item.icon ? (
                        <Image
                          src={item.icon}
                          alt={item.iconAlt ?? ""}
                          width={24}
                          height={24}
                          className="size-6 object-contain"
                        />
                      ) : null}
                    </div>
                  ) : null}
                  {item.subtitle ? (
                    <span className="mb-2.5 block font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-brand-red">
                      {item.subtitle}
                    </span>
                  ) : null}
                  <h3
                    className={cn(
                      "mb-2 font-sans text-base font-bold leading-[24px]",
                      isDark ? "text-white" : "text-ink",
                    )}
                  >
                    {formatBrText(item.title)}
                  </h3>
                  <p
                    className={cn(
                      "m-0 text-sm font-medium leading-[22px]",
                      isDark ? "text-white/80" : "text-[#535353]",
                    )}
                  >
                    {formatBrText(item.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
