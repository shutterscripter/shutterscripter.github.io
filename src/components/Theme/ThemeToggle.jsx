import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { flushSync } from "react-dom";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const handleThemeChange = (event) => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!document.startViewTransition || reducedMotion) {
      toggleTheme();
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => toggleTheme());
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.65, 0.01, 0.05, 0.99)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});
  };

  return (
    <motion.button
      type="button"
      onClick={handleThemeChange}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-[6.25rem] top-4 z-100 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated/90 text-fg shadow-lg backdrop-blur-md transition-[right,background-color] hover:bg-surface-hover sm:right-[7.75rem] dark:bg-surface-muted/90 dark:hover:bg-surface-hover"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <FiSun className="h-5 w-5" aria-hidden />
      ) : (
        <FiMoon className="h-5 w-5" aria-hidden />
      )}
    </motion.button>
  );
}
