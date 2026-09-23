import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";
import type { NumberedGridItem } from "@/content/shopify-migration";

export type { NumberedGridItem };

export type ShopifyMigrationNumberedGridSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly NumberedGridItem[];
  variant?: "white" | "pista";
  className?: string;
  id?: string;
};

export function ShopifyMigrationNumberedGridSection({
  eyebrow,
  heading,
  description,
  items,
  variant = "pista",
  className,
  id,
}: ShopifyMigrationNumberedGridSectionProps) {
  const isWhite = variant === "white";

  return (
    <section
      className={cn(
        "our_shopify_team_behind_it_section py-20 max-[991px]:py-[50px]",
        isWhite ? "bg-white" : "bg-[#EFF4EF]",
        className,
      )}
      id={id}
    >
      <Container>
        {(eyebrow || heading || description) && (
          <div className="section_title_with_eyebrow mb-[50px] flex items-end justify-between gap-6 max-[992px]:mb-[30px] max-[992px]:flex-col max-[992px]:items-start">
            <div className="title max-w-[620px]">
              {eyebrow && (
                <Eyebrow className="mb-2.5 text-[#ad5151]" lineThickness="thin">
                  {eyebrow}
                </Eyebrow>
              )}
              <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
                {formatBrText(heading, "max-[767px]:hidden")}
              </h2>
            </div>
            {description && (
              <div className="section_text max-w-[540px]">
                <p className="font-sans text-base font-medium leading-7 text-[#535353] max-[991px]:text-sm max-[991px]:leading-6">
                  {description}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="wrapper grid grid-cols-3 gap-4 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {items.map((item) => (
            <div className="col" key={item.number}>
              <div className="item h-full rounded-[20px] border border-[rgba(40,40,40,0.1)] bg-white p-[25px] max-[1199px]:rounded-[16px] max-[1199px]:p-5">
                <span
                  className={cn(
                    "number mb-5 flex items-center justify-center font-bold text-[#ad5151] max-[991px]:mb-2.5",
                    isWhite
                      ? "size-[45px] rounded-[15px] bg-[#EFF4EF] text-sm"
                      : "size-[34px] rounded-full bg-[#fbefd7] text-[10px]",
                  )}
                >
                  {item.number}
                </span>
                <h3 className="mb-2.5 font-montreal-medium text-[22px] font-medium leading-[132%] text-[#282828] max-[1399px]:text-lg max-[1399px]:leading-[26px] max-[991px]:text-base max-[991px]:leading-6">
                  {item.title}
                </h3>
                <p className="font-sans text-sm font-medium leading-6 text-[#535353] md:text-base md:leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
