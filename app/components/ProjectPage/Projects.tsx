'use client'
import { useEffect, useState } from 'react';
import MobileProjectsView from './MobileProjectsView';
import WebProjectsView from './WebProjectsView';

const ProjectsView: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
      {isMobile ? <MobileProjectsView /> : <WebProjectsView />}
    </div>
  );
};

export default ProjectsView;