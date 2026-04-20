import React from "react";
import { motion } from "motion/react";
import { 
  Terminal, 
  Database, 
  Cloud,
  Layers
} from "lucide-react";
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

const SkillGroup = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className={styles['skill-group']}
  >
    <div className={styles['skill-group__header']}>
      <Icon className={styles['skill-group__icon']} />
      <h3 className={styles['skill-group__title']}>
        {title}
      </h3>
    </div>
    <ul className={styles['skill-group__list']}>
      {skills.map(skill => (
        <li key={skill} className={styles['skill-group__item']}>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillsPage: React.FC = () => {
  return (
    <section id="skills" className={styles['section']} aria-labelledby="skills-heading" role="region">
      <SectionHeader label="Kernel" title="CORE STACK" id="skills-heading" />
      <div className={styles['skill-grid']}>
        <SkillGroup 
          title="Languages" 
          icon={Terminal}
          skills={['Python', 'TypeScript', 'SQL', 'Bash', 'HTML/CSS']} 
        />
        <SkillGroup 
          title="Backend" 
          icon={Database}
          skills={['FastAPI', 'PostgreSQL', 'Power Automate', 'REST APIs']} 
        />
        <SkillGroup 
          title="Frontend" 
          icon={Layers}
          skills={['React / Vite', 'Leaflet.js', 'Power Apps', 'Tailwind']} 
        />
        <SkillGroup 
          title="DevOps" 
          icon={Cloud}
          skills={['GCP', 'AWS', 'SCCM', 'PXE Imaging', 'Salesforce']} 
        />
      </div>
    </section>
  );
};

export default SkillsPage;
