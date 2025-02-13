import React, { useState } from 'react';
import { OpenLib, AgriGuard, AgriTag, PesticideNOI, ProjectSwampfish } from '../ProjectDescriptions/ProjectDescriptions';
import styles from './WebDosTabs.module.css';

const DosTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Open Library');

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topPane}>
        <span>PROJECT DESCRIPTIONS</span>
        <span className={styles.closeButton}>&times;</span>
      </div>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <button className={styles.tabButton} onClick={() => openTab('Open Library')}>Open Library</button>
          <button className={styles.tabButton} onClick={() => openTab('AgriGuard Insight')}>AgriGuard Insight</button>
          <button className={styles.tabButton} onClick={() => openTab('AgriTag')}>AgriTag</button>
          <button className={styles.tabButton} onClick={() => openTab('Pesticide Notification System')}>Pesticide Notification System</button>
          <button className={styles.tabButton} onClick={() => openTab('Project SwampFish')}>Project SwampFish</button>
        </div>
        <div className={styles.tabContent} style={{ display: activeTab === 'Open Library' ? 'block' : 'none' }}>
          <OpenLib />
        </div>
        <div className={styles.tabContent} style={{ display: activeTab === 'AgriGuard Insight' ? 'block' : 'none' }}>
          <AgriGuard />
        </div>
        <div className={styles.tabContent} style={{ display: activeTab === 'AgriTag' ? 'block' : 'none' }}>
          <AgriTag />
        </div>
        <div className={styles.tabContent} style={{ display: activeTab === 'Pesticide Notification System' ? 'block' : 'none' }}>
          <PesticideNOI />
        </div>
        <div className={styles.tabContent} style={{ display: activeTab === 'Project SwampFish' ? 'block' : 'none' }}>
          <ProjectSwampfish />
        </div>
      </div>
    </div>
  );
};

export default DosTabs;
