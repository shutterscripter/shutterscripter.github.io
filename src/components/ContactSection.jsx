import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import SocialLink from "./SocialLink";
const ContactSection = () => {
  return (
    <footer id="contact" className="py-24 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h4 className="mb-4 text-xl font-semibold text-fg">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://maps.app.goo.gl/rkRrCzUWkohctrA17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-fg"
              >
                Pune, Maharashtra
              </a>
            </li>
            <li>
              <a
                href="mailto:jay2272001@gmail.com"
                className="text-fg-muted transition-colors hover:text-fg"
              >
                jay2272001@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-semibold text-fg">Follow on</h4>
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
        className="text-center text-sm text-fg-subtle opacity-70 dark:opacity-50"
      >
        © 2025 Jayesh Shinde. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default ContactSection;
