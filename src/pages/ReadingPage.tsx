import React from "react";
import { motion } from "motion/react";
import Bookshelf from "../components/Bookshelf";
import { SHELF_DATA } from "../lib/data";
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

const ReadingPage: React.FC = () => {
  const manga = SHELF_DATA.filter(b => b.genre === 'Manga');
  const fiction = SHELF_DATA.filter(b => b.genre === 'Fiction');
  const tech = SHELF_DATA.filter(b => b.genre === 'Technical');

  return (
    <section id="reading" className={styles['section']} aria-labelledby="reading-heading" role="region">
      <SectionHeader label="Library" title="BOOKSHELF" id="reading-heading" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <Bookshelf category="Manga" books={manga} />
        <Bookshelf category="Fiction" books={fiction} />
        <Bookshelf category="Technical" books={tech} />
      </div>
    </section>
  );
};

export default ReadingPage;
