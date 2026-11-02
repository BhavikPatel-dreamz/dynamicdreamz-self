import { Container } from "@/components/ui/container";

type InnerHeroSectionProps = {
  title: string;
  headingId: string;
};

export function InnerHeroSection({ title, headingId }: InnerHeroSectionProps) {
  return (
    <section
      className="inner-hero-sec relative overflow-hidden bg-[#fbeed5] pt-40 pb-[85px] text-center max-[992px]:pt-[140px] max-[992px]:pb-[46px]"
      aria-labelledby={headingId}
      data-blogs-hero
    >
      <Container>
        <div className="mx-auto max-w-[770px]">
          <h1
            id={headingId}
            className="m-0 inline-block max-w-full font-display text-[50px] leading-[60px] font-medium text-ink max-[992px]:text-[30px] max-[992px]:leading-[60px] max-[768px]:leading-10"
            data-blogs-heading
          >
            {title}
          </h1>
        </div>
      </Container>
    </section>
  );
}
