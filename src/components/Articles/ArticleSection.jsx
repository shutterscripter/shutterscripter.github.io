import React from "react";
import { motion } from "framer-motion";
const ArticleSection = () => {
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
    <motion.section
      id="articles"
      className="scroll-mt-24 border-b border-border py-24"
      initial={{ opacity: 0, y: 80, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-4 text-center text-2xl font-bold"
      >
        Latest Articles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12 text-center text-fg-muted"
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
            className="group block rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/50 dark:bg-surface-muted"
          >
            <p className="mb-2 text-sm text-fg-muted">
              {article.category} / {article.date}
            </p>
            <h3 className="text-lg font-semibold text-fg transition-colors group-hover:text-accent-muted">
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
              "_blank",
            )
          }
          className="rounded-full bg-surface-hover px-6 py-3 font-medium text-fg transition-colors hover:bg-surface-muted dark:bg-surface-muted dark:text-fg dark:hover:bg-surface-hover"
        >
          View all articles
        </button>
      </motion.div>
    </motion.section>
  );
};

export default ArticleSection;
