import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type TwoColImageWithTextSectionProps = {
  heading: string;
  description: string | readonly string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imagePosition?: "left" | "right";
  bullets?: readonly string[];
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
  id?: string;
};

export function TwoColImageWithTextSection({
  heading,
  description,
  image,
  imagePosition = "left",
  bullets,
  cta,
  className,
  id,
}: TwoColImageWithTextSectionProps) {
  return (
    <section
      className={cn(
        "two-col-image-with-text-section py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div data-aos="fade-up" className="wrapper flex flex-wrap items-center justify-between">
          <div
            data-aos="fade-up"
            className={cn(
              "left-col w-[41.229%] max-[1199px]:w-[43%] max-[992px]:w-full",
              imagePosition === "right" && "order-2 max-[992px]:order-1",
            )}
          >
            <div className="image-block relative pb-[106.386%] max-[992px]:pb-[70%] max-[992px]:mb-[30px] rounded-[10px] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 992px) 100vw, (max-width: 1200px) 43vw, 469px"
                className="absolute left-0 top-0 h-full w-full object-cover rounded-[10px]"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className={cn(
              "right-col w-[53.685%] max-[1199px]:w-[53%] max-[992px]:w-full",
              imagePosition === "right" && "order-1 max-[992px]:order-2",
            )}
          >
            <div className="text-block">
              <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink mb-4 max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
                {heading}
              </h2>
              {Array.isArray(description) ? (
                description.map((p, idx) => (
                  <p
                    key={idx}
                    className="font-sans text-base font-medium leading-[27px] text-[#535353] mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))
              ) : (
                <p className="font-sans text-base font-medium leading-[27px] text-[#535353] m-0">
                  {description}
                </p>
              )}
              {bullets && bullets.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#535353]">
                      <svg
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-brand-red"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {cta && cta.label && cta.href && (
                <div className="mt-8">
                  <ButtonLink href={cta.href} variant="primary">
                    {cta.label}
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
