import { NAV_MENU_COPY } from "@/contents/nav";
import { cx } from "@/lib";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Fragment } from "react";
import { Logo } from "../shared/logo";
import { DropdownArrow } from "../svgs/dropdown-arrow";
import { ActiveLink } from "../ui/active-link";
import { MobileHeader } from "../ui/mobile-header";
import { NavItemWithDropdown } from "../ui/nav";

export const Header = () => {
  return (
    <header>
      <div className="py-2 bg-white lg:bg-transparent lg:py-3">
        <div className="wrapper text-sm font-medium text-smoky mx-auto h-11 flex justify-between items-center">
          <div className="flex space-x-16 items-center">
            <div className="relative z-10 w-16">
              <Logo />
            </div>
            {/* nav */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
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

                {/* // transition-[width,transform_250ms_ease] */}
                <NavigationMenuIndicator
                  className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden 
                 data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn"
                >
                  <DropdownArrow />
                </NavigationMenuIndicator>
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

          {/* mobile nav */}
          <MobileHeader />
        </div>
      </div>
    </header>
  );
};
