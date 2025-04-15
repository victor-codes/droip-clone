"use client";
import { cx } from "@/lib";
import { FeaturesProps } from "@/types/home";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Features = ({ title, list, isAlternate }: FeaturesProps) => {
  const images = list.map((item) => item.imageUrl);
  const lastItemIdx = images.length - 1;
  const [value, setValue] = useState(list[0].id); // default open

  const handleChange = (newValue: string | undefined) => {
    if (newValue) {
      setValue(newValue);
    }
  };

  // todo: slide accordion content animation is not perfect yet, image sliding not done
  return (
    <section className="section">
      <div className="wrapper">
        <div>
          <h2 className="section-title font-medium">{title}</h2>
        </div>

        <div className="mt-31">
          <div
            className={cx(
              "flex flex-col lap:flex-row gap-x-12 gap-y-4 lap:max-h-[540px]",
              {
                "lap:flex-row-reverse": isAlternate,
              }
            )}
          >
            <Accordion
              type="single"
              collapsible
              value={value}
              onValueChange={handleChange}
              className={cx("grid lap:max-w-[400px] gap-y-12", {
                "lap:max-w-[450px]": isAlternate,
              })}
            >
              {list.map(({ id, link, title, description, imageUrl }, idx) => (
                <div key={id} className="">
                  <AccordionItem
                    value={id}
                    className="relative group grid transition-all duration-500 grid-cols-[36px_1fr] gap-x-8 rounded-lg items-start gap-y-6 data-[state=open]:pb-12 lap:data-[state=open]:pb-14 data-[state=closed]:h-14 lap:data-[state=closed]:h-15"
                  >
                    <div
                      className={cx(
                        "absolute h-[calc(100%_+_9px)] w-0.5 left-4.5 top-9.5 bg-royal-150 transition-[height] duration-500 ease-in-out",
                        {
                          "!h-[calc(100%_-_70px)] group-data-[state=closed]:!h-0":
                            idx === lastItemIdx,
                        }
                      )}
                    />
                    <div className="flex items-center justify-center w-9 h-9">
                      <div className="relative w-1.5 h-1.5 bg-royal rounded-full z-[1]" />
                      <div className="absolute w-6 h-6 bg-royal-150 rounded-full transform transition-transform duration-500 ease-in-out group-data-[state=closed]:scale-0" />
                    </div>
                    <AccordionHeader>
                      <AccordionTrigger className="text-left">
                        <h3 className="text-2xl tab:text-[28px] leading-[1.2] -tracking-[1.3px] md:text-[32px] font-semibold transition-transform duration-500 transform origin-left group-data-[state=closed]:opacity-50 group-data-[state=closed]:scale-75">
                          {title}
                        </h3>
                      </AccordionTrigger>
                    </AccordionHeader>

                    <AccordionContent
                      className={cx(
                        // data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown transition-[height] will-change-[height] duration-500 ease-in-out
                        "grid col-start-2 gap-y-4.5 overflow-hidden ",
                        {
                          "max-w-[300px]": isAlternate,
                        }
                      )}
                    >
                      <p className="text-gray-700 leading-[1.4]">
                        {description}
                      </p>
                      {link && (
                        <Link
                          href={link.href}
                          className="flex gap-x-2 items-center  font-semibold text-royal leading-[1.75]"
                        >
                          {link.label}{" "}
                          <ArrowRight size={18} strokeWidth={2.5} />
                        </Link>
                      )}
                      <div className="relative aspect-[1.4] rounded-xl overflow-hidden lap:hidden">
                        <Image src={imageUrl} alt={""} fill />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>

            <div
              className={cx(
                "hidden lap:block relative w-[55%] mb-4 h-[540px] rounded-18 overflow-hidden",
                {
                  "ml-auto": !isAlternate,
                  "mr-auto": isAlternate,
                }
              )}
            >
              {images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={""}
                  className="object-cover"
                  fill
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
