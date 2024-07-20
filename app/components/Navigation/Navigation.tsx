import React, { useEffect, useState } from 'react';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import WebNavigation from './WebNavigation/WebNavigation';

const Navigation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <MobileNavigation /> : <WebNavigation />;
};

export default Navigation;
