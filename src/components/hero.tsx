import { useState, useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  Award,
  Brain,
  Code,
  Cpu,
  Database,
  FileText,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessagesSquare,
  Mic,
  Rocket,
  Sparkles,
  TrendingUp,
  Trophy,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { GravityStarsBackground } from "./animate-ui/components/backgrounds/gravity-stars";

const NAV_LINKS = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Muskan-Zahid121/",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/muskan-zahid/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const HERO_STATS = [
  { number: "2.5", label: "Years Experience", icon: Award },
  { number: "3+", label: "Years Learning", icon: Brain },
  { number: "30+", label: "Technologies", icon: Cpu },
];

const AI_NODES = [
  { label: "LangChain", left: 11, top: 6 },
  { label: "LangGraph", left: 86, top: 9 },
  { label: "Agentic AI", left: 11, top: 57 },
  { label: "AI Agents", left: 86, top: 47 },
  { label: "RAG Pipelines", left: 16, top: 91 },
  { label: "LLMs", left: 90, top: 90 },
];

const FOCUS_ITEMS = [
  {
    icon: Brain,
    title: "LLM Applications",
    description: "RAG, embeddings, and tool-augmented agents",
  },
  {
    icon: Database,
    title: "Production APIs",
    description: "PostgreSQL, caching, and scalable backend services",
  },
  {
    icon: Sparkles,
    title: "Multi-Agent Workflows",
    description: "LangChain, LangGraph, and AI orchestration",
  },
];

const TECH_STACK = [
  { label: "Frontend", items: ["React.js", "Next.js", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Python", "FastAPI"] },
  { label: "AI & Data", items: ["LangChain", "RAG", "PostgreSQL"] },
  { label: "Cloud", items: ["Docker", "AWS"] },
];

const SERVICES = [
  {
    icon: MessagesSquare,
    title: "AI Assistants & Agents",
    description:
      "Conversational assistants, multi-agent workflows, and tool-augmented LLM features built around real business processes.",
    tags: ["LangChain", "LangGraph", "RAG"],
  },
  {
    icon: Cpu,
    title: "Full-Stack Products",
    description:
      "End-to-end platforms — React and Next.js frontends with Node, NestJS, or FastAPI backends and PostgreSQL data layers.",
    tags: ["React", "Next.js", "NestJS", "FastAPI"],
  },
  {
    icon: Zap,
    title: "APIs & Automation",
    description:
      "REST APIs, workflow automation, and integrations that plug AI into the tools teams already use every day.",
    tags: ["REST APIs", "Docker", "AWS"],
  },
];

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  expertise: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Shadcn/UI",
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "Framer Motion",
    ],
    description:
      "Building responsive, accessible user interfaces with modern frameworks, state management, and animation libraries.",
    expertise: [
      "Component-based architecture",
      "State management (Redux, Zustand, Context API)",
      "Responsive & accessible design",
      "Performance optimization",
      "UI/UX with Material UI & Shadcn/UI",
    ],
  },
  {
    title: "Backend Development",
    icon: Cpu,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Socket.io",
      "Authentication",
      "RBAC",
      "JWT",
      "OAuth",
      "Webhooks",
    ],
    description:
      "Robust server-side architecture with secure APIs, real-time communication, and authentication systems.",
    expertise: [
      "RESTful & real-time API development",
      "Authentication & authorization (JWT, OAuth, RBAC)",
      "WebSocket & Socket.io integration",
      "Webhook-driven workflows",
      "Scalable backend services",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "pgvector",
      "Sequelize ORM",
      "Vector Databases",
      "pgAdmin",
    ],
    description:
      "Relational and NoSQL database design, vector storage, caching, and ORM-based data management.",
    expertise: [
      "Relational & document database design",
      "Vector search with pgvector",
      "ORM-based data modeling (Sequelize)",
      "Caching with Redis",
      "Database administration & optimization",
    ],
  },
  {
    title: "AI & Generative AI",
    icon: Sparkles,
    skills: [
      "OpenAI APIs",
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents",
      "Embeddings",
      "Prompt Engineering",
      "LLM Integration",
      "LLM Orchestration",
      "Semantic Search",
      "Multi-Agent Workflows",
      "Model Evaluation",
    ],
    description:
      "Intelligent systems powered by LLMs, RAG pipelines, AI agents, and multi-agent workflow orchestration.",
    expertise: [
      "RAG & semantic search implementation",
      "LLM integration & orchestration",
      "Multi-agent workflow design",
      "Embedding pipelines & vector search",
      "Prompt engineering & model evaluation",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Zap,
    skills: [
      "Docker",
      "Docker Compose",
      "Docker Hub",
      "AWS (EC2, Amazon S3)",
      "Nginx",
      "PM2",
      "Linux",
      "CI/CD",
      "Git",
      "GitHub",
      "Postman",
    ],
    description:
      "Containerized deployments, cloud infrastructure, and automated CI/CD pipelines for reliable production systems.",
    expertise: [
      "Docker containerization & orchestration",
      "AWS cloud infrastructure (EC2, S3)",
      "CI/CD pipeline automation",
      "Process management with PM2 & Nginx",
      "Linux server administration",
    ],
  },
  {
    title: "Architecture & System Design",
    icon: Rocket,
    skills: [
      "Multi-Tenant SaaS Architecture",
      "Agentic AI Systems",
      "Embedding Pipelines",
      "Scalable Backend Architecture",
      "API Design",
      "Real-Time Applications",
    ],
    description:
      "Designing scalable, multi-tenant SaaS platforms, agentic AI systems, and real-time application architectures.",
    expertise: [
      "Multi-tenant SaaS system design",
      "Agentic AI & embedding pipeline architecture",
      "Scalable backend & API design patterns",
      "Real-time application architecture",
      "Production-ready system design",
    ],
  },
];

