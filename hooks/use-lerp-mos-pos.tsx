import { useEffect, useRef, useState } from "react";

export const useLerpMousePosition = (lerpFactor = 0.1) => {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [lerped, setLerped] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setTarget({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  useEffect(() => {
    const animate = () => {
      setLerped((prev) => {
        const x = prev.x + (target.x - prev.x) * lerpFactor;
        const y = prev.y + (target.y - prev.y) * lerpFactor;
        return { x, y };
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, [target, lerpFactor]);

  return { lerped, onMouseMove, setTarget, setLerped };
};
