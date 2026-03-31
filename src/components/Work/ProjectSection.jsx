import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-border py-24"
    >
      <div className="mb-12 flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Work : Projects
        </motion.h2>
        <motion.a
          href="https://github.com/shutterscripter?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-accent-muted transition-colors hover:text-accent"
        >
          View all Projects <FiArrowRight />
        </motion.a>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="NewSummary - The News APP"
          description="A dynamic platform delivering real-time news updates sourced from an open news API. Features intelligent summarization, search functionality, and offline capabilities."
          tags={["Flutter", "GetX", "API"]}
          link="https://github.com/shutterscripter/FlutterPress"
          image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop"
        />
        <ProjectCard
          title="GlassKey - Android Keyboard"
          description="A custom Android keyboard designed to personalize the typing experience. Supports multiple key variations, special characters, and sound effects for keypress feedback."
          tags={["Android", "Java", "XML"]}
          link="https://github.com/shutterscripter/Custom_Android_Keyboard"
          image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
        />
        <ProjectCard
          title="DialTrack - Call Log Manager"
          description="Manages and organizes call log history with features for automatic calling via CSV files. Includes advanced filtering and contact import capabilities."
          tags={["Flutter", "Firebase", "Dart"]}
          link="#"
          image="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2670&auto=format&fit=crop"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
