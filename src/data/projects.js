/** `PROJECTS` = full list on `/projects`. `HOME_PROJECTS` = home section (featured mobile + same backend). */
export const GITHUB_PROFILE_URL =
  "https://github.com/shutterscripter?tab=repositories";

export const PROJECTS = {
  mobile: [
    {
      title: "Io-Net",
      description:
        "A cloud-connected IoT platform for real-time monitoring, remote control, scheduling, and multi-user device sharing, with PIN-based onboarding and atomic credit deductions.",
      tags: ["Flutter", "Express.js", "MongoDB", "IoT"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "USB-Link",
      description:
        "A Flutter diagnostics tool for live USB CDC communication with embedded devices, including firmware configuration, alarm tracking, health monitoring, and Excel telemetry exports.",
      tags: ["Flutter", "USB CDC", "Embedded", "Excel"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "DialTrack",
      description:
        "A Flutter telecom analytics application with call-pattern insights, interactive activity breakdowns, and CSV-based bulk dialing workflows.",
      tags: ["Flutter", "GetX", "Firebase", "CSV"],
      link: GITHUB_PROFILE_URL,
    },
  ],
  backend: [
    {
      title: "ERP System with RAG Assistant",
      description:
        "An ERP platform for employee, inventory, and operational workflows with real-time stock tracking and reporting. Its RAG assistant processes documents and returns contextual answers through a semantic retrieval pipeline.",
      tags: ["Node.js", "Ollama", "ChromaDB", "SQL", "Flutter"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "Io-Net",
      description:
        "A cloud-connected IoT platform for real-time monitoring, remote control, scheduling, and multi-user device sharing. Includes PIN-based onboarding and atomic daily credit deductions for reliable service management.",
      tags: ["Express.js", "MongoDB", "IoT", "Flutter"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "USB-Link",
      description:
        "A Flutter diagnostics tool for real-time USB CDC communication with embedded devices. It monitors live parameters, firmware settings, alarms, and hardware health, with Excel exports for telemetry and debugging.",
      tags: ["Flutter", "USB CDC", "Embedded", "Excel"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "DialTrack",
      description:
        "A telecom analytics and call-management app with repeated-caller insights, duration trends, interactive activity breakdowns, and CSV-powered bulk dialing workflows.",
      tags: ["Flutter", "GetX", "Firebase", "CSV"],
      link: GITHUB_PROFILE_URL,
    },
  ],
};

/** Curated list for the home page projects section. Mobile tab shows featured work; Backend matches /projects. */
export const HOME_PROJECTS = {
  mobile: [
    {
      title: "Io-Net",
      description:
        "A cloud-connected IoT platform for real-time monitoring, remote control, scheduling, and multi-user device sharing. Built with PIN-based onboarding and reliable atomic daily credit deductions.",
      tags: ["Express.js", "MongoDB", "IoT"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "USB-Link",
      description:
        "A Flutter hardware interface for real-time USB CDC communication. It surfaces device parameters, firmware settings, alarms, and system health, with Excel log exports for diagnostics and analysis.",
      tags: ["Flutter", "USB CDC", "Embedded"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "DialTrack",
      description:
        "A telecom analytics and automation tool that turns call logs into repeated-caller, duration, and activity insights, with interactive breakdowns and CSV-based bulk dialing.",
      tags: ["Flutter", "GetX", "Firebase"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "News Summarization App",
      description:
        "Built a Flutter app with GetX state management that fetches news from the Open News API and custom API endpoints, integrating a pre-trained NLP model for automatic news summarization.",
      tags: ["Flutter", "GetX", "NLP"],
      link: "https://github.com/shutterscripter/FlutterPress",
    },
  ],
  backend: PROJECTS.backend,
};
