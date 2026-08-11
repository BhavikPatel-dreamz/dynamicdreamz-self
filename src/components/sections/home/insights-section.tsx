import { BlogCard } from "@/components/ui/blog-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { insights } from "@/content/home";

export function InsightsSection() {
  return (
    <section className="min-h-[883px] overflow-hidden bg-white pt-20 pb-[60px] min-[768px]:max-[991px]:min-h-[806.61px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[722.33px] max-[767px]:py-[50px]">
      <Container>
        <div className="mx-auto mb-[47px] max-w-[700px] text-center">
          <h2 className="mb-6 text-[43px] leading-[1.2] font-medium max-[767px]:mb-4 max-[767px]:text-2xl">Latest Blogs</h2>
          <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">
            Practical guidance on Shopify Plus, migration, B2B, CRO, mobile commerce, performance and integrations from our in-house specialists.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-0">
          {insights.map((insight, insightIndex) => (
            <BlogCard item={insight} variant="home" isLast={insightIndex === insights.length - 1} key={insight.href} />
          ))}
        </div>
        <div className="mt-[50px] flex justify-center max-[767px]:mt-[22px]">
          <ButtonLink className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm" variant="dark" href="/blog/">View all blogs</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
