import React from "react";
import { useSpring } from "framer-motion";
import { useTransform } from "framer-motion";
import { useMotionTemplate } from "framer-motion";
import { motion } from "framer-motion";
const InteractiveGrid = ({ mouseX, mouseY }) => {
  const gridX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
    damping: 25,
    stiffness: 200,
  });
  const gridY = useSpring(useTransform(mouseY, [0, 1], [-15, 15]), {
    damping: 25,
    stiffness: 200,
  });

  const gridTransform = useMotionTemplate`translate(${gridX}px, ${gridY}px)`;

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        transform: gridTransform,
        backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
        backgroundSize: "3rem 3rem",
      }}
    />
  );
};

export default InteractiveGrid;
