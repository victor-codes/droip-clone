"use client";
import { cx } from "@/lib";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { EclipseSvg } from "../svgs/eclipse-svg";
import { SectionLink } from "../ui/section-link";
import { LaunchWithEase } from "./launch-with-ease";

const DEFAULT_ACTIVE = 2;

export const PixelPerfect = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end 50%"],
  });

  const { scrollYProgress: scrollT } = useScroll({
    target: ref,
    offset: ["start start", "end 50%"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.4,
  });

  const bgColor = useTransform(spring, [0, 0.5], ["#fff", "#000"]);
  const color = useTransform(spring, [0, 0.5], ["#000", "#fff"]);

  const opacity = useTransform(spring, [0, 0.15], [1, 0]);
  const opacityImg = useTransform(spring, [0.5, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], ["0", "-60px"]);
  const launchY = useTransform(scrollYProgress, [0.5, 0.75], [0, -100]);

  return (
    <motion.div style={{ backgroundColor: bgColor }}>
      <section
        aria-labelledby="pxl-heading"
        aria-describedby="pxl-desc"
        ref={ref}
        className="section"
      >
        <div className="h-auto static lap:h-[300dvh]">
          <div className="sticky top-25 wrapper flex flex-col !items-start gap-y-8 lap:gap-x-10 lap:flex-row lap:justify-between lap:max-h-[830px] lap:overflow-hidden">
            <motion.div
              className="static max-w-[440px] tab:max-w-[532px] lap:max-w-[600px] "
              style={{ opacity, y }}
            >
              <h2 id="pxl-heading" className="text-fluid-lg text-black">
                Create <br /> pixel-perfect accuracy in the atomic level
              </h2>
            </motion.div>

            <section
              className="
              w-full lap:w-auto flex items-start justify-center order-3 h-[300dvh] lap:order-none
               "
            >
              <div className="sticky top-18 lap:min-w-[112px] h-auto max-w-[236px] ">
                <motion.div
                  className="relative grid gap-y-10 w-full  h-full mx-auto"
                  style={{ opacity: opacityImg }}
                >
                  {IMAGES_URL.map((url, idx) => (
                    <div key={idx} className="relative w-full mx-auto">
                      <Image
                        src={url}
                        alt=""
                        height={160}
                        width={235}
                        className={cx("!h-auto w-auto mx-auto", {
                          "!w-3/4":
                            DEFAULT_ACTIVE - 1 === idx ||
                            DEFAULT_ACTIVE + 1 === idx,
                          "w-full": DEFAULT_ACTIVE === idx,
                          "opacity-50":
                            DEFAULT_ACTIVE !== idx &&
                            DEFAULT_ACTIVE - 1 !== idx &&
                            DEFAULT_ACTIVE + 1 !== idx,
                        })}
                      />
                    </div>
                  ))}
                  <div className="absolute w-full h-52 top-[322px] z-10">
                    <div className="border-[#0cf5ff] border border-dashed h-full w-full">
                      <div className="absolute -top-[3px] -left-[3px] bg-white w-2 h-2 rounded-md border-[#0cf5ff] border" />
                      <div className="absolute -top-[3px] -right-[3px] bg-white w-2 h-2 rounded-md border-[#0cf5ff] border" />
                      <div className="absolute -bottom-[3px] -left-[3px] bg-white w-2 h-2 rounded-md border-[#0cf5ff] border" />
                      <div className="absolute -bottom-[3px] -right-[3px] bg-white w-2 h-2 rounded-md border-[#0cf5ff] border" />

                      <div className="absolute top-1/2 transform left-0 -translate-x-1/2 bg-white w-2 h-2 border-[#585858] border" />
                      <div className="absolute top-1/2 transform -right-2 -translate-x-1/2 bg-white w-2 h-2 border-[#585858] border" />
                    </div>
                  </div>
                </motion.div>

                <div className="absolute top-[360px]">
                  <motion.h3
                    className="font-semibold text-[172px] -tracking-[8.6px]"
                    style={{ color }}
                  >
                    Or
                  </motion.h3>
                </div>
              </div>
            </section>

            <motion.div
              className="flex flex-col gap-y-4.5 lap:gap-y-8 max-w-[500px] lap:max-w-[316px] lap:mt-auto"
              style={{ opacity, y }}
            >
              <EclipseSvg />
              <p
                id="pxl-desc"
                className="text-lg leading-[1.3] -tracking-[0.3px] md:text-2xl lap:leading-[1.2] lap:-tracking-[0.48px] text-black"
              >
                Create your website from the ground up with complete control
                over every element, down to the smallest detail.
              </p>

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

const SCALE_FACTOR = [0.5, 0.75, 1];

const IMAGES_URL = [
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider2.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider4.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider3.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider1.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider5.webp",
  "https://droip.com/wp-content/uploads/2025/03/vertical-slider2.webp",
];

// const { scrollY } = useScroll();
// const [scrollDirection, setScrollDirection] = useState("down");

// useMotionValueEvent(scrollY, "change", (current) => {
//   const diff = current - scrollY.getPrevious();
//   setScrollDirection(diff > 0 ? "down" : "up");
// });

// stiffness: 100,
// damping: 20,
// mass: 0.5,
