"use client";
import { ScaleItemProps } from "@/types/home";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { SectionLink } from "./section-link";

export const ScaleItem = ({
  title,
  description,
  imageUrl,
  linkTo,
  sectionRef,
  prevRef,
}: Omit<ScaleItemProps, "id">) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 40%"],
  });

  const animatedProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 18,
    mass: 0.3,
  });

  const backgroundColor = useTransform(
    animatedProgress,
    [0.2, 1],
    ["#cdc6fb", "#ebe8fe"]
  );

  // subtle color change on the prev pinned section
  const prevBackgroundColor = useTransform(
    animatedProgress,
    [0.4, 0.6],
    ["#ebe8fe", "#e5e2fd"]
  );

  const scale = useTransform(animatedProgress, [0, 1], [1.1, 1]);

  useEffect(() => {
    const node = prevRef?.current;
    if (!node) return;

    const unsubscribeFromChange = prevBackgroundColor.on("change", (v) => {
      node.style.setProperty("--background-color", v);
    });

    return () => unsubscribeFromChange();
  }, [prevBackgroundColor]);

  const containerStyle = useMemo(
    () => ({
      "--background-color": backgroundColor,
      scale,
    }),
    [backgroundColor, scale]
  ) as unknown as React.CSSProperties;

  return (
    <motion.div
      ref={sectionRef}
      style={containerStyle}
      className="sticky top-[15vh] bg-[var(--background-color)] lap:top-[10vh] grid gap-12 text-black justify-between overflow-hidden md:grid-cols-[320px_minmax(0,874px)] h-[70dvh] max-h-[800px]  md:max-h-[500px] lap:h-[80dvh] lap:max-h-[740px]  py-8 px-4.5 tab:p-8 md:!pr-0 lap:p-12  rounded-[14px] lap:rounded-[28px]"
    >
      <div className="flex flex-col space-y-8 md:pb-16 md:justify-between">
        <h3 className="text-2xl lap:text-[32px] leading-[1.17] lap:leading-[1.1875] -tracking-[1px] lap:-tracking-[1.3px] font-semibold">
          {title}
        </h3>

        <div className="space-y-6">
          <p className="text-sm leading-5 md:text-base md:tracking-[-0.2px] lap:text-2xl lap:leading-[1.2] lap:tracking-[-0.48px]  text-smoky lap:text-black">
            {description}
          </p>

          <SectionLink linkTo={linkTo}>View Details</SectionLink>
        </div>
      </div>

      <div className="relative -mr-[1px] rounded-[9px] md:rounded-t-none overflow-hidden lap:rounded-l-[18px]">
        <Image src={imageUrl} alt={""} className="object-cover" fill />
      </div>
    </motion.div>
  );
};
