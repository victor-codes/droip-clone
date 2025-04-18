"use client";
import { createRef, useRef } from "react";
import { AnimatedLines } from "../ui/animated-lines";
import { ScaleItem } from "../ui/scale-item";

const lines = ["block", "block"];

export const ScaleBusiness = () => {
  const scaleRefs = useRef(
    SCALE_BUSS_DATA.map(() => createRef<HTMLDivElement>())
  );

  return (
    <section aria-labelledby="sb-heading" className="section bg-black">
      <div className="wrapper">
        <div className="max-w-[600px] mb-12.5 md:mb-16 lap:mb-24">
          <AnimatedLines lines={lines} lineClassName="!bg-black">
            <h2 id="sb-heading" className="section-title  text-white">
              Scale your business with
            </h2>
          </AnimatedLines>
        </div>

        <div className="grid gap-y-10 lap:gap-y-30">
          {SCALE_BUSS_DATA.map(({ id, ...item }, idx) => (
            <ScaleItem
              key={id}
              {...item}
              prevRef={scaleRefs.current[idx - 1] ?? null}
              sectionRef={scaleRefs.current[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SCALE_BUSS_DATA = [
  {
    id: "content-manager",
    title: "Content Manager",
    description:
      "Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/CMS1.webp",
    linkTo: "#",
  },
  {
    id: "media-manager",
    title: "Media Manager",
    description:
      "Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/Media-Manager.webp",
    linkTo: "#",
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Dynamically update SEO content across pages to optimize your website's search performance.",
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/dymanic-seo2-1.webp",
    linkTo: "#",
  },
];
