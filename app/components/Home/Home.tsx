import React from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

const nav = [
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
];

function Home() {
  return (
    <div className={styles.homeDiv}>
      <h1 className={styles.homeTitle}>
        Alexander Arasawa
      </h1>
      <nav className={styles.homeNav}>
        <span className={styles.homeNavUl}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.homeLink}
            >
              {item.name}
            </Link>
          ))}
        </span>
      </nav>
    </div>
  );
}

export default Home;