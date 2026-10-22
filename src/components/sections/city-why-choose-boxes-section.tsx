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
  id?: string;
  columns?: 3 | 4 | 5;
  eyebrowVariant?: "pill" | "dash";
  theme?: "light" | "dark" | "white" | "warm";
  noPaddingBottom?: boolean;
  className?: string;
};

const BG_THEME_MAP = {
  dark: "bg-[#192019]",
  light: "bg-[#eff4ef]",
  white: "bg-white",
  warm: "bg-[#fafaf7]",
} as const;

export function CityWhyChooseBoxesSection({
  content,
  id,
  columns = 5,
  theme = "light",
  noPaddingBottom,
  className,
}: CityWhyChooseBoxesSectionProps) {
  const isDark = theme === "dark";
  const defaultBg = BG_THEME_MAP[theme] ?? BG_THEME_MAP.light;
  const isDynamic = columns === 3;
  const isPb0 = noPaddingBottom || (isDynamic && theme === "white");

  return (
    <section
      id={id}
      className={cn(
        isDynamic ? "city-page-why-choose-dynamic" : "city-page-why-choose-boxes",
        isPb0
          ? "pt-20 pb-0 max-[991px]:pt-[50px] max-[991px]:pb-0"
          : "py-20 max-[991px]:py-[50px]",
        defaultBg,
        className,
      )}
    >
      <Container>
        <div
          className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between max-[991px]:mb-[30px]"
          data-aos="fade-up"
        >
          <div
            className={cn(
              "title",
              content.description ? "w-[44%] max-[991px]:w-full" : "w-full max-w-[800px]",
            )}
          >
            {content.eyebrow && (
              <div className="eyebrow mb-4">
                <Eyebrow as="span" tone={isDark ? "inverse" : "muted"}>
                  {content.eyebrow}
                </Eyebrow>
              </div>
            )}
            <h2
              className={cn(
                "m-0 font-montreal-medium text-[35px] font-normal leading-[1.4] tracking-normal max-[991px]:mb-2.5 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[1.3]",
                isDark ? "text-white" : "text-ink",
              )}
            >
              {formatBrText(content.heading)}
            </h2>
          </div>
          {content.description ? (
            <div className="section_text w-[48.3%] max-[1199px]:w-1/2 max-[991px]:w-full">
              <p
                className={cn(
                  "m-0 text-base font-medium leading-7 max-[1199px]:text-sm max-[1199px]:leading-6 [&_br]:hidden",
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
              "wrapper grid gap-[15px]",
              columns === 4
                ? "grid-cols-4 max-[1199px]:grid-cols-2 max-[767px]:grid-cols-1"
                : columns === 3
                  ? "grid-cols-3 max-[1199px]:grid-cols-3 max-[767px]:grid-cols-1"
                  : "grid-cols-5 max-[1199px]:grid-cols-3 max-[767px]:grid-cols-1",
            )}
          >
            {content.items.map((item) => (
              <div
                key={typeof item.title === "string" ? item.title : item.title.join(" ")}
                data-aos="fade-up"
                className={cn(
                  "why-choose-box p-5",
                  columns === 3
                    ? "rounded-[18px]"
                    : "rounded-[20px]",
                  isDark
                    ? "border border-white/13 bg-white/[0.04]"
                    : columns === 3
                      ? "border border-[rgba(40,40,40,0.11)] bg-white"
                      : "border border-[rgba(40,40,40,0.06)] bg-white",
                )}
              >
                <div className="why-choose-box-text">
                  {item.iconNode || item.icon ? (
                    <div className={cn("size-6 [&>svg]:size-6 [&>svg]:h-auto", columns === 3 ? "mb-2.5" : "mb-[15px]")}>
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
                    <span className="mb-2.5 block font-montserrat text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                      {item.subtitle}
                    </span>
                  ) : null}
                  <h3
                    className={cn(
                      "mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] max-[991px]:text-[18px] max-[991px]:leading-[26px]",
                      isDark ? "text-white" : "text-ink",
                    )}
                  >
                    {formatBrText(item.title)}
                  </h3>
                  <p
                    className={cn(
                      "m-0 font-sans text-sm font-normal leading-6",
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
