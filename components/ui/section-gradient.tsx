import React, { ReactNode } from "react";

type SectionGradientProps = { children: ReactNode };
export const SectionGradient = ({ children }: SectionGradientProps) => {
  return (
    <div className="grid grid-cols-[1fr_minmax(232px,426px)] gap-x-6 mt-6 mb-16 lap:mb-24">
      <div className="relative flex justify-end">
        <div className="absolute h-[1px] w-full section-grad-line" />
        <div className="relative left-[15px]">
          <div className="min-h-12 h-[calc(100%_-_17px)] w-[1px] bg-royal " />
          <div className="relative -left-[7.5px]  bg-royal w-[15px] h-[15px] rounded-2xl " />
        </div>
      </div>
      <div className="">
        <p className="text-lg md:text-2xl leading-[1.3]">{children}</p>
      </div>
    </div>
  );
};
