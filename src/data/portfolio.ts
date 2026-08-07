import resumePdf from "@/assets/belgin resume.pdf";
export const personalInfo = {
  name: "Belgin Lino SP",
  shortName: "Belgin",
  roles: ["Aspiring AI Engineer", "FullStack Developer", "AI project Builder"],
  tagline: "Aspiring Software Developer · Python · Web · Automation",
  bio: "I'm Belgin Lino, an AI student and aspiring Fullstack developer passionate about building practical solutions through technology. I enjoy working with Python, web development, and AI projects that solve real-world problems,and I like learning new technologies.",
  longBio:
    "Hi, I'm Belgin Lino, currently pursuing my degree in Artificial Intelligence at St,Xavier's Catholic College of Engineering. I'm passionate about technology, software development, and building projects that create real-world impact.I enjoy learning new tools, and continuously improving my skills through hands-on projects.",
  email: "belginlino485@gmail.com",
  location: "India",
  github: "https://github.com/belginlino",
  linkedin: "https://linkedin.com/in/belginlino",
  resumeUrl: resumePdf,
};

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Tech Skills", value: 10, suffix: "+" },
  { label: "Learning hours", value: 100, suffix: "+" },
  { label: "Open to Internships", value: 100, suffix: "%" },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 35 },
      { name: "JavaScript", level: 30 },
      { name: "Java", level: 35 },
      { name: "C", level: 30 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React JS", level: 50 },
      { name: "HTML", level: 75 },
      { name: "CSS", level: 60 },
      { name: "Responsive Design", level: 40 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", level: 40 },
      { name: "Flask", level: 50 },
      { name: "REST APIs", level: 28 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 58 },
      { name: "SQLite", level: 42 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 55 },
      { name: "GitHub", level: 60 },
      { name: "VS Code", level: 70 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Problem Solving", level: 38 },
      { name: "Canva", level: 55 },
      { name: "UI Planning", level: 58 },
    ],
  },
];

export type ProjectCategory = "Web" | "Python" | "Automation" | "AI";

export interface Project {
  id: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  github?: string;
  demo?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "Lino_Menswear",
    title: "Lino Menswear",
    short: "POS and Billing System for Menswear Store.",
    description:
      "A professional billing and inventory management system for Lino Menswear, designed to streamline sales, track inventory, and manage customer data efficiently.",
    tech: ["React", "Firebase"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/billing-software",
    demo: "https://billing-software.pages.dev/login",
    highlights: [
      "Real-time billing & invoice generation",
      "Inventory & stock management",
      "Customer data & sales analytics",
    ],
  },
  {
    id: "smart-video-editor",
    title: "Smart Video Editing App",
    short: "Beginner-friendly app that auto-edits status & wish videos.",
    description:
      "A Python desktop app that takes raw clips and music and produces ready-to-share status or birthday wish videos with templates.",
    tech: ["Python", "MoviePy", "Tkinter", "FFmpeg"],
    categories: ["Python", "Automation"],
    github: "https://github.com/belginlino",
    highlights: ["Template-based editing", "One-click export", "Music sync"],
  },
  {
    id: "classroom-automation",
    title: "Google Classroom File Automation",
    short: "Auto-downloads classroom files into subject-wise folders.",
    description:
      "A script that uses the Google Classroom API to fetch shared files and automatically organizes them into subject-wise folders on disk.",
    tech: ["Python", "Google API", "OAuth"],
    categories: ["Python", "Automation"],
    github: "https://github.com/belginlino",
    highlights: ["OAuth secure auth", "Smart folder structure", "Scheduled sync"],
  },
  {
    id: "django-apps",
    title: "Django Web Applications",
    short: "Scalable web apps with auth, admin, and REST APIs.",
    description:
      "A collection of full-stack Django projects featuring authentication, admin dashboards, REST APIs and PostgreSQL backends.",
    tech: ["Django", "Python", "PostgreSQL", "REST"],
    categories: ["Web", "Python"],
    github: "https://github.com/belginlino",
    demo: "#",
    highlights: ["Auth & permissions", "Admin dashboard", "REST endpoints"],
  },
  {
    id: "react-portfolio",
    title: "React Portfolio (this site)",
    short: "Modern, animated, fully responsive personal portfolio.",
    description:
      "Designed and built with React, TanStack Router, Tailwind CSS and Framer Motion — premium dark UI with glassmorphism and motion.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    categories: ["Web"],
    github: "https://github.com/belginlino",
    highlights: ["Dark/Light theme", "Smooth animations", "Mobile-first"],
  },
  {
    id: "future-ai",
    title: "Future AI Projects",
    short: "Placeholder for upcoming innovations in AI & agents.",
    description:
      "Reserved space for upcoming AI agent, LLM and ML side projects currently in research and prototyping.",
    tech: ["AI", "LLM", "Agents"],
    categories: ["AI"],
    highlights: ["Coming soon", "Agent workflows", "RAG pipelines"],
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Started Programming Journey",
    description: "Took my first steps into coding by learning Python basics.",
  },
  {
    year: "2024",
    title: "Learned Python Full Stack",
    description:
      "Learned Python fundamentals and started upskilling by exploring Python full-stack development.",
  },
  {
    year: "2024",
    title: "Built First Web Projects",
    description:
      "Created projects using HTML, CSS, and JavaScript, and explored backend development with Flask and Django.",
  },
  {
    year: "2025",
    title: "Learned React JS",
    description:
      "During my 3rd semester holidays, I attended a one-month internship training where I started learning React JS as an upgrade.",
  },
  {
    year: "2025",
    title: "Built Projects with AI",
    description:
      "Learned and implemented web projects using AI, and attended several hackathons where I explored various automation tools.",
  },
  {
    year: "2026",
    title: "Preparing for Global Tech Roles",
    description: "Building my portfolio and learning German for international opportunities.",
  },
];

