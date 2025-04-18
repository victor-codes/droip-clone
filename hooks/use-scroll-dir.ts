import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * React hook for tracking scroll position and direction using Framer Motion.
 *
 * @param options - Optional parameters:
 * - `throttle`: The time in milliseconds to throttle scroll event updates. Defaults to 0 (no throttling).
 * @returns An object containing:
 * - `y`: The current vertical scroll position as a number.
 * - `direction`: -1 for down, 0 for up.
 */

type ScrollState = {
  y: number;
  direction: -1 | 0;
};

export function useScrollDir(): ScrollState {
  const { scrollY } = useScroll();
  const [state, setState] = useState<ScrollState>({ y: 0, direction: 0 });

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    const isScrollingDown = current > previous;
    setState({
      y: Math.max(current, 0),
      direction: isScrollingDown ? -1 : 0,
    });
  });

  return state;
}
