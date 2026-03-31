import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 top-4 z-100 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated/90 text-fg shadow-lg backdrop-blur-md transition-colors hover:bg-surface-hover dark:bg-surface-muted/90 dark:hover:bg-surface-hover"
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
