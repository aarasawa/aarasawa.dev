import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import ReactGA from "react-ga4";
import styles from "../App.module.scss";

interface NavProps {
  currentPath: string;
}

const PRIMARY_LINKS = [
  { label: "Home",     path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Resume",   path: "/resume" },
  { label: "Contact",  path: "/contact" },
];

const SECONDARY_LINKS = [
  { label: "Writing", path: "/writing" },
  { label: "Reading", path: "/reading" },
  { label: "Cinema",  path: "/cinema" },
  { label: "Now",     path: "/now" },
];

export default function Nav({ currentPath }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ReactGA.initialize("G-XXXXXXXXXX");
    ReactGA.send({ hitType: "pageview", page: currentPath });
  }, [currentPath]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsLogsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const isSecondaryActive = SECONDARY_LINKS.some(l => l.path === currentPath);

  return (
    <>
      <nav
        className={styles["app__nav"]}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className={styles["app__nav-container"]}>
          {/* Logo */}
          <a
            href="/"
            className={styles["app__logo"]}
            aria-label="Alex Arasawa - Return to Homepage"
          >
            ALEXANDER
            <span
              className={`${styles["app__cursor"]} cursor-blink`}
              aria-hidden="true"
            />
          </a>

          {/* Mobile toggle */}
          <button
            className={styles["app__nav-mobile-toggle"]}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop links */}
          <div className={styles["app__nav-links"]}>
            {PRIMARY_LINKS.map(link => (
              <a
                key={link.label}
                href={link.path}
                className={`${styles["app__nav-link"]} ${
                  currentPath === link.path ? styles["app__nav-link--active"] : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Logs dropdown */}
            <div className={styles["app__nav-dropdown"]} ref={dropdownRef}>
              <button
                className={`${styles["app__nav-link"]} ${styles["app__nav-dropdown-trigger"]} ${
                  isSecondaryActive ? styles["app__nav-link--active"] : ""
                }`}
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
                    className={styles["app__nav-dropdown-content"]}
                  >
                    {SECONDARY_LINKS.map(link => (
                      <a
                        key={link.label}
                        href={link.path}
                        className={`${styles["app__nav-dropdown-item"]} ${
                          currentPath === link.path
                            ? styles["app__nav-dropdown-item--active"]
                            : ""
                        }`}
                        onClick={() => setIsLogsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/*
        Mobile menu rendered as a sibling to <nav>, not inside it.
        This prevents the nav's stacking context from clipping the overlay.
        position: fixed + z-index: 1000 ensures it covers everything.
      */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={styles["app__mobile-menu"]}
          >
            <div className={styles["app__mobile-menu-header"]}>
              <a
                href="/"
                className={styles["app__logo"]}
                onClick={() => setIsMenuOpen(false)}
              >
                ALEX
                <span className={`${styles["app__cursor"]} cursor-blink`} />
              </a>
              <button
                className={styles["app__nav-mobile-toggle"]}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className={styles["app__mobile-menu-links"]}>
              <div className={styles["app__mobile-menu-section"]}>
                <div className={styles["app__mobile-menu-label"]}>Primary</div>
                {PRIMARY_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.path}
                    className={`${styles["app__mobile-menu-link"]} ${
                      currentPath === link.path
                        ? styles["app__mobile-menu-link--active"]
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles["app__mobile-menu-link-prefix"]}>//</span>{" "}
                    {link.label}
                  </a>
                ))}
              </div>

              <div className={styles["app__mobile-menu-section"]}>
                <div className={styles["app__mobile-menu-label"]}>Logs</div>
                {SECONDARY_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.path}
                    className={`${styles["app__mobile-menu-link"]} ${
                      currentPath === link.path
                        ? styles["app__mobile-menu-link--active"]
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles["app__mobile-menu-link-prefix"]}>//</span>{" "}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}