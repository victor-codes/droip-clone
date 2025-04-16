"use client";
import React, { useEffect, useRef, useState } from "react";

interface MarqueeContainerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

// todo: change direction to use -ve | +ve values
export const MarqueeContainer = ({
  children,
  speed = 75,
  direction = "left",
}: MarqueeContainerProps) => {
  const [duration, setDuration] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  /* a watered down version of Marquee, but gets the job done,
     content doesn't resize (on mobile or desktop) or added on the fly,
     there's no need to check for width changes really
  */
  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.getBoundingClientRect().width;
      setDuration(marqueeWidth / speed);
    }
  }, [speed]);

  const resolvedDir = direction === "left" ? "normal" : "reverse";

  // js disabled safe
  const marqueeStyle = {
    "--duration": `${duration > 0 ? duration : 20}s`,
    "--direction": resolvedDir,
  } as React.CSSProperties;

  const marqueeContent = (
    <div className="launch-marquee" ref={marqueeRef}>
      {children}
    </div>
  );

  return (
    <div className="flex w-full overflow-hidden">
      <div style={marqueeStyle}>{marqueeContent}</div>
      <div style={marqueeStyle}>{marqueeContent}</div>
    </div>
  );
};
