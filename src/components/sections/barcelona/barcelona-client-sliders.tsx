"use client";

import Image from "next/image";
import styles from "./barcelona-client-sliders.module.css";

type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type BarcelonaClientSlidersProps = {
  row1: readonly ClientLogo[];
  row2: readonly ClientLogo[];
};

export function BarcelonaClientSliders({ row1, row2 }: BarcelonaClientSlidersProps) {
  // Duplicate arrays to create continuous infinite marquee loop
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className={`barcelona-client-main mt-11 overflow-hidden max-[991px]:mt-8 ${styles.marqueeContainer}`}>
      {/* Row 1 - Scroll Left */}
      <div className={styles.trackLeft}>
        {duplicatedRow1.map((item, index) => (
          <div className="px-2" key={`row1-${item.name}-${index}`}>
            <div className="barcelona-img flex min-h-[70px] min-w-[144px] items-center justify-center rounded-[10px] border-[1.5px] border-[#efefef] bg-white px-4 py-2 shadow-sm">
              <Image
                alt={item.name}
                className="max-h-[35px] w-auto object-contain"
                height={item.height}
                src={item.src}
                width={item.width}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - Scroll Right */}
      <div className={`mt-4 ${styles.trackRight}`}>
        {duplicatedRow2.map((item, index) => (
          <div className="px-2" key={`row2-${item.name}-${index}`}>
            <div className="barcelona-img flex min-h-[70px] min-w-[144px] items-center justify-center rounded-[10px] border-[1.5px] border-[#efefef] bg-white px-4 py-2 shadow-sm">
              <Image
                alt={item.name}
                className="max-h-[35px] w-auto object-contain"
                height={item.height}
                src={item.src}
                width={item.width}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
