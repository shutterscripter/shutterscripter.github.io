/** Shared project data for the home section and /projects page */
export const GITHUB_PROFILE_URL =
  "https://github.com/shutterscripter?tab=repositories";

export const PROJECTS = {
  mobile: [
    {
      title: "NewSummary - The News APP",
      description:
        "A dynamic platform delivering real-time news updates sourced from an open news API. Features intelligent summarization, search functionality, and offline capabilities.",
      tags: ["Flutter", "GetX", "API"],
      link: "https://github.com/shutterscripter/FlutterPress",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "GlassKey - Android Keyboard",
      description:
        "A custom Android keyboard designed to personalize the typing experience. Supports multiple key variations, special characters, and sound effects for keypress feedback.",
      tags: ["Android", "Java", "XML"],
      link: "https://github.com/shutterscripter/Custom_Android_Keyboard",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "DialTrack - Call Log Manager",
      description:
        "Manages and organizes call log history with features for automatic calling via CSV files. Includes advanced filtering and contact import capabilities.",
      tags: ["Flutter", "Firebase", "Dart"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2670&auto=format&fit=crop",
    },
  ],
  backend: [
    {
      title: "IoT Gateway Data Pipeline",
      description:
        "C services on embedded Linux collecting RS485 sensor data, with a Node.js layer and AWS backend for ingestion, storage, and remote monitoring.",
      tags: ["Node.js", "AWS", "C"],
      link: "https://github.com/shutterscripter?tab=repositories",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Manufacturing Test Automation (Qt)",
      description:
        "Desktop tooling built with Qt5 to automate UV manufacturing test workflows, serial device integration, and operator-friendly validation flows.",
      tags: ["Qt5", "C++", "Linux"],
      link: "https://github.com/shutterscripter?tab=repositories",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "NestJS Service Template",
      description:
        "Structured REST API template with validation, modular architecture, and deployment notes—useful as a base for product backends and integrations.",
      tags: ["NestJS", "TypeScript", "REST"],
      link: "https://github.com/shutterscripter?tab=repositories",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    },
  ],
};
