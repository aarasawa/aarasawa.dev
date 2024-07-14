'use client'
import Navigation from '../Navigation/Navigation';
import MobileDosTabs from './MobileDosTabs';
import styles from './MobileProjectsView.module.css';

const MobileProjectsView: React.FC = () => (
  <div className={styles.container}>
    <Navigation />
    <MobileDosTabs />
  </div>
);

export default MobileProjectsView;