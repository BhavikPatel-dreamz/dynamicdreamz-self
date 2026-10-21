import { BlogCard } from "@/components/ui/blog-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy, insights } from "@/content/home";
import { cn } from "@/lib/class-names";

export type InsightsSectionProps = {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function InsightsSection({
  title = homeSectionCopy.insightsTitle,
  ctaLabel = homeSectionCopy.viewAllBlogsCta,
  ctaHref = homeSectionCopy.viewAllBlogsCtaHref,
  className,
}: InsightsSectionProps = {}) {
  return (
    <section className={cn("overflow-hidden bg-white py-20 max-[991px]:py-[50px]", className)}>
      <Container>
        <div data-aos="fade-up" className="mx-auto mb-[47px] max-w-[700px] text-center max-[991px]:mb-[30px]">
          <SectionHeading className="mb-6 max-[767px]:mb-4">{title}</SectionHeading>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-3 gap-4 max-[992px]:flex max-[992px]:flex-col max-[992px]:gap-0">
          {insights.map((insight, insightIndex) => (
            <BlogCard item={insight} variant="home" isLast={insightIndex === insights.length - 1} key={insight.href} />
          ))}
        </div>
        <div data-aos="fade-up" className="mt-[50px] flex justify-center max-[767px]:mt-10">
          <ButtonLink className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[992px]:min-h-[42px] max-[992px]:py-3 max-[992px]:text-sm" variant="dark" href={ctaHref}>{ctaLabel}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

