import { FiExternalLink } from "react-icons/fi";

/**
 * Plain project row: name, description, tech, link (no card UI).
 */
export default function ProjectListItem({ title, description, tags, link }) {
  const hasLink = Boolean(link && link !== "#");

  return (
    <article className="py-8">
      <h3 className="text-lg font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
        {description}
      </p>
      <p className="mt-3 text-sm">
        <span className="text-fg-subtle">Tech: </span>
        <span className="text-fg">{tags.join(" · ")}</span>
      </p>
      <div className="mt-3">
        {hasLink ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 break-all text-sm text-accent-muted transition-colors hover:text-accent"
          >
            {link}
            <FiExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </a>
        ) : (
          <span className="text-sm text-fg-subtle">No public link</span>
        )}
      </div>
    </article>
  );
}
