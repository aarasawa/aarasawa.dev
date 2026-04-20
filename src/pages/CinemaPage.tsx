import React from "react";
import { motion } from "motion/react";
import FilmArchive from "../components/FilmArchive";
import { FILM_DATA } from "../lib/data";
import styles from "./CinemaPage.module.scss";
import appStyles from "../App.module.scss";

const SectionHeader = ({ label, title, id }: { label: string; title: string; id?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={appStyles['section__header']}
  >
    <div className={appStyles['section__label']}>
      // {label}
    </div>
    <h2 className={appStyles['section__title']} id={id}>
      {title}
    </h2>
  </motion.div>
);

const CinemaPage: React.FC = () => {
  // Categorize films for different archives
  const masterpieces = FILM_DATA.filter(f => f.status === 'Masterpiece');
  const classics = FILM_DATA.filter(f => f.status === 'Classic');
  
  return (
    <section id="cinema" className={styles['section']} aria-labelledby="cinema-heading" role="region">
      <SectionHeader 
        label="Archives" 
        title="CINEMATHEQUE" 
        id="cinema-heading" 
      />
      
      <div className={styles['layout']}>
        <FilmArchive category="Masterpieces" films={masterpieces} />
        <FilmArchive category="Essential Classics" films={classics} />
      </div>
    </section>
  );
};

export default CinemaPage;