export const certifications = [
  { title: "Python Programming", issuer: "Offline Course", year: "2024" },
  { title: "Fullstack Web Development", issuer: "Offline Course", year: "2024" },
  { title: "Machine Learning", issuer: "Offline Course", year: "2025" },
  { title: "React JS", issuer: "Intern Training", year: "2025" },
  { title: "MEARN Stack", issuer: "Online Course", year: "2026" },
  { title: "upcomming", issuer: "intern trainings", year: "2026+" },
];

export const languages = [
  { name: "Tamil", level: "Native", percent: 90 },
  { name: "English", level: "Professional", percent: 50 },
  { name: "German", level: "Learning (A2)", percent: 15 },
];

export const strengths = [
  {
    title: "Fast Learner",
    description: "Quickly adapt to new technologies.",
  },
  {
    title: "Full Stack Foundation",
    description: "Built projects using HTML, CSS, JavaScript, Flask, Django, and React.",
  },
  {
    title: "AI Enthusiast",
    description: "Exploring and implementing AI concepts in real-world web projects.",
  },
  {
    title: "Project-Oriented Developer",
    description: "Focused on building complete, working applications rather than just theory.",
  },
  {
    title: "Problem Solving Skills",
    description: "Break down problems logically and implement efficient solutions in code.",
  },
  {
    title: "Continuous Learner",
    description: "Actively improving skills and preparing for global tech opportunities.",
  },
];

export const services = [
  {
    id: "ai-automation",
    title: "AI Integration & Automation",
    description:
      "Building intelligent WhatsApp & Telegram bots, OpenAI API integrations, and automated daily workflow scripts.",
    iconName: "Bot",
  },
  {
    id: "web-dev",
    title: "Fullstack Web Development",
    description:
      "Crafting high-performance, responsive web applications using React, TypeScript, Tailwind CSS, Flask, and Django.",
    iconName: "Globe",
  },
  {
    id: "python-scripting",
    title: "Python Tools & Scraping",
    description:
      "Developing custom CLI scripts, web scrapers, data processing tools, and media generation automation.",
    iconName: "Code2",
  },
  {
    id: "ui-ux",
    title: "UI/UX & Interactive Design",
    description:
      "Designing ultra-sleek dark-mode web interfaces with responsive layouts, micro-interactions, and custom typography.",
    iconName: "Sparkles",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Dr. A. Rajesh",
    role: "Department Mentor",
    company: "St. Xavier's Catholic College",
    quote:
      "Belgin demonstrates exceptional initiative in applying Python and AI to build practical software solutions. His drive for building working applications sets him apart.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "t2",
    name: "K. Vignesh",
    role: "Hackathon Lead",
    company: "AI & Tech Club",
    quote:
      "Working with Belgin during hackathons was a game changer. He rapidly turns raw concepts into working React and Python prototypes with crisp designs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "t3",
    name: "S. Priya",
    role: "Peer Developer",
    company: "Open Source Collaborator",
    quote:
      "Belgin's automated WhatsApp news bot and classroom automation scripts saved our team endless hours. He is reliable, fast, and project-focused!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
];

