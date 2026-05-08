import React from "react";
import { motion } from "motion/react";
import styles from "../../styles/NowPage.module.scss";
import appStyles from "../../App.module.scss";

const SectionHeader = ({ label, title, id }: { label: string; title: string; id?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={appStyles["section__header"]}
  >
    <div className={appStyles["section__label"]}> // {label}</div>
    <h2 className={appStyles["section__title"]} id={id}>
      {title}
    </h2>
  </motion.div>
);

interface NowEntry {
  prompt: string;
  lines: (string | { text: string; linkTo?: string; href?: string })[];
}

const NOW_SECTIONS: NowEntry[] = [
  {
    prompt: "currently_building",
    lines: [
      {
        text: "AgriGuard — pesticide application predictor",
        linkTo: "/projects",
      },
      "Built the base application with map visualization and added pesticide markers for the year of 2023. Looking to add more years, thinking of ways to improve the visualization to handle larger time ranges.",
      {
        text: "aarasawa.dev — personal site + Amber Echo blog consolidation",
        linkTo: "/projects",
      },
      "Migrating from Next.js to Astro. Merging the personal site and blog into one codebase on one domain. Currently mid-build.",
      "Deep Phosphor Studios — business site pre-launch. Design finalized, working toward first deploy.",
    ],
  },
  {
    prompt: "currently_learning",
    lines: [
      "DeepLearning.AI Machine Learning Specialization (Coursera)",
      "Reviewing neural networks with softmax outputs — multiclass classification and how the softmax layer assigns probabilities across output classes. Working through this alongside full-time work.",
      "HackTheBox / Security+ on the back burner for now. Will pick back up after ML coursework stabilizes.",
    ],
  },
  {
    prompt: "currently_reading",
    lines: [
      "Behave — Robert Sapolsky",
      "Biology of human behavior — hormones, evolution, neuroscience, and why people do what they do. Dense but worth it.",
      { text: "Promethea — Alan Moore", linkTo: "/reading" },
      "Rereading for the mythology and visual language. Moore at his most ambitious.",
    ],
  },
  {
    prompt: "currently_watching",
    lines: [
      { text: "Unchosen", href: "https://www.imdb.com/title/tt31631142/" },
      "Finished Season 2 of Beef and this was recommended as a next watch. Interesting premise but in my opinion seems to be going off the rails a bit in terms of plot. Will see how it develops.",
    ],
  },
  {
    prompt: "career_and_focus",
    lines: [
      "Heads down on hobbies, skill-building and the business right now. Not actively job hunting — focused on making the work speak for itself.",
      "Deep Phosphor Studios targeting nonprofit and small business clients in the LA area. Building out the portfolio and documentation to support that.",
      "Based in Arcadia, CA — San Gabriel Valley / LA Metro. Open to remote or local work.",
    ],
  },
];

const NowPage: React.FC = () => {
  return (
    <section
      id="now"
      className={styles["now"]}
      aria-labelledby="now-heading"
      role="region"
    >
      <SectionHeader label="Status" title="NOW" id="now-heading" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={styles["now__timestamp"]}
      >
        <span className={styles["now__timestamp-prompt"]}>$</span>
        <span className={styles["now__timestamp-cmd"]}>last_updated</span>
        <span className={styles["now__timestamp-val"]}>April 2026</span>
      </motion.div>

      <div className={styles["now__sections"]}>
        {NOW_SECTIONS.map((section, i) => (
          <motion.div
            key={section.prompt}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={styles["now__shell"]}
          >
            <div className={styles["now__shell-bar"]}>
              <div className={styles["now__shell-dots"]}>
                <span /><span /><span />
              </div>
              <span className={styles["now__shell-title"]}>{section.prompt}.txt</span>
            </div>
            <div className={styles["now__shell-body"]}>
              <div className={styles["now__shell-cmd-row"]}>
                <span className={styles["now__prompt"]}>$</span>
                <span className={styles["now__cmd"]}>cat {section.prompt}.txt</span>
              </div>
              <div className={styles["now__lines"]}>
                {section.lines.map((line, j) => {
                  if (typeof line === "string") {
                    return (
                      <p key={j} className={styles["now__line"]}>
                        {line}
                      </p>
                    );
                  }
                  if (line.linkTo) {
                    return (
                      <p key={j} className={styles["now__line"]}>
                        <span className={styles["now__entry-marker"]}>▸</span>
                        <a href={line.linkTo} className={styles["now__link"]}>
                          {line.text}
                        </a>
                      </p>
                    );
                  }
                  if (line.href) {
                    return (
                      <p key={j} className={styles["now__line"]}>
                        <span className={styles["now__entry-marker"]}>▸</span>
                        <a
                          href={line.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles["now__link"]}
                        >
                          {line.text}
                        </a>
                      </p>
                    );
                  }
                  return (
                    <p key={j} className={styles["now__line"]}>
                      {line.text}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NowPage;
