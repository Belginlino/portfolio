export interface PersonalInfo {
  name: string;
  shortName: string;
  roles: string[];
  tagline: string;
  headline: string;
  bio: string;
  longBio: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Belgin Lino SP",
  shortName: "Belgin",
  roles: ["Full-Stack Developer", "Python Developer", "AI Enthusiast"],
  headline: "AI & Data Science Student | Full-Stack Developer",
  tagline: "Building Practical Web Applications · Python Tools · Machine Learning Prototypes",
  bio: "B.Tech Artificial Intelligence & Data Science student at St. Xavier's Catholic College of Engineering. I build practical web applications, Python automation tools, and machine learning prototypes with clean code and modern developer ergonomics.",
  longBio:
    "I'm Belgin Lino SP, currently pursuing my B.Tech degree in Artificial Intelligence & Data Science at St. Xavier's Catholic College of Engineering, Chunkankadai (Nagercoil, Tamil Nadu). I specialize in combining Python backends, modern React user interfaces, and machine learning models to solve practical business and educational challenges. From point-of-sale systems to academic intelligence platforms, I am passionate about writing maintainable code and building end-to-end applications.",
  email: "belginlino485@gmail.com",
  location: "Nagercoil, Tamil Nadu, India",
  github: "https://github.com/Belginlino",
  linkedin: "https://linkedin.com/in/belginlino",
  resumeUrl: "/Belgin_Lino_Resume.pdf",
};

export const stats = [
  { label: "Projects Engineered", value: 8, suffix: "+" },
  { label: "Public Repositories", value: 20, suffix: "+" },
  { label: "Core Technologies", value: 12, suffix: "+" },
  { label: "Open to Internships", value: 100, suffix: "%" },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: "Internship" | "Professional Training" | "Work Experience";
  duration: string;
  status: "Completed" | "Current" | "Verified";
  skills: string[];
  description: string;
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "white-aura-x",
    role: "Java Trainee / Intern",
    company: "White Aura X Pvt. Ltd.",
    location: "Thiruvananthapuram, Kerala",
    type: "Internship",
    duration: "Verified Internship Program",
    status: "Completed",
    skills: ["Java", "Object-Oriented Programming", "Data Structures", "Problem Solving"],
    description:
      "Completed a structured Java-focused internship and training program, strengthening foundational Java engineering, class architectures, and backend problem-solving.",
    achievements: [
      "Built and tested modular Java applications practicing core OOP design patterns",
      "Strengthened algorithmic logic, exception handling, and data structures",
      "Collaborated in code review sessions and technical milestone assessments",
    ],
  },
  {
    id: "ak-infopark",
    role: "Full-Stack Web Development Trainee",
    company: "AK Infopark",
    location: "Nagercoil, Tamil Nadu",
    type: "Professional Training",
    duration: "Full-Stack Certification Program",
    status: "Completed",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Python", "Web APIs"],
    description:
      "Underwent intensive hands-on full-stack development training covering responsive frontend web interfaces, client-side state management, and server integrations.",
    achievements: [
      "Earned Full-Stack Web Development Course Completion Certificate",
      "Engineered responsive web interfaces using modern component patterns and REST APIs",
      "Practiced version control workflows and deployment pipelines",
    ],
  },
  {
    id: "nex-x-spark",
    role: "Software Developer",
    company: "Nex X Spark",
    location: "Tamil Nadu, India",
    type: "Work Experience",
    duration: "2026 — Present",
    status: "Current",
    skills: ["React", "TypeScript", "Tailwind CSS", "Web Applications", "System Integration"],
    description:
      "Collaborating on web application engineering and scalable client solutions, shipping real-world software components.",
    achievements: [
      "Contributing to full-stack frontend architecture and responsive component libraries",
      "Integrating state management, form pipelines, and third-party services",
      "Maintaining version control workflows and feature branch deployments",
    ],
  },
];

export const education = {
  degree: "B.Tech in Artificial Intelligence & Data Science",
  institution: "St. Xavier's Catholic College of Engineering",
  location: "Chunkankadai, Nagercoil, Tamil Nadu",
  duration: "July 2024 — March 2028",
  details:
    "Rigorous coursework in Artificial Intelligence, Machine Learning, Data Structures, Database Management Systems, and Web Engineering.",
};

export type SkillProficiency = "Project Experience" | "Practicing" | "Familiar";

export interface TechSkill {
  name: string;
  level: SkillProficiency;
  iconName: string;
  note?: string;
}

export interface TechGroup {
  category: string;
  description: string;
  items: TechSkill[];
}

