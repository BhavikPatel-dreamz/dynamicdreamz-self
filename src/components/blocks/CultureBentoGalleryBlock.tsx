import Image from "next/image";
import { lifeGallery } from "@/content/life-dynamicdreamz";
import styles from "@/components/blocks/CultureBentoGalleryBlock.module.css";

export type CultureBentoGalleryBlockProps = {
  images?: readonly {
    src?: string;
    image?: { url?: string | null; alt?: string | null } | string | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
};

export type LifeGallerySectionProps = CultureBentoGalleryBlockProps;

export function CultureBentoGalleryBlock({
  images,
}: CultureBentoGalleryBlockProps = {}) {
  const activeImages =
    images && images.length > 0
      ? images.map((img, idx) => {
          const src =
            (typeof img.image === "object" && img.image?.url) ||
            (typeof img.image === "string" ? img.image : img.src) ||
            lifeGallery[idx]?.src ||
            "";
          const alt =
            img.alt ||
            (typeof img.image === "object" && img.image?.alt
              ? img.image.alt
              : lifeGallery[idx]?.alt) ||
            "";
          const width = img.width || lifeGallery[idx]?.width || 334;
          const height = img.height || lifeGallery[idx]?.height || 406;
          return { src, alt, width, height };
        })
      : lifeGallery;

  return (
    <section
      className="overflow-hidden py-20 max-[992px]:py-[50px] max-[767px]:hidden"
      data-life="gallery"
      aria-label="Life at Dynamic Dreamz gallery"
    >
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[false, true].map((duplicate) => (
            <div
              className="contents"
              aria-hidden={duplicate || undefined}
              key={duplicate ? "duplicate" : "original"}
            >
              {activeImages.map((image) => (
                <div
                  className={styles.slide}
                  key={`${duplicate ? "duplicate-" : ""}${image.src}`}
                >
                  <Image
                    className={styles.image}
                    src={image.src}
                    alt={duplicate ? "" : image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33.333vw, (max-width: 1440px) 25vw, 20vw"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const LifeGallerySection = CultureBentoGalleryBlock;
