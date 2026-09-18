import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type FeatureGridItem = {
  title: string;
  description: string;
  icon?: string;
  iconAlt?: string;
  linkText?: string;
  linkUrl?: string;
};

export type FeaturesGridSectionProps = {
  heading: string;
  eyebrow?: string;
  description?: string;
  features: readonly FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
  id?: string;
  titleAlign?: "center" | "left";
};

export function FeaturesGridSection({
  heading,
  eyebrow,
  description,
  features,
  columns = 3,
  className = "features-grid-sec py-20 max-[992px]:py-[50px]",
  id = "features",
  titleAlign = "center",
}: FeaturesGridSectionProps) {
  const colClass =
    columns === 4
      ? "w-1/4 max-[1199px]:w-1/2 max-[767px]:w-full"
      : columns === 2
        ? "w-1/2 max-[767px]:w-full"
        : "w-1/3 max-[992px]:w-1/2 max-[767px]:w-full";

  return (
    <section className={className} data-section="features" id={id}>
      <Container>
        <div
          className={cn(
            "title mb-12 max-[767px]:mb-6",
            titleAlign === "center" ? "mx-auto max-w-[850px] text-center" : "text-left",
          )}
        >
          {eyebrow ? (
            <div className="mb-2.5">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          ) : null}
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(heading, "max-[1199px]:hidden")}
          </h2>
          {description ? (
            <p className="mt-2.5 font-sans text-base font-medium leading-[27.2px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(description, "max-[1199px]:hidden")}
            </p>
          ) : null}
        </div>

        <div className="-mx-3 flex flex-wrap justify-center">
          {features.map((item, idx) => (
            <div className={cn("mb-6 px-3", colClass)} key={`${item.title}-${idx}`}>
              <article className="group relative z-0 flex h-full flex-col justify-between rounded-[10px] border border-[#efefef] bg-white p-[30px_26px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <div>
                  {item.icon ? (
                    <div className="icon relative z-10 mb-4 h-[50px] w-[50px]">
                      <Image
                        alt={item.iconAlt || item.title}
                        className="size-full object-contain"
                        height={50}
                        src={item.icon}
                        width={50}
                      />
                    </div>
                  ) : null}
                  <h3 className="relative z-10 mt-2 mb-2.5 font-sans text-[20px] font-bold leading-[28px] text-ink max-[767px]:text-lg">
                    {formatBrText(item.title, "max-[767px]:hidden")}
                  </h3>
                  <p className="relative z-10 font-sans text-base font-medium leading-[27.2px] tracking-[0.32px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                    {formatBrText(item.description, "max-[767px]:hidden")}
                  </p>
                </div>

                {item.linkUrl ? (
                  <div className="relative z-10 mt-4 pt-2">
                    <Link
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-red transition-colors hover:text-brand-red/80"
                      href={item.linkUrl}
                    >
                      <span>{item.linkText || sharedUiCopy.learnMore}</span>
                      <svg
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
