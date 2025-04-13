"use client";
import { NAV_MENU_COPY } from "@/contents/nav";
import { Accordion } from "@radix-ui/react-accordion";
import { Fragment, useEffect, useState } from "react";
import { ActiveLink } from "./active-link";
import { MobileNavItemWithDropdown } from "./nav";
import { MenuIcon } from "../svgs/menu-icon";
import { cx } from "@/lib";

type MobileHeaderProps = {
  children?: React.ReactNode;
};

export const MobileHeader = ({ children }: MobileHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // use remove scroll lock here?
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="relative lg:hidden ">
      <button
        onClick={toggleMenu}
        className="relative z-100 w-10 h-10 rounded-full text-royal  flex items-center justify-center"
      >
        <MenuIcon {...{ isOpen }} size={24} />
      </button>

      <Accordion aria-hidden={!isOpen} type="single" collapsible>
        {/* todo: work `wrapper`` */}
        <nav
          className={cx(
            "fixed bg-white h-0 w-[100dvw] overflow-scroll transition-[height] duration-500 inset-0 top-[62px] z-20 lg:hidden",
            {
              // "clip-reveal-open": !isOpen,
              "h-[calc(100dvh-62px)]": isOpen,
              // "clip-reveal-close": isOpen,
            }
          )}
        >
          <div className="py-6 px-5 ">
            <ul className="grid gap-y-5">
              {NAV_MENU_COPY.menus.map((item, idx) => (
                <Fragment key={idx}>
                  {item.subMenu ? (
                    <MobileNavItemWithDropdown {...item} />
                  ) : (
                    <ActiveLink
                      href={item.href!}
                      className="text-lg py-4 border-b border-[#5641f333]"
                    >
                      {item.label}
                    </ActiveLink>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </nav>
      </Accordion>
    </div>
  );
};

const ClipReveal = () => {
  return <div className=" clip" />;
};