type Job = {
  company: string;
  position: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  achievements: string[];
  tech: string[];
};

const JOBS: Job[] = [
  {
    company: "Cyberify",
    position: "Full Stack AI Engineer",
    period: "Oct 2025 - Present",
    location: "Multan, Punjab, Pakistan · On-site",
    current: true,
    description:
      "Designed and maintained AI-powered web applications with a focus on scalability and performance. Built interactive user interfaces using React.js with focused on building scalable architectures, optimizing performance and ensuring smooth API communication. Collaborated with cross-functional teams to deliver innovative, efficient, and production-ready software solutions.",
    achievements: [
      "Built AI-powered web applications with scalable architecture",
      "Optimized system performance and API communication",
      "Delivered production-ready software with cross-functional teams",
      "Implemented RAG pipelines and modern AI integrations",
    ],
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "RAG",
      "LangChain",
      "REST APIs",
    ],
  },
  {
    company: "Fiverr",
    position: "Full Stack Developer · Freelance",
    period: "Aug 2025 - Present",
    location: "Multan, Punjab, Pakistan · Remote",
    current: true,
    description:
      "Working as a Freelance Full Stack & AI Developer, delivering custom web applications, AI-powered solutions, and automation systems for international clients. Specializing in React.js, Node.js, PostgreSQL, Generative AI, and workflow automation.",
    achievements: [
      "Delivered full-stack apps with React.js, Next.js, Node.js, and PostgreSQL",
      "Built AI chatbots, RAG systems, and multi-agent workflows with LangChain",
      "Designed scalable REST APIs, auth systems, and RBAC",
      "Integrated Twilio, AWS S3, payment gateways, and external APIs",
      "Managed end-to-end project lifecycles for international clients",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "LangChain",
      "LangGraph",
      "AWS",
    ],
  },
  {
    company: "Cyberify",
    position: "Associate Software Engineer",
    period: "Mar 2025 - Sep 2025",
    location: "Multan, Punjab, Pakistan · On-site",
    description:
      "Designed and developed AI-powered chatbots using Retrieval-Augmented Generation (RAG) for enhanced response accuracy. Built intelligent conversational systems integrating React.js, Node.js, and PostgreSQL with document processing, embeddings, and vector search.",
    achievements: [
      "Built RAG-powered chatbots with context-aware responses",
      "Implemented document processing and vector search pipelines",
      "Integrated React.js, Node.js, and PostgreSQL stack",
      "Optimized AI pipelines for production chatbot solutions",
    ],
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "RAG",
      "Vector Search",
      "REST APIs",
    ],
  },
  {
    company: "Cyberify",
    position: "React Developer",
    period: "Dec 2024 - Feb 2025",
    location: "Multan, Punjab, Pakistan · On-site",
    description:
      "Developed responsive, high-quality web applications by translating Figma designs into clean, reusable React components. Collaborated closely with design teams to ensure pixel-perfect interfaces and smooth user experiences across devices and browsers.",
    achievements: [
      "Translated Figma designs into pixel-perfect React components",
      "Built responsive, reusable UI components",
      "Ensured cross-device and cross-browser compatibility",
      "Collaborated with design teams for seamless UX",
    ],
    tech: [
      "React.js",
      "UI Design",
      "Figma",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    company: "SE Software Technologies",
    position: "MERN Stack Developer",
    period: "Oct 2024 - Nov 2024",
    location: "Multan, Punjab, Pakistan · On-site",
    description:
      "Worked as a MERN Stack Developer, developing and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Built responsive UIs, RESTful APIs, and managed database operations with authentication and authorization.",
    achievements: [
      "Built full-stack apps with MongoDB, Express.js, React.js, Node.js",
      "Developed RESTful APIs and third-party integrations",
      "Implemented authentication and authorization",
      "Collaborated using Git and GitHub for scalable delivery",
    ],
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    company: "BurjSoft Pvt Ltd.",
    position: "Full Stack Developer",
    period: "Jun 2024 - Sep 2024",
    location: "Multan, Punjab, Pakistan · On-site",
    description:
      "Developed responsive and dynamic web applications using JavaScript, React, Angular, and Node.js. Built full-stack solutions that enhance scalability, performance, and user experience within agile teams.",
    achievements: [
      "Built dynamic web apps with React, Angular, and Node.js",
      "Delivered scalable full-stack solutions in agile teams",
      "Implemented innovative features for performance and UX",
      "Collaborated on design, development, and deployment",
    ],
    tech: [
      "React.js",
      "Angular",
      "Node.js",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    company: "Real Estate Company",
    position: "Lead Generation Executive",
    period: "Apr 2023 - Jun 2023",
    location: "Multan, Punjab, Pakistan · On-site",
    description:
      "Worked as a Lead Generation Executive, responsible for researching websites and collecting relevant business contact information, particularly email addresses. Organized and entered the collected data into Microsoft Excel spreadsheets while maintaining accuracy and consistency.",
    achievements: [
      "Researched websites to collect business contact information, particularly email addresses",
      "Organized and entered collected data into Excel with accuracy and consistency",
      "Performed web research, data collection, and contact list building",
      "Supported lead generation activities with basic data management",
    ],
    tech: [
      "Lead Generation",
      "Web Research",
      "Data Entry",
      "Microsoft Excel",
      "Contact List Building",
    ],
  },
];

type Project = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  tech: string[];
};

