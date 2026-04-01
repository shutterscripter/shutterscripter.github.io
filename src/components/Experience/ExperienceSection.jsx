import React from "react";
import { motion } from "framer-motion";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import TimelineItem from "./TimelineItem";

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-b border-border py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 text-center text-2xl font-bold"
      >
        Experience & Education
      </motion.h2>

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
                role="Software Engineer"
                company="Sunshine Iotronics LLP"
                companyUrl="https://sunshineiot.in/"
                location="On-site, Pune"
                date="Oct 2024"
                dateEnd="Present"
                achievements={[
                  "Designed and built REST APIs using Node.js (Express) and MongoDB for Io-Net, a cloud-connected IoT platform deployed on Google Play Store for remote device monitoring and control.",
                  "Implemented an atomic credit deduction system with MongoDB transactions.",
                  "Solely developed the backend infrastructure for the BharatNet project (BSNL), building scalable APIs and managing Linux-based deployments and CI/CD pipelines.",
                ]}
              />
              <TimelineItem
                role="Flutter Developer Intern"
                company="OyeBusy Technologies Pvt.Ltd"
                date="Dec 2023"
                dateEnd="May 2024"
                achievements={[
                  "Developed two Flutter apps simultaneously, enhancing the OyeBusy-Partner app by Implementing State Management",
                  "Hands on experience with tech stack like Flutter, Google Firebase, Dart, GetX, API, Figma, etc.",
                ]}
              />
              <TimelineItem
                role="Android App Developer Intern"
                company="Rudraksha Foundation"
                date="Jul 2022"
                dateEnd="Aug 2022"
                achievements={[
                  "Worked on the android app, Implemented Responsive designs using XML",
                  "Hands on experience with tech stack like Android, XML, Java, Google Firebase, Figma, etc.",
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
                role="BE in Computer Engineering"
                company="Government College of Engineering and Research"
                date="2022"
                dateEnd="2025"
                achievements={["CGPA: 9.13"]}
              />
              <TimelineItem
                role="Diploma in Computer Engineering"
                company="Cusrow Wadia Institute of Technology"
                date="2019"
                dateEnd="2022"
                achievements={["Percentage: 97.53%"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
