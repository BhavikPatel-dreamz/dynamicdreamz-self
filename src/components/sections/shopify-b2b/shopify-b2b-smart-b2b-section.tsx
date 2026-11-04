import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type SmartB2BButton = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type ShopifyB2BSmartB2BContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  paragraphs: readonly string[];
  features: readonly string[];
  buttons: readonly SmartB2BButton[];
  meta: readonly string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ShopifyB2BSmartB2BSectionProps = {
  content: ShopifyB2BSmartB2BContent;
  className?: string;
  id?: string;
};

export function ShopifyB2BSmartB2BSection({
  content,
  className,
  id,
}: ShopifyB2BSmartB2BSectionProps) {
  return (
    <section
      className={cn(
        "public_shopify_app_section bg-[#eff4ef] py-20 max-[992px]:py-15 max-[768px]:py-10",
        className
      )}
      id={id}
    >
      <Container>
        <div
          className="wrapper flex flex-wrap -mx-[10px] items-start min-[1200px]:-mx-5"
          data-aos="fade-up"
        >
          <div className="left-col w-[55%] px-[10px] min-[1200px]:px-5 max-[992px]:w-full max-[992px]:p-0">
            <div className="section_title_with_eyebrow flex-wrap text-left">
              <div className="title text-left">
                {content.eyebrow ? (
                  <Eyebrow as="div" className="mb-4">
                    {content.eyebrow}
                  </Eyebrow>
                ) : null}
                <h2 className="mb-4 font-display text-[35px] font-normal leading-[45px] text-ink max-[1200px]:text-[30px] max-[768px]:text-2xl max-[768px]:leading-[32px]">
                  {formatBrText(content.heading)}
                </h2>
              </div>
              <div className="section_text text-left">
                {content.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="mb-4 font-sans text-sm font-normal leading-[24px] text-[#535353] last:mb-0"
                  >
                    {formatBrText(p)}
                  </p>
                ))}
              </div>
            </div>

            <div className="app-features mt-5 mb-[25px] flex flex-wrap gap-2.5">
              {content.features.map((feat) => (
                <div
                  key={feat}
                  className="app-feature w-[calc(50%-5px)] max-[576px]:w-full rounded-[12px] border border-[rgba(40,40,40,0.08)] bg-white px-5 py-[9px] font-montreal-medium text-sm font-medium leading-normal text-ink"
                >
                  {feat}
                </div>
              ))}
            </div>

            <div className="btns_group flex flex-wrap gap-[15px] pt-1">
              {content.buttons.map((btn) => (
                <ButtonLink
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  variant="primary"
                  aria-label={btn.ariaLabel}
                  className="px-5 py-3"
                >
                  {btn.label}
                </ButtonLink>
              ))}
            </div>

            <div className="app-meta mt-5 flex flex-wrap gap-2.5">
              {content.meta.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center rounded-[50px] border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] font-montserrat text-[10px] font-semibold uppercase leading-normal text-[#565656]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="right-col w-[45%] px-[10px] min-[1200px]:px-5 max-[992px]:w-full max-[992px]:mt-[30px] text-center">
            <div className="image-wrapper text-center">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={content.image.width}
                height={content.image.height}
                sizes="(max-width: 991px) 100vw, 550px"
                className="mx-auto h-auto max-w-full rounded-[30px] shadow-sm"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
