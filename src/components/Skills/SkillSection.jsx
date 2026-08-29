import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "Mobile",
    skills: [
      "Flutter",
      "Dart",
      "Android SDK",
      "Kotlin",
      "Jetpack Compose",
      "React Native",
      "SwiftUI",
      "GetX",
      "Riverpod",
      "BLoC",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Go",
      "REST APIs",
      "WebSockets",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    label: "Cloud",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "Linux",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    label: "Data",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Firebase Firestore",
      "Realtime Database",
    ],
  },
];

export default function SkillSection() {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 80, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-12 flex flex-col gap-3 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-2xl font-bold tracking-tight"
        >
          Code : Skills
        </motion.h2>
      </div>

      <div className="border-t border-border">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.55,
              delay: groupIndex * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-6 border-b border-border py-8 last:border-b-0 md:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] md:gap-12 md:py-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg">
                0{groupIndex + 1} / {group.label}
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-x-0 gap-y-3">
              {group.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="font-terminal flex items-center text-sm font-medium tracking-tight text-fg sm:text-base"
                >
                  <span>{skill}</span>
                  {skillIndex < group.skills.length - 1 ? (
                    <span className="mx-3 text-fg-subtle" aria-hidden>
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
