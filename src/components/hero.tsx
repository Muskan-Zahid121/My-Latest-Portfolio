import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Mail,
  Linkedin,
  Code,
  Database,
  Brain,
  Zap,
  Star,
  Cpu,
  Rocket,
  Award,
  TrendingUp,
  Menu,
  FolderOpen,
  X,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./animated";

export default function Home() {
  // Startup loader removed — render immediately
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only handle scroll -> update active section
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects"];
      const scrollPosition = window.scrollY + 150; // offset for detection

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
    // run once to sync active section on mount
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Increased offset for mobile
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      // Use setTimeout to ensure smooth scrolling on mobile
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 50);
    }
  };

  // scrollY not required after removing transforms; keep hook if needed later
  useScroll();

  // Startup loader removed — render UI immediately

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#06060f] via-[#0b0f1c] to-[#06070d] text-white overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Static Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground variant="hero" />
      </div>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-purple-400/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <motion.h1
                className="text-2xl font-extrabold bg-gradient-to-r from-fuchsia-300 via-purple-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(192,132,252,0.25)] tracking-wide"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                MUSKAN ZAHID
              </motion.h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-9">
              {["about", "skills", "experience", "projects"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-300 ${
                    activeSection === section
                      ? "text-purple-300"
                      : "text-gray-300"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {[
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
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-purple-500/15 hover:bg-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-purple-500/15 hover:bg-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-purple-300" />
                ) : (
                  <Menu className="w-6 h-6 text-purple-300" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-purple-500/20 mt-4"
              >
                <div className="py-4 space-y-4">
                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    {["hero", "about", "skills", "experience", "projects"].map(
                      (section) => (
                        <motion.button
                          key={section}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            // Add delay to ensure menu closes before scrolling
                            setTimeout(() => {
                              scrollToSection(section);
                            }, 150);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-purple-500/10 ${
                            activeSection === section
                              ? "text-purple-300 bg-purple-500/10"
                              : "text-gray-300"
                          }`}
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </motion.button>
                      )
                    )}
                  </div>

                  {/* Mobile Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-purple-500/20">
                    {[
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
                    ].map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-purple-500/15 hover:bg-purple-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <link.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <motion.div
          className="absolute inset-0 "
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left group"
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-sm font-medium mb-8"
              >
                                  <div className="w-2 h-2 bg-green-700 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </motion.div> */}

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 mt-[80px] md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(192,132,252,0.25)]">
                  FULL STACK
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-fuchsia-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(236,72,153,0.25)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  AI ENGINEER
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-purple-200/90 mb-3 font-medium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Full Stack AI Engineer | AI Agents & RAG | React.js | Next.js |
                Node.js | Nest.js | FastAPI | LangChain | AWS
              </motion.p>

              <motion.div
                className="flex items-center gap-2 text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
              >
                <MapPin className="w-4 h-4 text-purple-300" />
                <span className="text-sm">Multan, Punjab, Pakistan</span>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Building scalable web applications, AI-powered solutions, and
                modern SaaS products that solve real business problems.
                <br />
                <motion.span
                  className="text-gray-400 font-semibold"
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Open to on-site, hybrid, and remote opportunities.
                </motion.span>
              </motion.p>
              {/* Key Highlights */}
              <motion.div
                className="mt-6 grid gap-3 text-sm text-gray-300"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="flex items-start gap-3">
                  <Rocket className="w-4 h-4 text-purple-300 mt-0.5" />
                  <span>
                    Ship production-ready features end-to-end — frontend to AI
                    backend
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-pink-300 mt-0.5" />
                  <span>
                    Performance-focused: accessible, responsive, and optimized
                    experiences
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-fuchsia-300 mt-0.5" />
                  <span>
                    Specialized in RAG, LangChain, vector DBs, and robust API
                    design
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("projects")}
                    size="lg"
                    className="group bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                  >
                    <span>Explore My Work</span>
                    <FolderOpen className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("experience")}
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-500/50 hover:border-purple-500 text-purple-200 hover:text-purple-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent hover:bg-purple-500/10"
                  >
                    <span>View Experience</span>
                    <Award className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center justify-center space-y-8"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[
                  { number: "2.5", label: "Years Experience", icon: Award },
                  { number: "4", label: "Years Learning", icon: Brain },
                  { number: "60+", label: "Technologies", icon: Cpu },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass border border-slate-600/50 rounded-2xl p-6 text-center backdrop-blur-md shadow-lg shadow-purple-500/5 hover:shadow-purple-500/15 transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "#a78bfa" }}
                  >
                    <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-purple-200">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="border border-slate-600/50 rounded-2xl p-4 backdrop-blur-md hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-purple-300" />
                    <p className="text-sm text-gray-300">
                      LLM apps with RAG, embeddings, and tool-augmented agents
                    </p>
                  </div>
                </div>
                <div className="border border-slate-600/50 rounded-2xl p-4 backdrop-blur-md hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-pink-300" />
                    <p className="text-sm text-gray-300">
                      Production-grade APIs with PostgreSQL and caching
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Skills Preview */}
              <motion.div
                className="glass border border-slate-600/50 rounded-[10px] p-6 w-full backdrop-blur-md shadow-lg shadow-purple-500/5 hover:shadow-purple-500/15 transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.02, borderColor: "#a78bfa" }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Tech Stack
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-purple-300 mb-2 font-semibold">
                      Frontend
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "Angular",
                        "TypeScript",
                        "Tailwind CSS",
                        "Redux",
                        "Framer Motion",
                      ].map((skill, index) => {
                        const colors = [
                          "bg-purple-500/20 text-purple-200 border-purple-500/40",
                          "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-500/40",
                        ];
                        return (
                          <span
                            key={index}
                            className={`px-3 py-1.5 ${colors[index % colors.length]} rounded-full text-xs font-medium border`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-pink-300 mb-2 font-semibold">
                      Backend & AI
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "NestJS",
                        "FastAPI",
                        "PostgreSQL",
                        "LangChain",
                        "RAG",
                        "AWS",
                        "Docker",
                      ].map((skill, index) => {
                        const colors = [
                          "bg-pink-500/20 text-pink-200 border-pink-500/40",
                          "bg-violet-500/20 text-violet-200 border-violet-500/40",
                        ];
                        return (
                          <span
                            key={index}
                            className={`px-3 py-1.5 ${colors[index % colors.length]} rounded-full text-xs font-medium border`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </motion.div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-15 relative overflow-hidden z-10">
        <AnimatedBackground variant="about" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                The Architect of Digital Intelligence
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a Full-Stack AI Engineer who enjoys building scalable web
              applications, AI-powered solutions, and modern SaaS products that
              solve real business problems. I work across frontend and backend
              development with React, Node.js, FastAPI, PostgreSQL, Docker, and
              modern cloud technologies — recently focusing on AI assistants,
              RAG, conversational AI, and workflow automation using LangChain
              and LLMs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/40 border-purple-500/20 h-full backdrop-blur-md shadow-lg shadow-purple-500/5 hover:shadow-purple-500/15 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-300 flex items-center">
                    <Award className="w-6 h-6 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Bahauddin Zakariya University
                    </h4>
                    <p className="text-purple-300 font-medium">
                      Bachelor of Science, Computer Science
                    </p>
                    <p className="text-gray-400">August 2021 – July 2024</p>
                    <p className="text-purple-200 text-sm font-medium mt-1">
                      Grade: A
                    </p>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                      Completed a Bachelor of Science in Computer Science with a
                      strong foundation in software engineering, programming,
                      algorithms, data structures, databases, and web development.
                      Gained practical experience in C, C++, JavaScript, React.js,
                      Node.js, and database management through academic projects
                      and hands-on learning.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/40 border-fuchsia-500/20 h-full backdrop-blur-md shadow-lg shadow-fuchsia-500/5 hover:shadow-fuchsia-500/15 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-fuchsia-300 flex items-center">
                    <Rocket className="w-6 h-6 mr-2" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-fuchsia-300 mt-1 flex-shrink-0" />
                      <span>
                        AI-powered CRM Assistants & customer management systems
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-fuchsia-300 mt-1 flex-shrink-0" />
                      <span>
                        RAG-based applications, AI chatbots & virtual assistants
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-fuchsia-300 mt-1 flex-shrink-0" />
                      <span>
                        Authentication, RBAC, RESTful APIs & workflow automation
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/40 border-purple-500/20 h-full backdrop-blur-md shadow-lg shadow-purple-500/5 hover:shadow-purple-500/15 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-300 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                      <span>
                        Understanding business problems and choosing the right
                        technology
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                      <span>
                        Building scalable solutions that create real business value
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                      <span>
                        Continuously learning System Design, Cloud, Docker, AI, and
                        modern software development
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-15 relative overflow-hidden z-10">
        <AnimatedBackground variant="skills" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit of technologies and frameworks that power
              innovative solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
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
                color: "from-purple-500 to-pink-500",
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
                color: "from-fuchsia-500 to-purple-500",
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
                color: "from-violet-500 to-purple-500",
              },
              {
                title: "AI & Generative AI",
                icon: Brain,
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
                color: "from-pink-500 to-fuchsia-500",
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
                color: "from-purple-700 to-slate-700",
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
                color: "from-fuchsia-600 to-purple-600",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-slate-900/40 border-slate-600/50 transition-all duration-300 hover:border-purple-500/40 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`bg-gradient-to-br ${category.color} p-3 rounded-xl`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-purple-200 font-medium">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-500/15 text-purple-200 rounded-full text-sm border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Areas of Expertise
                      </h4>
                      <ul className="space-y-2">
                        {category.expertise.map((expertise, expertiseIndex) => (
                          <li
                            key={expertiseIndex}
                            className="flex items-start space-x-3 text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{expertise}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-15 elative overflow-hidden z-10">
        <AnimatedBackground variant="experience" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A track record of delivering exceptional results and driving
              technological innovation
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                company: "Cyberify",
                position: "Full Stack AI Engineer",
                period: "Oct 2025 - Present",
                location: "Multan, Punjab, Pakistan · On-site",
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
                company: "Fiverr",
                position: "Full Stack Developer · Freelance",
                period: "Aug 2025 - Present",
                location: "Multan, Punjab, Pakistan · Remote",
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
            ].map((job, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-slate-900/40 border-slate-600/50 transition-all duration-300 hover:border-purple-500/40 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">
                          {job.company}
                        </CardTitle>
                        <CardDescription className="text-purple-200 font-semibold text-lg">
                          {job.position}
                        </CardDescription>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-gray-400 font-medium">
                            {job.period}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {job.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start space-x-3 text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/15 text-purple-200 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-15 relative overflow-hidden z-10">
        <AnimatedBackground variant="projects" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate technical
              expertise and creative problem-solving
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "AI-Powered Sales CRM",
                subtitle: "Intelligent Workflow Automation · Cyberify",
                description:
                  "A modern CRM platform that integrates AI to understand natural language, automate repetitive tasks, and provide intelligent assistance for daily sales operations — managing customers, leads, conversations, and business workflows from a single system.",
                longDescription:
                  "Features an AI assistant that executes CRM actions via natural language, plus RAG-based document retrieval for context-aware answers. Built with React.js, FastAPI, Node.js, PostgreSQL with PGVector, LangChain, LangGraph, and AWS.",
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
                color: "from-purple-500 to-fuchsia-600",
              },
              {
                title: "Cognify AI",
                subtitle: "RAG Document Chatbot · Cyberify",
                description:
                  "An intelligent document-based chatbot that enables users to upload files and interact conversationally with their content using LangChain agents for precise, context-aware answers sourced directly from uploaded documents.",
                longDescription:
                  "Built using React, Node.js, and PostgreSQL with RAG architecture for research, customer support, and knowledge management use cases.",
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
                color: "from-fuchsia-500 to-pink-500",
              },
              {
                title: "Instagram Chat",
                subtitle: "Real-time Messaging App · Cyberify",
                description:
                  "A real-time chat application inspired by Instagram's messaging feature using Next.js, Node.js, and Socket.io for instant, bidirectional communication with a smooth, responsive chat experience.",
                longDescription:
                  "Explores real-time communication patterns and scalable web architecture while delivering private messaging with modern UI/UX.",
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
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Real-time Chat App",
                subtitle: "Group & Private Messaging · Cyberify",
                description:
                  "A real-time chat application for seamless communication and instant message delivery. Built with Next.js for the frontend and Node.js with Socket.io for bidirectional communication without page reloads.",
                longDescription:
                  "Supports both private and group conversations with secure data handling and a responsive UI optimized for performance.",
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
                color: "from-fuchsia-500 to-purple-600",
              },
              {
                title: "Personal Portfolio Website",
                subtitle: "Full-Stack Developer Showcase",
                description:
                  "A personal portfolio website showcasing skills, projects, and professional experience in a clean, modern layout — featuring project case studies, a dedicated skills section, and ways to connect.",
                longDescription:
                  "Built with React, Node.js, and PostgreSQL, reflecting expertise in full-stack development, UI/UX creativity, and problem-solving as a digital identity and professional presence.",
                features: [
                  "Clean, modern responsive layout",
                  "Detailed project case studies",
                  "Dedicated skills and experience sections",
                  "Animated UI with Framer Motion",
                  "Contact and social integration",
                  "Showcases full-stack development expertise",
                ],
                tech: [
                  "React.js",
                  "Tailwind CSS",
                  "Framer Motion",
                  "TypeScript",
                  "Vite",
                  "GitHub",
                ],
                color: "from-purple-500 to-fuchsia-500",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-slate-900/40 border-slate-600/50 transition-all duration-300 hover:border-purple-500/40 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`bg-gradient-to-br ${project.color} p-3 rounded-xl`}
                        >
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-white">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-purple-200 font-semibold">
                            {project.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-3 text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/15 text-purple-200 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <AnimatedBackground variant="cta" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ready to Build the Future Together?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's transform your ideas into intelligent reality. Let's create
            solutions that matter.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=muskanzahid.pk@gmail.com&su=Project%20Inquiry&body=Hi%20Muskan%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500/50 hover:border-purple-500 text-purple-200 hover:text-purple-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent hover:bg-purple-500/10"
              >
                <a
                  href="https://github.com/Muskan-Zahid121"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 border-t border-purple-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(192,132,252,0.25)]">
                MUSKAN ZAHID
              </h3>
              <p className="text-gray-400">
                Full Stack AI Engineer | AI Agents & RAG
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Muskan-Zahid121/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muskanzahid.pk@gmail.com&su=Project%20Inquiry&body=Hi%20Muskan%2C%20I'd%20like%20to%20discuss%20a%20project."
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-zahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Footer quick links */}
            <div className="mt-6 md:mt-0 flex items-center gap-4 text-sm text-gray-400">
              <a
                href="#about"
                className="hover:text-purple-300 transition-colors"
              >
                About
              </a>
              <span className="opacity-30">•</span>
              <a
                href="#skills"
                className="hover:text-purple-300 transition-colors"
              >
                Skills
              </a>
              <span className="opacity-30">•</span>
              <a
                href="#experience"
                className="hover:text-purple-300 transition-colors"
              >
                Experience
              </a>
              <span className="opacity-30">•</span>
              <a
                href="#projects"
                className="hover:text-purple-300 transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Designer Credit */}
          <div className="mt-6 pt-6 border-t border-purple-900/30">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Designed and Developed by{" "}
                <span className="text-purple-300 font-medium">
                  Muskan Zahid
                </span>{" "}
                • Full Stack AI Engineer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
