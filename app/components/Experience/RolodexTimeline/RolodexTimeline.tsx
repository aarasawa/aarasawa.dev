import React, { useState } from 'react';
import styles from './RolodexTimeline.module.css';

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface GEMRolodexTimelineProps {
  experiences: Experience[];
}

const GEMRolodexTimeline: React.FC<GEMRolodexTimelineProps> = ({ experiences }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : experiences.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < experiences.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={styles.gemWindow}>
      <div className={styles.gemTitleBar}>
        <div className={styles.gemTitleBarText}>Professional Experience</div>
        <div className={styles.gemCloseButton}>×</div>
      </div>
      <div className={styles.gemWindowContent}>
        <div className={styles.gemCard}>
          <div className={styles.gemCardContent}>
            <h3 className={styles.gemCompany}>{experiences[currentIndex].company}</h3>
            <h4 className={styles.gemRole}>{experiences[currentIndex].role}</h4>
            <p className={styles.gemPeriod}>{experiences[currentIndex].period}</p>
            <ul className={styles.gemDescription}>
              {experiences[currentIndex].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.gemControls}>
          <button onClick={handlePrev} className={styles.gemButton}>Previous</button>
          <button onClick={handleNext} className={styles.gemButton}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default GEMRolodexTimeline;