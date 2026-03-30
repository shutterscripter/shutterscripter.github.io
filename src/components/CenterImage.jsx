import React from "react";
import { useScroll } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import { SECTION_HEIGHT } from "../constants/ScreenUtils";
import { motion } from "framer-motion";
import InteractiveGrid from "./InteractiveGrid";
import AnimatedRoleBadge from "./AnimatedRoleBadge";

const CenterImage = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 300],
    [1, 0],
  );

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX / width);
    mouseY.set(clientY / height);
  };
  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ opacity }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 ">
        <InteractiveGrid mouseX={mouseX} mouseY={mouseY} />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 pb-32">
        <AnimatedRoleBadge />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 px-4 text-5xl font-black leading-[0.9] tracking-tighter text-fg md:text-7xl lg:text-9xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="">Jayesh Shinde</span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-start justify-center gap-4 mb-8 max-w-4xl px-4"
        >
          <div>
            <p className="text-sm font-light leading-relaxed text-fg-muted md:text-base lg:text-lg">
              Crafting embedded solutions and mobile applications that bridge
              hardware and software. Expert in Flutter, Android, and embedded
              systems with a passion for clean code and scalable architecture.
            </p>
          </div>
        </motion.div>

        {/* <motion.button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative mt-4 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-secondary px-8 py-4 font-bold text-white shadow-lg shadow-accent/50 transition-all"
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-muted to-accent-secondary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button> */}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-40 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-fg-muted">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border-strong p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-fg-subtle"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CenterImage;
