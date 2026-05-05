/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ReactGA from "react-ga4";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieConsent from "./components/CookieConsent";

import HomePage from "./pages/HomePage";
import NowPage from "./pages/NowPage";
import ProjectsPage from "./pages/ProjectsPage";
import ReadingPage from "./pages/ReadingPage";
import CinemaPage from "./pages/CinemaPage";
import WritingPage from "./pages/WritingPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

import styles from "./App.module.scss";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const PRIMARY_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' }
  ];

  const SECONDARY_LINKS = [
    { label: 'Writing', path: '/writing' },
    { label: 'Reading', path: '/reading' },
    { label: 'Cinema', path: '/cinema' },
    { label: 'Now', path: '/now' },
  ];

  useEffect(() => {
    setMounted(true);
    // Track page views with GA4
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    
    setIsMenuOpen(false);
    setIsLogsOpen(false);
  }, [location]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLogsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles['app']}>
      <div className="noise-layer" />
      
      {/* Navigation */}
      <nav className={styles['app__nav']} role="navigation" aria-label="Main Navigation">
        <div className={styles['app__nav-container']}>
          <Link 
            to="/" 
            className={styles['app__logo']}
            aria-label="Alex Arasawa - Return to Homepage"
          >
            ALEXANDER<span className={`${styles['app__cursor']} cursor-blink`} aria-hidden="true" />
          </Link>

          <button 
            className={styles['app__nav-mobile-toggle']}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={styles['app__nav-links']}>
            {PRIMARY_LINKS.map(link => (
              <Link 
                key={link.label} 
                to={link.path}
                className={`${styles['app__nav-link']} ${location.pathname === link.path ? styles['app__nav-link--active'] : ''}`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Logs Dropdown */}
            <div className={styles['app__nav-dropdown']} ref={dropdownRef}>
              <button 
                className={`${styles['app__nav-link']} ${styles['app__nav-dropdown-trigger']} ${SECONDARY_LINKS.some(l => l.path === location.pathname) ? styles['app__nav-link--active'] : ''}`}
                onClick={() => setIsLogsOpen(!isLogsOpen)}
                aria-expanded={isLogsOpen}
              >
                Logs
              </button>
              <AnimatePresence>
                {isLogsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={styles['app__nav-dropdown-content']}
                  >
                    {SECONDARY_LINKS.map(link => (
                      <Link 
                        key={link.label} 
                        to={link.path}
                        className={`${styles['app__nav-dropdown-item']} ${location.pathname === link.path ? styles['app__nav-dropdown-item--active'] : ''}`}
                        onClick={() => setIsLogsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={styles['app__mobile-menu']}
          >
            <div className={styles['app__mobile-menu-header']}>
              <Link to="/" className={styles['app__logo']} onClick={() => setIsMenuOpen(false)}>
                ALEX<span className={`${styles['app__cursor']} cursor-blink`} />
              </Link>
              <button 
                className={styles['app__nav-mobile-toggle']} 
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className={styles['app__mobile-menu-links']}>
              <div className={styles['app__mobile-menu-section']}>
                <div className={styles['app__mobile-menu-label']}>Primary</div>
                {PRIMARY_LINKS.map(link => (
                  <Link 
                    key={link.label} 
                    to={link.path}
                    className={`${styles['app__mobile-menu-link']} ${location.pathname === link.path ? styles['app__mobile-menu-link--active'] : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles['app__mobile-menu-link-prefix']}>//</span> {link.label}
                  </Link>
                ))}
              </div>

              <div className={styles['app__mobile-menu-section']}>
                <div className={styles['app__mobile-menu-label']}>Logs</div>
                {SECONDARY_LINKS.map(link => (
                  <Link 
                    key={link.label} 
                    to={link.path}
                    className={`${styles['app__mobile-menu-link']} ${location.pathname === link.path ? styles['app__mobile-menu-link--active'] : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles['app__mobile-menu-link-prefix']}>//</span> {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={styles['app__main']} id="main-content">
        {showPrivacy ? (
          <div className={styles['post-view']}>
            <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/now" element={<NowPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/cinema" element={<CinemaPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        )}
      </main>

      <footer className={styles['app__footer']}>
        <div className={styles['app__footer-container']}>
          <div className={styles['app__footer-copy']}>
            © 2026 <span className={styles['app__footer-agency']}>Deep Phosphor Studios</span>
            <span className={styles['app__footer-dot']} />
            All Rights Reserved
            <span className={styles['app__footer-dot']} />
            <button 
              onClick={() => setShowPrivacy(true)}
              className="inline-link"
              style={{ background: 'none', border: 'none', color: 'inherit', textShadow: 'inherit', cursor: 'pointer', padding: 0 }}
            >
              Privacy Policy & CCPA
            </button>
          </div>
          <div className={styles['app__footer-sig']}>
            ARASAWA.DEV
          </div>
        </div>
      </footer>

      <CookieConsent onOpenPrivacy={() => setShowPrivacy(true)} />
    </div>
  );
}
