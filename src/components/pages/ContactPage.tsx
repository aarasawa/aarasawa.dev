import React from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import styles from "../../App.module.scss";

const SectionHeader = ({ label, title, id }: { label: string; title: string; id?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={styles['section__header']}
  >
    <div className={styles['section__label']}>
      // {label}
    </div>
    <h2 className={styles['section__title']} id={id}>
      {title}
    </h2>
  </motion.div>
);

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className={styles['section']} aria-labelledby="contact-heading" role="region">
      <SectionHeader label="Output" title="CONNECT" id="contact-heading" />
      <div className={styles['contact__shell']}>
        <div className={styles['contact__shell-bar']}>
          <div className={styles['contact__shell-dots']}>
            <div className={styles['contact__shell-dot']} />
            <div className={styles['contact__shell-dot']} />
            <div className={styles['contact__shell-dot']} />
          </div>
          <span className={styles['contact__shell-title']}>contact.sh</span>
        </div>
        <div className={styles['contact__shell-body']}>
          <div className={styles['contact__shell-line']}>
            <div className={styles['contact__shell-prompt']}>
              <span className={styles['contact__shell-indicator']}>$</span>
              <span className={styles['contact__shell-cmd']}>echo $EMAIL</span>
            </div>
            <div className={styles['contact__shell-output']}>
              <a href="mailto:aarasawa@gmail.com" className={styles['contact__shell-link']}>aarasawa@gmail.com</a>
            </div>
          </div>
          <div className={styles['contact__shell-line']}>
            <div className={styles['contact__shell-prompt']}>
              <span className={styles['contact__shell-indicator']}>$</span>
              <span className={styles['contact__shell-cmd']}>echo $GITHUB</span>
            </div>
            <div className={styles['contact__shell-output']}>
              <a href="https://www.github.com/aarasawa" target="_blank" className={styles['contact__shell-link']}>github.com/aarasawa</a>
            </div>
          </div>
          <div className={styles['contact__shell-line']}>
            <div className={styles['contact__shell-prompt']}>
              <span className={styles['contact__shell-indicator']}>$</span>
              <span className={styles['contact__shell-cmd']}>echo $LINKEDIN</span>
            </div>
            <div className={styles['contact__shell-output']}>
              <a href="https://www.linkedin.com/in/alexarasawa" target="_blank" className={styles['contact__shell-link']}>linkedin.com/in/alexarasawa</a>
            </div>
          </div>
          <div className={styles['contact__shell-location']}>
            <MapPin className={styles['contact__shell-icon']} />
            <span>Arcadia, CA · LA Metro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