export const techStackCategories: TechGroup[] = [
  {
    category: "Programming Languages",
    description: "Core languages used across software applications, data processing, and scripting",
    items: [
      { name: "Python", level: "Project Experience", iconName: "Terminal", note: "FastAPI, Flask, Django, automation" },
      { name: "JavaScript", level: "Project Experience", iconName: "Code2", note: "ES6+, DOM, async/await, modern tooling" },
      { name: "Java", level: "Project Experience", iconName: "Coffee", note: "OOP principles, core Java internship" },
      { name: "TypeScript", level: "Practicing", iconName: "FileCode", note: "Typed components, strict props, interfaces" },
      { name: "C", level: "Familiar", iconName: "Cpu", note: "Procedural logic & fundamental algorithms" },
    ],
  },
  {
    category: "Frontend Development",
    description: "UI frameworks and styling standards for responsive, accessible web interfaces",
    items: [
      { name: "React", level: "Project Experience", iconName: "Layers", note: "Hooks, SPA routing, modular components" },
      { name: "HTML5", level: "Project Experience", iconName: "Globe", note: "Semantic structure & WCAG standards" },
      { name: "CSS3", level: "Project Experience", iconName: "Layout", note: "Flexbox, Grid, custom styling, animations" },
      { name: "Tailwind CSS", level: "Project Experience", iconName: "Sparkles", note: "Utility-first modern design systems" },
      { name: "Vite", level: "Project Experience", iconName: "Zap", note: "Fast HMR and production bundling" },
    ],
  },
  {
    category: "Backend Development",
    description: "Server frameworks, RESTful web services, and application logic",
    items: [
      { name: "Django", level: "Project Experience", iconName: "Server", note: "ORM models, admin dashboard, auth" },
      { name: "Flask", level: "Project Experience", iconName: "Cpu", note: "Lightweight APIs and microservices" },
      { name: "REST APIs", level: "Project Experience", iconName: "Network", note: "CRUD endpoints, JSON schemas, headers" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational data modeling, cloud datastores, and state persistence",
    items: [
      { name: "MySQL", level: "Project Experience", iconName: "Database", note: "Relational schema design & queries" },
      { name: "SQLite", level: "Project Experience", iconName: "HardDrive", note: "Embedded local development databases" },
      { name: "Firebase Firestore", level: "Project Experience", iconName: "Cloud", note: "Real-time NoSQL synchronization" },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Predictive model pipelines, preprocessing, and computer vision tools",
    items: [
      { name: "Scikit-Learn", level: "Practicing", iconName: "Flame", note: "Classification models & preprocessing" },
      { name: "Pandas & NumPy", level: "Project Experience", iconName: "Binary", note: "Data cleaning, matrices & analysis" },
      { name: "Computer Vision", level: "Practicing", iconName: "Eye", note: "Image enhancement & background removal" },
      { name: "Model Integration", level: "Project Experience", iconName: "Bot", note: "Connecting Python inference to web UIs" },
    ],
  },
  {
    category: "Developer Tools & Deployment",
    description: "Version control, Linux environments, and modern cloud hosting",
    items: [
      { name: "Git", level: "Project Experience", iconName: "GitBranch", note: "Branching, rebasing, commits, PR workflows" },
      { name: "GitHub", level: "Project Experience", iconName: "Github", note: "Repo management, issues, GitHub Actions" },
      { name: "Linux / Ubuntu", level: "Practicing", iconName: "TerminalSquare", note: "Bash commands, Nginx, server management" },
      { name: "VS Code", level: "Project Experience", iconName: "Code", note: "Primary IDE, debugging, extensions" },
      { name: "Cloudflare & Vercel", level: "Project Experience", iconName: "UploadCloud", note: "Static hosting, DNS, custom domains" },
    ],
  },
];

export type ProjectCategory = "Web" | "Python" | "Automation" | "AI";

export interface Project {
  id: string;
  title: string;
  short: string;
  problem: string;
  solution: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  github?: string;
  demo?: string;
  highlights: string[];
  contribution: string;
  status: "Completed" | "Prototype" | "In Development" | "Production";
  image?: string;
  notice?: string;
}

export const projects: Project[] = [
  {
    id: "devarajan-pos",
    title: "DEVARAJAN TRADERS POS & Shop Management",
    short: "Retail Point of Sale & store management ERP with real-time billing and inventory logs.",
    problem:
      "Retail shops often face manual receipt delays, inventory tracking inaccuracies, and lack of real-time sales visibility during peak hours.",
    solution:
      "A production POS web system featuring barcode/product lookups, real-time invoice generation, role-based access control, expense tracking, and sales audit reporting.",
    description:
      "Engineered for retail store operations, this POS platform streamlines daily sales workflows with instant invoice printing, product categorization, stock level management, role-based cashier/admin access, and financial audit logs.",
    tech: ["React", "TypeScript", "Vite", "Firebase Firestore", "Tailwind CSS"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/billing-software",
    demo: "https://billing-software.pages.dev/login",
    image: "/projects/lino-menswear.png",
    status: "Production",
    contribution:
      "Engineered product catalog components, invoice generation workflows, reporting exports, and real-time Firestore database synchronization.",
    highlights: [
      "Real-time retail billing & instant printable invoice calculation",
      "Stock inventory tracking with low-stock alerts and category filtering",
      "Role-Based Access Control (RBAC) ensuring security between staff and admin",
      "Daily expense tracking and automated financial summary logs",
    ],
  },
  {
    id: "django-ecommerce",
    title: "Django E-Commerce Storefront",
    short: "Full-featured online storefront with product listings, search, cart, and authentication.",
    problem:
      "Small merchants require reliable, self-hosted e-commerce capabilities with structured product catalogs, secure user sessions, and straightforward inventory administration.",
    solution:
      "A comprehensive Django web application providing customer-facing product discovery, cart state management, checkout flows, and backend administrative tools.",
    description:
      "A full-stack e-commerce web application built on Django. Features responsive catalog browsing, real-time keyword search, category filtering, user registration with session authentication, shopping cart workflows, and Django Admin panel management.",
    tech: ["Python", "Django", "SQLite / MySQL", "Bootstrap", "HTML5", "CSS3"],
    categories: ["Web", "Python"],
    github: "https://github.com/Belginlino",
    status: "Completed",
    contribution:
      "Designed relational database models for products, categories, users, and carts; implemented Django views, session-based cart operations, and responsive template layouts.",
    highlights: [
      "Dynamic product search with multi-category filtering and pagination",
      "Session-based shopping cart management with quantity updates",
      "User authentication system with secure login, signup, and order records",
      "Admin dashboard with CRUD operations for products, categories, and inventory",
    ],
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Risk Prediction Web App",
    short: "Machine learning demonstration predicting heart disease risk based on clinical health parameters.",
    problem:
      "Demonstrating how predictive machine learning workflows can ingest patient health metrics, clean feature vectors, and provide immediate risk classification.",
    solution:
      "An interactive web prototype where users can input health metrics (such as age, cholesterol, resting blood pressure, and ECG indicators) to inspect model classification output in real time.",
    description:
      "A machine learning demonstration project designed to showcase end-to-end ML model deployment. Takes patient health parameters, executes feature preprocessing, and delivers risk probability outputs via a clean web interface.",
    notice:
      "Educational demonstration & machine learning prototype — this project is built for technical evaluation and does not provide clinically validated medical diagnoses.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Flask", "HTML5", "CSS3"],
    categories: ["AI", "Python", "Web"],
    github: "https://github.com/Belginlino",
    status: "Prototype",
    contribution:
      "Preprocessed clinical health dataset with Pandas, trained classification models with Scikit-Learn, and deployed the inference pipeline behind a Flask web interface.",
    highlights: [
      "Data preprocessing pipeline handling normalization, scaling, and feature selection",
      "Trained classification model generating risk score and confidence metrics",
      "Intuitive web interface for inputting patient parameters with client validation",
      "Explicit disclaimer boundaries ensuring responsible machine learning demonstration",
    ],
  },
  {
    id: "projectflow",
    title: "ProjectFlow Intelligence",
    short: "Evidence-centered academic project intelligence platform with milestone tracking.",
    problem:
      "Academic project teams and mentors often suffer from disorganized milestone reviews, lack of evidence verification, and missing audit trails.",
    solution:
      "A centralized project intelligence platform wrapping task execution into verifiable evidence artifacts, mentor evaluation rubrics, and automated audit trails.",
    description:
      "An academic project tracking platform designed to bring accountability and structure to engineering teams. Provides stage-gate milestone reviews, mentor feedback loops, rubric evaluation scoring, and traceable task kanban workflows.",
    tech: ["TypeScript", "React", "Node.js", "Vite", "Tailwind CSS"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/ProjectFlow",
    image: "/projects/projectflow.jpg",
    status: "Completed",
    contribution:
      "Engineered the responsive React frontend, milestone verification layer, interactive rubric scoring UI, and audit trail views.",
    highlights: [
      "Evidence-centered milestone verification and stage-gate progression",
      "Rubric criteria & structured mentor evaluation workflows",
      "Interactive Kanban board with task progress and evidence attachments",
      "Traceable academic audit trail for end-of-semester reviews",
    ],
  },
  {
    id: "satquery-ai",
    title: "SatQuery AI",
    short: "Satellite intelligence platform with AI-powered geospatial querying.",
    problem:
      "Extracting actionable insights from high-resolution Earth observation and satellite imagery typically requires complex GIS tooling and specialized expertise.",
    solution:
      "An AI-powered satellite intelligence tool allowing natural language queries over satellite imagery to perform automated terrain segmentation and telemetry analysis.",
    description:
      "Combines computer vision algorithms with a FastAPI backend to inspect Earth observation imagery. Users query geographical areas using natural language to extract terrain metrics, urban development markers, and environmental indicators.",
    tech: ["Python", "FastAPI", "Computer Vision", "React", "Uvicorn"],
    categories: ["AI", "Python"],
    github: "https://github.com/Belginlino/Satquery-AI",
    image: "/projects/satquery-ai.jpg",
    status: "Completed",
    contribution:
      "Developed FastAPI endpoint architecture, image processing inference hooks, and the interactive web query interface.",
    highlights: [
      "FastAPI high-performance inference engine for satellite image processing",
      "Natural language query interface for geospatial telemetry",
      "Computer vision analysis for terrain segmentation and feature highlighting",
      "Interactive frontend dashboard with visual telemetry overlays",
    ],
  },
  {
    id: "bus-tracker",
    title: "Real-Time Bus Tracker",
    short: "Public transit tracking system with live GPS route telemetry and arrival forecasts.",
    problem:
      "Commuters in tier-2 towns regularly face transit uncertainty due to absent real-time vehicle locations and unannounced route delays.",
    solution:
      "A real-time public transit tracking system featuring live GPS route telemetry on interactive Leaflet maps, passenger arrival ETA forecasts, and a driver coordinate broadcast portal.",
    description:
      "An accessible public transit telemetry platform built with React, Leaflet Maps, and Firebase Firestore. Delivers sub-second vehicle coordinate synchronization, calculated stop ETAs, and a mobile-friendly map interface for daily commuters.",
    tech: ["React", "Firebase Firestore", "Leaflet Maps", "Geolocation API", "Tailwind CSS"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/BusTracker",
    image: "/projects/bustracker.jpg",
    status: "Completed",
    contribution:
      "Implemented Leaflet map rendering, live Firestore subscription listeners, driver geolocation streaming, and mobile responsive UI.",
    highlights: [
      "Live GPS bus tracking with custom Leaflet map markers and polyline routes",
      "Real-time Firestore synchronization for sub-second telemetry updates",
      "Passenger ETA calculation based on distance matrix and stop coordinates",
      "Lightweight driver location portal utilizing browser Geolocation API",
    ],
  },
  {
    id: "linux-server-portfolio",
    title: "Linux Web Server & Cloud Hosting",
    short: "Self-hosted Linux server infrastructure configuring Nginx, SSL, and continuous deployment.",
    problem:
      "Understanding full-stack web development requires real-world experience configuring web servers, DNS routing, reverse proxies, and production server security.",
    solution:
      "Configured an Ubuntu Linux web server with Nginx reverse proxy, automated SSL certificates via Let's Encrypt, Cloudflare CDN integration, and Git deployment workflows.",
    description:
      "Demonstrates practical systems and devops skills. Configured Linux server environments, set up Nginx virtual hosts, managed firewall (UFW) rules, configured DNS records, and automated updates through Git repositories.",
    tech: ["Linux (Ubuntu)", "Nginx", "Git", "Cloudflare", "Bash", "SSL / TLS"],
    categories: ["Automation", "Web"],
    github: "https://github.com/Belginlino",
    status: "Completed",
    contribution:
      "Configured Linux virtual machine, Nginx configuration blocks, SSL certificate renewals, and Cloudflare DNS proxies.",
    highlights: [
      "Configured production Nginx reverse proxy with gzip compression and caching",
      "Automated SSL / TLS termination with Let's Encrypt certificates",
      "Cloudflare CDN caching and DDoS mitigation configuration",
      "Bash automation scripts for deployment and server health monitoring",
    ],
  },
  {
    id: "school-erp",
    title: "Child Jesus School ERP (CJMHSS)",
    short: "Educational institution management ERP system for student databases and staff records.",
    problem:
      "Schools need reliable, centralized systems to manage student enrollments, academic records, staff rosters, and fee tracking without manual paperwork.",
    solution:
      "A responsive School ERP web application engineered for Child Jesus Matric Hr. Sec. School, providing fast search, student profiles, staff directories, and fee status tracking.",
    description:
      "Designed and deployed a full-featured administrative ERP web application. Streamlines student admission tracking, staff department assignment, daily attendance reporting, and tuition fee status logs.",
    tech: ["JavaScript", "React", "Tailwind CSS", "Vercel"],
    categories: ["Web", "Automation"],
    github: "https://github.com/Belginlino/cjmhsserp",
    demo: "https://cjmhsserp.vercel.app",
    image: "/projects/school-erp.jpg",
    status: "Completed",
    contribution:
      "Designed user experience, responsive tables, modal forms, student directory views, and deployed production application on Vercel.",
    highlights: [
      "Centralized student enrollment and demographic records management",
      "Staff directory with department listings and contact details",
      "Tuition fee workflow tracking with status badges and filters",
      "High-speed production deployment with zero downtime on Vercel",
    ],
  },
];

export const certifications = [
  {
    title: "Fullstack Web Development",
    issuer: "AK Infopark",
    year: "2024",
    type: "Course Completion Certificate",
  },
  {
    title: "Java Trainee / Intern",
    issuer: "White Aura X Pvt. Ltd.",
    year: "2024",
    type: "Internship Certificate",
  },
  {
    title: "Machine Learning Course",
    issuer: "Course Completion",
    year: "2025",
    type: "Technical Certification",
  },
  {
    title: "React JS Web Development",
    issuer: "Internship Training",
    year: "2025",
    type: "Specialized Training",
  },
  {
    title: "Software Developer",
    issuer: "Nex X Spark",
    year: "2026",
    type: "Professional Role",
  },
];

export const services = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    description:
      "Engineering responsive, fast web applications using React, TypeScript, Tailwind CSS, Python (Django/Flask), and relational or NoSQL databases.",
    iconName: "Globe",
    categoryTarget: "Web" as ProjectCategory,
  },
  {
    id: "python-tools",
    title: "Python Tools & Automation",
    description:
      "Developing custom Python scripts, data preprocessing pipelines, CLI utilities, and automated task workflows that eliminate manual friction.",
    iconName: "Code2",
    categoryTarget: "Python" as ProjectCategory,
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Prototypes",
    description:
      "Integrating machine learning models and computer vision pipelines into accessible web interfaces with clean data preprocessing and evaluation.",
    iconName: "Bot",
    categoryTarget: "AI" as ProjectCategory,
  },
  {
    id: "frontend-ui",
    title: "UI/UX & Frontend Development",
    description:
      "Crafting dark-mode-first, accessible, responsive web interfaces with thoughtful typographic scales, micro-interactions, and mobile touch targets.",
    iconName: "Sparkles",
    categoryTarget: "Web" as ProjectCategory,
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Started Engineering Journey",
    description: "Enrolled in B.Tech AI & Data Science at St. Xavier's Catholic College of Engineering, Chunkankadai.",
  },
  {
    year: "2024",
    title: "Java Trainee / Intern at White Aura X",
    description: "Completed structured Java internship in Thiruvananthapuram, mastering OOP architectures and algorithms.",
  },
  {
    year: "2024",
    title: "Full-Stack Training at AK Infopark",
    description: "Earned Full-Stack Web Development certification, building responsive client-server web apps.",
  },
  {
    year: "2025",
    title: "Engineered Retail POS & ML Prototypes",
    description: "Built DEVARAJAN TRADERS POS, Heart Disease risk prediction prototype, and academic intelligence platforms.",
  },
  {
    year: "2026",
    title: "Software Developer at Nex X Spark",
    description: "Contributing to scalable software components, system integration, and responsive web applications.",
  },
];

export const languages = [
  { name: "Tamil", level: "Native", percent: 95 },
  { name: "English", level: "Professional", percent: 85 },
];

export const strengths = [
  {
    title: "Full-Stack Foundation",
    description: "Hands-on project experience across React, TypeScript, Python, Django, and database integrations.",
  },
  {
    title: "Applied AI Integration",
    description: "Practical capabilities connecting machine learning models and computer vision pipelines to web interfaces.",
  },
  {
    title: "Project-Centric Mindset",
    description: "Focused on building complete, working applications that solve concrete business and educational challenges.",
  },
  {
    title: "Fast Technical Learner",
    description: "Quickly adapts to new languages, APIs, and frameworks through active hands-on implementation.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 80 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3 / Tailwind", level: 85 },
      { name: "Responsive UI", level: 90 },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Django", level: 80 },
      { name: "Flask", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "Firebase Firestore", level: 80 },
    ],
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Engineering Department Mentor",
    role: "Faculty Mentor",
    company: "St. Xavier's Catholic College of Engineering",
    quote:
      "Belgin demonstrates dedication to applying Python, React, and machine learning to build practical software applications.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
];

