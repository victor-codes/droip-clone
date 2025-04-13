"use client";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { cx } from "@/lib";

export interface ArrowRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowRightIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  isHovered?: boolean;
}

const pathVariants: Variants = {
  normal: { d: "M18.5 12h0" },
  animate: {
    d: "M18 12h-14",
    transition: {
      duration: 0.2,
    },
  },
};

const ArrowRightIcon = forwardRef<ArrowRightIconHandle, ArrowRightIconProps>(
  (
    { onMouseEnter, onMouseLeave, isHovered, className, size = 28, ...props },
    ref
  ) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    useEffect(() => {
      if (isHovered) {
        controls.start("animate");
      } else {
        controls.start("normal");
      }
    }, [isHovered, controls]);

    return (
      <div
        className={cx(
          `transform group-hover:-translate-x-0 -translate-x-2 ease select-none pointer-events-none rounded-md duration-300 flex items-center justify-center relative z-[1]`,
          className
        )}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M18.5 12h0"
            variants={pathVariants}
            animate={controls}
          />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    );
  }
);

ArrowRightIcon.displayName = "ArrowRightIcon";

export { ArrowRightIcon };
