import React from "react";
import { ScaleItem } from "../ui/scale-item";

export const ScaleBusiness = () => {
  return (
    <section className="section bg-black">
      <div className="wrapper">
        <div className="max-w-[600px]">
          <h2 className="section-title mb-12.5 md:mb-16 lap:mb-24 text-white">
            Scale your business with
          </h2>
        </div>

        <div className="grid gap-y-10 lap:gap-y-30">
          {SCALE_BUSS_DATA.map(({ id, ...item }) => (
            <ScaleItem key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SCALE_BUSS_DATA = [
  {
    id: "content-manager",
    title: "Content Manager",
    description:
      "Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/CMS1.webp",
    linkTo: "#",
  },
  {
    id: ",edia-manager",
    title: "Media Manager",
    description:
      "Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor.",
    imageUrl: "https://droip.com/wp-content/uploads/2025/03/Media-Manager.webp",
    linkTo: "#",
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Dynamically update SEO content across pages to optimize your website's search performance.",
    imageUrl:
      "https://droip.com/wp-content/uploads/2025/03/dymanic-seo2-1.webp",
    linkTo: "#",
  },
];
