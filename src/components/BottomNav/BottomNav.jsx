import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logoBlack from "../../assets/jayesh-logo-black.png";
import logoWhite from "../../assets/jayesh-logo-white.png";

const SECTION_IDS = ["projects", "skills", "experience", "contact"];

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const updateActiveFromScroll = useCallback((scrollPosition) => {
    if (isScrollingRef.current) return;
    let next = "home";
    if (scrollPosition >= 100) {
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop - 100) {
          next = id;
          break;
        }
      }
    }
    setActiveSection((previous) => (previous === next ? previous : next));
  }, []);

  useLenis((lenis) => {
    updateActiveFromScroll(lenis.animatedScroll);
    setIsScrolled(lenis.animatedScroll > 40);
  });

  useEffect(() => {
    updateActiveFromScroll(window.scrollY);
    setIsScrolled(window.scrollY > 40);
  }, [updateActiveFromScroll]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: "smooth",
        });
      }
    }

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 550);
  };

  const navItems = ["Home", "Projects", "Skills", "Experience", "Contact"].map(
    (name) => ({
      name,
      id: name.toLowerCase(),
      onClick: () => scrollToSection(name.toLowerCase()),
    }),
  );

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 bg-transparent"
      >
        <nav
          className="flex h-18 items-center px-10 sm:px-16"
          aria-label="Primary navigation"
        >
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className={`flex items-center justify-center transition-[width,height] duration-300 ${
              isScrolled ? "h-14 w-20" : "h-16 w-24"
            }`}
            aria-label="Back to top"
          >
            <img
              src={logoBlack}
              alt="Jayesh Shinde"
              className="h-full w-full object-contain dark:hidden"
            />
            <img
              src={logoWhite}
              alt=""
              className="hidden h-full w-full object-contain dark:block"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="absolute right-10 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated/90 text-fg shadow-lg backdrop-blur-md transition-colors hover:bg-surface-hover sm:right-16 dark:bg-surface-muted/90 dark:hover:bg-surface-hover"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <FiX className="h-5 w-5" aria-hidden />
                ) : (
                  <FiMenu className="h-5 w-5" aria-hidden />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-40"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.button
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 h-full w-full bg-black/45 backdrop-blur-sm"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.35 }}
            />

            {["bg-surface-muted", "bg-surface-elevated", "bg-surface"].map(
              (background, index) => (
                <motion.div
                  key={background}
                  className={`pointer-events-none absolute inset-y-0 right-0 w-[min(92vw,760px)] ${background}`}
                  variants={{ closed: { x: "105%" }, open: { x: 0 } }}
                  transition={{
                    duration: 0.58,
                    delay: index * 0.08,
                    ease: [0.65, 0.01, 0.05, 0.99],
                  }}
                />
              ),
            )}

            <motion.nav
              className="absolute inset-y-0 right-0 flex w-[min(92vw,760px)] flex-col overflow-hidden bg-surface px-6 pb-10 pt-32 sm:px-12"
              variants={{ closed: { x: "110%" }, open: { x: 0 } }}
              transition={{ duration: 0.65, ease: [0.65, 0.01, 0.05, 0.99] }}
              aria-label="Expanded navigation"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  {hoveredItem !== null && (
                    <motion.div
                      key={hoveredItem}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.45, ease: "backOut" }}
                    >
                      <div className="absolute right-[8%] top-[18%] h-48 w-48 rounded-full border border-border-strong opacity-50 sm:h-72 sm:w-72" />
                      <div className="absolute right-[25%] top-[32%] h-28 w-28 rotate-45 border border-border opacity-70 sm:h-40 sm:w-40" />
                      <div className="absolute bottom-[12%] right-[5%] h-px w-[70%] rotate-[-24deg] bg-border-strong" />
                      <div className="absolute bottom-[20%] right-[18%] h-px w-[55%] rotate-[-24deg] bg-border" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative z-10 flex flex-1 flex-col justify-center">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-fg-subtle">
                  Navigation
                </p>
                <div className="border-t border-border">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={item.onClick}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="group relative flex w-full items-center justify-between overflow-hidden border-b border-border py-4 text-left sm:py-5"
                      variants={{
                        closed: { y: "130%", rotate: 7, opacity: 0 },
                        open: { y: 0, rotate: 0, opacity: 1 },
                      }}
                      transition={{
                        duration: 0.65,
                        delay: 0.3 + index * 0.055,
                        ease: [0.65, 0.01, 0.05, 0.99],
                      }}
                      aria-current={
                        activeSection === item.id ? "page" : undefined
                      }
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-fg transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      <span
                        className={`relative z-10 text-3xl font-bold tracking-tight transition-colors group-hover:text-surface sm:text-5xl ${
                          activeSection === item.id
                            ? "text-fg"
                            : "text-fg-muted"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="relative z-10 text-xs tabular-nums text-fg-subtle transition-colors group-hover:text-surface/60">
                        0{index + 1}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.p
                className="relative z-10 text-xs uppercase tracking-[0.16em] text-fg-subtle"
                variants={{
                  closed: { opacity: 0, y: 20 },
                  open: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.62 }}
              >
                Software developer · Pune, India
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomNav;
