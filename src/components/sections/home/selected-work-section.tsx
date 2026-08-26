import Image from "next/image";

import styles from "@/components/sections/home/selected-work-section.module.css";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy, projects, type Project } from "@/content/home";
import { cn } from "@/lib/class-names";

function DiagonalArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33336 15.4418C0.649946 16.1252 0.649946 17.2332 1.33336 17.9166C2.01678 18.6001 3.12482 18.6001 3.80824 17.9166L2.5708 16.6792L1.33336 15.4418ZM19.25 1.74995C19.25 0.783455 18.4665 -4.65033e-05 17.5 -4.59975e-05L1.75005 -4.62504e-05C0.783549 -4.62504e-05 4.67197e-05 0.783456 4.67197e-05 1.74995C4.67197e-05 2.71645 0.783549 3.49995 1.75005 3.49995L15.75 3.49995L15.75 17.5C15.75 18.4665 16.5335 19.25 17.5 19.25C18.4665 19.25 19.25 18.4665 19.25 17.5L19.25 1.74995ZM2.5708 16.6792L3.80824 17.9166L18.7375 2.98739L17.5 1.74995L16.2626 0.512517L1.33336 15.4418L2.5708 16.6792Z" fill="white" />
    </svg>

  );
}

function ProjectMedia({ project }: { project: Project }) {
  const mediaClass =
    "absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover/project:scale-[1.06]";

  if (project.media.type === "video") {
    return (
      <video className={mediaClass} autoPlay muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
        <source src={project.media.src} type="video/mp4" media="(min-width: 768px)" />
      </video>
    );
  }

  return (
    <Image
      className={cn(mediaClass, "scale-[1.01]")}
      src={project.media.src}
      alt={project.media.alt}
      width={668}
      height={469}
      sizes="(max-width: 767px) calc(100vw - 50px), 50vw"
    />
  );
}

function ProjectList({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="flex w-1/2 shrink-0 basis-1/2 max-[767px]:w-auto max-[767px]:basis-auto max-[767px]:aria-hidden:hidden" aria-hidden={decorative || undefined}>
      {projects.map((project) => (
        <a
          className="group/project block w-1/5 shrink-0 basis-1/5 text-white max-[767px]:w-[calc(100cqw-50px)] max-[767px]:basis-[calc(100cqw-50px)] max-[767px]:snap-start"
          key={project.name}
          href={project.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          tabIndex={decorative ? -1 : undefined}
        >
          <span className="relative block w-full overflow-hidden pb-[68%] max-[767px]:pb-[70%]">
            <ProjectMedia project={project} />
          </span>
          <span className="flex min-h-[78px] items-center justify-between border border-[#45433d] border-l-0 px-[30px] py-5 font-display text-[30px] leading-[1.2] font-medium max-[767px]:min-h-14 max-[767px]:p-4 max-[767px]:text-lg max-[767px]:leading-[1.24] [&_svg]:ml-[25px] [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0 max-[767px]:[&_svg]:h-[13px] max-[767px]:[&_svg]:w-[13px]">
            {project.name}
            <DiagonalArrowIcon />
          </span>
        </a>
      ))}
    </div>
  );
}

export function SelectedWorkSection() {
  return (
    <section className="min-h-[932.83px] overflow-hidden bg-dark-green pt-[60px] pb-[52px] text-white min-[768px]:max-[991px]:min-h-[774.81px] max-[767px]:min-h-[649.77px] max-[767px]:py-[30px]">
      <Container className="flex items-center justify-between max-[991px]:flex-col max-[991px]:items-start">
        <SectionHeading tone="inverse" className="mr-5 max-w-[600px] min-[768px]:max-[991px]:m-0 min-[768px]:max-[991px]:max-w-full max-[767px]:m-0 max-[767px]:mb-4 max-[767px]:max-w-full">{homeSectionCopy.selectedWorkTitle}</SectionHeading>
        <p className="max-w-[580px] text-base leading-[1.9] font-semibold text-white/80 min-[768px]:max-[991px]:mt-2.5 min-[768px]:max-[991px]:max-w-full max-[767px]:max-w-full max-[767px]:text-sm">
          {homeSectionCopy.selectedWorkDescription}
        </p>
      </Container>
      <div className="w-full overflow-hidden py-[57px] pb-[51px] max-[767px]:overflow-x-auto max-[767px]:px-0 max-[767px]:pt-[34px] max-[767px]:pb-[30px] max-[767px]:[container-type:inline-size] max-[767px]:[scrollbar-width:none] max-[767px]:snap-x max-[767px]:snap-mandatory max-[767px]:[&::-webkit-scrollbar]:hidden" aria-label="Selected ecommerce work">
        <div className={cn("flex w-[calc(500%+5px)] max-[767px]:w-max", styles.projectMotion)}>
          <ProjectList />
          <ProjectList decorative />
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonLink className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm" variant="light" href="/our-work">{homeSectionCopy.ctaViewWork}</ButtonLink>
      </div>
    </section>
  );
}
