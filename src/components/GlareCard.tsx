import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlareCard: React.FC<GlareCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Springs for smooth movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const glareX = useSpring(50, springConfig);
  const glareY = useSpring(50, springConfig);
  const glareOpacity = useSpring(0, springConfig);

  // Transform rotation values to css strings
  const transform = useTransform(
    [rotateX, rotateY],
    ([rx, ry]) => `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to the card's center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Max rotation in degrees
    const maxRotation = 12;
    const rX = -(mouseY / (height / 2)) * maxRotation;
    const rY = (mouseX / (width / 2)) * maxRotation;

    rotateX.set(rX);
    rotateY.set(rY);

    // Glare coordinates (percentage)
    const glPercentX = ((e.clientX - rect.left) / width) * 100;
    const glPercentY = ((e.clientY - rect.top) / height) * 100;

    glareX.set(glPercentX);
    glareY.set(glPercentY);
    glareOpacity.set(0.15); // Glare brightness
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl glass-panel overflow-hidden transition-all duration-300 ${
        isHovered ? "shadow-cyber-glow border-cyber-blue/30" : ""
      } ${className}`}
    >
      {/* Glare Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(circle 300px at ${x}% ${y}%, rgba(0, 240, 255, 0.4), transparent 80%)`
          ),
          opacity: glareOpacity,
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Glow shadow inside */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.03] to-transparent z-0" />

      {/* Children content wrapper */}
      <div className="relative z-20 h-full w-full">{children}</div>
    </motion.div>
  );
};
