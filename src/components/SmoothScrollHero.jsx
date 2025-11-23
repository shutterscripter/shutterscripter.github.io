import { ReactLenis } from "lenis/react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFigma,
  SiFlutter,
  SiAndroid,
  SiKotlin,
  SiDart,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiDocker,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPython,
  SiGit,
} from "react-icons/si";
import {
  FiArrowRight,
  FiMail,
  FiExternalLink,
  FiDownload,
  FiZap,
  FiCloud,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiBriefcase,
  FiFileText,
  FiHome,
} from "react-icons/fi";
import { FaMagic, FaJava } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { SiBootstrap } from "react-icons/si";
import { useRef, useState, useEffect } from "react";

export const SmoothScrollHero = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX / width);
    mouseY.set(clientY / height);
  };

  return (
    <>
      {/* Navbar outside filtered container to prevent glitch filter from affecting it */}
      <Nav />
      <div
        className={`bg-zinc-950 text-zinc-50 relative transition-all duration-300 ${
          isGlitching ? "pixelated" : ""
        }`}
        style={{
          filter: isGlitching
            ? "grayscale(100%) contrast(1.1) brightness(0.95)"
            : "none",
        }}
        onMouseMove={handleMouseMove}
      >
        <InteractiveCursor mouseX={mouseX} mouseY={mouseY} />
        <GlitchEffect setIsGlitching={setIsGlitching} />
        <ReactLenis
          root
          options={{
            lerp: 0.05,
          }}
        >
          <Hero />
          <Content />
        </ReactLenis>
      </div>
    </>
  );
};

const InteractiveCursor = ({ mouseX, mouseY }) => {
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(
    useTransform(mouseX, [0, 1], [0, 100]),
    springConfig
  );
  const cursorY = useSpring(
    useTransform(mouseY, [0, 1], [0, 100]),
    springConfig
  );

  const cursorPosition = useMotionTemplate`${cursorX}% ${cursorY}%`;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        background: `radial-gradient(600px circle at ${cursorPosition}, rgba(16, 185, 129, 0.15), transparent 40%)`,
      }}
    />
  );
};

