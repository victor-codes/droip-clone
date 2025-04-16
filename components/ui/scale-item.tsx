import { ScaleItemProps } from "@/types/home";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// todo: has a bg color transition on enter
export const ScaleItem = ({
  title,
  description,
  imageUrl,
  linkTo,
}: Omit<ScaleItemProps, "id">) => {
  return (
    <div className="sticky top-[15vh] lap:top-[10vh] grid gap-12 text-black justify-between overflow-hidden md:grid-cols-[320px_minmax(0,874px)] h-[70dvh] max-h-[800px]  md:max-h-[500px] lap:h-[80dvh] lap:max-h-[740px] bg-royal-100 py-8 px-4.5 tab:p-8 md:!pr-0 lap:p-12  rounded-[14px] lap:rounded-[28px]">
      <div className="flex md:justify-between flex-col space-y-8 md:pb-16">
        <h3 className="text-2xl lap:text-[32px] leading-[1.17] lap:leading-[1.1875] -tracking-[1px] lap:-tracking-[1.3px] font-semibold">
          {title}
        </h3>

        <div className="space-y-6">
          <p className="text-sm leading-5 md:text-base md:tracking-[-0.2px] lap:text-2xl lap:leading-[1.2] lap:tracking-[-0.48px]  text-smoky lap:text-black">
            {description}
          </p>

          <Link
            href={linkTo}
            className="flex items-center gap-x-2 font-semibold -tracking-[0.08px] text-royal leading-[1.75]"
          >
            View Details <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="relative -mr-[1px] rounded-[9px] md:rounded-t-none overflow-hidden lap:rounded-l-[18px]">
        <Image src={imageUrl} alt={""} className="object-cover" fill />
      </div>
    </div>
  );
};
