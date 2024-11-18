import React, { memo } from 'react';
import styles from './CRTDisplay.module.css';

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  location?: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Corp",
    period: "2022 - Present",
    location: "San Francisco, CA",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    responsibilities: [
      "Led development of microservices architecture serving 1M+ users",
      "Managed team of 5 engineers across 3 time zones",
      "Reduced deployment time by 60% through CI/CD optimization",
      "Implemented error tracking reducing bugs by 40%",
      "Mentored 4 junior developers through technical growth program"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Startup Ventures Inc",
    period: "2020 - 2022",
    location: "Remote",
    technologies: ["Vue.js", "Python", "Docker", "PostgreSQL"],
    responsibilities: [
      "Built scalable e-commerce platform handling $2M in monthly transactions",
      "Implemented real-time analytics dashboard for 500+ merchants",
      "Developed automated testing suite improving code coverage to 90%",
      "Optimized database queries reducing load times by 45%"
    ]
  }
];

const ExperienceContent = () => {
  return (
    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
      {experiences.map((exp, idx) => (
        <article key={idx} className="border border-amber-500 p-4">
          <header className="space-y-2 mb-4 border-b border-amber-500 pb-2">
            <div className="text-center opacity-70">
              ═══════════════════════════════
            </div>
            <h2 className="text-lg font-bold">
              {exp.title} @ {exp.company}
            </h2>
            <div className="text-sm opacity-90">
              {exp.period} {exp.location && `| ${exp.location}`}
            </div>
            {exp.technologies && (
              <div className="text-sm opacity-80">
                <span className="text-amber-400">TECH:</span>{' '}
                {exp.technologies.join(' · ')}
              </div>
            )}
            <div className="text-center opacity-70">
              ═══════════════════════════════
            </div>
          </header>

          <div className="space-y-2">
            {exp.responsibilities.map((resp, i) => (
              <div key={i} className="text-sm pl-4 relative">
                <span className="text-amber-400 absolute left-0">└─</span>
                {resp}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default memo(ExperienceContent);