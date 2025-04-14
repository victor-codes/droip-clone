import { footerData } from "@/contents/footer";
import { DIcon } from "../svgs/footers/d-icon";
import { ThemeumIcon } from "../svgs/footers/themeum-icon";
import { FooterColumn, FooterOnboard, Socials } from "../ui/footer";

export const Footer = () => {
  const firstIdxExclude = footerData.slice(1);
  return (
    <footer className="block pt-13 pb-4 tab:pb-8 tab:pt-16  lap:py-0">
      <FooterOnboard />
      <div className="wrapper text-smoky">
        <div className="py-8 tab:my-8 md:py-0 md:my-0">
          <nav className="grid gap-y-12 gap-x-6 tab:gap-y-8  md:gap-8 grid-cols-2 md:grid-cols-5">
            <Socials />
            {firstIdxExclude.map((column, idx) => (
              <FooterColumn key={idx} {...column} />
            ))}
            <Socials isMobile />
          </nav>
        </div>

        <div className="mt-20 pt-[22px] pb-6 border-t-3 border-black/15">
          <div className="flex items-center flex-wrap justify-between md:flex-row gap-x-5 gap-y-10">
            <p className="order-1 md:order-none">
              © 2025 Droip. All rights reserved
            </p>

            <div className="flex items-center gap-x-2 ">
              <p>A Product by</p>
              <div>
                <ThemeumIcon />
              </div>
            </div>

            <div className="bg-royal-800 flex items-center gap-x-2 p-[1px] pl-2 rounded-[5px]">
              <div className="w-3-5 h-5">
                <DIcon />
              </div>
              <div className="bg-white rounded-sm p-2">
                <p className="text-[13px] font-medium text-royal-700 leading-none">
                  Made in Droip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
