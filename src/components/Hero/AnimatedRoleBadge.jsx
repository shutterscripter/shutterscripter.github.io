import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedRoleBadge = () => {
  const roles = [
    "Software Developer",
    "Flutter Developer",
    "Backend Engineer",
    "Devops Enthusiast",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative h-10 md:h-8 flex items-center justify-center min-w-[150px] md:min-w-[300px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inline-block rounded-full border border-border-strong bg-surface-elevated/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-fg-muted backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoleBadge;
