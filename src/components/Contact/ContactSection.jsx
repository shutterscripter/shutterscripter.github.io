import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import SocialLink from "../SocialLink";
const ContactSection = () => {
  return (
    <footer
      id="contact"
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-24 bg-fg text-surface"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-10 border-b border-surface/20 pb-12 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-surface/60">
              Get in touch
            </p>
            <h4 className="text-3xl font-bold tracking-tight text-surface sm:text-5xl">
              Let&apos;s build something useful.
            </h4>
            <a
              href="mailto:jay2272001@gmail.com"
              className="mt-6 inline-block text-sm text-surface/70 underline decoration-surface/30 underline-offset-4 transition-colors hover:text-surface"
            >
              jay2272001@gmail.com
            </a>
          </div>

          <div>
            <div className="flex gap-3">
              <SocialLink
                href="https://www.linkedin.com/in/jayeshshinde2001/"
                icon={<SiLinkedin />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/shutterscripter"
                icon={<SiGithub />}
                label="GitHub"
              />
              <SocialLink
                href="https://x.com/jayesssssh"
                icon={<FaXTwitter />}
                label="X"
              />
              <SocialLink
                href="mailto:jay2272001@gmail.com"
                icon={<FiMail />}
                label="Email"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-surface/50 sm:flex-row sm:items-center sm:justify-between">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            © 2026 Jayesh Shinde
          </motion.p>
          <a
            href="https://maps.app.goo.gl/rkRrCzUWkohctrA17"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-surface"
          >
            Pune, Maharashtra
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
