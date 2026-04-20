import React from "react";
import { motion } from "motion/react";
import styles from "../App.module.scss";

const SectionHeader = ({ label, title, id }: { label: string; title: string; id?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={styles['section__header']}
  >
    <div className={styles['section__label']}>
      // {label}
    </div>
    <h2 className={styles['section__title']} id={id}>
      {title}
    </h2>
  </motion.div>
);

const HomePage: React.FC = () => {
  return (
    <>
      <section id="hero" className={styles['hero']}>
        <div className={styles['hero__grid-accent']} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles['hero__badge-container']}>
            <span className={styles['hero__badge']}>Applications Engineer</span>
            <span className={styles['hero__badge-sep']}>/</span>
            <span>Full-Stack Developer</span>
          </div>
          <h1 className={styles['hero__title']}>ALEXANDER<br/>ARASAWA</h1>
          <div className={styles['hero__sub']}>
            <span className={styles['hero__sub-indicator']}>$</span> building tools with purpose
          </div>
          <p className={styles['hero__desc']}>
            Specializing in <span className={styles['hero__desc-highlight']}>civic tech, nonprofit infrastructure,</span> and <span className={styles['hero__desc-highlight']}>geospatial applications</span>. Operating under Deep Phosphor Studios.
          </p>
        </motion.div>
      </section>

      <section id="about" className={styles['section']} aria-labelledby="about-heading" role="region">
        <SectionHeader label="History" title="SYSTEM INFO" id="about-heading" />
        <div className={styles['info']}>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles['info__body']}
          >
            <p>
              Applications support specialist currently optimizing system workflows at <strong className={styles['info__highlight']}>BHS</strong>. My background bridges direct user support with robust engineering solutions.
            </p>
            <p>
              As tech lead for <strong className={styles['info__highlight']}>Koyasan Beikoku Betsuin</strong>, I've modernized membership systems and document pipelines for one of Little Tokyo's most historic institutions.
            </p>
            <p>
              Focused on <strong className={styles['info__highlight']}>iterative delivery</strong>. I believe in thin, working slices of software that provide value immediately rather than protracted development cycles.
            </p>
          </motion.div>
          <div className={styles['info__stats']}>
            {[
              { label: 'Primary Focus', val: 'Full-Stack & ML Engineering' },
              { label: 'Agency', val: 'Deep Phosphor Studios' },
              { label: 'Location', val: 'San Gabriel Valley, CA' },
              { label: 'Salesforce', val: 'Innovator 2025 · 81 Badges' },
            ].map(stat => (
              <motion.div 
                key={stat.label}
                whileHover={{ x: 5 }}
                className={styles['info__stat-card']}
              >
                <div className={styles['info__stat-label']}>{stat.label}</div>
                <div className={styles['info__stat-value']}>{stat.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
