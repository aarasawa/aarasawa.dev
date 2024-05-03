import React from 'react';

export interface ProjectCardProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  handle: string;
  onClick?: () => void;
}