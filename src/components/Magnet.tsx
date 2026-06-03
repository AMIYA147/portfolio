import React, { useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface MagnetProps {
  children: React.ReactElement;
  range?: number; // Attraction radius in pixels
  strength?: number; // Strength of pull (higher means stronger pull)
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  range = 80,
  strength = 0.35,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      // Pull towards cursor
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      // Reset
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <motion.div style={{ x, y }}>{children}</motion.div>
    </div>
  );
};
