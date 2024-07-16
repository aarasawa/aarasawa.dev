import React from 'react';
import { ExternalLink, GithubIcon } from 'lucide-react';
import styles from './ProjectDescriptions.module.css';

interface SectionComponentProps {
  title: string;
  descriptionSubtitle: string;
  contributionSubtitle: string;
  description: string;
  contribution: string;
  projectLink: string;
  repoLink: string;
}

const ProjectSection: React.FC<SectionComponentProps> = ({
  title, 
  descriptionSubtitle,
  contributionSubtitle,
  description,
  contribution,
  projectLink,
  repoLink
}) => {
  const projectBtnClick = () => {
    window.open(repoLink, '_blank');
  };

  const repoBtnClick = () => {
    window.open(repoLink, '_blank');
  }

  return (
    <div className={styles.innerTabContent}>
      <h1 className={styles.centeredTitle}>{title}</h1>
      <div className={styles.descriptionDiv}>
        <h3 className={styles.descriptionSubtitle}>{descriptionSubtitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.contributionDiv}>
        <h3 className={styles.contributionSubtitle}>{contributionSubtitle}</h3>
        <p className={styles.contributionDescription}>{contribution}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.centerButton} onClick={projectBtnClick}>
          <ExternalLink className={styles.ghicon}/>
          Project
        </button>
        <button className={styles.centerButton} onClick={repoBtnClick}>
          <GithubIcon className={styles.ghicon}/>
          GitHub
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;