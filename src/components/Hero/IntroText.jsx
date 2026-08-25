import React from "react";
import { useScroll } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import { SECTION_HEIGHT } from "../../constants/ScreenUtils";
import { motion } from "framer-motion";
import InteractiveGrid from "./InteractiveGrid";
import AnimatedRoleBadge from "./AnimatedRoleBadge";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import resumeUrl from "../../assets/Jayesh_Shinde_BE.pdf";

const IntroText = () => {
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

      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 pb-32 text-center">
        <AnimatedRoleBadge />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 px-4 text-6xl font-black leading-[0.84] tracking-[-0.07em] text-fg md:text-8xl lg:text-[8.5rem]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span>Jayesh</span>
          <span className="block text-fg-muted">Shinde.</span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-7 flex max-w-2xl items-start justify-center gap-4 px-4"
        >
          <div>
            <p className="text-sm font-light leading-relaxed text-fg-muted md:text-base lg:text-lg">
              I build production Flutter apps, backend platforms, and connected
              IoT systems from device communication to cloud deployment.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-surface transition-transform hover:-translate-y-0.5"
          >
            View résumé <FiDownload aria-hidden />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-5 py-3 text-sm font-semibold text-fg backdrop-blur-sm transition-colors hover:bg-surface-elevated"
          >
            Selected work <FiArrowDownRight aria-hidden />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-fg-subtle"
        >
          <span>2+ years</span><span aria-hidden>·</span><span>3+ production apps</span><span aria-hidden>·</span><span>Pune, India</span>
        </motion.div>

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

export default IntroText;
