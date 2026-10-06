import { BlogCard, type BlogCardItem } from "@/components/ui/blog-card";
import { Container } from "@/components/ui/container";
import { blogDetailUiCopy } from "@/content/blog-post-details";

type BlogRelatedSectionProps = {
  posts: readonly BlogCardItem[];
};

export function BlogRelatedSection({ posts }: BlogRelatedSectionProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      className="related-blog-sec mt-20 bg-[#eff4ef] py-20 max-[991px]:mt-[50px] max-[991px]:py-[50px]"
      aria-labelledby="related-blogs-title"
    >
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between max-[991px]:mb-8">
          <div className="w-[44%] max-[991px]:mb-4 max-[991px]:w-full">
            <div className="mb-4 inline-flex items-center text-sm font-semibold uppercase leading-[1.2] text-[#282828] before:mr-3 before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red">
              <span>{blogDetailUiCopy.relatedEyebrow}</span>
            </div>
            <h2
              id="related-blogs-title"
              className="m-0 font-montreal-medium text-[35px] leading-[1.4] text-[#282828] max-[767px]:text-[28px]"
            >
              {blogDetailUiCopy.relatedHeading}
            </h2>
          </div>
          <div className="w-[48.3%] max-[991px]:w-full">
            <p className="m-0 text-base font-medium leading-7 text-[#535353]">
              {blogDetailUiCopy.relatedDescription}
            </p>
          </div>
        </div>
        <div className="-mx-3.5 flex flex-wrap gap-y-7">
          {posts.map((post) => (
            <div
              key={post.href}
              className="w-1/3 px-3.5 max-[991px]:w-1/2 max-[767px]:w-full"
            >
              <BlogCard item={post} variant="archive" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
