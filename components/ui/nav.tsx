import { NavItemProps } from "@/types/nav";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { useId } from "react";

export const NavItemWithDropdown = ({ label, subMenu }: NavItemProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group flex gap-1 p-2.5 items-center text-sm  hover:text-black">
        {label}
        <div className="flex items-center  justify-center w-3 h-3">
          <ChevronDownIcon
            className="transform scale-150 group-data-[state=open]:rotate-180 transition-transform duration-400 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
            width={20}
            height={20}
          />
        </div>
      </NavigationMenuTrigger>

      <NavigationMenuContent className="nav-menu-cnt">
        <div className="w-max  rounded-xl  p-6 grid grid-cols-2  gap-x-4.5 gap-y-2  z-50">
          {/* todo: change to key to link from href */}
          {subMenu!.map(({ icon: Icon, label, description }, idx) => (
            <NavigationMenuLink
              key={idx}
              className="flex items-start gap-6 min-w-[304px] hover:bg-royal-100 rounded-2xl p-4"
            >
              <Icon />
              <div className="text-black space-y-0.5">
                <p className="font-semibold  leading-none text-base">{label}</p>
                <p className="text-xs font-normal opacity-70">{description}</p>
              </div>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export const MobileNavItemWithDropdown = ({ label, subMenu }: NavItemProps) => {
  const id = useId();
  return (
    <AccordionItem value={id} className="py-4 border-b border-[#5641f333]">
      <AccordionHeader>
        <AccordionTrigger className="group flex gap-x-1  items-center text-lg leading-tight w-full ">
          {label}
          <div className="flex items-center  justify-center">
            <ChevronDownIcon
              className="transform group-data-[state=open]:rotate-180 transition-transform duration-400 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
              width={18}
              strokeLinecap="square"
              strokeLinejoin="miter"
              height={18}
              aria-hidden={true}
            />
          </div>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent className="pt-4 overflow-hidden data-[state=closed]:animate-slideArdUp data-[state=open]:animate-slideArdDown">
        <div className="space-y-1">
          {subMenu!.map(({ icon: Icon, label }, idx) => (
            <div
              key={idx}
              className="flex items-center py-4 px-3 gap-x-4.5  hover:bg-royal-100"
            >
              <div className="w-4.5 h-4.5 flex items-center justify-center">
                <Icon />
              </div>
              <div className="text-black">
                <p className="leading-5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
