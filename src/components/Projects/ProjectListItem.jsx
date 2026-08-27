import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

/**
 * Plain project row: title + Visit link, description, tech.
 */
export default function ProjectListItem({
  title,
  description,
  tags,
  link,
  index = 0,
}) {
  const hasLink = Boolean(link && link !== "#");

  return (
    <motion.article
      className="py-8"
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-row flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold text-fg">{title}</h3>
        {hasLink ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-accent-muted transition-colors hover:border-accent/40 hover:bg-surface-hover hover:text-accent dark:bg-surface-muted"
          >
            <FiExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        ) : (
          <span className="shrink-0 text-xs font-normal text-fg-subtle">
            No public link
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
        {description}
      </p>
      <p className="mt-3 text-sm">
        <span className="text-fg-subtle">Tech: </span>
        <span className="text-fg">{tags.join(" · ")}</span>
      </p>
    </motion.article>
  );
}