const GlitchEffect = ({ setIsGlitching }) => {
  const [isGlitching, setIsGlitchingLocal] = useState(false);

  useEffect(() => {
    let timeouts = [];

    const glitchInterval = () => {
      // Random interval between 8-15 seconds
      const delay = Math.random() * 7000 + 8000;

      const timeoutId = setTimeout(() => {
        setIsGlitching(true);
        setIsGlitchingLocal(true);

        // Glitch duration: 400-700ms (longer for better visibility)
        const glitchDuration = Math.random() * 300 + 400;

        const glitchTimeout = setTimeout(() => {
          setIsGlitching(false);
          setIsGlitchingLocal(false);
          glitchInterval(); // Schedule next glitch
        }, glitchDuration);

        timeouts.push(glitchTimeout);
      }, delay);

      timeouts.push(timeoutId);
      return timeoutId;
    };

    // Start first glitch after shorter initial delay (3-6 seconds for testing)
    const initialDelay = Math.random() * 3000 + 3000;
    const firstTimeout = setTimeout(() => {
      glitchInterval();
    }, initialDelay);

    timeouts.push(firstTimeout);

    return () => {
      setIsGlitching(false);
      setIsGlitchingLocal(false);
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [setIsGlitching]);

  return (
    <>
      {/* Pixelated overlay during glitch */}
      {isGlitching && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05 }}
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 12px,
                rgba(0, 0, 0, 0.3) 12px,
                rgba(0, 0, 0, 0.3) 24px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 12px,
                rgba(0, 0, 0, 0.3) 12px,
                rgba(0, 0, 0, 0.3) 24px
              )
            `,
            backgroundSize: "48px 48px",
            imageRendering: "pixelated",
            mixBlendMode: "multiply",
          }}
        />
      )}

      {/* RGB Glitch Lines */}
      {isGlitching && (
        <>
          <motion.div
            className="fixed inset-0 pointer-events-none z-[10000]"
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 1, 0],
              x: [0, -5, 5, -3, 0],
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.6) 50%, transparent 100%)",
              mixBlendMode: "screen",
              imageRendering: "pixelated",
            }}
          />
          <motion.div
            className="fixed inset-0 pointer-events-none z-[10000]"
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 1, 0],
              x: [0, 5, -5, 3, 0],
            }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.05 }}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.6) 50%, transparent 100%)",
              mixBlendMode: "screen",
              imageRendering: "pixelated",
            }}
          />
          {/* Vertical scan line */}
          <motion.div
            className="fixed inset-0 pointer-events-none z-[10001]"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              width: "2px",
              background: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              imageRendering: "pixelated",
            }}
          />
        </>
      )}
    </>
  );
};

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if we're programmatically scrolling
      if (isScrollingRef.current) {
        return;
      }

      const scrollPosition = window.scrollY;

      // Check if we're at the top (home section)
      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      // Check other sections
      const sections = ["skills", "projects", "articles", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - 100; // Account for navbar offset
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Debounce scroll handler
    let scrollTimeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(scrollTimeout);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // Offset for navbar
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Re-enable scroll detection after scrolling completes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000); // Wait 1 second after scroll completes
  };

  const navItems = [
    {
      name: "Home",
      id: "home",
      icon: <FiHome className="h-4 w-4" />,
      onClick: () => scrollToSection("home"),
    },
    {
      name: "Skills",
      id: "skills",
      icon: <FiCode className="h-4 w-4" />,
      onClick: () => scrollToSection("skills"),
    },
    {
      name: "Projects",
      id: "projects",
      icon: <FiBriefcase className="h-4 w-4" />,
      onClick: () => scrollToSection("projects"),
    },
    {
      name: "Articles",
      id: "articles",
      icon: <FiFileText className="h-4 w-4" />,
      onClick: () => scrollToSection("articles"),
    },
    {
      name: "Contact",
      id: "contact",
      icon: <FiMail className="h-4 w-4" />,
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10002]"
    >
      <div className="flex items-center gap-1 px-2 py-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-full shadow-2xl">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.name}
              onClick={item.onClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all group ${
                isActive
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800/50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className={isActive ? "text-emerald-400" : ""}>
                {item.icon}
              </span>
              <span
                className={`text-xs font-medium hidden sm:block ${
                  isActive ? "text-emerald-400" : "text-zinc-400"
                }`}
              >
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-emerald-500/10 rounded-full border border-emerald-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

const SECTION_HEIGHT = 600;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full pb-32"
    >
      <CenterImage />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const AnimatedRoleBadge = () => {
  const roles = [
    "Backend Engineer",
    "Flutter Developer",
    "Android Developer",
    "Embedded Engineer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative h-12 md:h-14 flex items-center justify-center min-w-[200px] md:min-w-[250px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block text-emerald-400 text-sm md:text-base font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm absolute whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const InteractiveOrb = ({ mouseX, mouseY, color, position }) => {
  const orbColor =
    color === "emerald" ? "rgba(16, 185, 129, 0.2)" : "rgba(59, 130, 246, 0.2)";
  const baseX = position === "top-left" ? -50 : 50;
  const baseY = position === "top-left" ? -30 : 30;

  const orbX = useSpring(useTransform(mouseX, [0, 1], [baseX, -baseX]), {
    damping: 30,
    stiffness: 300,
  });
  const orbY = useSpring(useTransform(mouseY, [0, 1], [baseY, -baseY]), {
    damping: 30,
    stiffness: 300,
  });

  return (
    <motion.div
      className="absolute w-96 h-96 rounded-full blur-3xl"
      style={{
        left: position === "top-left" ? "25%" : "auto",
        right: position === "bottom-right" ? "25%" : "auto",
        top: position === "top-left" ? "25%" : "auto",
        bottom: position === "bottom-right" ? "25%" : "auto",
        background: orbColor,
        x: orbX,
        y: orbY,
      }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const InteractiveGrid = ({ mouseX, mouseY }) => {
  const gridX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
    damping: 25,
    stiffness: 200,
  });
  const gridY = useSpring(useTransform(mouseY, [0, 1], [-15, 15]), {
    damping: 25,
    stiffness: 200,
  });

  const gridTransform = useMotionTemplate`translate(${gridX}px, ${gridY}px)`;

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        transform: gridTransform,
        backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)`,
        backgroundSize: "4rem 4rem",
      }}
    />
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 300],
    [1, 0]
  );

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX / width);
    mouseY.set(clientY / height);
  };

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ opacity }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        {/* Interactive Animated gradient orbs */}
        <InteractiveOrb
          mouseX={mouseX}
          mouseY={mouseY}
          color="emerald"
          position="top-left"
        />
        <InteractiveOrb
          mouseX={mouseX}
          mouseY={mouseY}
          color="blue"
          position="bottom-right"
        />
        {/* Interactive Grid pattern overlay */}
        <InteractiveGrid mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 pb-32">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <AnimatedRoleBadge />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] px-4 mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
            Jayesh Shinde
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-start justify-center gap-4 mb-8 max-w-4xl px-4"
        >
          <motion.div
            className="w-1 h-20 md:h-24 bg-gradient-to-b from-emerald-400 via-blue-400 to-emerald-400 rounded-full flex-shrink-0 mt-1"
            animate={{
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 leading-relaxed mb-3 font-semibold">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Building Tomorrow's Technology Today
              </span>
            </p>
            <p className="text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed font-light">
              Crafting embedded solutions and mobile applications that bridge
              hardware and software. Expert in Flutter, Android, and embedded
              systems with a passion for clean code and scalable architecture.
            </p>
          </div>
        </motion.div>

        {/* <motion.button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative mt-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold rounded-full overflow-hidden transition-all shadow-lg shadow-emerald-500/50"
        >
          <span className="relative z-10">Get In Touch</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button> */}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-40 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-500 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-zinc-600 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
        alt="Mobile app development"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2670&auto=format&fit=crop"
        alt="Flutter development"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop"
        alt="Embedded systems"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop"
        alt="IoT technology"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Content = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24">
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 border-b border-zinc-800">
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
            className="text-2xl font-semibold mb-12 text-emerald-400 flex items-center gap-3"
          >
            <MdOutlineWorkOutline className="text-2xl" />
            Experience
          </motion.h3>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-blue-500/50 to-emerald-500/50"></div>

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
            className="text-2xl font-semibold mb-12 text-emerald-400 flex items-center gap-3"
          >
            <FaGraduationCap className="text-2xl" />
            Education
          </motion.h3>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-blue-500/50 to-emerald-500/50"></div>

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

const TimelineItem = ({ role, company, date, dateEnd, achievements }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative pl-12 group"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-[-4px] w-3 h-3 rounded-full bg-emerald-400 border-2 border-zinc-950 z-10"
        whileHover={{ scale: 1.5, backgroundColor: "#10b981" }}
        transition={{ type: "spring", stiffness: 400 }}
      />

      {/* Content */}
      <div className="pb-2">
        {/* Role Title */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
          {role}
        </h3>

        {/* Company */}
        <p className="text-zinc-400 text-sm mb-3">{company}</p>

        {/* Dates - Highlighted */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-emerald-400 font-medium text-sm">{date}</span>
          <span className="text-zinc-600">—</span>
          <span className="text-emerald-400 font-medium text-sm">
            {dateEnd}
          </span>
        </div>

        {/* Achievements/Bullet Points */}
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
            >
              <span className="text-emerald-400 mt-1.5">▸</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 border-b border-zinc-800 scroll-mt-24"
    >
      <div className="flex justify-between items-center mb-12">
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
          className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
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

const ProjectCard = ({ title, description, tags, link, image }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set((x - centerX) / centerX);
      mouseY.set((y - centerY) / centerY);
    }
  };

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), {
    damping: 20,
    stiffness: 300,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), {
    damping: 20,
    stiffness: 300,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group bg-zinc-900 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all overflow-hidden cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          {link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <SiGithub className="text-xl" />
            </a>
          )}
        </div>
        <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const allSkills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiAndroid />, name: "Android" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FiCloud />, name: "AWS" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiNodedotjs />, name: "NodeJS" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <SiGit />, name: "Git" },
  ];

  // Duplicate skills for infinite scroll
  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isPaused) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (carousel) {
        scrollPosition += scrollSpeed;
        const maxScroll = carousel.scrollWidth / 3; // Since we duplicated 3 times

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        carousel.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className="py-24 border-b border-zinc-800 overflow-hidden scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Code : Skills
      </motion.h2>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-zinc-800 p-3 rounded-full border border-zinc-700 transition-all hover:scale-110"
          aria-label="Previous skills"
        >
          <FiChevronLeft className="text-2xl text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-zinc-800 p-3 rounded-full border border-zinc-700 transition-all hover:scale-110"
          aria-label="Next skills"
        >
          <FiChevronRight className="text-2xl text-white" />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll hide-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0"
            >
              <SkillCard icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 300 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 300 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set((y - centerY) / 10);
    rotateY.set((centerX - x) / 10);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.1, y: -8 }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="flex flex-col items-center justify-center p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all w-[180px] h-[180px] cursor-pointer"
    >
      <motion.div
        className="text-5xl text-zinc-200 mb-4"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <motion.p
        className="font-medium text-zinc-300 text-center"
        animate={{
          color: isHovered ? "rgb(16, 185, 129)" : "rgb(212, 212, 216)",
        }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
};

