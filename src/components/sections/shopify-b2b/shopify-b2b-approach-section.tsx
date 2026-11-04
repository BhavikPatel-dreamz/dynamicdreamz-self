import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type ShopifyB2BApproachCard = {
  badge?: string;
  title: string;
  description: string;
  points: readonly string[];
  isHighlighted?: boolean;
};

export type ShopifyB2BProofItem = {
  title: string;
  description: string;
};

export type ShopifyB2BApproachContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description: string | readonly string[];
  approaches: readonly ShopifyB2BApproachCard[];
  proofs: readonly ShopifyB2BProofItem[];
};

export type ShopifyB2BApproachSectionProps = {
  content: ShopifyB2BApproachContent;
  className?: string;
  id?: string;
};

export function ShopifyB2BApproachSection({
  content,
  className,
  id,
}: ShopifyB2BApproachSectionProps) {
  return (
    <section
      className={cn(
        "choose-the-right-approach bg-green bg-[#172019] py-20 max-[992px]:py-15 max-[768px]:py-10 text-white",
        className
      )}
      id={id}
    >
      <Container>
        <div
          className="section_title_with_eyebrow mb-[50px] flex flex-wrap justify-between gap-y-4 max-[992px]:flex-col"
          data-aos="fade-up"
        >
          <div className="title w-[45%] max-[992px]:w-full">
            {content.eyebrow ? (
              <Eyebrow as="div" className="mb-4 text-white">
                {content.eyebrow}
              </Eyebrow>
            ) : null}
            <h2 className="m-0 font-display text-[35px] font-normal leading-[45px] text-white max-[1200px]:text-[30px] max-[768px]:text-2xl max-[768px]:leading-[33px]">
              {formatBrText(content.heading)}
            </h2>
          </div>
          <div className="section_text w-[48%] max-[992px]:w-full">
            <p className="m-0 font-sans text-base font-normal leading-[26px] text-white/80 max-[768px]:text-sm">
              {formatBrText(content.description)}
            </p>
          </div>
        </div>

        <div
          className="wrapper flex flex-wrap -mx-[10px] min-[1200px]:-mx-2.5"
          data-aos="fade-up"
        >
          {content.approaches.map((item) => (
            <div
              key={item.title}
              className="w-1/2 px-[10px] min-[1200px]:px-2.5 max-[1200px]:w-full max-[1200px]:mb-5"
            >
              <div
                className={cn(
                  "block h-full rounded-[18px] p-[30px] pb-[18px] max-[768px]:p-6 max-[768px]:pb-3",
                  item.isHighlighted
                    ? "left-block border border-white/[0.16] bg-white/[0.05] text-white"
                    : "right-block bg-white text-ink"
                )}
              >
                <div className="top-title">
                  {item.badge ? (
                    <span
                      className={cn(
                        "mb-2.5 block font-montserrat text-sm font-semibold uppercase tracking-[0.5px]",
                        item.isHighlighted ? "text-white/65" : "text-[#ad5151]"
                      )}
                    >
                      {item.badge}
                    </span>
                  ) : null}
                  <h3
                    className={cn(
                      "mb-2 font-display text-[22px] font-medium leading-tight max-[768px]:text-lg",
                      item.isHighlighted ? "text-white" : "text-ink"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "font-sans text-sm font-normal leading-[22px]",
                      item.isHighlighted ? "text-white/80" : "text-[#535353]"
                    )}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="bullet-points mt-[25px]">
                  <ul className="m-0 list-none p-0">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className={cn(
                          "relative py-3 pl-[22px] font-sans text-sm font-normal leading-6",
                          item.isHighlighted
                            ? "border-t border-white/[0.16] text-white"
                            : "border-t border-[rgba(40,40,40,0.11)] text-[#535353]"
                        )}
                      >
                        <svg
                          aria-hidden="true"
                          className="absolute left-0 top-3.5 size-4 shrink-0"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M12.25 5L6.75 10.5L4 7.75"
                            stroke="#AD5151"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="proof-row flex flex-wrap -mx-[10px] mt-5 max-[1200px]:-mb-5"
          data-aos="fade-up"
        >
          {content.proofs.map((proof) => (
            <div
              key={proof.title}
              className="proof-col w-1/4 px-[10px] max-[1200px]:w-1/2 max-[1200px]:mb-5 max-[768px]:w-full"
            >
              <div className="proof h-full rounded-[18px] border border-white/[0.16] bg-white/[0.05] p-5 text-white">
                <h3 className="mb-2.5 font-montreal-medium text-lg font-medium text-white">
                  {proof.title}
                </h3>
                <p className="m-0 font-sans text-sm font-normal leading-6 text-white/80">
                  {proof.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
