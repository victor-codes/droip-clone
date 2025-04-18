"use client";
import { APP_INTEGRATION_DATA } from "@/contents/home";
import { SectionGradient } from "../ui/section-gradient";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
import { inView } from "motion";

export const AppIntegration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      aria-labelledby="app-heading"
      aria-describedby="app-desc"
      className="section"
    >
      <div className="wrapper">
        <div ref={sectionRef}>
          <h2 id="app-heading" className="section-title text-black">
            App <br /> integration
          </h2>

          <div
            data-anim-ctrl={isInView}
            style={
              {
                "--ball-offset": "-48px",
              } as React.CSSProperties
            }
          >
            <SectionGradient id="app-desc">
              Connect your go-to apps effortlessly within the builder for a
              smooth and uninterrupted workflow.
            </SectionGradient>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-[1px] app-tile">
          {APP_INTEGRATION_DATA.map((Icon, index) => {
            if (typeof Icon === "string") {
              return (
                <AppTileItem key={index}>
                  <Image
                    src={Icon}
                    alt=""
                    fill
                    className="object-contain rounded-xl"
                  />
                </AppTileItem>
              );
            }

            return (
              <AppTileItem key={index}>
                <Icon />
              </AppTileItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AppTileItem = ({ children }: AppTileItemProps) => {
  return (
    <div
      className="group flex items-center app-tile-item justify-center transition-[background-color,filter] ease-initial duration-400 h-16 tab:h-20 md:h-[100px] lap:h-[110px] bg-royal-100 hover:bg-royal-200 rounded-18"
      style={{
        transitionDuration: "1000ms, 400ms",
      }}
    >
      <div className="relative group-hover:scale-130 transition-transform duration-400 ease-initial w-[30px] h-[30px] md:w-[36px] md:h-[36px] lap:w-[48px] lap:h-[48px] ">
        {children}
      </div>
    </div>
  );
};

type AppTileItemProps = {
  children: React.ReactNode;
};
