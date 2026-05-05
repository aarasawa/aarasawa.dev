import React, { useState, useEffect } from 'react';
import styles from '../styles/CookieConsent.module.scss';
import ReactGA from "react-ga4";

interface CookieConsentProps {
  onOpenPrivacy?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ 
  onOpenPrivacy = () => { window.location.href = '/privacy'; }
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      initializeGA();
    }
  }, []);

  const initializeGA = () => {
    const GA_MEASUREMENT_ID = (import.meta as any).env.VITE_GA_MEASUREMENT_ID;
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    initializeGA();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles['consent-banner']} role="alert" aria-live="polite">
      <div className={styles['consent-banner__content']}>
        <h2 className={styles['consent-banner__title']}>Privacy Transmission</h2>
        <p className={styles['consent-banner__text']}>
          This terminal uses cookies to analyze traffic and optimize system performance via Google Analytics. 
          Under the California Consumer Privacy Act (CCPA), you have the right to opt-out. 
          Read our <button onClick={onOpenPrivacy} className="inline-link" style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>Privacy Policy</button> for full disclosure.
        </p>
      </div>
      <div className={styles['consent-banner__actions']}>
        <button 
          onClick={handleDecline} 
          className={`${styles['consent-banner__btn']} ${styles['consent-banner__btn--decline']}`}
          aria-label="Decline non-essential cookies"
        >
          Opt-Out
        </button>
        <button 
          onClick={handleAccept} 
          className={`${styles['consent-banner__btn']} ${styles['consent-banner__btn--accept']}`}
          aria-label="Accept all cookies"
        >
          Initialize
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
