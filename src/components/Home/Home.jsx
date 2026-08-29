import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useMotionValue } from "framer-motion";
import BottomNav from "../BottomNav/BottomNav";
import Hero from "../Hero/Hero";
import ExperienceSection from "../Experience/ExperienceSection";
import ProjectSection from "../Projects/ProjectSection";
import SkillSection from "../Skills/SkillSection";
import ContactSection from "../Contact/ContactSection";

export const Home = () => {
  const location = useLocation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const id = window.setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
    return () => clearTimeout(id);
  }, [location.hash, location.pathname]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX / width);
    mouseY.set(clientY / height);
  };

  return (
    <>
      <BottomNav />
      <div
        className="relative bg-surface text-fg transition-all duration-300"
        onMouseMove={handleMouseMove}
      >
        <ReactLenis root options={{ lerp: 0.08 }}>
          <Hero />

          <div className="mx-auto max-w-5xl px-4 pb-24">
            <ProjectSection />
            <SkillSection />
            <ExperienceSection />
            <ContactSection />
          </div>
        </ReactLenis>
      </div>
    </>
  );
};
