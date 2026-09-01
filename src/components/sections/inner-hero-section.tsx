import { Container } from "@/components/ui/container";

type InnerHeroSectionProps = {
  title: string;
  headingId: string;
};

export function InnerHeroSection({ title, headingId }: InnerHeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-40 pb-[85px] text-center max-[991px]:pt-[140px] max-[991px]:pb-[46px]"
      aria-labelledby={headingId}
      data-blogs-hero
    >
      <Container>
        <div className="mx-auto max-w-[770px]">
          <h1
            id={headingId}
            className="m-0 inline-block max-w-full font-display text-[50px] leading-[60px] font-medium text-ink max-[991px]:text-[30px] max-[991px]:leading-[60px] max-[767px]:leading-10"
            data-blogs-heading
          >
            {title}
          </h1>
        </div>
      </Container>
    </section>
  );
}
