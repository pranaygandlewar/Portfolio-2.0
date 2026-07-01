// ============================================================
// portfolioData.js — Centralized configuration for Pranay Gandlewar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Pranay Gandlewar",
  firstName: "Pranay",
  brandName: "Pranay",
  title: "AI & Data Science Student | Full-Stack Developer",
  location: "Nagpur, India",
  phone: "+91 95189-95110",
  emails: {
    primary: "pranay.tech.ai@gmail.com",
    secondary: "",
  },
  summary:
    "Passionate B.Tech student specializing in Artificial Intelligence and Data Science with hands-on experience in building AI-powered web applications and deploying full-stack projects. Skilled in Python, React, FastAPI, Flask, SQL, and modern web technologies. Strong interest in Machine Learning, Generative AI, Data Analytics, and Full-Stack Development.",
  resumeUrl: "/Pranay_Gandlewar_Professional_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/pranaygandlewar",
  linkedin: "https://linkedin.com/in/pranaygandlewar",
  instagram: "https://instagram.com/pranaygandlewar",
};

export const heroContent = {
  greeting: "Hi, I'm Pranay Gandlewar",
  titleHighlight: "AI & Data Science Student",
  subtitle:
    "I build AI-powered web applications and deploy full-stack projects using React, FastAPI, Python, and Machine Learning.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:pranay.tech.ai@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Pranay,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards, ",
  },
  ctaResume: { text: "Download Resume", href: "/Pranay_Gandlewar_Professional_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Pranay Gandlewar</span>, an AI & Data Science student and Full-Stack Developer based in Nagpur, India, dedicated to crafting clean, functional, and highly scalable full-stack applications with intelligent features.`,
  techStack: ["Python", "FastAPI", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Frontend Stack",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Vite", level: 90 }
      ]
    },
    {
      title: "Backend Stack",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "SQLAlchemy", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "SQLite", level: 85 }
      ]
    },
    {
      title: "AI / ML Engineering",
      skills: [
        { name: "Hugging Face Models", level: 88 },
        { name: "Text-to-Speech models", level: 90 },
        { name: "Generative AI", level: 85 },
        { name: "NLP", level: 80 },
        { name: "Prompt Engineering", level: 90 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Netlify", level: 85 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 }
      ]
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "AI & Full-Stack Deployment",
    description: "Successfully built and deployed multiple interactive applications online, ensuring smooth usability and high performance.",
    role: "AI & Full-Stack Engineer",
    badge: "Achievement"
  },
  {
    title: "End-to-End AI Solutions",
    description: "Architected complete machine learning and speech synthesis platforms from data modeling to API integration and deployment.",
    role: "AI Developer",
    badge: "Development"
  },
  {
    title: "Open Source Collaboration",
    description: "Maintained active GitHub contribution with project-based learning and sharing real-world software packages.",
    role: "GitHub Contributor",
    badge: "Open Source"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "NeuroVoice AI Project",
    role: "AI Engineer & Architect",
    duration: "Personal Project",
    skills: ["Speech Synthesis", "VITS Models Integration", "Audio Processing", "Responsive UI Design"],
    tech: ["Python", "Flask", "Hugging Face", "VITS", "JavaScript"]
  },
  {
    organization: "EduVision AI Platform",
    role: "Full-Stack & ML Developer",
    duration: "Academic Project",
    skills: ["Predictive Analytics", "Data Visualization", "REST API Development", "Database Integration"],
    tech: ["React.js", "FastAPI", "Python", "PostgreSQL", "Machine Learning"]
  },
  {
    organization: "TeamPulse Application",
    role: "Backend & Security Lead",
    duration: "Full-Stack Project",
    skills: ["Secure Authentication", "JWT Implementation", "Database Modeling", "API Optimization"],
    tech: ["React.js", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT Auth"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Analyzing complex tasks and formulating clean, modular programmatic solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating effectively with team members in academic and project settings." },
  { name: "Communication", icon: "💬", desc: "Expressing ideas clearly in both business contexts and technical documentation." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to learn new frameworks like FastAPI, Flask, or speech synthesis models." },
  { name: "Analytical Thinking", icon: "🧠", desc: "Breaking down datasets and system requirements to optimize application flows." },
  { name: "Time Management", icon: "⏰", desc: "Balancing engineering coursework, active development, and project deployments." }
];

export const projects = [
  {
    id: "neurovoice",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "NeuroVoice AI",
    description:
      "NeuroVoice AI — An AI-powered multilingual Text-to-Speech application. It integrates Hugging Face VITS models for realistic speech synthesis, supporting multiple languages with downloadable generated audio and a highly responsive user interface for smooth user interaction.",
    techTags: [
      "Python",
      "Flask",
      "Hugging Face",
      "VITS Models",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    links: {
      github: "https://github.com/pranaygandlewar",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "eduvision",
    number: "02",
    badge: "🧠 AI & Analytics",
    title: "EduVision AI",
    description:
      "Built an AI-based platform to predict student academic performance. Features an interactive dashboard with data visualization, a responsive React frontend, and a FastAPI backend with PostgreSQL integration.",
    techTags: ["React.js", "FastAPI", "Python", "Machine Learning", "PostgreSQL"],
    links: {
      github: "https://github.com/pranaygandlewar",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "teampulse",
    number: "03",
    badge: "💼 Full Stack",
    title: "TeamPulse",
    description:
      "A complete full-stack team management platform featuring secure JWT-based authentication, REST APIs for efficient data management, and a responsive frontend layout.",
    techTags: ["React.js", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT Auth"],
    links: {
      github: "https://github.com/pranaygandlewar",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "ai-portfolio",
    number: "04",
    badge: "🎨 Portfolio",
    title: "AI Portfolio Website",
    description:
      "Designed and developed a modern developer portfolio using React and Vite, styled with Tailwind CSS. Showcases AI projects, technical skills, GitHub repositories, and achievements with responsive layout.",
    techTags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/pranaygandlewar",
      demo: "https://pranay-tech-ai.vercel.app",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Outstanding Performance in Student Analytics",
      issuer: "Karanjekar College of Engineering & Management",
      icon: "📊",
    },
    {
      name: "NPTEL Online Certification",
      issuer: "Swayam / NPTEL",
      icon: "🎓",
    },
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "Bachelor of Technology (B.Tech) – AI & DS",
  institution: "Karanjekar College of Engineering & Management (KCEM), Sakoli",
  affiliation: "Affiliated to Dr. Babasaheb Ambedkar Technological University (DBATU)",
  duration: "2024 – 2028",
  location: "Sakoli, Maharashtra, India",
};

export const footerContent = {
  taglines: [
    "AI & Data Science Student",
    "Python · FastAPI · React",
    "AI-Powered Applications",
  ],
  credential: "B.Tech AI & DS · KCEM",
  copyright: `© ${new Date().getFullYear()} Pranay Gandlewar | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
