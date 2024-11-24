'use client';

import React from 'react';
import styles from './CRTDisplay.module.css';
import { WindowState, ICONS } from './types';

interface TaskbarProps {
  windows: WindowState[];
  onWindowClick: (id: string) => void;
  systemTime: string;
}

const Taskbar = ({
    windows,
    onWindowClick,
    systemTime
  }: {
    windows: WindowState[];
    onWindowClick: (id: string) => void;
    systemTime: string;
  }) => (
    <div className={styles.taskbar}>
      <div className={styles.startButton}>START</div>
      <div className={styles.divider} />
      {windows.map((window) => (
        <div
          key={window.id}
          className={`${styles.taskbarItem} ${window.isActive ? styles.active : ''} ${
            window.isMinimized ? styles.minimized : ''
          }`}
          onClick={() => onWindowClick(window.id)}
          title={window.isMinimized ? "Restore" : "Minimize"}
        >
          {window.type === 'Experience' ? ICONS.EXPERIENCE.symbol : ICONS.PROJECTS.symbol}
          {window.type}
        </div>
      ))}
      <div className={styles.systemInfo}>
        <div>CPU: 486DX/66</div>
        <div className={styles.clock}>{systemTime}</div>
      </div>
    </div>
  );

export default Taskbar;