import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ role, company, date, dateEnd, achievements }) => {
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
        whileHover={{ scale: 1.5, backgroundColor: "#10b981" }}
        transition={{ type: "spring", stiffness: 400 }}
      />

      {/* Content */}
      <div className="pb-2">
        {/* Role Title */}
        <h3 className="mb-1 text-xl font-bold text-fg transition-colors group-hover:text-accent-muted">
          {role}
        </h3>

        {/* Company */}
        <p className="mb-3 text-sm text-fg-muted">{company}</p>

        {/* Dates - Highlighted */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-accent-muted">{date}</span>
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
