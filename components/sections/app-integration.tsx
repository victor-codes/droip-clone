import { APP_INTEGRATION_DATA } from "@/contents/home";
import { SectionGradient } from "../ui/section-gradient";
import Image from "next/image";

export const AppIntegration = () => {
  return (
    //todo: might need to create a class for the section styling
    <section className="section">
      <div className="wrapper">
        <div>
          <h2 className="section-title text-black">
            App <br /> integration
          </h2>

          <SectionGradient>
            Connect your go-to apps effortlessly within the builder for a smooth
            and uninterrupted workflow.
          </SectionGradient>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-[1px] app-tile">
          {APP_INTEGRATION_DATA.map((Icon, index) => {
            // Check if the icon is a string (URL) or a React component
            if (typeof Icon === "string") {
              return (
                <AppTileItem key={index}>
                  <Image
                    src={Icon}
                    alt=""
                    fill
                    className="object-contain rounded-xl"
                  />
                </AppTileItem>
              );
            }

            return (
              <AppTileItem key={index}>
                <Icon />
              </AppTileItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

type AppTileItemProps = {
  children: React.ReactNode;
};
const AppTileItem = ({ children }: AppTileItemProps) => {
  return (
    <div
      className="group flex items-center app-tile-item justify-center transition-[background-color,filter] ease-initial duration-400 h-16 tab:h-20 md:h-[100px] lap:h-[110px] bg-royal-100 hover:bg-royal-200 rounded-18"
      style={{
        transitionDuration: "1000ms, 400ms",
      }}
    >
      <div className="relative group-hover:scale-130 transition-transform duration-400 ease-initial w-[30px] h-[30px] md:w-[36px] md:h-[36px] lap:w-[48px] lap:h-[48px] ">
        {children}
      </div>
    </div>
  );
};
