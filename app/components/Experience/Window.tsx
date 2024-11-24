'use client';

import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import styles from '../CRTDisplay.module.css';

interface DragState {
  isDragging: boolean;
  initialX: number;
  initialY: number;
  initialWindowX: number;
  initialWindowY: number;
}

interface WindowProps {
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
  onPositionChange: (x: number, y: number) => void;
}

const Window = memo(({ 
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
  onActivate,
  onPositionChange
}: WindowProps) => {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    initialX: 0,
    initialY: 0,
    initialWindowX: 0,
    initialWindowY: 0
  });
  
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMaximized) return;
    
    const target = e.target as HTMLElement;
    if (!target.closest(`.${styles.windowHeader}`) || target.closest(`.${styles.windowControls}`)) {
      return;
    }

    onActivate();
    
    setDragState({
      isDragging: true,
      initialX: e.clientX,
      initialY: e.clientY,
      initialWindowX: position.x,
      initialWindowY: position.y
    });
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragState.isDragging) return;

    const deltaX = e.clientX - dragState.initialX;
    const deltaY = e.clientY - dragState.initialY;

    const newX = dragState.initialWindowX + deltaX;
    const newY = dragState.initialWindowY + deltaY;

    onPositionChange(newX, newY);
  }, [dragState, onPositionChange]);

  const handleMouseUp = useCallback(() => {
    if (dragState.isDragging) {
      setDragState(prev => ({ ...prev, isDragging: false }));
    }
  }, [dragState.isDragging]);

  useEffect(() => {
    if (dragState.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState.isDragging, handleMouseMove, handleMouseUp]);

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
      ref={windowRef}
      className={`${styles.window} ${isActive ? styles.active : ''} ${dragState.isDragging ? styles.dragging : ''}`}
      style={style}
      onMouseDown={handleMouseDown}
      onClick={() => !dragState.isDragging && onActivate()}
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
});

Window.displayName = 'Window';

export default Window;