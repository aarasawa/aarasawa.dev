import React from 'react';
import Link from 'next/link';
import styles from './WebNavigation.module.css';

const WebNavigation: React.FC = () => {
  const navigation = [
    { name: 'PROJECTS', href: '/projects' },
    { name: 'EXPERIENCE', href: '/experience'},
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.navLinks}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navItem}>
              {item.name}
            </Link>
          ))}
        </span>
        <span className={styles.homeBtn}>
          <Link href="/home" className={styles.navItem}>
            HOME
          </Link>
        </span>
      </div>
    </header>
  );
};

export default WebNavigation;
