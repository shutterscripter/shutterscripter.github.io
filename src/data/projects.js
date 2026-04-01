/** `PROJECTS` = full list on `/projects`. `HOME_PROJECTS` = home section (featured mobile + same backend). */
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
      title: "DelKey Backend",
      description:
        "Developed scalable backend for a Wi-Fi-based smart lock system, enabling secure, cloud-integrated access control. Implemented proximity-based device authentication, real-time communication with IoT hardware, and administrator-authorized unlocking of secured enclosures. Designed backend services for audit logging, access monitoring, and device management to support industrial and enterprise use cases.",
      tags: ["Go", "Fiber", "Redis", "PostgreSQL", "WebSocket", "Docker"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "ERP System [Playstore]",
      description:
        "Implemented backend services for an ERP system to manage employee data, inventory/stock, and operational workflows. Built APIs for real-time stock tracking, employee management, and reporting, ensuring efficient business operations.",
      tags: ["Node.js", "SQL", "CI/CD", "Flutter"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "Deadsniper [GitHub]",
      description:
        "Built an open-source CLI tool in Go that crawls websites recursively and detects broken links (4xx/5xx, soft 404s). Implemented concurrent HTTP checking with configurable threads, depth-limited same-domain crawling, and multiple output formats (text/JSON). Supports cross-platform builds (macOS, Linux, Windows) via automated build scripts. Published with an install script for quick setup.",
      tags: ["Go", "Concurrency", "Web Scraping", "CLI"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "URL Shortener [GitHub]",
      description:
        "Built a high-performance URL shortening service with custom short codes, expiration, and IP-based rate limiting. Implemented URL validation, redirect analytics, and Dockerized deployment for scalable API performance.",
      tags: ["Go", "Fiber", "Redis", "Docker", "REST APIs"],
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
        "An IoT platform that unifies multiple smart devices into a single controllable network with real-time monitoring and remote device management. Built secure device onboarding (PIN pairing), scheduling automation, and multi-user device sharing for collaborative monitoring and control. Implemented a reliable backend using ExpressJS and MongoDB, supporting cloud-connected IoT workflows with high scalability. Includes an automated credit deduction system for continuous service usage, ensuring atomic and fail-safe daily balance updates.",
      tags: ["Express.js", "MongoDB", "IoT"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "USB-Link",
      description:
        "Flutter-based hardware interface tool to query and monitor connected embedded devices using USB CDC communication. Fetches live device parameters, firmware settings, alarms, and system health data, presenting them in an intuitive real-time monitoring dashboard. Supports structured device configuration and diagnostics by reading system alerts and operational states directly from hardware. Includes Excel log export and session report generation for telemetry storage, debugging, and data-driven analysis.",
      tags: ["Flutter", "USB CDC", "Embedded"],
      link: GITHUB_PROFILE_URL,
    },
    {
      title: "DialTrack",
      description:
        "A practical telecom analytics and automation tool built with Flutter, GetX, and Firebase. Automatically fetches call logs and provides insights like total calls, repeated callers, max duration, and call behavior trends. Includes daily and monthly breakdowns with interactive charts and supports CSV-based bulk call automation for structured dialing workflows.",
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
