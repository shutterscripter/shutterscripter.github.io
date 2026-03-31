import { ReactLenis } from "lenis/react";
import { useMotionValue } from "framer-motion";
import BottomNav from "../BottomNav/BottomNav";
import Hero from "../Hero/Hero";
import ExperienceSection from "../Experience/ExperienceSection";
import ProjectSection from "../Work/ProjectSection";
import SkillSection from "../Skills/SkillSection";
import ArticleSection from "../Articles/ArticleSection";
import ContactSection from "../Contact/ContactSection";

export const Home = () => {
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
      <BottomNav />
      <div
        className="relative bg-surface text-fg transition-all duration-300"
        onMouseMove={handleMouseMove}
      >
        <ReactLenis
          root
          options={{
            lerp: 0.08,
          }}
        >
          <Hero />
          <Content />
        </ReactLenis>
      </div>
    </>
  );
};

const Content = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24">
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ArticleSection />
      <ContactSection />
    </div>
  );
};
