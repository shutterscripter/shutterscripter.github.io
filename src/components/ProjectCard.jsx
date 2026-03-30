import React from "react";
import { useRef } from "react";
import { useSpring } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { useMotionValue } from "framer-motion";

const ProjectCard = ({ title, description, tags, link, image }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set((x - centerX) / centerX);
      mouseY.set((y - centerY) / centerY);
    }
  };

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), {
    damping: 20,
    stiffness: 300,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), {
    damping: 20,
    stiffness: 300,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-surface-elevated transition-all hover:border-accent/50 dark:bg-surface-muted"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface-elevated via-surface-elevated/50 to-transparent dark:from-surface-muted dark:via-surface-muted/50" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-fg transition-colors group-hover:text-accent-muted">
            {title}
          </h3>
          {link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <SiGithub className="text-xl" />
            </a>
          )}
        </div>
        <p className="mb-6 text-sm leading-relaxed text-fg-muted">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-hover px-3 py-1 text-xs font-medium text-fg dark:bg-surface-muted dark:text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
