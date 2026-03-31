import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import ProjectListItem from "../components/Projects/ProjectListItem";
import { GITHUB_PROFILE_URL, PROJECTS } from "../data/projects";

const TABS = [
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
];

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("mobile");
  const list = PROJECTS[activeTab];

  return (
    <div className="min-h-screen bg-surface text-fg">
      <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <FiArrowLeft className="h-4 w-4" aria-hidden />
            Back to portfolio
          </Link>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:bg-surface-hover dark:bg-surface-muted"
          >
            <SiGithub className="h-4 w-4" aria-hidden />
            Visit GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">All projects</h1>
          <p className="mt-2 text-fg-muted">
            Name, summary, stack, and repo link. For more repos, use GitHub.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div
              className="inline-flex w-fit rounded-full border border-border bg-surface-elevated p-1 dark:bg-surface-muted"
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
                    id={`all-projects-tab-${tab.id}`}
                    aria-controls={`all-projects-panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="projectsPageTabIndicator"
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
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`all-projects-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`all-projects-tab-${activeTab}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-10 divide-y divide-border border-border"
          >
            {list.map((project) => (
              <ProjectListItem
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
