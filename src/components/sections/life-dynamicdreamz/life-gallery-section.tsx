import Image from "next/image";

import { lifeGallery } from "@/content/life-dynamicdreamz";

import styles from "./life-gallery-section.module.css";

export function LifeGallerySection() {
  return (
    <section
      className="overflow-hidden py-20 max-[991px]:py-[50px]"
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
              {lifeGallery.map((image) => (
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
