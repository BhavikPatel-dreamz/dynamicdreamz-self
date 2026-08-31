import { BlogCard } from "@/components/ui/blog-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy, insights } from "@/content/home";

export function InsightsSection() {
  return (
    <section className="min-h-[883px] overflow-hidden bg-white pt-20 pb-[60px] min-[768px]:max-[992px]:min-h-[806.61px] min-[768px]:max-[992px]:py-[50px] max-[767px]:min-h-[722.33px] max-[767px]:py-[50px]">
      <Container>
        <div className="mx-auto mb-[47px] max-w-[700px] text-center">
          <SectionHeading className="mb-6 max-[767px]:mb-4">{homeSectionCopy.insightsTitle}</SectionHeading>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[992px]:flex max-[992px]:flex-col max-[992px]:gap-0">
          {insights.map((insight, insightIndex) => (
            <BlogCard item={insight} variant="home" isLast={insightIndex === insights.length - 1} key={insight.href} />
          ))}
        </div>
        <div className="mt-[50px] flex justify-center max-[767px]:mt-[22px]">
          <ButtonLink className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[992px]:min-h-[42px] max-[992px]:py-3 max-[992px]:text-sm" variant="dark" href="/blog">{homeSectionCopy.viewAllBlogsCta}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
