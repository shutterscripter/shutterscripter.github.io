import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedRoleBadge = () => {
  const roles = [
    "Full Stack Mobile Developer",
    "Flutter Developer",
    "Backend Enginner",
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
          className="absolute inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs uppercase tracking-wider text-accent-muted backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoleBadge;
