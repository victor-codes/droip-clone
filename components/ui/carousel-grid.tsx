import { cx } from "@/lib";
import { CarouselGridProps } from "@/types/home";
import Image from "next/image";

export const CarouselGrid = ({ list, imgClassName }: CarouselGridProps) => {
  return (
    <div className="flex gap-1">
      {list.map((src, idx) => (
        <div
          key={idx}
          className={cx(
            "relative rounded-md overflow-clip bg-white",
            imgClassName
          )}
        >
          <Image src={src} alt="" className="object-cover" fill />
        </div>
      ))}
    </div>
  );
};