const ArticlesSection = () => {
  const articles = [
    {
      title: "Automatic Number Plate Recognition System using EasyOCR",
      category: "Python | DS",
      date: "Apr 23, 2024",
      link: "https://www.geeksforgeeks.org/automatic-license-number-plate-recognition-system/",
    },
    {
      title: "How To Install A Package Inside Virtualenv?",
      category: "Python",
      date: "Jan 24, 2024",
      link: "https://www.geeksforgeeks.org/how-to-install-a-package-inside-virtualenv/",
    },
    {
      title: "Scrape a popup using python and selenium",
      category: "Python",
      date: "Jul 31, 2023",
      link: "https://www.geeksforgeeks.org/scrape-a-popup-using-python-and-selenium/",
    },
  ];

  return (
    <section
      id="articles"
      className="py-24 border-b border-zinc-800 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Latest Articles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-zinc-400 text-center mb-12"
      >
        These Articles showcase my other expertise than skills mentioned in
        skill section.
      </motion.p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {articles.map((article, index) => (
          <motion.a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group block p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all"
          >
            <p className="text-zinc-500 text-sm mb-2">
              {article.category} / {article.date}
            </p>
            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
              {article.title}
            </h3>
          </motion.a>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <button
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/user/shutterscripter/",
              "_blank"
            )
          }
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-full transition-colors"
        >
          View all articles
        </button>
      </motion.div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <footer id="contact" className="py-24 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://maps.app.goo.gl/rkRrCzUWkohctrA17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Pune, Maharashtra
              </a>
            </li>
            <li>
              <a
                href="mailto:jay2272001@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                jay2272001@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Follow on</h4>
          <div className="flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/jayeshshinde2001/"
              icon={<SiLinkedin />}
            />
            <SocialLink
              href="https://github.com/shutterscripter"
              icon={<SiGithub />}
            />
            <SocialLink href="mailto:jay2272001@gmail.com" icon={<FiMail />} />
          </div>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-sm text-zinc-500 opacity-50"
      >
        © 2025 Jayesh Shinde. All rights reserved.
      </motion.p>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="text-2xl text-zinc-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
