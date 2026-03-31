import React from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiCode,
  FiBriefcase,
  FiFileText,
  FiHome,
} from "react-icons/fi";
import { useRef, useState, useEffect, useCallback } from "react";

const SECTION_IDS = ["skills", "projects", "articles", "contact"];

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const updateActiveFromScroll = useCallback((scrollPosition) => {
    if (isScrollingRef.current) {
      return;
    }

    let next = "home";
    if (scrollPosition >= 100) {
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (scrollPosition >= sectionTop) {
            next = id;
            break;
          }
        }
      }
    }

    setActiveSection((prev) => (prev === next ? prev : next));
  }, []);

  // Lenis drives scroll — use animatedScroll (window.scrollY lags behind smooth scroll)
  useLenis((lenis) => {
    updateActiveFromScroll(lenis.animatedScroll);
  });

  useEffect(() => {
    updateActiveFromScroll(window.scrollY);
  }, [updateActiveFromScroll]);

  const scrollToSection = (sectionId) => {
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // Offset for navbar
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Re-enable scroll detection after scrolling completes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 550);
  };

  const navItems = [
    {
      name: "Home",
      id: "home",
      icon: <FiHome className="h-4 w-4" />,
      onClick: () => scrollToSection("home"),
    },
    {
      name: "Projects",
      id: "projects",
      icon: <FiBriefcase className="h-4 w-4" />,
      onClick: () => scrollToSection("projects"),
    },
    {
      name: "Skills",
      id: "skills",
      icon: <FiCode className="h-4 w-4" />,
      onClick: () => scrollToSection("skills"),
    },

    {
      name: "Articles",
      id: "articles",
      icon: <FiFileText className="h-4 w-4" />,
      onClick: () => scrollToSection("articles"),
    },
    {
      name: "Contact",
      id: "contact",
      icon: <FiMail className="h-4 w-4" />,
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10002"
    >
      <div className="flex items-center gap-1 rounded-full border border-border bg-surface-elevated/95 px-2 py-2 shadow-2xl backdrop-blur-xl dark:bg-surface-muted/95">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.name}
              onClick={item.onClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className={isActive ? "text-accent-muted" : ""}>
                {item.icon}
              </span>
              <span
                className={`hidden text-xs font-medium sm:block ${
                  isActive ? "text-accent-muted" : "text-fg-muted"
                }`}
              >
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full border border-accent/20 bg-accent/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNav;
