'use client'
import Navigation from '../../Navigation/Navigation';
import DosTabs from '../WebDosTabs/WebDosTabs';
import styles from './WebProjectsView.module.css';

const WebProjects: React.FC = () => (
  <div className={styles.container}>
    <Navigation />
    <DosTabs />
  </div>
);

export default WebProjects;