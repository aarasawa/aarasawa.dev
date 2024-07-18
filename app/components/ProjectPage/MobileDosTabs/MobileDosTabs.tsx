import React, { useState } from 'react';
import { OpenLib, AgriGuard, PhotoFilm, AgriTag, PesticideNOI, ProjectSwampfish } from '../ProjectDescriptions/ProjectDescriptions';
import styles from './MobileDosTabs.module.css';

const MobileDosTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Open Library');
  const [menuOpen, setMenuOpen] = useState(false);

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
    setMenuOpen(false);
  };

  const handleSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
    const direction = e.changedTouches[0].clientX > e.targetTouches[0].clientX ? 1 : -1;
    const tabOrder = ['Open Library', 'AgriGuard Insight', 'Wix Studio Challenge', 'AgriTag', 'Pesticide Notification System', 'Project SwampFish'];
    let newIndex = tabOrder.indexOf(activeTab) + direction;
    if (newIndex < 0) newIndex = tabOrder.length - 1;
    if (newIndex >= tabOrder.length) newIndex = 0;
    openTab(tabOrder[newIndex]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topPane}>
        <span>PROJECT DESCRIPTIONS</span>
      </div>
      <div className={styles.content} onTouchEnd={handleSwipe}>
        <div className={`${styles.tabContent} ${activeTab === 'Open Library' ? styles.active : ''}`}>
          <OpenLib />
        </div>
        <div className={`${styles.tabContent} ${activeTab === 'AgriGuard Insight' ? styles.active : ''}`}>
          <AgriGuard />
        </div>
        <div className={`${styles.tabContent} ${activeTab === 'Wix Studio Challenge' ? styles.active : ''}`}>
          <PhotoFilm />
        </div>
        <div className={`${styles.tabContent} ${activeTab === 'AgriTag' ? styles.active : ''}`}>
          <AgriTag />
        </div>
        <div className={`${styles.tabContent} ${activeTab === 'Pesticide Notification System' ? styles.active : ''}`}>
          <PesticideNOI />
        </div>
        <div className={`${styles.tabContent} ${activeTab === 'Project SwampFish' ? styles.active : ''}`}>
          <ProjectSwampfish />
        </div>
      </div>
      <button className={styles.floatingButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '⮝ MORE' : '⮟ MORE'}
      </button>
      {menuOpen && (
        <div className={styles.menu}>
          <button className={styles.menuItem} onClick={() => openTab('Open Library')}>Open Library</button>
          <button className={styles.menuItem} onClick={() => openTab('AgriGuard Insight')}>AgriGuard Insight</button>
          <button className={styles.menuItem} onClick={() => openTab('Wix Studio Challenge')}>Wix Studio Challenge</button>
          <button className={styles.menuItem} onClick={() => openTab('AgriTag')}>AgriTag</button>
          <button className={styles.menuItem} onClick={() => openTab('Pesticide Notification System')}>Pesticide Notification System</button>
          <button className={styles.menuItem} onClick={() => openTab('Project SwampFish')}>Project SwampFish</button>
        </div>
      )}
    </div>
  );
};

export default MobileDosTabs;
