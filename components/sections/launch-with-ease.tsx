import { RocketIcon } from "../svgs/rocket-icon";
import { CarouselGrid } from "../ui/carousel-grid";
import { MarqueeContainer } from "../ui/marquee-container";

export const LaunchWithEase = () => {
  return (
    <section className="section bg-black">
      <div>
        <div className="wrapper">
          <h2 className="section-title-sm text-white max-w-[600px] lap:max-w-[620px] lap:ml-auto">
            Jumpstart your business with beautifully crafted themes and sections
          </h2>
        </div>

        <div className="relative mt-12 lap:mt-0 min-h-[660px] ">
          <div className="wrapper">
            <div className="relative grid max-lap:max-w-[600px] gap-y-4.5 lap:gap-y-8 max-[lap]:mb-10 lap:min-w-[320px] lap:w-[28%] mb-10 lap:mb-0 z-10">
              <RocketIcon />
              <p className="text-lg tab:text-xl md:text-2xl -tracking-[0.3px] leading-[1.2] md:-tracking-[0.48px] text-white lap:max-w-[620px]">
                Launch with ease using stunning, ready-to-use themes & sections
                designed for every need.
              </p>
            </div>
          </div>

          <div className="lap:absolute lap:top-24 lap:right-0 grid gap-0.5 lap:w-[65%] launch-before launch-after ">
            <MarqueeContainer>
              <div className="flex gap-1">
                <CarouselGrid
                  list={firstCarousel}
                  imgClassName="w-[420px] h-[236px]"
                />
                <CarouselGrid
                  list={firstCarousel}
                  imgClassName="w-[420px] h-[236px]"
                />
              </div>
            </MarqueeContainer>

            <MarqueeContainer direction="right">
              <div className="flex gap-1">
                <CarouselGrid
                  list={secondCarousel}
                  imgClassName="w-[320px] h-[180px]"
                />
                <CarouselGrid
                  list={secondCarousel}
                  imgClassName="w-[320px] h-[180px]"
                />
              </div>
            </MarqueeContainer>

            <MarqueeContainer>
              <div className="flex gap-1">
                <CarouselGrid
                  list={thirdCarousel}
                  imgClassName="w-[240px] h-[135px]"
                />
                <CarouselGrid
                  list={thirdCarousel}
                  imgClassName="w-[240px] h-[135px]"
                />
              </div>
            </MarqueeContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const firstCarousel = [
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-1.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-10.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-3.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-2.webp",
];

const secondCarousel = [
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-8.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-4.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-7.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template1-1.webp",
];

const thirdCarousel = [
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-9.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-11.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-6.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-12.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-12-1.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template4-1.webp",
  "https://droip.com/wp-content/uploads/2025/03/Template8.webp",
];
