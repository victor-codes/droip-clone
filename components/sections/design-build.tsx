"use client";
import { DesignBuildItemProps } from "@/types/home";
import { SectionGradient } from "../ui/section-gradient";
import { DESIGN_BUILD_DATA } from "@/contents/home";
import { cx } from "@/lib";
import Image from "next/image";
import { useInView } from "motion/react";
import React, { useRef } from "react";

export const DesignBuild = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      aria-labelledby="db-heading"
      aria-describedby="db-desc"
      className="section"
    >
      <div className="wrapper">
        <div ref={sectionRef}>
          <h2 id="db-heading" className="section-title text-black">
            Design and <br /> build everything
          </h2>

          <div
            data-anim-ctrl={isInView}
            style={
              {
                "--ball-offset": "-32px",
              } as React.CSSProperties
            }
          >
            <SectionGradient id="db-desc">
              more efficiently with the{" "}
              <strong className="font-semibold">most advanced</strong> granular
              controls
            </SectionGradient>
          </div>
        </div>

        <div className="relative grid gap-[1px] md:grid-cols-2 lap:grid-cols-4">
          {DESIGN_BUILD_DATA.map((item, idx) => (
            <DesignBuildItem {...item} key={idx} />
          ))}

          <div className="absolute w-3/4 h-full transform -translate-x-1/2 left-1/2  bg-royal blur-[144px] opacity-20" />
        </div>
      </div>
    </section>
  );
};

const columnSpans: Record<number, string> = {
  4: "col-span-1 md:col-span-2 lap:col-span-4 lap:[&_h3]:text-[32px] [&>:first-child]:max-h-[304px] flex-col-reverse md:grid grid-cols-2 md:[&>:first-child]:col-start-2 md:[&>:first-child]:row-start-1 md:[&>:last-child]:justify-end",
  3: "col-span-1 md:col-span-2 [&>:first-child]:max-h-[182px]",
  2: "col-span-1 lap:col-span-2 lap:[&_h3]:text-[32px] [&>:first-child]:max-h-[182px]",
  1: "col-span-1 [&>:first-child]:max-h-[182px]",
};

const DesignBuildItem = ({
  title,
  paragraph,
  imageUrl,
  column,
}: DesignBuildItemProps) => {
  return (
    <div
      className={cx(
        "relative flex flex-col gap-6 p-8 bg-white z-[1] rounded-18 ",
        columnSpans[column]
      )}
    >
      <div className="relative w-full flex-1 aspect-[1.65] ">
        <Image src={imageUrl} fill alt="" className="object-contain" />
      </div>
      <div className="flex flex-col gap-6 max-w-[320px]">
        <h3
          className="font-semibold text-black text-2xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-smoky text-sm md:text-base">{paragraph}</p>
      </div>
    </div>
  );
};
