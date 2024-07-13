'use client'
import { useEffect, useState } from 'react';
import MobileProjects from './MobileProjectView';
import WebProjects from './WebProjectView';

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
      {isMobile ? <MobileProjects /> : <WebProjects />}
    </div>
  );
};

export default ProjectsView;