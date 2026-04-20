import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectorCarousel from "../components/ProjectorCarousel";
import { PROJECT_DATA } from "../lib/data";
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

const ProjectsPage: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECT_DATA.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return PROJECT_DATA;
    return PROJECT_DATA.filter(p => 
      selectedTags.every(t => p.tags.includes(t))
    );
  }, [selectedTags]);

  return (
    <section id="projects" className={styles['section']} aria-labelledby="projects-heading" role="region">
      <SectionHeader label="Files" title="PROJECT ARCHIVE" id="projects-heading" />
      
      <div className={styles['filter-bar']}>
        <div className={styles['filter-bar__header']}>
          <span className={styles['filter-bar__label']}>SELECT_TECH_STACK_FILTERS:</span>
          {selectedTags.length > 0 && (
            <button 
              className={styles['filter-bar__clear']}
              onClick={() => setSelectedTags([])}
            >
              [CLEAR_ALL]
            </button>
          )}
        </div>
        <div className={styles['filter-bar__tags']}>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`${styles['filter-bar__tag']} ${selectedTags.includes(tag) ? styles['filter-bar__tag--active'] : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={JSON.stringify(selectedTags)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.length > 0 ? (
            <ProjectorCarousel projects={filteredProjects} />
          ) : (
            <div className={styles['empty_state']}>
              <div className={styles['empty_state__box']}>
                <span className={styles['empty_state__code']}>ERROR 404: NO_MATCHES_FOUND</span>
                <p className={styles['empty_state__text']}>The requested archival filter yielded zero results. Please broaden your search parameters.</p>
                <button onClick={() => setSelectedTags([])} className={styles['hero__cta']}>RESET FILTERS</button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPage;
