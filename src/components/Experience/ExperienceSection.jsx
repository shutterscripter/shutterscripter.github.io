import React from "react";
import { motion } from "framer-motion";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import TimelineItem from "./TimelineItem";

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-24 border-b border-border py-24"
      initial={{ opacity: 0, y: 80, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 text-center text-2xl font-bold"
      >
        Experience & Education
      </motion.h2> */}

      <div className="max-w-5xl mx-auto">
        {/* Experience */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12 flex items-center gap-3 text-2xl font-semibold text-accent-muted"
          >
            <MdOutlineWorkOutline className="text-2xl" />
            Experience
          </motion.h3>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-linear-to-b from-accent/50 via-accent-secondary/50 to-accent/50" />

            <div className="space-y-12">
              <TimelineItem
                role="Flutter Developer"
                company="MultiFit Wellness Pvt. Ltd."
                companyUrl="https://multifit.in/"
                location="On-site, Pune"
                date="Jun 2026"
                dateEnd="Present"
                achievements={[
                  "Developing a corporate wellness application in Flutter to help organizations deliver accessible, engaging wellness experiences to employees.",
                  "Building and refining production-ready mobile features with a focus on reliable performance and a smooth user experience.",
                ]}
              />
              <TimelineItem
                role="Software Engineer"
                company="Sunshine Iotronics LLP"
                companyUrl="https://sunshineiot.in/"
                location="On-site, Pune"
                date="Nov 2024"
                dateEnd="Jun 2026"
                achievements={[
                  "Architected and shipped 3+ production Flutter applications, integrating REST APIs, Firebase, and USB CDC, BLE, Wi-Fi, and UART communication for real-time IoT monitoring.",
                  "Built an ERP platform with Node.js and a RAG assistant using Ollama, ChromaDB, and SQL for contextual document retrieval.",
                  "Engineered a Go, Redis, and PostgreSQL WebSocket microservice architecture for reliable real-time events and zero-downtime schema evolution.",
                  "Developed firmware for telecom-grade embedded systems with sensor integration, real-time control, and industry communication protocols.",
                ]}
              />
              <TimelineItem
                role="Flutter Developer Intern"
                company="OyeBusy Technologies Pvt.Ltd"
                location="Remote, Gurugram"
                date="Dec 2023"
                dateEnd="May 2024"
                achievements={[
                  "Shipped customer-facing features for a production Flutter app, contributing to a Google Play rating increase from 3.5 to 4.1.",
                  "Optimized REST API integrations to improve performance, data consistency, and client-server communication.",
                  "Supported Agile releases, production fixes, and Play Store deployments while maintaining application stability.",
                ]}
              />
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12 flex items-center gap-3 text-2xl font-semibold text-accent-muted"
          >
            <FaGraduationCap className="text-2xl" />
            Education
          </motion.h3>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-linear-to-b from-accent/50 via-accent-secondary/50 to-accent/50" />

            <div className="space-y-12">
              <TimelineItem
                role="BE in Computer Science"
                company="Government College of Engineering and Research, Avasari"
                date="2022"
                dateEnd="2025"
                achievements={["CGPA: 8.62"]}
              />
              <TimelineItem
                role="Diploma in Computer Engineering"
                company="Cusrow Wadia Institute of Technology"
                date="2019"
                dateEnd="2022"
                achievements={["Percentage: 92.94%"]}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
