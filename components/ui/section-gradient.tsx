"use client";

// export const SectionHeader = ({ children, title }: SectionHeaderProps) => {
//   const id = useId();
//   const sectionRef = useRef<HTMLHeadingElement>(null);

//   const isInView = useInView(sectionRef, {
//     once: true,
//   });

//   return (
//     <div ref={sectionRef}>
//       <h2 id="db-heading" className="section-title text-black">
//         {title}
//       </h2>

//       <div
//         data-anim-ctrl={isInView}
//         style={
//           {
//             "--ball-offset": "-32px",
//           } as React.CSSProperties
//         }
//       >
//         <SectionGradient id="db-desc">{children}</SectionGradient>
//       </div>
//     </div>
//   );
// };

export const SectionGradient = ({
  children,
  sectionRef,
  ...props
}: SectionGradientProps) => {
  return (
    <div className="grid grid-cols-[1fr_minmax(232px,426px)] gap-x-6 mt-6 mb-16 lap:mb-24 overflow-hidden">
      <div className="relative flex justify-end">
        <div className="section-grad-line" />
        <div className="relative left-[15px]">
          <div className="sec-grad-hl" />
          <div className="sec-grad-ball" />
        </div>
      </div>
      <div>
        <p {...props} className="text-lg md:text-2xl leading-[1.3]">
          {children}
        </p>
      </div>
    </div>
  );
};

type SectionGradientProps = React.ComponentPropsWithoutRef<"p"> & {
  children: React.ReactNode;
  sectionRef?: React.Ref<HTMLElement>;
};

// type SectionHeaderProps = {
//   children: React.ReactNode;
//   title: React.ReactNode;
// };
