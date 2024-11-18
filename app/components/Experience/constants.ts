export const STARTUP_DELAY = 1000; // ms
export const MEMORY_CHECK_INTERVAL = 50; // ms
export const MEMORY_INCREMENT = 1024; // KB

export const WINDOW_POSITIONS = {
  TOP_OFFSET: 8,
  LEFT_OFFSET: 8,
  INCREMENT: 20
};

export const ICONS = {
  EXPERIENCE: {
    symbol: '[E]',
    name: 'Experience'
  },
  PROJECTS: {
    symbol: '[P]',
    name: 'Projects'
  }
} as const;

export const COLORS = {
  PRIMARY: 'amber-500',
  HOVER: 'amber-600',
  TEXT: 'black',
  BACKGROUND: 'black'
} as const;

export const TRANSITIONS = {
  DEFAULT: 'transition-opacity duration-1000'
} as const;