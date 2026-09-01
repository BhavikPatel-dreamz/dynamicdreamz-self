import Image from "next/image";
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
  className?: string;
  id?: string;
};

export function TwoColImageWithTextSection({
  heading,
  description,
  image,
  imagePosition = "left",
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
        <div className="wrapper flex flex-wrap items-center justify-between">
          <div
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
