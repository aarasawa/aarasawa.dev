import React from 'react';
import styles from './MarkdownPost.module.scss';
import { Terminal, Shield, Lock, Eye } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className={styles['markdown-post']}>
      <header className={styles['markdown-post__header']}>
        <div className={styles['markdown-post__meta']}>
          <div className={styles['markdown-post__meta-item']}>
            <Shield className={styles['markdown-post__meta-icon']} />
            Effective: April 17, 2026
          </div>
          <div className={styles['markdown-post__meta-item']}>
            <Lock className={styles['markdown-post__meta-icon']} />
            California Compliance
          </div>
        </div>
        <h1 className={styles['markdown-post__title']}>Privacy Protocol</h1>
        <p className={styles['markdown-post__description']}>
          Disclosures and rights regarding data collection under CCPA/CPRA.
        </p>
      </header>
      
      <div className={styles['markdown-post__content']}>
        <section>
          <h2>1. Data Extraction (Collection)</h2>
          <p>
            When you interact with this terminal, certain telemetry data is harvested. We collect:
          </p>
          <ul>
            <li><strong>Identifiers:</strong> IP address, unique device identifiers (via cookies).</li>
            <li><strong>Internet Activity:</strong> Navigation history, interaction with blog logs, and system referral data.</li>
            <li><strong>Geolocation Data:</strong> General location based on IP address.</li>
          </ul>
        </section>

        <section>
          <h2>2. Purposes of Processing</h2>
          <p>
            This data is used strictly for technical maintenance and performance analysis (e.g., determining which projects are most viewed). We do not build marketing profiles on you.
          </p>
        </section>

        <section>
          <h2>3. California Privacy Rights (CCPA/CPRA)</h2>
          <p>
            As a California resident, you have the following rights:
          </p>
          <ul>
            <li><strong>Right to Know:</strong> You can request a disclosure of what personal information we have collected.</li>
            <li><strong>Right to Delete:</strong> You can request that we delete your technical data.</li>
            <li><strong>Right to Correct:</strong> You can request corrections to inaccurate personal data.</li>
            <li><strong>Right to Opt-Out:</strong> You have the right to opt-out of the "sale" or "sharing" of your data for analytics. We respect your choice via the "Opt-Out" button on our initialization banner.</li>
          </ul>
        </section>

        <section>
          <h2>4. Do Not Sell or Share My Personal Information</h2>
          <p>
            We do not sell your personal information for monetary value. However, the use of Google Analytics may be considered "sharing" for cross-contextual behavioral advertising under California law. By choosing "Opt-Out" on our cookie banner, you are exercising your right to stop this sharing.
          </p>
        </section>

        <section>
          <h2>5. Security Protocol</h2>
          <p>
            We implement industry-standard encryption and access controls to ensure your telemetry data remains within safe parameters.
          </p>
        </section>

        <div className={styles['markdown-post__code-container']}>
          <div className={styles['markdown-post__code-header']}>
            <Terminal className={styles['markdown-post__code-icon']} />
            <span className={styles['markdown-post__code-label']}>Compliance Statement</span>
          </div>
          <pre className={styles['markdown-post__code-pre']}>
            <code className={styles['markdown-post__code-block']}>
{`SYSTEM_STATUS: COMPLIANT
LAW_FRAMEWORK: CCPA_CPRA_2026
USER_LOCATION: CALIFORNIA_US
CONSENT_REQUIRED: TRUE`}
            </code>
          </pre>
        </div>
      </div>

      <footer className={styles['markdown-post__footer']}>
        <button 
          onClick={onClose}
          className={styles['markdown-post__back-btn']}
          aria-label="Return to system"
        >
          <span aria-hidden="true">{'<'}</span> Exit Protocol
        </button>
        <span className={styles['markdown-post__footer-label']}>End of Disclosure</span>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