const PROJECTS: Project[] = [
  {
    title: "AI-Powered Sales CRM",
    subtitle: "Intelligent Workflow Automation · Cyberify",
    icon: Brain,
    description:
      "A modern CRM platform that integrates AI to understand natural language, automate repetitive tasks, and provide intelligent assistance for daily sales operations — managing customers, leads, conversations, and business workflows from a single system.",
    features: [
      "Natural language AI assistant for CRM actions (CRUD operations)",
      "RAG-based document retrieval for context-aware answers",
      "Sales pipeline, follow-ups, and workflow automation",
      "PostgreSQL with PGVector for structured and vector data",
      "LangChain & LangGraph for AI orchestration",
      "Enterprise-scale architecture on AWS",
    ],
    tech: [
      "React.js",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "PGVector",
      "LangChain",
      "LangGraph",
      "AWS",
    ],
  },
  {
    title: "Cognify AI",
    subtitle: "RAG Document Chatbot · Cyberify",
    icon: FileText,
    description:
      "An intelligent document-based chatbot that enables users to upload files and interact conversationally with their content using LangChain agents for precise, context-aware answers sourced directly from uploaded documents.",
    features: [
      "Upload and chat with documents conversationally",
      "LangChain agents for Retrieval-Augmented Generation",
      "Context-aware answers from uploaded content",
      "Document processing and vector search",
      "Research, support, and knowledge management ready",
      "Secure file handling and user sessions",
    ],
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "LangChain",
      "RAG",
      "OpenAI",
    ],
  },
  {
    title: "Instagram Chat",
    subtitle: "Real-time Messaging App · Cyberify",
    icon: Instagram,
    description:
      "A real-time chat application inspired by Instagram's messaging feature using Next.js, Node.js, and Socket.io for instant, bidirectional communication with a smooth, responsive chat experience.",
    features: [
      "Real-time message delivery with Socket.io",
      "Next.js dynamic frontend with responsive UI",
      "Instant connect and bidirectional communication",
      "Secure data handling and session management",
      "Smooth performance across devices",
      "Scalable Node.js backend architecture",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "React.js",
      "WebSockets",
      "JavaScript",
    ],
  },
  {
    title: "Real-time Chat App",
    subtitle: "Group & Private Messaging · Cyberify",
    icon: MessagesSquare,
    description:
      "A real-time chat application for seamless communication and instant message delivery. Built with Next.js for the frontend and Node.js with Socket.io for bidirectional communication without page reloads.",
    features: [
      "Private and group conversation support",
      "Real-time bidirectional messaging",
      "No page reloads — instant delivery",
      "Secure data handling and auth",
      "Responsive UI for all screen sizes",
      "Node.js + Socket.io backend",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "React.js",
      "WebSockets",
      "PostgreSQL",
    ],
  },
];

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "Build REST APIs with FastAPI",
    issuer: "LinkedIn",
    issued: "Sep 2026",
    icon: Zap,
    description:
      "Building REST APIs with FastAPI — covering API design, development, and Python backend fundamentals.",
    skills: ["REST APIs", "FastAPI", "Python"],
  },
  {
    title: "Basics of Data Science (CR1061)",
    issuer: "UniAthena",
    issued: "Sep 2026",
    expires: "Dec 2026",
    credentialId: "262163358.CR1061",
    icon: Brain,
    description:
      "A foundation in data science covering data collection, cleaning, preprocessing, analysis, visualization, and interpretation.",
    skills: ["Data Analysis", "Pandas", "Data Visualization"],
  },
];

