"use client";
import useMediaQuery from "@/hooks/use-media-query";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { EclipseSvg } from "../svgs/eclipse-svg";
import { AnimatedLines } from "../ui/animated-lines";
import { SectionLink } from "../ui/section-link";
import { LaunchWithEase } from "./launch-with-ease";

const lines = ["block", "block", "block", "block", "max-lap:hidden"];

const textLines = ["block", "block", "block", "max-lap:hidden"];

// todo: use animate sequences
export const PixelPerfect = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");
  const imgGridRef = useRef(null);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(2);

  const { scrollYProgress } = useScroll({
    target: isLargeScreen ? containerRef : imgGridRef,
    offset: ["start 100px", "end end"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.4,
    restDelta: 0.001,
  });

  const bgColor = useTransform(spring, [0.8, 0.9], ["#f5f5f7", "#000"]);
  const textColor = useTransform(spring, [0.8, 0.9], ["#000", "#fff"]);

  const contentOpacity = useTransform(spring, [0.75, 0.85], [1, 0]);
  const contentY = useTransform(spring, [0.75, 0.85], [0, -60]);

  const textY = useTransform(spring, [0.65, 0.7], ["0", "-60px"]);
  const textOpacity = useTransform(spring, [0.65, 0.7], [0, 1]);

  const imgY = useTransform(
    spring,
    [0, 0.73, 0.8, 0.9],
    ["0", "-70%", "-70%", "-75%"]
  );
  const imgOpacity = useTransform(spring, [0.8, 0.88], [1, 0]);

  const frameHeight = useTransform(
    spring,
    [0.1, 0.23, 0.28, 0.35],
    ["252px", "74px", "234px", "214px"]
  );
  const frameOpacity = useTransform(spring, [0.55, 0.6], [1, 0]);

  const launchY = useTransform(scrollYProgress, [0.96, 1], [0, -60]);

  const startIndex = 2;
  const endIndex = IMAGES_URL.length - 1;
  const position = useTransform(spring, [0, 0.6], [startIndex, endIndex], {
    clamp: true,
  });

  // useEffect(() => {
  //   if (!scrollContainerRef.current || !frameRef.current) return;

  //   let rafId: number | null = null;

  //   const updateFrame = () => {
  //     if (!scrollContainerRef.current || !frameRef.current) return;

  //     const containerRect = scrollContainerRef.current.getBoundingClientRect();
  //     const containerCenter = containerRect.top + containerRect.height / 2;

  //     // Find which image is closest to the center
  //     let closestIndex = 0;
  //     let closestDistance = Number.POSITIVE_INFINITY;

  //     imageRefs.current.forEach((ref, index) => {
  //       if (!ref) return;

  //       const rect = ref.getBoundingClientRect();
  //       const imageCenter = rect.top + rect.height / 2;
  //       const distance = Math.abs(containerCenter - imageCenter);

  //       if (distance < closestDistance) {
  //         closestDistance = distance;
  //         closestIndex = index;
  //       }
  //     });

  //     // Update active index
  //     setActiveIndex(closestIndex);

  //     // Directly set frame dimensions to match the image
  //     const activeImage = IMAGES_URL[closestIndex];
  //     const padding = 20;

  //     if (frameRef.current) {
  //       // Set frame dimensions directly without animation
  //       frameRef.current.style.width = `${activeImage.width + padding}px`;
  //       frameRef.current.style.height = `${activeImage.height + padding}px`;

  //       // Add transition for smooth resizing
  //       frameRef.current.style.transition =
  //         "width 0.3s ease-out, height 0.3s ease-out";
  //     }

  //     // Continue updating on scroll
  //     rafId = requestAnimationFrame(updateFrame);
  //   };

  //   // Start updating
  //   rafId = requestAnimationFrame(updateFrame);

  //   // Cleanup
  //   return () => {
  //     if (rafId) cancelAnimationFrame(rafId);
  //   };
  // }, []);

  return (
    <motion.div style={{ backgroundColor: bgColor }}>
      <section
        aria-labelledby="pxl-heading"
        aria-describedby="pxl-desc"
        ref={containerRef}
        className="section"
      >
        <div className="h-auto static lap:h-[250dvh]">
          <div className="sticky top-25 wrapper flex flex-col !items-start gap-y-8 lap:gap-x-10 lap:flex-row lap:justify-between lap:max-h-[830px] lap:overflow-hidden">
            <motion.div
              className="static max-w-[440px] tab:max-w-[532px] lap:max-w-[600px] "
              style={{ opacity: contentOpacity, y: contentY }}
            >
              <AnimatedLines lines={lines}>
                <h2 id="pxl-heading" className="text-fluid-lg text-black">
                  Create <br /> pixel-perfect accuracy in the atomic level
                </h2>
              </AnimatedLines>
            </motion.div>

            <section
              ref={imgGridRef}
              className="w-full lap:w-auto order-3 h-[300dvh]  lap:order-none"
            >
              <div className="sticky top-25 lap:min-w-[112px] h-auto max-w-[236px] mx-auto ">
                <motion.div
                  className="relative flex flex-col gap-y-10 w-full  h-full mx-auto [&>:first-child>img]:max-w-[93px]"
                  style={{
                    y: imgY,
                    opacity: imgOpacity,
                  }}
                >
                  {IMAGES_URL.map((url, idx) => {
                    const inputRange = [
                      idx - 2,
                      idx - 1,
                      idx,
                      idx + 1,
                      idx + 2,
                    ];
                    const scale = useTransform(
                      position,
                      inputRange,
                      imgOutputRange,
                      { clamp: true }
                    );
                    const opacity = useTransform(
                      position,
                      inputRange,
                      outputRange,
                      { clamp: true }
                    );

                    return (
                      <motion.div
                        key={idx}
                        className="relative w-full h-auto mx-auto"
                      >
                        <motion.img
                          src={url}
                          alt=""
                          style={{ width: scale, opacity }}
                          className="!h-auto mx-auto"
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
                <motion.div
                  className="absolute w-full overflow-visible top-[322px] z-10"
                  style={{ height: frameHeight, opacity: frameOpacity }}
                >
                  <Frame />
                </motion.div>

                <div className="absolute top-[360px] transform  left-1/2 -translate-x-1/2">
                  <motion.h3
                    className="font-semibold text-[172px] -tracking-[8.6px]"
                    style={{
                      y: textY,
                      color: textColor,
                      opacity: textOpacity,
                    }}
                  >
                    Or
                  </motion.h3>
                </div>
              </div>
            </section>

            <motion.div
              className="flex flex-col gap-y-4.5 lap:gap-y-8 max-w-[500px] lap:max-w-[316px] lap:mt-[448px]"
              style={{
                opacity: contentOpacity,
                y: contentY,
              }}
            >
              <EclipseSvg />

              <AnimatedLines lines={textLines}>
                <p
                  id="pxl-desc"
                  className="text-lg leading-[1.3] -tracking-[0.3px] md:text-2xl lap:leading-[1.2] lap:-tracking-[0.48px] text-black"
                >
                  Create your website from the ground up with complete control
                  over every element, down to the smallest detail.
                </p>
              </AnimatedLines>
              <SectionLink linkTo="#">Get Started With Tutorials</SectionLink>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div className="-mt-[330px]" style={{ y: launchY }}>
        <LaunchWithEase />
      </motion.div>
    </motion.div>
  );
};

const IMAGES_URL = [
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider2.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider4.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider3.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider1.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider5.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider2.webp",
];

const outputRange = [0.5, 0.75, 1, 0.75, 0.5];
const imgOutputRange = ["50%", "75%", "100%", "75%", "50%"];

const frameCorners = ["top-left", "top-right", "bottom-left", "bottom-right"];

const frameCornerStyles = {
  "top-left": { top: "-3px", left: "-3px" },
  "top-right": { top: "-3px", right: "-3px" },
  "bottom-left": { bottom: "-3px", left: "-3px" },
  "bottom-right": { bottom: "-3px", right: "-3px" },
};

const Frame = () => (
  <div className="relative overflow-visible border-[#0cf5ff] border border-dashed h-full w-full">
    {frameCorners.map((pos, i) => {
      const style = frameCornerStyles[pos as keyof typeof frameCornerStyles];
      return (
        <div
          key={i}
          className="absolute bg-white w-2 h-2 rounded-md border-[#0cf5ff] border"
          style={style}
        />
      );
    })}
    <div className="absolute top-1/2 transform left-0 -translate-x-1/2 bg-white w-2 h-2 border-[#585858] border" />
    <div className="absolute top-1/2 transform -right-2 -translate-x-1/2 bg-white w-2 h-2 border-[#585858] border" />
  </div>
);
