import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import SkillCard from "./SkillCard";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FiCloud } from "react-icons/fi";
const SkillSection = () => {
  const allSkills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiAndroid />, name: "Android" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FiCloud />, name: "AWS" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiNodedotjs />, name: "NodeJS" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <SiGit />, name: "Git" },
  ];

  // Duplicate skills for infinite scroll
  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isPaused) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (carousel) {
        scrollPosition += scrollSpeed;
        const maxScroll = carousel.scrollWidth / 3; // Since we duplicated 3 times

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        carousel.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className="scroll-mt-24 overflow-hidden border-b border-border py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Code : Skills
      </motion.h2>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border-strong bg-surface/90 p-3 backdrop-blur-sm transition-all hover:scale-110 hover:bg-surface-elevated dark:bg-surface-muted/90 dark:hover:bg-surface-hover"
          aria-label="Previous skills"
        >
          <FiChevronLeft className="text-2xl text-fg" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border-strong bg-surface/90 p-3 backdrop-blur-sm transition-all hover:scale-110 hover:bg-surface-elevated dark:bg-surface-muted/90 dark:hover:bg-surface-hover"
          aria-label="Next skills"
        >
          <FiChevronRight className="text-2xl text-fg" />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll hide-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="shrink-0"
            >
              <SkillCard icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
