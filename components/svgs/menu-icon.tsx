"use client";
import { cx } from "@/lib";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export interface MenuIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MenuIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  isOpen?: boolean;
}

const lineVariants: Variants = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1,
  },
  animate: (custom: number) => ({
    rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
    y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
    opacity: custom === 2 ? 0 : 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
};

const MenuIcon = forwardRef<MenuIconHandle, MenuIconProps>(
  ({ className, size = 28, isOpen, ...props }, ref) => {
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
      if (isOpen) {
        controls.start("animate");
      } else {
        controls.start("normal");
      }
    }, [controls, isOpen]);
    return (
      <div
        className={cx(
          "relative cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",
          className
        )}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            variants={lineVariants}
            animate={controls}
            custom={1}
          />
          <motion.line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            variants={lineVariants}
            animate={controls}
            custom={2}
          />
          <motion.line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            variants={lineVariants}
            animate={controls}
            custom={3}
          />
        </svg>
      </div>
    );
  }
);

MenuIcon.displayName = "MenuIcon";

export { MenuIcon };
