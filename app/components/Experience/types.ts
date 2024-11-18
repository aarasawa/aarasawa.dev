'use client';

// Types
export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  location?: string;
  technologies?: string[];
}

export interface Project {
  title: string;
  tech: string[];
  period: string;
  details: string[];
  github?: string;
  liveUrl?: string;
  role?: string;
  teamSize?: number;
}

export type WindowType = 'Experience' | 'Projects';

export interface WindowState {
  id: string;
  type: WindowType;
  isMinimized: boolean;
  isMaximized: boolean;
  isActive: boolean;
  position: { x: number; y: number };
}

export interface DragState {
  isDragging: boolean;
  initialX: number;
  initialY: number;
  windowX: number;
  windowY: number;
}

// Constants
export const STARTUP_COOKIE = 'crt_startup_complete';
export const COOKIE_DURATION = 7;
export const ICONS = {
  EXPERIENCE: { symbol: '[E]', name: 'Experience' },
  PROJECTS: { symbol: '[P]', name: 'Projects' }
} as const;