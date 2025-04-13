import { NavItemProps } from "@/types/nav";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { use, useId } from "react";

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

      <NavigationMenuContent>
        <div className="absolute left-0 mt-2.5 w-max backdrop-blur-lg   bg-white/56 rounded-xl  p-6 grid grid-cols-2  gap-x-4.5 gap-y-2  z-50">
          {/* todo: change to key to link from href */}
          {subMenu!.map(({ icon: Icon, label, description }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 min-w-[304px] hover:bg-[#ebe8fe]  rounded-2xl p-4 transition"
            >
              {/* <div className="w-6 h-6"> */}
              <Icon />
              {/* </div> */}

              <div className="text-black space-y-0.5">
                <p className="font-semibold  leading-none text-base">{label}</p>
                <p className="text-xs font-normal opacity-70">{description}</p>
              </div>
            </div>
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
        <AccordionTrigger className="group flex gap-x-1  items-center text-lg w-full ">
          {label}
          <div className="flex items-center  justify-center w-3 h-3">
            <ChevronDownIcon
              className="transform scale-150 group-data-[state=open]:rotate-180 transition-transform duration-400 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
              width={20}
              height={20}
            />
          </div>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent className="pt-4">
        <div className="mt-2.5 space-y-1">
          {subMenu!.map(({ icon: Icon, label }, idx) => (
            <div
              key={idx}
              className="flex items-center py-4 px-3 gap-x-4.5  hover:bg-[#ebe8fe]"
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
