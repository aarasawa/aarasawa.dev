'use client'
import Navigation from "../Navigation/Navigation";
import RolodexTimeline from '../Experience/RolodexTimeline/RolodexTimeline';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
    const experiences = [
        {
          id: '1',
          company: 'Tech Innovators Inc.',
          role: 'Senior Software Engineer',
          period: 'Jan 2020 - Present',
          description: [
            'Led development of cloud-based solutions',
            'Implemented microservices architecture',
            'Mentored junior developers'
          ]
        },
        {
          id: '2',
          company: 'Data Dynamics LLC',
          role: 'Full Stack Developer',
          period: 'Mar 2017 - Dec 2019',
          description: [
            'Developed responsive web applications',
            'Optimized database queries for improved performance',
            'Collaborated with UX team to improve user interfaces'
          ]
        },
        // Add more experiences as needed
    ];

    return (
        <div>
            <Navigation/>
            <div className={styles.gemDesktop}>
                <h1 className={styles.gemDesktopTitle}>Alexander's Workstation</h1>
                <RolodexTimeline experiences={experiences} />
            </div>
        </div>
    );
}

export default Experience;