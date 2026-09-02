/** `PROJECTS` = full list on `/projects`. `HOME_PROJECTS` = home section (featured mobile + same backend). */
export const GITHUB_PROFILE_URL =
  "https://github.com/shutterscripter?tab=repositories";

export const PROJECTS = {
  mobile: [
    {
      title: "Drawably Flutter",
      description:
        "Published a Flutter UI library for animated hand-drawn controls and decorations. Its deterministic seeded sketches gently boil between three cached frames for a lively, consistent visual effect.",
      tags: ["Flutter", "Dart", "CustomPainter", "Animation"],
      link: "https://pub.dev/packages/drawably_flutter",
      badge: "Package",
    },
    {
      title: "Data Peek",
      description:
        "Contributed UI improvements to a cross-platform SQL client supporting PostgreSQL, MySQL, Microsoft SQL Server, and SQLite.",
      tags: ["Electron", "React", "TypeScript", "TanStack"],
      link: "https://github.com/Rohithgilla12/data-peek",
      badge: "Open Source",
    },
    {
      title: "ERP System with RAG-based AI Assistant",
      description:
        "Implemented backend services and Flutter application features for an ERP platform managing employee data, inventory, and operational workflows. Built APIs for real-time stock tracking, employee management, and reporting, then integrated a RAG assistant for intelligent document queries, semantic search, and contextual responses.",
      tags: ["Node.js", "Ollama", "ChromaDB", "SQL", "Flutter"],
      link: "https://play.google.com/store/apps/details?id=com.sunshineiotronics.sunshineone&pcampaignid=web_share",
    },
    {
      title: "Io-Net",
      description:
        "Developed a scalable cloud-connected IoT platform for real-time monitoring, remote device control, scheduling automation, and multi-user device sharing. Built secure PIN-based device onboarding, Express.js and MongoDB backend services, and an automated credit deduction system with atomic daily balance updates.",
      tags: ["Flutter", "Express.js", "MongoDB", "IoT"],
      link: "https://play.google.com/store/apps/details?id=com.sunshineiotronics.ionet",
    },
    {
      title: "USB-Link",
      description:
        "Built a Flutter application for real-time communication with embedded devices using USB CDC protocols. Implemented live parameter monitoring, firmware configuration, alarm tracking, and hardware diagnostics, with Excel log export and telemetry reporting for debugging, analytics, and operational monitoring.",
      tags: ["Flutter", "USB CDC", "Embedded", "Excel"],
      link: "https://play.google.com/store/apps/details?id=com.sunshineiotronics.usb_monitor",
    },
    {
      title: "DialTrack",
      description:
        "Developed a Flutter telecom analytics application using GetX and Firebase for call log analysis and automated dialing workflows. Built insights for repeated callers, call duration trends, and activity breakdowns with interactive dashboards, plus CSV-based bulk call automation for structured outreach.",
      tags: ["Flutter", "GetX", "Firebase", "CSV"],
      link: "https://github.com/shutterscripter/dialtrack",
    },
  ],
  backend: [
    {
      title: "URL Shortener",
      description:
        "Built a high-performance REST API for creating and resolving short URLs with custom aliases, configurable expiration, URL validation, redirect analytics, and IP-based rate limiting. Used Redis for fast persistence and packaged the service with Docker Compose.",
      tags: ["Go", "Fiber", "Redis", "Docker", "REST API"],
      link: "https://github.com/shutterscripter/golang_projects/tree/main/url_shortner",
    },
  ],
};

/** Curated list for the home page projects section. Mobile tab shows featured work; Backend matches /projects. */
export const HOME_PROJECTS = {
  mobile: [
    {
      title: "Drawably Flutter",
      description:
        "Published a Flutter UI library for animated hand-drawn controls and decorations. Its deterministic seeded sketches gently boil between three cached frames for a lively, consistent visual effect.",
      tags: ["Flutter", "Dart", "CustomPainter", "Animation"],
      link: "https://pub.dev/packages/drawably_flutter",
      badge: "Package",
    },
    {
      title: "Data Peek",
      description:
        "Contributed UI improvements to a cross-platform SQL client supporting PostgreSQL, MySQL, Microsoft SQL Server, and SQLite.",
      tags: ["Electron", "React", "TypeScript", "TanStack"],
      link: "https://github.com/Rohithgilla12/data-peek",
      badge: "Open Source",
    },
    {
      title: "ERP System with RAG-based AI Assistant",
      description:
        "Implemented backend services and Flutter application features for an ERP platform managing employee data, inventory, and operational workflows. Built APIs for real-time stock tracking, employee management, and reporting, then integrated a RAG assistant for intelligent document queries, semantic search, and contextual responses.",
      tags: ["Node.js", "Ollama", "ChromaDB", "SQL", "Flutter"],
      link: "https://play.google.com/store/apps/details?id=com.sunshineiotronics.sunshineone&pcampaignid=web_share",
    },
    {
      title: "Io-Net",
      description:
        "Developed a scalable cloud-connected IoT platform for real-time monitoring, remote device control, scheduling automation, and multi-user device sharing. Built secure PIN-based device onboarding, Express.js and MongoDB backend services, and an automated credit deduction system with atomic daily balance updates.",
      tags: ["Flutter", "Express.js", "MongoDB", "IoT"],
      link: "https://play.google.com/store/apps/details?id=com.sunshineiotronics.ionet",
    },
    {
      title: "USB-Link",
      description:
        "Built a Flutter application for real-time communication with embedded devices using USB CDC protocols. Implemented live parameter monitoring, firmware configuration, alarm tracking, and hardware diagnostics, with Excel log export and telemetry reporting for debugging, analytics, and operational monitoring.",
      tags: ["Flutter", "USB CDC", "Embedded", "Excel"],
      link: "https://play.google.com/store/apps/details?id=com.sunshineiotronics.usb_monitor",
    },
    {
      title: "DialTrack",
      description:
        "Developed a Flutter telecom analytics application using GetX and Firebase for call log analysis and automated dialing workflows. Built insights for repeated callers, call duration trends, and activity breakdowns with interactive dashboards, plus CSV-based bulk call automation for structured outreach.",
      tags: ["Flutter", "GetX", "Firebase", "CSV"],
      link: "https://github.com/shutterscripter/dialtrack",
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
