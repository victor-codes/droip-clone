"use client";
import { NAV_MENU_COPY } from "@/contents/nav";
import useMediaQuery from "@/hooks/use-media-query";
import { cx } from "@/lib";
import { Accordion } from "@radix-ui/react-accordion";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { MenuIcon } from "../svgs/menu-icon";
import { ActiveLink } from "./active-link";
import { MobileNavItemWithDropdown } from "./nav";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    if (isLargeScreen) {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isLargeScreen]);

  return (
    <div className="relative lg:hidden ">
      <button
        onClick={toggleMenu}
        className="relative z-100 w-10 h-10 rounded-full text-royal  flex items-center justify-center"
      >
        <MenuIcon {...{ isOpen }} size={24} />
      </button>

      <Accordion aria-hidden={!isOpen} type="single" collapsible>
        <nav
          aria-label="Main Navigation"
          className={cx(
            "fixed bg-white/72 backdrop-blur-[72px] h-0 w-[100dvw] overflow-scroll transition-[height] duration-500 inset-0 top-[68px] z-20 lg:hidden",
            {
              "h-[calc(100dvh-62px)]": isOpen,
            }
          )}
        >
          <div className="py-6 px-5 max-lap:max-w-[820px] mx-auto">
            <ul className="grid gap-y-5">
              {NAV_MENU_COPY.menus.map((item, idx) => (
                <Fragment key={idx}>
                  {item.subMenu ? (
                    <MobileNavItemWithDropdown {...item} />
                  ) : (
                    <ActiveLink
                      href={item.href!}
                      className="text-lg py-4 border-b leading-none border-[#5641f333]"
                    >
                      {item.label}
                    </ActiveLink>
                  )}
                </Fragment>
              ))}
              <ActiveLink
                href="#"
                className="text-lg py-4 border-b leading-none border-[#5641f333]"
              >
                Login
              </ActiveLink>

              <Link
                href="#"
                className={cx(
                  "group relative py-2 px-4 rounded-xl font-normal text-white w-max"
                )}
              >
                <span className="relative z-[1]">Get Started</span>
                <div className="absolute group-hover:scale-y-[1.167] transition-transform ease-out duration-300 w-full h-full rounded-xl top-1/2 transform -translate-y-1/2 left-0  bg-royal py-2 px-4" />
              </Link>
            </ul>
          </div>
        </nav>
      </Accordion>
    </div>
  );
};
