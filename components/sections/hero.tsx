"use client";
import { CirclePlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "../svgs/arrow-right";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section>
      <div className="wrapper pt-[68px] pb-16 md:pb-18 lap:pb-32">
        <div>
          <div className="bg-royal-150 w-fit rounded-full py-2.5 px-6">
            <p className="text-lg font-semibold tracking-[-0.76px] leading-[1.2]">
              No-Code WordPress Site Builder
            </p>
          </div>

          <div className="flex flex-col md:flex-row lap:items-center lap:justify-between gap-y-12 mt-6 md:mt-12 mb-15 md:mb-24 ">
            <div>
              {/* text-balance */}
              <h1 className="max-md:max-w-[400px]">
                Break Limits. Build{" "}
                <strong className="font-medium text-royal inline tracking-[-3px] lap:tracking-[-5px]">
                  Anything
                </strong>
                . No Code Needed.
              </h1>
            </div>

            <div className="grid gap-y-1 w-full max-md:max-w-[420px] md:max-w-[320px] lap:max-w-[316px]">
              <div className="md:p-6 lap:pb-20 md:bg-royal-100 rounded-18 max-md:mb-3.5">
                <p className="text-lg text-smoky leading-[1.4] tracking-[-0.36px]">
                  Droip is a no-code, drag-and-drop WordPress builder that
                  simplifies website creation with powerful capabilities.
                </p>
              </div>
              <div>
                <button className="flex items-center gap-x-1.5 justify-center h-11 w-full bg-royal-100 hover:bg-royal-150 rounded-18">
                  <span className="text-royal font-semibold">Watch Intro</span>
                  <CirclePlayIcon
                    size={21}
                    color="#5641f3"
                    strokeWidth={1.75}
                  />
                </button>
              </div>
              <div>
                <Link
                  href="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="group relative h-11 flex space-x-[5px] justify-center px-11 py-2 rounded-18 text-white mt-1"
                >
                  <span className="lap:text-[18px] relative z-[1]">
                    Get started with Droip
                  </span>

                  <ArrowRightIcon isHovered={isHovered} size={18} />
                  <div className="absolute  transition-transform ease-out duration-300 w-full h-full rounded-18 top-1/2 transform -translate-y-1/2 left-0  bg-royal py-2 px-4 group-hover:scale-y-[1.18] group-hover:bg-royal-500  group-hover:scale-x-[0.98]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[1.72] bg-royal-150 border-royal-150 border-8 rounded-[10px]">
          <Image
            src="https://droip.com/wp-content/uploads/2025/04/hero-home1.webp"
            fill
            className="rounded-lg"
            alt={""}
          />
        </div>
      </div>
    </section>
  );
};
