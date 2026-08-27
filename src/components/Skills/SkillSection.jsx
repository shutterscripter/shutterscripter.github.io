import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  SiAndroid,
  SiBootstrap,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiReact,
  SiXml,
} from "react-icons/si";
import {
  FiCloud,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiRefreshCw,
  FiServer,
  FiTerminal,
  FiWifi,
  FiZap,
} from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import SkillCard from "./SkillCard";

const SKILL_GROUPS = [
  {
    label: "Languages & runtimes",
    skills: [
      { icon: <FaJava />, name: "Java" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiGo />, name: "Go" },
      { icon: <SiDart />, name: "Dart" },
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <FiDatabase />, name: "SQL" },
    ],
  },
  {
    label: "Mobile & UI",
    skills: [
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <FiLayers />, name: "GetX" },
      { icon: <SiAndroid />, name: "Android" },
      { icon: <SiReact />, name: "React Native" },
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <FiZap />, name: "Fiber" },
      { icon: <FiServer />, name: "REST APIs" },
      { icon: <SiSocketdotio />, name: "WebSockets" },
    ],
  },
  {
    label: "Data & cloud",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <FiCloud />, name: "AWS" },
    ],
  },
  {
    label: "DevOps & tooling",
    skills: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiLinux />, name: "Linux" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithubactions />, name: "CI/CD" },
    ],
  },
];

export default function SkillSection() {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-24 border-b border-border py-24"
      initial={{ opacity: 0, y: 80, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-10 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-2xl font-bold tracking-tight"
        >
          Code : Skills
        </motion.h2>
      </div>

      <div className="flex flex-col gap-12 sm:gap-14">
        {SKILL_GROUPS.map((group, gi) => (
          <div key={group.label}>
            <h3 className="mb-4 border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-fg-muted">
              {group.label}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {group.skills.map((skill, si) => (
                <motion.div
                  key={`${group.label}-${skill.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-24px" }}
                  transition={{ delay: Math.min(si * 0.02, 0.2) + gi * 0.03 }}
                >
                  <SkillCard icon={skill.icon} name={skill.name} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
