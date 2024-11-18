'use client';

import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import styles from './CRTDisplay.module.css';

type WindowType = 'Experience' | 'Projects';

interface WindowState {
  id: string;
  type: WindowType;
  isMinimized: boolean;
  isMaximized: boolean;
  isActive: boolean;
  position: { x: number; y: number };
}

const Window = ({ 
  id, 
  title, 
  children, 
  isActive, 
  isMinimized, 
  isMaximized, 
  position, 
  index,
  onMinimize,
  onMaximize,
  onClose,
  onActivate
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  index: number;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onActivate: () => void;
}) => {
  const style = {
    top: isMaximized ? '65px' : `${position.y}px`,
    left: isMaximized ? '0' : `${position.x}px`,
    width: isMaximized ? '100%' : '80%',
    height: isMaximized ? 'calc(100vh - 105px)' : 'auto',
    zIndex: isActive ? 100 : index
  };

  if (isMinimized) {
    return null;
  }

  return (
    <div 
      className={`${styles.window} ${isActive ? styles.active : ''}`}
      style={style}
      onClick={onActivate}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowTitle}>
          <span>{title}</span>
        </div>
        <div className={styles.windowControls}>
          <button onClick={(e) => { e.stopPropagation(); onMinimize(); }} className={styles.windowButton}>
            <Minus size={14} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onMaximize(); }} className={styles.windowButton}>
            {isMaximized ? <Square size={14} /> : <Maximize2 size={14} />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className={styles.windowButton}>
            <X size={14} />
          </button>
        </div>
      </div>
      <div className={`${styles.windowContent} ${isMaximized ? styles.maximized : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Taskbar = ({
  windows,
  onWindowClick
}: {
  windows: WindowState[];
  onWindowClick: (id: string) => void;
}) => (
  <div className={styles.taskbar}>
    {windows.map((window) => (
      <div
        key={window.id}
        className={`${styles.taskbarItem} ${window.isActive ? styles.active : ''}`}
        onClick={() => onWindowClick(window.id)}
      >
        {window.type}
      </div>
    ))}
  </div>
);

export default function CRTDisplay() {
  const [windows, setWindows] = useState<WindowState[]>([]);

  const handleWindowAction = useCallback((action: 'minimize' | 'maximize' | 'close' | 'activate', id: string) => {
    setWindows(prev => {
      return prev.map(window => {
        // For windows that aren't the target, just update active state
        if (window.id !== id) {
          return {
            ...window,
            isActive: false
          };
        }

        // For the target window, apply the requested action
        switch (action) {
          case 'minimize':
            return {
              ...window,
              isMinimized: !window.isMinimized,
              isActive: true
            };
          case 'maximize':
            return {
              ...window,
              isMaximized: !window.isMaximized,
              isActive: true
            };
          case 'close':
            return null;
          case 'activate':
            return {
              ...window,
              isActive: true,
              isMinimized: false
            };
          default:
            return window;
        }
      }).filter(Boolean) as WindowState[];
    });
  }, []);

  const handleIconClick = useCallback((windowType: WindowType) => {
    const id = `${windowType}-${Date.now()}`;
    setWindows(prev => {
      // Check if window of this type already exists
      const existingWindow = prev.find(w => w.type === windowType);
      if (existingWindow) {
        // If it exists, just activate it
        return prev.map(w => ({
          ...w,
          isActive: w.id === existingWindow.id,
          isMinimized: w.id === existingWindow.id ? false : w.isMinimized
        }));
      }

      // If it doesn't exist, create new window
      return [
        ...prev.map(w => ({ ...w, isActive: false })),
        {
          id,
          type: windowType,
          isMinimized: false,
          isMaximized: false,
          isActive: true,
          position: {
            x: 8 + (prev.length * 20),
            y: 8 + (prev.length * 20)
          }
        }
      ];
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.screen}>
          <div className={styles.content}>
            <div className={styles.desktop}>
              <div className={styles.iconGrid}>
                <div className={styles.icon} onClick={() => handleIconClick('Experience')}>
                  <div className={styles.iconSymbol}>[E]</div>
                  <div className={styles.iconText}>EXPERIENCE.EXE</div>
                </div>
                <div className={styles.icon} onClick={() => handleIconClick('Projects')}>
                  <div className={styles.iconSymbol}>[P]</div>
                  <div className={styles.iconText}>PROJECTS.EXE</div>
                </div>
              </div>

              {windows.map((window, index) => (
                <Window
                  key={window.id}
                  id={window.id}
                  title={`${window.type.toUpperCase()}.EXE`}
                  isActive={window.isActive}
                  isMinimized={window.isMinimized}
                  isMaximized={window.isMaximized}
                  position={window.position}
                  index={index}
                  onMinimize={() => handleWindowAction('minimize', window.id)}
                  onMaximize={() => handleWindowAction('maximize', window.id)}
                  onClose={() => handleWindowAction('close', window.id)}
                  onActivate={() => handleWindowAction('activate', window.id)}
                >
                  {window.type === 'Experience' ? (
                    <div>Experience Content</div>
                  ) : (
                    <div>Projects Content</div>
                  )}
                </Window>
              ))}
            </div>
            <Taskbar 
              windows={windows}
              onWindowClick={(id) => handleWindowAction('activate', id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}