import { BlogCard } from "@/components/ui/blog-card";
import { Container } from "@/components/ui/container";
import { resourceArticles } from "@/content/resources";

export function ResourcesBlogSection() {
  return (
    <section className="blog-carousel overflow-hidden py-20" aria-labelledby="resources-blog-title">
      <Container>
        <h2 id="resources-blog-title" className="resources-right-title relative mb-7 pl-5 text-[50px] leading-[66px] font-bold tracking-[-1px] before:absolute before:top-1/2 before:left-0 before:h-[34px] before:w-[5px] before:-translate-y-1/2 before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10">Shopify Blogs</h2>
        <div
          className="blog-wrapper flex h-[405.67px] snap-x snap-mandatory gap-[25px] overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[768px]:h-[389.39px] min-[1200px]:h-[405.3px]"
          tabIndex={0}
          aria-label="Shopify blog articles"
        >
          <span className="w-[25px] shrink-0 min-[768px]:hidden min-[1200px]:block min-[1200px]:w-5" aria-hidden="true" />
          {resourceArticles.map((article) => (
            <BlogCard item={article} variant="resources" key={article.href} />
          ))}
          <span className="w-[25px] shrink-0 min-[768px]:hidden min-[1200px]:block min-[1200px]:w-5" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
