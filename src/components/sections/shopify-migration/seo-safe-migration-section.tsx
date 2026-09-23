import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type UrlMappingItem = {
  source: string;
  statusCode?: string;
  target: string;
};

export type SeoSafeMigrationContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  tags: readonly string[];
  urlMappings: readonly UrlMappingItem[];
  checks: readonly string[];
};

export type SeoSafeMigrationSectionProps = {
  content: SeoSafeMigrationContent;
  className?: string;
  id?: string;
};

export function SeoSafeMigrationSection({
  content,
  className,
  id,
}: SeoSafeMigrationSectionProps) {
  return (
    <section
      className={cn(
        "seo_safe_shopify_migration_section bg-white py-20 max-[991px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div className="seo-safe-main mx-auto rounded-[30px] bg-[#EFF4EF] p-10 max-[991px]:rounded-[20px] max-[991px]:p-[30px] max-[767px]:p-5">
          <div className="wrapper flex flex-wrap items-center justify-between max-[991px]:block">
            <div className="left-col w-[49%] max-[1199px]:w-[41%] max-[991px]:w-full">
              <div className="text-block">
                {content.eyebrow && (
                  <Eyebrow className="mb-2.5 text-[#ad5151]" lineThickness="thin">
                    {content.eyebrow}
                  </Eyebrow>
                )}
                <h2 className="mb-2.5 font-sans text-[35px] font-bold leading-[1.2] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
                  {formatBrText(content.heading, "max-[767px]:hidden")}
                </h2>
                <p className="font-sans text-base font-medium leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6">
                  {content.description}
                </p>
                <div className="meta-wrapp mt-5 flex flex-wrap gap-[7px]">
                  {content.tags.map((tag) => (
                    <span
                      className="inline-flex items-center rounded-[30px] border border-[rgba(23,30,22,0.1)] bg-white px-[12.5px] py-[5.5px] font-montserrat text-xs font-bold uppercase leading-none tracking-normal text-[#282828]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="right-col w-[49%] max-[1199px]:w-[55%] max-[991px]:mt-5 max-[991px]:w-full">
              <div className="url-map-wrapp">
                {content.urlMappings.map((row) => (
                  <div
                    className="url-map-row mb-2.5 flex items-center justify-between rounded-[15px] border border-[rgba(23,30,22,0.2)] p-[15px] last:mb-0 max-[991px]:rounded-[10px] max-[991px]:p-2.5 max-[767px]:flex-col"
                    key={row.source}
                  >
                    <div className="url-map w-[45%] px-2.5 max-[767px]:w-full max-[767px]:px-0">
                      <div className="code">
                        <p className="font-mono text-sm font-medium text-ink max-[767px]:mb-2.5">
                          {row.source}
                        </p>
                      </div>
                    </div>
                    <div className="redirect flex w-[55%] items-center gap-[15px] px-2.5 max-[767px]:w-full max-[767px]:gap-2 max-[767px]:px-0">
                      <div className="url flex items-center gap-1.5 font-bold text-[#ad5151]">
                        <h3 className="m-0 font-montserrat text-sm font-bold text-[#ad5151]">
                          {row.statusCode ?? "301"}
                        </h3>
                        <span aria-hidden="true">→</span>
                      </div>
                      <div className="code">
                        <p className="font-mono text-sm font-medium text-ink">
                          {row.target}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="seo-checks -mx-[5px] mt-5 flex flex-wrap">
                {content.checks.map((check) => (
                  <div
                    className="seo-col mb-2.5 w-1/2 px-[5px] max-[767px]:w-full"
                    key={check}
                  >
                    <div className="code border-l-2 border-[#ad5151] bg-[#ad5151]/[0.07] px-3 py-[7px]">
                      <p className="font-sans text-xs font-medium text-ink md:text-sm">
                        {check}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
