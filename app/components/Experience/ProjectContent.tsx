import React, { memo } from 'react';
import styles from '../CRTDisplay.module.css';

interface Project {
  title: string;
  tech: string[];
  period: string;
  details: string[];
  github?: string;
  liveUrl?: string;
  role?: string;
  teamSize?: number;
}

const projects: Project[] = [
  {
    title: "E-Commerce Analytics Platform",
    tech: ["React", "Node.js", "MongoDB", "AWS Lambda", "Docker"],
    period: "2023",
    role: "Lead Developer",
    teamSize: 4,
    github: "github.com/username/ecommerce-analytics",
    liveUrl: "analytics-platform.com",
    details: [
      "Built full-stack marketplace solution with real-time analytics",
      "Implemented secure payment gateway processing $500K+ monthly",
      "Achieved 99.9% uptime through robust AWS infrastructure",
      "Developed automated reporting system for 200+ merchants",
      "Integrated machine learning for purchase predictions"
    ]
  },
  {
    title: "AI-Powered Dashboard",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    period: "2022",
    role: "Full Stack Developer",
    teamSize: 3,
    github: "github.com/username/ai-dashboard",
    liveUrl: "ai-dashboard-demo.com",
    details: [
      "Developed real-time data visualization platform with ML integration",
      "Created predictive models with 92% accuracy rate",
      "Reduced analysis time by 60% through process automation",
      "Implemented real-time collaboration features for team analytics",
      "Built REST API handling 1M+ daily requests"
    ]
  }
];

const ProjectContent = () => {
  return (
    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
      {projects.map((proj, idx) => (
        <article key={idx} className="border border-amber-500 p-4">
          <header className="space-y-2 mb-4 border-b border-amber-500 pb-2">
            <div className="text-center opacity-70">
              ╔════════════════════════════════╗
            </div>
            <h2 className="text-lg font-bold">
              {proj.title}
            </h2>
            <div className="text-sm opacity-90 flex flex-wrap gap-2">
              <span className="text-amber-400">PERIOD:</span> {proj.period}
              {proj.role && (
                <>
                  <span className="text-amber-400">│ ROLE:</span> {proj.role}
                </>
              )}
              {proj.teamSize && (
                <>
                  <span className="text-amber-400">│ TEAM:</span> {proj.teamSize}
                </>
              )}
            </div>
            <div className="text-sm opacity-80">
              <span className="text-amber-400">TECH:</span>{' '}
              {proj.tech.join(' · ')}
            </div>
            <div className="text-center opacity-70">
              ╚════════════════════════════════╝
            </div>
          </header>

          <div className="space-y-2">
            {proj.details.map((detail, i) => (
              <div key={i} className="text-sm pl-4 relative">
                <span className="text-amber-400 absolute left-0">╟─</span>
                {detail}
              </div>
            ))}
          </div>

          {(proj.github || proj.liveUrl) && (
            <footer className="mt-4 pt-2 border-t border-amber-500/30">
              <div className="text-center opacity-70">
                ╟────────────────────────────────╢
              </div>
              {proj.github && (
                <div className="text-sm pl-4 relative">
                  <span className="text-amber-400">REPO:</span> {proj.github}
                </div>
              )}
              {proj.liveUrl && (
                <div className="text-sm pl-4 relative">
                  <span className="text-amber-400">DEMO:</span> {proj.liveUrl}
                </div>
              )}
              <div className="text-center opacity-70">
                ╚════════════════════════════════╝
              </div>
            </footer>
          )}
        </article>
      ))}

      {/* Empty state */}
      {projects.length === 0 && (
        <div className="text-center p-8 border border-amber-500">
          <div className="opacity-70">
            ╔════════════════════════════════╗
          </div>
          <div className="my-4">No projects found</div>
          <div className="opacity-70">
            ╚════════════════════════════════╝
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProjectContent);