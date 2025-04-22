"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRightIcon } from "../svgs/arrow-right";

type CtaBtnProps = {
  children: React.ReactNode;
};

export const CtaBtn = ({ children }: CtaBtnProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link
      href="#"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-11 flex space-x-[5px] justify-center px-11 py-2 rounded-18 text-white"
    >
      <span className="lap:text-[18px] relative z-[1]">{children}</span>{" "}
      <ArrowRightIcon isHovered={isHovered} size={18} />
      <div className="absolute transition-transform ease-out duration-300 w-full h-full rounded-18 top-1/2 transform -translate-y-1/2 left-0  bg-royal py-2 px-4 group-hover:scale-y-[1.18] group-hover:bg-royal-500 group-hover:scale-x-[0.98]" />
    </Link>
  );
};
