import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import styles from './MobileNavigation.module.css';

const MobileNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const navigation = [
    { name: 'HOME', href: '/home' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
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
      {isMenuOpen && <div className={styles.backdrop}></div>}
      <div className={styles.container}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        {isMenuOpen && (
          <div className={styles.menu}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.menuItem} ${activeTab === item.href ? styles.activeTab : ''}`}
                onClick={() => handleTabClick(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileNavigation;
