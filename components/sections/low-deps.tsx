import { LOW_DEPS_DATA } from "@/contents/home";
import { cx } from "@/lib";
import { LowDepsItemProps } from "@/types/home";

export const LowDeps = () => {
  return (
    <section className="section">
      <div className="wrapper space-y-15 md:space-y-18">
        <div>
          <h2 className="section-title-sm">
            Low <br /> third-party <br /> dependencies
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 lap:grid-cols-3 gap-[1px]">
          {LOW_DEPS_DATA.map(({ id, ...props }) => (
            <LowDepsItem key={id} {...props} />
          ))}

          <div className="absolute w-[455px] h-[455px] transform -translate-1/2 left-1/2 top-1/2  bg-royal blur-[144px] opacity-40" />
        </div>
      </div>
    </section>
  );
};

const orderGrid: Record<number, string> = {
  1: "col-span-1 md:-order-1 lap:order-none",
  2: "-order-1 md:order-none md:col-span-2",
  3: "md:-order-1 lap:order-none",
};

const LowDepsItem = ({
  type,
  title,
  description,
  mediaUrl,
  icon: Icon,
  column,
}: Omit<LowDepsItemProps, "id">) => {
  if (type === "video") {
    return (
      <div
        className={cx(
          "relative aspect-[1.9] w-full h-full pl-11 rounded-18 overflow-clip  bg-white z-[1]",
          orderGrid[column]
        )}
      >
        <div className="h-full pointer-events-none select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-contain lap:object-contain w-full h-full"
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cx(
        "relative flex flex-col gap-y-8 items-start justify-end gap-4 bg-white rounded-18 p-6 md:p-8 lap:p-12 z-[1]",
        orderGrid[column]
      )}
    >
      <div className="relative w-[32px] h-[32px]">{Icon && <Icon />}</div>
      <div className="space-y-4.5">
        <h3 className="text-2xl leading-[1.2] font-semibold">{title}</h3>
        <p className="text-lg leading-[1.4]">{description}</p>
      </div>
    </div>
  );
};
