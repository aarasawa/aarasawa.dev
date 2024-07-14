import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import styles from './ProjectDescriptions.module.css';

export const OpenLib: React.FC = () => (
  <div>
    <h1 className={styles.centered}>Internet Archive's Open Library</h1>
    <h3 className={styles.descriptionSubtitle}>What is Open Library?</h3>
    <p className={styles.description}>
      Open Library is a collaborative open-source initiative for a universal catalog for book metadata. 
      The goal is create a web page for every book ever published. Anyone can contribute to the Open Library catalog.
    </p>
    <h3 className={styles.contributionSubtitle}>Contributions:</h3>
    <p className={styles.description}>
      I contribute to the project as a developer. In collaboration with other contributors, work on issues presented on the GitHub.
      Recently, redesign and implement a sort options dropdown menu under the search page.
    </p>
    <Link className={styles.repo} href='https://github.com/internetarchive/openlibrary'>
      <Github className={styles.ghicon}/> Open Library Repository
    </Link>
  </div>
)

export const AgriGuard: React.FC = () => (
  <div>
    <h1 className={styles.centered}>AgriGuard Insight</h1>
  </div>
);

export const PhotoFilm: React.FC = () => (
  <div>
    <h1 className={styles.centered}>PhotoFilm.dev</h1>
  </div>
)

export const AgriTag: React.FC = () => (
  <div>
    <h1 className={styles.centered}>AgriTag</h1>
  </div>
);

export const PesticideNOI: React.FC = () => (
  <div>
    <h1 className={styles.centered}>Pesticide Notification System</h1>
  </div>
);

export const ProjectSwampfish: React.FC = () => (
  <div>
    <h1 className={styles.centered}>Project SwampFish</h1>
  </div>
);