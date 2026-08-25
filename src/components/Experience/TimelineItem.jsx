import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const TimelineItem = ({
  role,
  company,
  companyUrl,
  location,
  date,
  dateEnd,
  achievements,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative pl-12 group"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-[-4px] z-10 h-3 w-3 rounded-full border-2 border-surface bg-accent-muted"
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400 }}
      />

      {/* Content */}
      <div className="pb-2">
        {/* Role Title */}
        <h3 className="mb-1 text-xl font-bold text-fg transition-colors group-hover:text-accent-muted">
          {role}
        </h3>

        {/* Company + optional location */}
        <div className="mb-3 space-y-1">
          <p className="text-sm text-fg-muted">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-fg transition-colors hover:text-accent sm:gap-2"
              >
                {company}
                <FiExternalLink
                  className="h-3.5 w-3.5 shrink-0 text-fg-subtle"
                  aria-hidden
                />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ) : (
              company
            )}
          </p>
          {location ? (
            <p className="text-xs text-fg-subtle">{location}</p>
          ) : null}
        </div>

        {/* Dates - Highlighted */}
        <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-sm font-medium tabular-nums text-accent-muted">
            {date}
          </span>
          <span className="text-fg-subtle">—</span>
          <span className="text-sm font-medium text-accent-muted">
            {dateEnd}
          </span>
        </div>

        {/* Achievements/Bullet Points */}
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 text-sm leading-relaxed text-fg-muted"
            >
              <span className="mt-1.5 text-accent-muted">▸</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
