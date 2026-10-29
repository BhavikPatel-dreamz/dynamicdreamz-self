import { BlogCard } from "@/components/ui/blog-card";
import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { resourceArticles, resourcesSectionCopy } from "@/content/resources";

export function ResourcesBlogSection() {
  return (
    <section className="blog-carousel overflow-hidden py-20 max-[991px]:py-[50px]" aria-labelledby="resources-blog-title">
      <Container>
        <div className="resources-right-title mb-7">
          <h2 id="resources-blog-title" className="relative pl-5 font-montreal-medium text-[50px] leading-[60px] font-normal tracking-normal text-ink before:absolute before:top-1/2 before:left-0 before:h-[34px] before:w-[5px] before:-translate-y-1/2 before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[992px]:text-[40px] max-[992px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10">
            {resourcesSectionCopy.blogsTitle}
          </h2>
        </div>
        <HorizontalDragScroll
          ariaLabel="Shopify blog articles"
          variant="fullBleedAligned"
          trackClassName="gap-[25px]"
        >
          {resourceArticles.map((article) => (
            <BlogCard item={article} variant="resources" key={article.href} />
          ))}
        </HorizontalDragScroll>
      </Container>
    </section>
  );
}
