const resumePdf = "/Belgin_Lino_Resume.pdf";
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
  { label: "Projects Built", value: 8, suffix: "+" },
  { label: "Tech Skills", value: 12, suffix: "+" },
  { label: "Learning hours", value: 100, suffix: "+" },
  { label: "Open to Internships", value: 100, suffix: "%" },
];

export const featuredGithubRepos = [
  "ProjectFlow",
  "Satquery-AI",
  "Fit-Tracker",
  "BusTracker",
  "Image-enhancer-and-BG-remover",
  "myself_productivityapp",
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
  image?: string;
}

export const projects: Project[] = [
  {
    id: "lino-menswear",
    title: "Lino Menswear POS & ERP",
    short: "Point of Sale & store management ERP with real-time billing.",
    description:
      "A production-grade retail POS and inventory management ERP for Lino Menswear. Features instant invoice generation, barcode/stock tracking, role-based access control, expense logs, and financial audit reporting.",
    tech: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/billing-software",
    demo: "https://billing-software.pages.dev/login",
    image: "/projects/lino-menswear.png",
    highlights: [
      "Real-time POS billing & invoice generation",
      "Stock inventory & supplier order management",
      "RBAC security & customer analytics directory",
    ],
  },
  {
    id: "projectflow",
    title: "ProjectFlow Intelligence",
    short: "Evidence-centered academic project intelligence platform.",
    description:
      "An evidence-centered academic project intelligence platform that wraps project execution in a verifiable, traceable evidence layer with milestone tracking, mentor reviews, rubrics, and automated audit trails.",
    tech: ["TypeScript", "React", "Node.js", "Vite", "Tailwind CSS"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/ProjectFlow",
    image: "/projects/projectflow.jpg",
    highlights: [
      "Evidence-centered milestone verification layer",
      "Rubric criteria & mentor evaluation workflow",
      "Traceable academic audit trail & task kanban",
    ],
  },
  {
    id: "satquery-ai",
    title: "SatQuery AI",
    short: "Satellite intelligence platform with AI-powered geospatial querying.",
    description:
      "An AI-powered satellite intelligence platform that enables natural language querying of Earth observation imagery to extract structured computer vision intelligence, terrain segmentation, and urban telemetry.",
    tech: ["Python", "FastAPI", "Computer Vision", "React", "Uvicorn"],
    categories: ["AI", "Python"],
    github: "https://github.com/Belginlino/Satquery-AI",
    image: "/projects/satquery-ai.jpg",
    highlights: [
      "AI computer vision analysis on satellite imagery",
      "FastAPI high-performance inference engine",
      "Natural language query interface & telemetry",
    ],
  },
  {
    id: "pixelforge-ai",
    title: "PixelForge AI",
    short: "AI image background remover & resolution enhancement pipeline.",
    description:
      "A browser-based image enhancement and background removal tool leveraging machine learning models to cleanly isolate subjects, denoise, and upscale visuals in real time with client-side preview.",
    tech: ["Python", "React", "AI Models", "Vite", "Tailwind CSS"],
    categories: ["AI", "Python", "Web"],
    github: "https://github.com/Belginlino/Image-enhancer-and-BG-remover",
    image: "/projects/pixelforge.jpg",
    highlights: [
      "Automated subject cutout & background extraction",
      "Resolution upscaling and sharpness enhancement",
      "Instant client-side preview & high-res export",
    ],
  },
  {
    id: "bus-tracker",
    title: "Real-Time Bus Tracker",
    short: "Public transit tracking system with live GPS route telemetry.",
    description:
      "A real-time public transit tracking system engineered for tier-2 towns, featuring live GPS bus route monitoring on interactive maps, passenger arrival ETA forecasts, and driver telemetry portals.",
    tech: ["React", "Firebase", "Leaflet Maps", "Geolocation API", "Tailwind CSS"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/BusTracker",
    image: "/projects/bustracker.jpg",
    highlights: [
      "Live GPS bus route tracking on Leaflet maps",
      "Firebase Firestore real-time telemetry updates",
      "Driver location portal & passenger ETA calculation",
    ],
  },
  {
    id: "fit-track",
    title: "FitTrack Transformation Hub",
    short: "Personal fitness journal & visual transformation tracker.",
    description:
      "A cross-platform fitness journal and visual transformation tracker with photo progress timelines, workout telemetry, body metric analytics, and Appwrite Cloud synchronization.",
    tech: ["Flutter", "Dart", "Riverpod", "Appwrite Cloud"],
    categories: ["Automation", "Web"],
    github: "https://github.com/Belginlino/Fit-Tracker",
    image: "/projects/fittrack.jpg",
    highlights: [
      "Side-by-side visual photo progress comparisons",
      "Riverpod architecture with Appwrite Cloud sync",
      "Body metric analytics & workout telemetry logs",
    ],
  },
  {
    id: "tempo-productivity",
    title: "Tempo Productivity OS",
    short: "All-in-one personal productivity system with task flow & timer.",
    description:
      "A personal productivity operating system featuring intelligent task scheduling, customizable Pomodoro focus loops, daily habit telemetry, and Kanban sprint boards.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Cloudflare Pages"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/myself_productivityapp",
    demo: "https://myself-productivityapp.pages.dev",
    image: "/projects/tempo-productivity.jpg",
    highlights: [
      "Kanban board & daily priority task scheduler",
      "Customizable Pomodoro timer with telemetry",
      "Deployed on Cloudflare Pages",
    ],
  },
  {
    id: "school-erp",
    title: "Child Jesus School ERP",
    short: "Complete educational institution management ERP system.",
    description:
      "A full-featured School ERP web application engineered for Child Jesus Matric Hr. Sec. School, managing student databases, staff records, attendance, and fee tracking workflows.",
    tech: ["JavaScript", "React", "Tailwind CSS", "Vercel"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/cjmhsserp",
    demo: "https://cjmhsserp.vercel.app",
    image: "/projects/school-erp.jpg",
    highlights: [
      "Student database & enrollment management",
      "Staff directory, attendance & fee workflows",
      "Production deployment on Vercel",
    ],
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
    title: "Software Developer at Nex X Spark",
    description:
      "Joined startup Nex X Spark as a Software Developer, engineering scalable solutions and working on real-world software projects.",
  },
];

export const certifications = [
  { title: "Python Programming", issuer: "Offline Course", year: "2024" },
  { title: "Fullstack Web Development", issuer: "Offline Course", year: "2024" },
  { title: "Machine Learning", issuer: "Offline Course", year: "2025" },
  { title: "React JS", issuer: "Intern Training", year: "2025" },
  { title: "MEARN Stack", issuer: "Online Course", year: "2026" },
  { title: "Software Developer", issuer: "Nex X Spark", year: "2026" },
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

