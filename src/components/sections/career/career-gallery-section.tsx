import Image from "next/image";

import { careerGallery, careerSectionCopy } from "@/content/career";

import styles from "./career-gallery-section.module.css";

export function CareerGallerySection() {
  return (
    <section
      className="overflow-hidden py-20 max-[992px]:py-[50px]"
      data-career="gallery"
      aria-labelledby="career-gallery-title"
    >
      <h2 className="sr-only" id="career-gallery-title">
        {careerSectionCopy.galleryTitle}
      </h2>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[false, true].map((duplicate) => (
            <div
              className="contents"
              aria-hidden={duplicate || undefined}
              key={duplicate ? "duplicate" : "original"}
            >
              {careerGallery.map((image) => (
                <div className={styles.slide} key={`${duplicate ? "duplicate-" : ""}${image.src}`}>
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
