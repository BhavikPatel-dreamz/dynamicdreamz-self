import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";
import type { NumberedGridItem } from "@/content/shopify-migration";

export type { NumberedGridItem };

export type ShopifyMigrationNumberedGridSectionProps = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  items: readonly NumberedGridItem[];
  variant?: "white" | "pista";
  id?: string;
};

export function ShopifyMigrationNumberedGridSection({
  eyebrow,
  heading,
  description,
  items,
  variant = "pista",
  id,
}: ShopifyMigrationNumberedGridSectionProps) {
  const isWhite = variant === "white";

  return (
    <section
      className={cn(
        "our_shopify_team_behind_it_section py-20 max-[991px]:py-[50px]",
        isWhite ? "bg-white" : "bg-[#EFF4EF]",
      )}
      id={id}
    >
      <Container>
        {(eyebrow || heading || description) && (
          <SplitSectionHeading
            description={description}
            eyebrow={eyebrow}
            heading={heading}
            variant="left"
          />
        )}

        {/* Live keeps three equal columns down to 767px, then stacks. */}
        <div data-aos="fade-up" className="wrapper grid grid-cols-3 gap-4 max-[767px]:grid-cols-1">
          {items.map((item) => (
            <div data-aos="fade-up" className="col" key={item.number}>
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
                <h3 className="mb-2.5 font-montreal-medium text-[22px] font-normal leading-[132%] text-[#282828] max-[1399px]:text-lg max-[1399px]:leading-[26px] max-[991px]:text-base max-[991px]:leading-6">
                  {item.title}
                </h3>
                <p className="font-sans text-sm font-normal leading-6 text-[#535353]">
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
