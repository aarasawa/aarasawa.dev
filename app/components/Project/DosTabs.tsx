import React, { useState } from 'react';
import styles from './DosTabs.module.css'

const DosTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button className={styles.tabButton} onClick={() => openTab('Open Library')}>OL</button>
        <button className={styles.tabButton} onClick={() => openTab('AgriGuard Insight')}>AgriGuard Insight</button>
        <button className={styles.tabButton} onClick={() => openTab('Wix Studio Challenge')}>Wix Studio Challenge</button>
        <button className={styles.tabButton} onClick={() => openTab('AgriTag')}>AgriTag</button>
        <button className={styles.tabButton} onClick={() => openTab('Pesticide Notification System')}>Pesticide Notification System</button>
        <button className={styles.tabButton} onClick={() => openTab('Project SwampFish')}>Project SwampFish</button>
      </div>
      <div className={styles.tabContent} style={{ display: activeTab === 'OL' ? 'block' : 'none'}}>
        Welcome to the Open Library
      </div>
      <div className={styles.tabContent} style={{ display: activeTab === 'AgriGuard Insight' ? 'block' : 'none' }}>
        About us information goes here.
      </div>
      <div className={styles.tabContent} style={{ display: activeTab === 'Wix Studio Challenge' ? 'block' : 'none' }}>
        About us information goes here.
      </div>
      <div className={styles.tabContent} style={{ display: activeTab === 'AgriTag' ? 'block' : 'none' }}>
        About us information goes here.
      </div>
      <div className={styles.tabContent} style={{ display: activeTab === 'Pesticide Notification System' ? 'block' : 'none' }}>
        Welcome to the Home page.
      </div>
      <div className={styles.tabContent} style={{ display: activeTab === 'Project SwampFish' ? 'block' : 'none' }}>
        Details of services offered.
      </div>
    </div>
  );
};

export default DosTabs;
