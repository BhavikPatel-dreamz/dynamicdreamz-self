import { BlogCard } from "@/components/ui/blog-card";
import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { resourceArticles } from "@/content/resources";

export function ResourcesBlogSection() {
  return (
    <section className="blog-carousel overflow-hidden py-20" aria-labelledby="resources-blog-title">
      <Container className="min-[1440px]:!max-w-[1180px]">
        <h2 id="resources-blog-title" className="resources-right-title relative mb-7 pl-5 text-[50px] leading-[66px] font-bold before:absolute before:top-1/2 before:left-0 before:h-[34px] before:w-[5px] before:-translate-y-1/2 before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10 tracking-[-1px]">Shopify Blogs</h2>
        <div className="[container-type:inline-size]">
          <HorizontalDragScroll
            className="blog-wrapper ml-[calc((100cqw-100vw)/2)] flex h-[405.67px] w-screen snap-x snap-mandatory scroll-pl-[calc((100vw-100cqw)/2+25px)] gap-[25px] overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[768px]:h-[389.39px] min-[768px]:scroll-pl-[calc((100vw-100cqw)/2)] min-[1200px]:h-[405.3px]"
            ariaLabel="Shopify blog articles. Drag or scroll horizontally to browse."
          >
            <span className="w-[calc((100vw-100cqw)/2+25px)] shrink-0 min-[768px]:w-[calc((100vw-100cqw)/2)]" aria-hidden="true" />
            {resourceArticles.map((article) => (
              <BlogCard item={article} variant="resources" key={article.href} />
            ))}
            <span className="w-[calc((100vw-100cqw)/2+25px)] shrink-0 min-[768px]:w-[calc((100vw-100cqw)/2)]" aria-hidden="true" />
          </HorizontalDragScroll>
        </div>
      </Container>
    </section>
  );
}
