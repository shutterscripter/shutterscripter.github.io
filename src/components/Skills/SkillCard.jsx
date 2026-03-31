import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import { useSpring } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { motion } from "framer-motion";

const SkillCard = ({ icon, name }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 300 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 300 });
  const idleLabelColor =
    theme === "dark" ? "rgb(161, 161, 170)" : "rgb(82, 82, 91)";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set((y - centerY) / 10);
    rotateY.set((centerX - x) / 10);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.1, y: -8 }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="flex h-[180px] w-[180px] cursor-pointer flex-col items-center justify-center rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/50 hover:bg-surface-hover dark:bg-surface-muted dark:hover:bg-surface-hover"
    >
      <motion.div
        className="mb-4 text-5xl text-fg-muted"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <motion.p
        className="text-center font-medium"
        animate={{
          color: isHovered ? "rgb(16, 185, 129)" : idleLabelColor,
        }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
};

export default SkillCard;
