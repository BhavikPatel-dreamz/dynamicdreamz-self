import Image from "next/image";
import { useId } from "react";

import { ClientAfterViewport } from "@/components/ui/client-after-viewport";
import { lifeGallery } from "@/content/life-dynamicdreamz";
import styles from "./life-gallery-section.module.css";

export type LifeGallerySectionProps = {
  images?: readonly {
    src?: string;
    image?: { url?: string | null; alt?: string | null } | string | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
};

export function LifeGallerySection({
  images,
}: LifeGallerySectionProps = {}) {
  const galleryId = useId();
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
      className="overflow-hidden py-20 max-[992px]:py-15 max-[768px]:hidden"
      data-life="gallery"
      aria-label="Life at Dynamic Dreamz gallery"
    >
      <div id={galleryId} className={styles.marquee}>
        <div className={styles.track}>
          <div className="contents">
            {activeImages.map((image) => (
              <div className={styles.slide} key={image.src}>
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33.333vw, (max-width: 1440px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
          <ClientAfterViewport rootId={galleryId}>
            <div className="contents" aria-hidden="true" data-life-gallery-clone>
              {activeImages.map((image) => (
                <div className={styles.slide} key={`duplicate-${image.src}`}>
                  <Image
                    className={styles.image}
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33.333vw, (max-width: 1440px) 25vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </ClientAfterViewport>
        </div>
      </div>
    </section>
  );
}
