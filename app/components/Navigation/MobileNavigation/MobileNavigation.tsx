import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import Link from 'next/link';
import styles from './MobileNavigation.module.css';

interface MobileNavigationProps {
  onSelectProject: (project: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onSelectProject
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const navigation = [
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (href: string) => {
    setActiveTab(href);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {isMenuOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
      <div className={styles.container}>
        <span className={styles.menuButtonContainer}>
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </span>
        <span className={styles.homeButtonContainer}>
          <Link href="/home" passHref>
            <button className={styles.homeButton}>
              <Home />
            </button>
          </Link>
        </span>
      </div>
      {isMenuOpen && (
        <div className={styles.menu}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <button
                className={`${styles.menuItem} ${activeTab === item.href ? styles.activeTab : ''}`}
                onClick={() => handleTabClick(item.href)}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default MobileNavigation;
