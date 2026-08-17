import { Container } from "@/components/ui/container";
import { ourWorkPage } from "@/content/our-work";

function DownArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 30 30" width="30" height="30" fill="none">
      <path
        d="M6.25 20c.928 0 2.313.916 3.475 1.844 1.5 1.192 2.809 2.617 3.808 4.251C14.281 27.32 15 28.805 15 30m0 0c0-1.195.719-2.681 1.468-3.905 1-1.634 2.309-3.059 3.806-4.251C21.438 20.916 22.825 20 23.75 20M15 30V0"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function OurWorkHeroSection() {
  return (
    <section className="overflow-hidden bg-white pt-[230px] pb-[49px] max-[991px]:pt-[140px] max-[767px]:pb-[30px]">
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="font-sans text-[50px] leading-[1.28] font-bold text-ink max-[991px]:text-[40px] max-[991px]:leading-[1.25] max-[767px]:text-[30px] max-[767px]:leading-[1.3]">
            {ourWorkPage.hero.title}
          </h1>
          <p className="mx-auto mt-[25px] max-w-[840px] text-lg leading-[34.2px] font-medium text-muted max-[767px]:mt-[27px] max-[767px]:text-base max-[767px]:leading-[30.4px]">
            {ourWorkPage.hero.description}
          </p>
        </div>

        <div className="mx-auto mt-[50px] h-[88px] w-[88px] max-[767px]:mt-[30px] max-[767px]:h-[70px] max-[767px]:w-[70px]">
          <a
            className="group relative block h-full w-full rounded-full"
            href="#our-work-projects"
            aria-label="Scroll to portfolio projects"
          >
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-[#8b8b8b] [animation-duration:10s] motion-reduce:animate-none" />
            <span className="absolute top-1/2 left-1/2 flex h-[calc(100%-15px)] w-[calc(100%-15px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-brand-red group-focus-visible:bg-brand-red max-[767px]:[&_svg]:h-[25px] max-[767px]:[&_svg]:w-[25px]">
              <DownArrowIcon />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
