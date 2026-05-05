import React from "react";
import { motion } from "motion/react";
import FilmArchive from "../FilmArchive";
import { FILM_DATA } from "../../lib/data";
import styles from "../../styles/CinemaPage.module.scss";
import appStyles from "../../App.module.scss";

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
  const films = FILM_DATA.filter((f: { status?: string }) => f.status === 'Films');
  const shows = FILM_DATA.filter((f: { status?: string }) => f.status === 'Shows');
  
  return (
    <section id="cinema" className={styles['section']} aria-labelledby="cinema-heading" role="region">
      <SectionHeader 
        label="Archives" 
        title="Media Archives" 
        id="cinema-heading" 
      />
      
      <div className={styles['layout']}>
        <FilmArchive category="Films" films={films} />
        <FilmArchive category="Shows" films={shows} />
      </div>
    </section>
  );
};

export default CinemaPage;
