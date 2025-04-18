"use client";

import { cx } from "@/lib";
import { motion, useInView, Variants } from "motion/react";
import { ReactNode, useRef, useState } from "react";

interface AnimatedLinesProps {
  children?: ReactNode;
  count?: number;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  lineClassName?: string;
  lines: string[];
}

export const AnimatedLines = ({
  children,
  staggerDelay = 0.2,
  duration = 0.8,
  className = "",
  lineClassName = "",
  lines,
}: AnimatedLinesProps) => {
  const lineVariants: Variants = {
    hidden: {
      x: 0,
    },
    visible: {
      x: "100%",
      transition: {
        duration,
      },
    },
  };

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : ""}
    >
      {children}
      <motion.div
        className="absolute flex flex-col top-0 w-full z-[1] h-full"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        }}
      >
        {lines.map((style, index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            className={cx(
              "w-full h-full bg-background opacity-68",
              style,
              lineClassName
            )}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
