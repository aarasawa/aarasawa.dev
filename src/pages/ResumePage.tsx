import React from "react";
import { motion } from "motion/react";
import { Printer } from "lucide-react";
import styles from "./ResumePage.module.scss";

const SectionHeader: React.FC<{ label: string }> = ({ label }) => (
  <div className={styles['resume__section-header']}>
    <span className={styles['resume__section-label']}>{label}</span>
  </div>
);

const ResumePage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles['resume']}
    >
      <div className={styles['resume__actions']}>
        <button 
          onClick={() => window.print()}
          className={styles['resume__export-btn']}
          title="Print or Save as PDF"
        >
          <Printer size={14} />
          EXPORT_PDF
        </button>
      </div>

      <header className={styles['resume__header']}>
        <h1 className={styles['resume__name']}>ALEXANDER ARASAWA</h1>
        <div className={styles['resume__summary']}>
          Systems-focused technology specialist with experience designing, administering, and integrating business-critical
          applications and SaaS infrastructure across multi-site, high traffic environments. Proven ability to bridge IT operations,
          workflow automation, financial platforms, and secure access governance.
        </div>
      </header>

      <section className={styles['resume__section']}>
        <SectionHeader label="PROFESSIONAL_EXPERIENCE" />

        <div className={styles['resume__item']}>
          <div className={styles['resume__item-header']}>
            <h3 className={styles['resume__role']}>Applications Support Analyst II</h3>
            <span className={styles['resume__date']}>Sept. 2024 - Present</span>
          </div>
          <div className={styles['resume__company']}>Behavioral Health Services, Inc.</div>
          <ul className={styles['resume__list']}>
            <li className={styles['resume__list-item']}>Design, build, and deploy internal application across full SDLC with JavaScript, SQL, Power Apps, and Power Automate</li>
            <li className={styles['resume__list-item']}>Administer and redesign company-wide SharePoint to improve information architecture and navigation for 22 locations</li>
            <li className={styles['resume__list-item']}>Architect and maintain API integrations with third-party vendors to automate compliance and revenue processes</li>
            <li className={styles['resume__list-item']}>Design relational data models and maintain replication architecture supporting 99.999% service uptime</li>
          </ul>
        </div>

        <div className={styles['resume__item']}>
          <div className={styles['resume__item-header']}>
            <h3 className={styles['resume__role']}>Full-Stack Developer & IT Consultant</h3>
            <span className={styles['resume__date']}>July 2023 - Present</span>
          </div>
          <div className={styles['resume__company']}>Deep Phosphor Studios</div>
          <ul className={styles['resume__list']}>
            <li className={styles['resume__list-item']}>Architect and administer SaaS infrastructure for nonprofit organization supporting ~$3M in annual operations</li>
            <li className={styles['resume__list-item']}>Build and maintain web platforms integrated with payment processors and CRM systems</li>
            <li className={styles['resume__list-item']}>Implement and manage Stripe and Aplos financial workflows for donation processing, reconciliation, and reporting</li>
            <li className={styles['resume__list-item']}>Consolidate and manage domain, DNS, hosting, and Google Workspace provisioning for organizational staff</li>
          </ul>
        </div>

        <div className={styles['resume__item']}>
          <div className={styles['resume__item-header']}>
            <h3 className={styles['resume__role']}>Open-Source Software Contributor</h3>
            <span className={styles['resume__date']}>Aug. 2022 - July 2024</span>
          </div>
          <div className={styles['resume__company']}>The Internet Archive</div>
          <ul className={styles['resume__list']}>
            <li className={styles['resume__list-item']}>Contributed to production systems serving 1M+ monthly users</li>
            <li className={styles['resume__list-item']}>Implemented reusable components and improved maintainability across shared codebases</li>
          </ul>
        </div>

        <div className={styles['resume__item']}>
          <div className={styles['resume__item-header']}>
            <h3 className={styles['resume__role']}>IT Support Specialist</h3>
            <span className={styles['resume__date']}>Aug. 2020 - May 2022</span>
          </div>
          <div className={styles['resume__company']}>University of California, Davis</div>
          <ul className={styles['resume__list']}>
            <li className={styles['resume__list-item']}>Lead Point-of-Sale infrastructure modernization across 50+ terminals and 3 retail locations</li>
            <li className={styles['resume__list-item']}>Coordinate hardware deployment, system configuration, and user access management for UC Davis</li>
            <li className={styles['resume__list-item']}>Author 12+ internal technical guides for end-users and executive management</li>
          </ul>
        </div>
      </section>

      <section className={styles['resume__section']}>
        <SectionHeader label="SELECTED_PROJECTS" />
        
        <div className={styles['resume__item']}>
          <strong className={styles['resume__project-title']}>Enterprise Purchase Order System</strong>
          <ul className={styles['resume__list']}>
            <li className={styles['resume__list-item']}>Design role-based procurement workflow with automated approvals and revision tracking</li>
            <li className={styles['resume__list-item']}>Integrate SharePoint and automated email notifications to standardized purchasing processes</li>
          </ul>
        </div>

        <div className={styles['resume__item']}>
          <strong className={styles['resume__project-title']}>SaaS Infrastructure & Security Modernization</strong>
          <ul className={styles['resume__list']}>
            <li className={styles['resume__list-item']}>Administer Microsoft 365 tenant including Entra ID user provisioning and access governance</li>
            <li className={styles['resume__list-item']}>Implement email security hardening and organizational controls through MS Admin Center</li>
            <li className={styles['resume__list-item']}>Manage domain and DNS configuration via CloudFlare</li>
          </ul>
        </div>
      </section>

      <section className={styles['resume__section']}>
        <SectionHeader label="EDUCATION_&_CERTIFICATIONS" />
        
        <div className={styles['resume__education-item']}>
          <div className={styles['resume__degree']}>B.S. in Computer Science and Engineering</div>
          <div className={styles['resume__school']}>University of California, Davis</div>
          <div className={styles['resume__coursework']}>
            <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Databases, Computer Networks
          </div>
        </div>

        <div className={styles['resume__education-item']}>
          <div className={styles['resume__degree']}>Tableau Business Intelligence Analyst</div>
          <div className={styles['resume__school']}>Coursera Professional Certificate</div>
        </div>

        <div className={styles['resume__education-item']}>
          <div className={styles['resume__degree']}>DeepLearning.AI Machine Learning Specialization</div>
          <div className={styles['resume__school']}>Coursera (In Progress)</div>
        </div>
      </section>
    </motion.div>
  );
};

export default ResumePage;
