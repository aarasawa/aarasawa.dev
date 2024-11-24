import { Experience, Project } from './types';

export const experiences: Experience[] = [
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
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd",
    period: "2018 - 2020",
    location: "Boston, MA",
    technologies: ["Angular", "SASS", "Jest", "Firebase"],
    responsibilities: [
      "Developed responsive web applications for enterprise clients",
      "Created reusable component library used across 10+ projects",
      "Implemented A/B testing increasing user engagement by 25%",
      "Collaborated with UX team to improve accessibility standards"
    ]
  }
];

export const projects: Project[] = [
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
  },
  {
    title: "DevOps Automation Suite",
    tech: ["Go", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    period: "2021",
    role: "DevOps Engineer",
    teamSize: 2,
    github: "github.com/username/devops-suite",
    details: [
      "Created automated deployment pipeline reducing deploy time by 70%",
      "Implemented infrastructure as code for cloud resources",
      "Built monitoring system with custom alerting",
      "Developed self-healing infrastructure components",
      "Reduced cloud costs by 45% through optimization"
    ]
  }
];

export const systemInfo = {
  version: "1.0.24",
  copyright: "© 2024 Professional Corp",
  memory: 64512, // in KB
  cpu: "PROF-2024",
  cpuSpeed: "4.77MHz",
  bios: "1.0.24"
};

export const asciiArt = {
  experienceHeader: "±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±",
  projectHeader: "╔════════════════════════════════",
  projectDivider: "╟────────────────────────────────",
  projectFooter: "╚════════════════════════════════",
  listItem: "└─",
  verticalLine: "║"
};