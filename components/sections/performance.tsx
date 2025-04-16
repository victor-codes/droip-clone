"use client";
import { useLerpMousePosition } from "@/hooks/use-lerp-mos-pos";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Performance = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { lerped, onMouseMove, setTarget, setLerped } =
    useLerpMousePosition(0.3);

  useEffect(() => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const center = { x: bounds.width / 2, y: bounds.height / 2 };
    setTarget(center);
    setLerped(center);
  }, [setTarget, setLerped]);

  return (
    <section aria-labelledby="perf-heading">
      <div
        ref={ref}
        className="perf-parent relative bg-black overflow-clip section mb-15"
        onMouseMove={onMouseMove}
      >
        <div className="wrapper text-white">
          <div className="relative mb-16 md:mb-12 lap:mb-32 z-[1]">
            <h2 id="perf-heading" className="section-title-sm text-center">
              Performance that <br /> sets you apart
            </h2>
          </div>
          <div className="grid grid-cols-1 lap:grid-cols-2 gap-y-4 gap-x-4.5">
            <PerformanceItem
              title="Clean code output"
              paragraph="Droip generates minimal, well-structured code that is free from unnecessary bloat ensuring efficiency."
              imageUrl="https://droip.com/wp-content/uploads/2025/03/clean-code.webp"
            />
            <PerformanceItem
              title="Keep website lightweight"
              paragraph="Optimized code means faster load times, improved performance, and a smoother user experience."
              imageUrl="https://droip.com/wp-content/uploads/2025/03/lightweight.webp"
            />
          </div>
        </div>
        <div className="duration-500 ease-initial perf-child">
          <div
            style={{
              transform: `translate(${lerped.x}px, ${lerped.y}px) translate(-50%, -50%)`,
            }}
            className="flex items-center justify-center absolute w-full h-full top-0 left-0  transition-transform duration-0"
          >
            <div className="w-[45.75rem] h-[31rem] bg-royal blur-[144px] opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

type PerformanceItemProps = {
  title: string;
  paragraph: string;
  imageUrl: string;
};
const PerformanceItem = ({
  title,
  paragraph,
  imageUrl,
}: PerformanceItemProps) => {
  return (
    <div className="bg-white/10 rounded-18">
      <div className="p-6 md:p-8 lap:p-12 space-y-4.5 md:space-y-6 relative z-[1]">
        <h3 className="font-semibold text-[28px] -tracking-[1.4px] lap:text-[32px] lap:-tracking-[2px] leading-none">
          {title}
        </h3>
        <p className="opacity-72  max-w-[434px] leading-tight">{paragraph}</p>
      </div>
      <div className="relative aspect-[2.3]">
        <Image src={imageUrl} alt={""} fill />
      </div>
    </div>
  );
};
