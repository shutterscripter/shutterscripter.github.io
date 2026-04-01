import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ProjectListItem from "./ProjectListItem";
import { HOME_PROJECTS } from "../../data/projects";

const TABS = [
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
];

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const list = HOME_PROJECTS[activeTab];

  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          Work : Projects
        </motion.h2>

        {/* One row on mobile: tabs + View all */}
        <div className="flex min-w-0 w-full flex-row items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-4 md:gap-6">
          <div
            className="inline-flex shrink-0 rounded-full border border-border bg-surface-elevated p-1 dark:bg-surface-muted"
            role="tablist"
            aria-label="Project category"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`projects-tab-${tab.id}`}
                  aria-controls={`projects-panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                    isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projectsTabIndicator"
                      className="absolute inset-0 rounded-full border border-accent/30 bg-accent/15"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/projects"
              className="flex shrink-0 items-center gap-1 text-xs text-accent-muted transition-colors hover:text-accent sm:gap-2 sm:text-sm"
            >
              <span className="whitespace-nowrap sm:hidden">View all</span>
              <span className="hidden whitespace-nowrap sm:inline">
                View all Projects
              </span>
              <FiArrowRight className="shrink-0" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          id={`projects-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`projects-tab-${activeTab}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="divide-y divide-border border-border"
        >
          {list.map((project) => (
            <ProjectListItem key={project.title} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;
