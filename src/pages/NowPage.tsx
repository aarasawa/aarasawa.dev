import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import styles from "./NowPage.module.scss";
import appStyles from "../App.module.scss";

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
        text: "AgriGuard Foresight — pesticide application predictor",
        linkTo: "/projects",
      },
      "Conceptual stage. Researching what goes into building a seasonal regression model using historical CDPR data and weather patterns. Still drafting the approach before writing any code.",
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
      { text: "Beef S1 — Netflix", href: "https://www.netflix.com/title/81447461" },
      "Rewatching before Season 2. Still holds up. The slow-burn rage and the way it depicts immigrant family pressure without making it a punchline.",
    ],
  },
  {
    prompt: "career_and_focus",
    lines: [
      "Heads down on skill-building and the business right now. Not actively job hunting — focused on making the work speak for itself.",
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

      <div className={styles["now__desc"]}>
        A snapshot of what I'm focused on right now. Updated when something meaningfully changes.
        Not a resume — just an honest account of what's in front of me.
      </div>

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
                        <Link to={line.linkTo} className={styles["now__link"]}>
                          {line.text}
                        </Link>
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles["now__footer"]}
      >
        <span className={styles["now__prompt"]}>$</span>
        <span className={styles["now__footer-text"]}>
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer" className={styles["now__link"]}>/now page</a>.
          An idea by <a href="https://sive.rs/now" target="_blank" rel="noreferrer" className={styles["now__link"]}>Derek Sivers</a>.
        </span>
      </motion.div>
    </section>
  );
};

export default NowPage;
