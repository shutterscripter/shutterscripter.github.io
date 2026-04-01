import { motion } from "framer-motion";

/**
 * Compact skill tile — subtle hover, no aggressive 3D tilt.
 */
export default function SkillCard({ icon, name }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="group flex min-h-22 flex-col items-center justify-center gap-2.5 rounded-xl border border-border bg-surface-elevated/80 px-3 py-4 text-center shadow-sm transition-colors hover:border-accent/35 hover:bg-surface-hover hover:shadow-md dark:bg-surface-muted/60 dark:hover:bg-surface-hover"
    >
      <div className="text-3xl text-fg-muted transition-colors group-hover:text-accent md:text-[2rem]">
        {icon}
      </div>
      <p className="text-xs font-medium leading-tight text-fg-muted transition-colors group-hover:text-fg sm:text-sm">
        {name}
      </p>
    </motion.div>
  );
}
