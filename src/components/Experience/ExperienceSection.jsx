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
        className="text-4xl font-bold mb-16 text-center"
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
                role="Embedded Firmware Developer"
                company="Sunshine Iotronics Pvt.Ltd"
                date="Jun 2024"
                dateEnd="Present"
                achievements={[
                  "Built a QT5 desktop app to automate testing in the UV light manufacturing industry",
                  "Worked on the BSNL BharatNet Smart Gateway, customizing Yocto Linux and developing C applications for RS485 data collection with a Node.js AWS backend",
                  "Currently focusing on embedded systems, working with the Renesas RA series, MindMotion MM320001A1TC, and developing IoT applications",
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
