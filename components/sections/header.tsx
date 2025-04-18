"use client";
import { NAV_MENU_COPY } from "@/contents/nav";
import { useScrollDir } from "@/hooks/use-scroll-dir";
import { cx } from "@/lib";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu";
import { motion } from "motion/react";
import Link from "next/link";
import { Fragment } from "react";
import { Logo } from "../shared/logo";
import { DropdownArrow } from "../svgs/dropdown-arrow";
import { ActiveLink } from "../ui/active-link";
import { MobileHeader } from "../ui/mobile-header";
import { NavItemWithDropdown } from "../ui/nav";

export const Header = () => {
  const { y, direction } = useScrollDir();

  return (
    <header className="h-16 lap:h-17">
      <motion.div
        animate={{
          y: y > 0 ? `${direction * 120}%` : 0,
        }}
        transition={ANIM_CONFIG}
        className="fixed w-full py-2 lg:bg-trasparent lg:py-3 z-50"
      >
        <motion.div
          className={cx(
            "fixed top-0 w-full transition-all duration-200 ease-initial h-17",

            {
              "bg-white/72 backdrop-blur-[72px]": y > 60,
            }
          )}
        />

        <div className="wrapper text-sm font-medium text-smoky mx-auto h-11 flex justify-between items-center">
          <div className="flex space-x-16 items-center">
            <div className="relative z-10 w-16">
              <Logo />
            </div>
            <div className="hidden lg:block">
              <NavigationMenu className="relative">
                <NavigationMenuList aria-label="Main Navigation">
                  <ul className="flex items-center gap-3.5">
                    {NAV_MENU_COPY.menus.map((item, idx) => (
                      <Fragment key={idx}>
                        {item.subMenu ? (
                          <>
                            <NavItemWithDropdown {...{ ...item }} />
                          </>
                        ) : (
                          <li key={idx} className="relative">
                            <ActiveLink
                              href={item.href!}
                              className={cx(
                                "text-sm font-medium hover:text-black p-2.5"
                              )}
                            >
                              {item.label}
                            </ActiveLink>
                          </li>
                        )}
                      </Fragment>
                    ))}
                  </ul>
                </NavigationMenuList>

                <NavigationMenuIndicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-transform duration-250 ease-smooth-in-out">
                  <DropdownArrow />
                </NavigationMenuIndicator>

                <div className="absolute left-0 top-full flex justify-center z-100">
                  <NavigationMenuViewport className="nav-menu-vwpt " />
                </div>
              </NavigationMenu>
            </div>
          </div>

          {/* actions */}
          <div className="hidden lg:flex items-center space-x-5">
            {NAV_MENU_COPY.actions.map(({ label, href, isPrimary = false }) => (
              <Link
                key={href}
                href={href}
                className={cx({
                  "hover:text-black py-2.5 px-4.5": !isPrimary,
                  "group relative py-2 px-4 rounded-xl font-normal text-white":
                    isPrimary,
                })}
              >
                <span className="relative z-[1]">{label}</span>
                {isPrimary && (
                  <div className="absolute group-hover:scale-y-[1.167] transition-transform ease-out duration-300 w-full h-full rounded-xl top-1/2 transform -translate-y-1/2 left-0  bg-royal py-2 px-4" />
                )}
              </Link>
            ))}
          </div>

          <MobileHeader />
        </div>
      </motion.div>
    </header>
  );
};

const ANIM_CONFIG = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.4,
};
