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
          className="wrapper flex flex-wrap -mx-5 items-center max-[1200px]:-mx-[10px] max-[1200px]:items-start"
          data-aos="fade-up"
        >
          <div className="left-col w-1/2 px-5 max-[1200px]:w-[55%] max-[1200px]:px-[10px] max-[992px]:w-full">
            <div className="section_title_with_eyebrow flex-wrap !m-0 !text-left">
              <div className="title w-full !text-left">
                {content.eyebrow ? (
                  <Eyebrow
                    align="start"
                    as="div"
                    className="mb-4 text-[#535353]"
                    linePosition="overlay"
                    lineThickness="thin"
                  >
                    <span>{content.eyebrow}</span>
                  </Eyebrow>
                ) : null}
                <h2 className="mb-2.5 font-montreal-medium text-[35px] font-normal leading-[1.4] text-ink max-[992px]:text-[30px] max-[768px]:text-2xl max-[768px]:leading-[1.3]">
                  {formatBrText(content.heading)}
                </h2>
              </div>
              <div className="section_text w-full !text-left">
                {content.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="mb-[15px] font-sans text-sm font-normal leading-[24px] text-[#535353] last:mb-0"
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
                  className="app-feature w-[calc(50%-5px)] rounded-[12px] border border-[rgba(40,40,40,0.08)] bg-white px-5 py-[9px] font-sans text-sm font-medium leading-6 text-[#535353]"
                >
                  {feat}
                </div>
              ))}
            </div>

            <div className="btns_group flex flex-wrap items-center gap-[15px] pt-1 max-[576px]:flex-col max-[576px]:items-start max-[576px]:w-full">
              {content.buttons.map((btn) => (
                <ButtonLink
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  variant="primary"
                  aria-label={btn.ariaLabel}
                  className="max-[576px]:w-full"
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

          <div className="right-col w-1/2 px-5 max-[1200px]:w-[45%] max-[1200px]:px-[10px] max-[1200px]:mt-[30px] max-[992px]:w-full max-[992px]:px-0 max-[992px]:mt-[30px] text-center">
            <div className="image-wrapper text-center">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={content.image.width}
                height={content.image.height}
                sizes="(max-width: 991px) 100vw, (max-width: 1199px) 45vw, 680px"
                className="mx-auto h-auto max-w-full rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
