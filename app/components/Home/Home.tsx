'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Home.module.css';
import Preloader from '../Preloader/preloader';
import { getCookie } from 'cookies-next';

const nav = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Home: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);

  useEffect(() => {
    const hasSeenPreloader = getCookie('hasSeenPreloader');
    if (hasSeenPreloader) {
      setShowPreloader(false);
    }
  }, []);

  const handlePreloaderComplete = (): void => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className={styles.homeDiv}>
      <h1 className={styles.homeTitle}>
        Alexander Arasawa
      </h1>

      <nav className={styles.homeNav}>
        <ul className={styles.homeNavUl}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.homeLink}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;