type AwardItem = {
  title: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
  description: string;
};

const AWARDS: AwardItem[] = [
  {
    title: "English Speech on Corruption",
    issuer: "Govt Associate College For Women",
    date: "Nov 2020",
    icon: Mic,
    description:
      "Delivered an English speech on the causes and effects of corruption, highlighting honesty, responsibility, and ethical behavior — strengthening public speaking, presentation, and communication skills.",
  },
  {
    title: "Best Presentation Award — Daffodils Project",
    issuer: "Muslim Public Girls School",
    date: "Oct 2017",
    icon: Trophy,
    description:
      "Received an award and shield for presenting an English speech and project based on “Daffodils” — an early milestone in public speaking and confident presentation.",
  },
];

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=muskanzahid.pk@gmail.com&su=Project%20Inquiry&body=Hi%20Muskan%2C%20I'd%20like%20to%20discuss%20a%20project.";

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 text-center md:mb-12">
      <span className="font-display text-xs font-medium uppercase tracking-[0.35em] text-burgundy-light">
        {index} · {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-burgundy-light to-transparent" />
      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "highlights",
        "about",
        "skills",
        "experience",
        "projects",
        "certifications",
      ];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const offsetPosition = element.offsetTop - offset;

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 50);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-x-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <GravityStarsBackground
          className="size-full text-white"
          starsCount={110}
          glowIntensity={18}
          mouseInfluence={140}
          gravityStrength={90}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/4 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(164,19,60,0.10),transparent_65%)]" />
        <div className="absolute right-[-10rem] top-1/3 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(128,0,32,0.09),transparent_65%)]" />
        <div className="absolute bottom-[-8rem] left-[-6rem] size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(224,92,122,0.06),transparent_65%)]" />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-black/90 backdrop-blur-md"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-burgundy-soft to-burgundy font-display text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
                MZ
              </span>
              <span className="hidden font-display text-base font-semibold tracking-tight text-white sm:block">
                Muskan Zahid<span className="text-burgundy-light">.</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-burgundy-light/30 bg-burgundy-soft/40"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.05] p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:flex">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-full p-2 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-burgundy-light"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <link.icon className="size-5" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:bg-burgundy-soft/30"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="size-6 text-burgundy-light" />
                ) : (
                  <Menu className="size-6 text-burgundy-light" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-burgundy-soft via-burgundy-light to-burgundy-soft"
          style={{ scaleX: progressScale }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/10 bg-black/95 md:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection(link.id), 150);
                    }}
                    className={`w-full rounded-full px-5 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? "bg-burgundy-soft/20 text-burgundy-light"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}

                <div className="flex justify-center gap-4 border-t border-white/10 pt-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="rounded-full bg-white/10 p-3 text-white/80 transition-all duration-300 hover:bg-burgundy-soft/30 hover:text-burgundy-light"
                    >
                      <link.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 flex min-h-screen items-center overflow-hidden pt-16"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="text-center lg:text-left">
              <motion.div
                className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Open to on-site, hybrid & remote opportunities
              </motion.div>

              <motion.p
                className="mb-3 font-display text-lg text-burgundy-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hi, I'm Muskan Zahid —
              </motion.p>

              <motion.h1
                className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-white">Full Stack</span>
                <br />
                <span className="text-gradient-rose">AI Engineer</span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85 md:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                Building scalable web applications, AI-powered solutions, and
                modern SaaS products that solve real business problems.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    onClick={() => scrollToSection("projects")}
                    size="lg"
                    className="group h-12 rounded-full bg-gradient-to-r from-burgundy-soft to-burgundy px-7 text-base font-semibold text-white shadow-[0_8px_30px_-8px_rgba(164,19,60,0.6)] transition-all duration-300 hover:shadow-[0_8px_40px_-6px_rgba(224,92,122,0.7)] hover:brightness-110"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    onClick={() => scrollToSection("experience")}
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full border-white/20 bg-transparent px-7 text-base font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-burgundy-light/60 hover:bg-burgundy-soft/10 hover:text-burgundy-light"
                  >
                    <span>View Experience</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <motion.div
                className="relative aspect-[7/5] w-full"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(164,19,60,0.4),transparent_62%)]" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 size-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

                <svg
                  className="absolute inset-0 z-10 h-full w-full"
                  viewBox="0 0 70 50"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {AI_NODES.map((node) => (
                    <motion.line
                      key={node.label}
                      x1="35"
                      y1="25"
                      x2={node.left * 0.7}
                      y2={node.top * 0.5}
                      stroke="rgba(224,92,122,0.55)"
                      strokeWidth="0.26"
                      strokeDasharray="1 1.6"
                      animate={{ strokeDashoffset: [0, -5.2] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </svg>

                <div className="absolute left-1/2 top-1/2 z-20 h-[96%] w-[96%] -translate-x-1/2 -translate-y-1/2 scale-[1.2]">
                  <motion.img
                    src="/ai-robot-mascot.png"
                    alt="Friendly AI robot mascot waving with a glowing holographic dashboard"
                    className="h-full w-full object-contain"
                    animate={{ y: [-7, 7, -7] }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    draggable={false}
                  />
                </div>

                {AI_NODES.map((node, index) => (
                  <motion.div
                    key={node.label}
                    className="absolute z-30"
                    style={{ left: `${node.left}%`, top: `${node.top}%` }}
                    initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.08 }}
                  >
                    <motion.span
                      className="chip inline-block whitespace-nowrap border-burgundy-light/30 bg-black/70 px-3.5 py-1.5 text-xs font-medium text-white/90 shadow-[0_0_24px_-6px_rgba(224,92,122,0.55)] backdrop-blur-md"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3.6 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.35,
                      }}
                    >
                      {node.label}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="relative z-10 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="00"
            eyebrow="Highlights"
            title="Where AI Meets Engineering"
            description="From conversational assistants to production platforms — the work I focus on, what I can build for you, and the stack I ship with."
          />

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {HERO_STATS.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
                className="card-surface p-5 text-center md:p-6"
              >
                <stat.icon className="mx-auto mb-3 size-6 text-burgundy-light" />
                <div className="font-display text-2xl font-bold text-white md:text-3xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-xs text-white/60">{stat.label}</div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.08}
                className="card-surface group h-full p-6"
              >
                <div className="mb-5 inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy shadow-[0_0_24px_-6px_rgba(164,19,60,0.5)]">
                  <service.icon className="size-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.1} className="card-surface h-full p-6">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-white">
                <Sparkles className="size-4 text-burgundy-light" />
                Currently focused on
              </h3>
              <div className="mt-5 space-y-4">
                {FOCUS_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors duration-300 hover:border-burgundy-light/30"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-burgundy-soft to-burgundy">
                      <item.icon className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="card-surface h-full p-6">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-white">
                <Code className="size-4 text-burgundy-light" />
                Tech Stack
              </h3>
              <div className="mt-5 space-y-3">
                {TECH_STACK.map((group) => (
                  <div key={group.label} className="flex items-center gap-3">
                    <span className="w-20 shrink-0 text-[11px] font-medium uppercase tracking-wider text-white/45">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="01"
            eyebrow="About"
            title="The Architect of Digital Intelligence"
            description="A Full-Stack AI Engineer working across frontend and backend development — recently focusing on AI assistants, RAG, conversational AI, and workflow automation using LangChain and LLMs."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal className="card-surface group h-full p-6 md:p-7">
              <div className="mb-5 inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy">
                <GraduationCap className="size-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Education
              </h3>
              <div className="mt-1 h-px w-8 bg-burgundy-light/50 transition-all duration-300 group-hover:w-16" />
              <div className="mt-5">
                <h4 className="text-base font-semibold text-white">
                  Bahauddin Zakariya University
                </h4>
                <p className="mt-1 text-sm font-medium text-burgundy-light">
                  Bachelor of Science, Computer Science
                </p>
                <p className="mt-1 text-sm text-white/50">
                  August 2021 – July 2024 · Grade: A
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Strong foundation in software engineering, programming,
                  algorithms, data structures, databases, and web development —
                  with practical experience in C, C++, JavaScript, React.js,
                  Node.js, and database management through academic projects and
                  hands-on learning.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="card-surface group h-full p-6 md:p-7">
              <div className="mb-5 inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy">
                <Rocket className="size-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Mission
              </h3>
              <div className="mt-1 h-px w-8 bg-burgundy-light/50 transition-all duration-300 group-hover:w-16" />
              <ul className="mt-5 space-y-3">
                {[
                  "AI-powered CRM Assistants & customer management systems",
                  "RAG-based applications, AI chatbots & virtual assistants",
                  "Authentication, RBAC, RESTful APIs & workflow automation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/75"
                  >
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-burgundy-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="card-surface group h-full p-6 md:p-7">
              <div className="mb-5 inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy">
                <TrendingUp className="size-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Vision
              </h3>
              <div className="mt-1 h-px w-8 bg-burgundy-light/50 transition-all duration-300 group-hover:w-16" />
              <ul className="mt-5 space-y-3">
                {[
                  "Understanding business problems and choosing the right technology",
                  "Building scalable solutions that create real business value",
                  "Continuously learning System Design, Cloud, Docker, AI, and modern software development",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/75"
                  >
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-burgundy-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow="Skills"
            title="Technical Arsenal"
            description="A comprehensive toolkit of technologies and frameworks that power innovative solutions"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {SKILL_CATEGORIES.map((category, index) => (
              <Reveal
                key={category.title}
                delay={(index % 2) * 0.1}
                className="card-surface h-full p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy shadow-[0_0_24px_-6px_rgba(164,19,60,0.5)]">
                    <category.icon className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {category.expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-burgundy-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="03"
            eyebrow="Experience"
            title="Professional Journey"
            description="A track record of delivering exceptional results and driving technological innovation"
          />

          <div className="relative">
            <div className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-burgundy-light/60 via-white/15 to-transparent" />
            <div className="space-y-6">
              {JOBS.map((job) => (
                <Reveal key={`${job.company}-${job.period}`} className="relative pl-10 md:pl-14">
                  {job.current && (
                    <span className="absolute left-0 top-7 size-4 animate-ping rounded-full bg-burgundy-light/30" />
                  )}
                  <span
                    className={`absolute left-0 top-7 size-4 rounded-full border-2 bg-black ${
                      job.current
                        ? "border-burgundy-light"
                        : "border-white/40"
                    }`}
                  />
                  <div className="card-surface p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {job.company}
                        </h3>
                        <p className="mt-0.5 font-medium text-burgundy-light">
                          {job.position}
                        </p>
                      </div>
                      <span className="chip whitespace-nowrap border-burgundy-light/30 bg-burgundy-soft/15 text-burgundy-light">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-white/50">
                      <MapPin className="size-3" />
                      {job.location}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-[15px]">
                      {job.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {job.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2.5 text-sm text-white/70"
                        >
                          <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-burgundy-light" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                      {job.tech.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow="Projects"
            title="Featured Projects"
            description="Showcasing innovative solutions that demonstrate technical expertise and creative problem-solving"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Reveal
                key={project.title}
                delay={(index % 2) * 0.1}
                className="card-surface group flex h-full flex-col p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy shadow-[0_0_24px_-6px_rgba(164,19,60,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <project.icon className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-burgundy-light">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-[15px]">
                  {project.description}
                </p>
                <ul className="mt-5 grid flex-1 gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-white/70"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-burgundy-light" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section id="certifications" className="relative z-10 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow="Credentials"
            title="Certifications & Awards"
            description="Industry certifications in API development and data science, plus honors for communication and presentation"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {CERTIFICATIONS.map((cert, index) => (
              <Reveal
                key={cert.title}
                delay={(index % 2) * 0.1}
                className="card-surface group h-full p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy shadow-[0_0_24px_-6px_rgba(164,19,60,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <cert.icon className="size-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="chip whitespace-nowrap border-burgundy-light/30 bg-burgundy-soft/15 text-burgundy-light">
                      Certification
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-burgundy-light">
                      {cert.issuer}
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Issued {cert.issued}
                      {cert.expires && ` · Expires ${cert.expires}`}
                      {cert.credentialId &&
                        ` · Credential ID ${cert.credentialId}`}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  {cert.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}

            {AWARDS.map((award, index) => (
              <Reveal
                key={award.title}
                delay={(index % 2) * 0.1}
                className="card-surface group h-full p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-burgundy-soft to-burgundy shadow-[0_0_24px_-6px_rgba(164,19,60,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <award.icon className="size-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="chip whitespace-nowrap border-burgundy-light/30 bg-burgundy-soft/15 text-burgundy-light">
                      Award
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">
                      {award.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-burgundy-light">
                      {award.issuer}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{award.date}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  {award.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] px-6 py-16 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10)] backdrop-blur-xl md:px-16 md:py-20">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-burgundy-light/70 to-transparent" />
            <div className="pointer-events-none absolute -left-24 -top-24 size-64 rounded-full bg-[radial-gradient(circle,rgba(164,19,60,0.18),transparent_70%)]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 size-64 rounded-full bg-[radial-gradient(circle,rgba(164,19,60,0.15),transparent_70%)]" />

            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Ready to Build the{" "}
              <span className="text-gradient-rose">Future Together?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Let's transform your ideas into intelligent reality — creating
              solutions that matter.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full bg-gradient-to-r from-burgundy-soft to-burgundy px-8 text-base font-semibold text-white shadow-[0_8px_30px_-8px_rgba(164,19,60,0.6)] transition-all duration-300 hover:shadow-[0_8px_40px_-6px_rgba(224,92,122,0.7)] hover:brightness-110"
                >
                  <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">
                    <span>Start a Conversation</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-white/20 bg-transparent px-8 text-base font-semibold text-white/90 transition-all duration-300 hover:border-burgundy-light/60 hover:bg-burgundy-soft/10 hover:text-burgundy-light"
                >
                  <a
                    href="https://github.com/Muskan-Zahid121"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    <span>View Code</span>
                  </a>
                </Button>
              </motion.div>
            </div>
            <a
              href="mailto:muskanzahid.pk@gmail.com"
              className="mt-8 inline-flex items-center gap-2 py-1.5 text-sm text-white/50 transition-colors duration-300 hover:text-burgundy-light"
            >
              <Mail className="size-4" />
              muskanzahid.pk@gmail.com
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="font-display text-lg font-semibold tracking-wide text-white">
                MUSKAN ZAHID<span className="text-burgundy-light">.</span>
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Full Stack AI Engineer | AI Agents & RAG
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/60 sm:gap-x-3 lg:gap-x-5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="py-1.5 transition-colors duration-300 hover:text-burgundy-light"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex gap-4">
              <a
                href="https://github.com/Muskan-Zahid121/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="-m-2 p-2 text-white/60 transition-colors duration-300 hover:text-burgundy-light"
              >
                <Github className="size-5" />
              </a>
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="-m-2 p-2 text-white/60 transition-colors duration-300 hover:text-burgundy-light"
              >
                <Mail className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-zahid/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="-m-2 p-2 text-white/60 transition-colors duration-300 hover:text-burgundy-light"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-white/40">
              Designed and Developed by{" "}
              <span className="font-medium text-burgundy-light">
                Muskan Zahid
              </span>{" "}
              · © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
