'use client'
import Navigation from '../Navigation/Navigation';
import DosTabs from './DosTabs';
import styles from './WebProjects.module.css';

const WebProjects: React.FC = () => (
  <div className={styles.container}>
    <Navigation />
    <DosTabs />
  </div>
);

export default WebProjects;