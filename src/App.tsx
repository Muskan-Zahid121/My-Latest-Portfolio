import { useState, useEffect } from 'react';
import { ArrowRight, Github, Mail, Linkedin, Code, Database, Brain, Zap, Star, Cpu, Rocket, Award, TrendingUp, Menu, X} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible)
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
          const handleScroll = () => {
        const sections = ['about', 'skills', 'experience', 'projects'];
        const scrollPosition = window.scrollY + 150; // Increased offset for better detection

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  console.log(y)
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  console.log(opacity)

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950 text-white overflow-x-hidden relative"
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
        className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-blue-500/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <motion.h1
                className="text-2xl font-bold text-gradient-blue"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                MUSKAN ZAHID
              </motion.h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-9">
              {['about', 'skills', 'experience', 'projects'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${activeSection === section ? 'text-blue-400' : 'text-gray-300'
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
                { href: "https://github.com/muskanzahid", icon: Github, label: "GitHub" },
                { href: "mailto:muskanzahid.pk@gmail.com", icon: Mail, label: "Email" },
                { href: "https://linkedin.com/in/muskanzahid", icon: Linkedin, label: "LinkedIn" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300"
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
                className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-blue-400" />
                ) : (
                  <Menu className="w-6 h-6 text-blue-400" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-blue-500/20 mt-4"
              >
                <div className="py-4 space-y-4">
                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    {['hero', 'about', 'skills', 'experience', 'projects'].map((section) => (
                      <motion.button
                        key={section}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          // Add delay to ensure menu closes before scrolling
                          setTimeout(() => {
                            scrollToSection(section);
                          }, 150);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-500/10 ${
                          activeSection === section ? 'text-blue-400 bg-blue-500/10' : 'text-gray-300'
                        }`}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.button>
                    ))}
                  </div>

                  {/* Mobile Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-blue-500/20">
                    {[
                      { href: "https://github.com/muskanzahid", icon: Github, label: "GitHub" },
                      { href: "mailto:muskanzahid.pk@gmail.com", icon: Mail, label: "Email" },
                      { href: "https://linkedin.com/in/muskanzahid", icon: Linkedin, label: "LinkedIn" },
                    ].map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300"
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
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
              className="text-left"
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8"
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
                              <motion.span
                className="text-gradient-blue"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                FULL STACK
              </motion.span>
                <br />
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  AI ENGINEER
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Crafting intelligent solutions at the intersection of web development and artificial intelligence.
                <br />
                              <motion.span
                className="text-gray-400 font-semibold"
                transition={{ duration: 2, repeat: Infinity }}
              >
                Where innovation meets execution. Where code becomes intelligence.
              </motion.span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection('projects')}
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection('experience')}
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-500/50 hover:border-purple-500 text-purple-400 hover:text-purple-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10"
                  >
                    View Experience
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
                  { number: '1+', label: 'Years Experience', icon: Award },
                  { number: '3+', label: 'Years Learning', icon: Brain },
                  { number: '15+', label: 'Technologies', icon: Cpu }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass border border-slate-600/50 rounded-2xl p-6 text-center backdrop-blur-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Preview */}
              <motion.div
                className="glass border border-slate-600/50 rounded-2xl p-6 w-full backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'AWS', 'PostgreSQL' , 'AI' , 'Langchain' , 'OpenAI' , 'RAG Architecture' , 'Vector Databases' , 'JavaScript' , ' API'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
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
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20   relative overflow-hidden z-10">
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
              <span className="text-gradient-blue">
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
              A passionate Full-Stack AI Engineer with expertise in building scalable web applications and AI-driven features.
              Specializing in React, Node.js, and PostgreSQL, with deep knowledge in integrating AI models and optimizing system performance.
              Committed to creating intelligent solutions that enhance user experience and drive business efficiency.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-blue-500/20 h-full backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-400 flex items-center">
                    <Award className="w-6 h-6 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bahauddin Zakariya University</h4>
                    <p className="text-blue-400 font-medium">Associate Degree of Science</p>
                    <p className="text-gray-400">August 2021 - February 2023</p>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                      Comprehensive foundation in Economics, Statistics, and Computer Science.
                      Extensive hands-on experience in programming with C, C++, and VB.NET.
                      Developed strong analytical and problem-solving skills.
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
              <Card className="glass border-indigo-500/20 h-full backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-indigo-400 flex items-center">
                    <Rocket className="w-6 h-6 mr-2" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                      <span>Creating scalable, high-performance applications that push technological boundaries</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                      <span>Enhancing user experience through intelligent AI-driven solutions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                      <span>Driving business efficiency with data-driven problem-solving approaches</span>
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
              <Card className="glass border-purple-500/20 h-full backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-400 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span>Pioneering the future of AI-integrated web applications</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span>Building intelligent systems that adapt and learn</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span>Empowering businesses through cutting-edge technology solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden z-10">
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
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit of technologies and frameworks that power innovative solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: 'Frontend Development',
                icon: Code,
                skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Shadcn/ui'],
                description: 'Building responsive, accessible user interfaces with modern frameworks and tools. Specializing in creating intuitive user experiences with clean, maintainable code.',
                expertise: ['Component-based architecture', 'State management', 'Responsive design', 'Performance optimization', 'Accessibility standards'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Backend Systems',
                icon: Database,
                skills: ['Node.js', 'Express.js', 'PostgreSQL', 'RESTful APIs', 'GraphQL'],
                description: 'Robust server-side architecture and data management with scalable solutions. Building secure, high-performance APIs and database systems.',
                expertise: ['API development', 'Database design', 'Authentication & authorization', 'Microservices architecture', 'Performance tuning'],
                color: 'from-emerald-500 to-teal-500'
              },
              {
                title: 'AI & Machine Learning',
                icon: Brain,
                skills: ['Langchain', 'OpenAI', 'RAG Architecture', 'Vector Databases', 'NLP'],
                description: 'Intelligent systems and natural language processing with cutting-edge AI technologies. Implementing advanced machine learning solutions.',
                expertise: ['RAG implementation', 'LLM integration', 'Vector embeddings', 'NLP processing', 'AI model optimization'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'DevOps & Cloud',
                icon: Zap,
                skills: ['AWS (EC2, S3)', 'Docker', 'GitHub', 'CI/CD', 'Monitoring'],
                description: 'Scalable deployment and infrastructure management with cloud-native solutions. Ensuring reliable, secure, and efficient deployments.',
                expertise: ['Cloud infrastructure', 'Container orchestration', 'Automated deployments', 'Monitoring & logging', 'Security best practices'],
                color: 'from-orange-500 to-red-500'
              }
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
                <Card className="glass border-slate-600/50 transition-all duration-300 hover:border-blue-500/50 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">{category.title}</CardTitle>
                        <CardDescription className="text-blue-300 font-medium">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Areas of Expertise</h4>
                      <ul className="space-y-2">
                        {category.expertise.map((expertise, expertiseIndex) => (
                          <li key={expertiseIndex} className="flex items-start space-x-3 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
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
      <section id="experience" className="py-20   relative overflow-hidden z-10">
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
              <span className="text-gradient-blue">
                Professional Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A track record of delivering exceptional results and driving technological innovation
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                company: 'Cyberify',
                position: 'Full Stack Web Developer (React + Node.js)',
                period: 'Dec 2024 - Present',
                location: 'On-site',
                description: 'Leading the development of scalable web applications with seamless AI integrations. Specializing in React, Node.js, and PostgreSQL, while optimizing system performance and developing dynamic user interfaces. Continuously exploring new technologies to enhance user experience and business efficiency.',
                achievements: [
                  'Built scalable web applications with AI integrations',
                  'Optimized system performance by 40%',
                  'Developed dynamic user interfaces',
                  'Implemented continuous integration practices'
                ],
                tech: ['React.js', 'Node.js', 'PostgreSQL', 'AI Integration', 'Performance Optimization']
              },
              {
                company: 'BurjSoft',
                position: 'Angular Developer',
                period: 'June 2024 - August 2024',
                location: 'On-site',
                description: 'Developed dynamic, responsive web applications with a focus on clean, maintainable code and optimized performance. Proficient in Angular, TypeScript, and integrating RESTful APIs, delivering high-quality solutions that enhance user experience and meet business needs.',
                achievements: [
                  'Developed responsive web applications',
                  'Implemented clean, maintainable code practices',
                  'Integrated RESTful APIs',
                  'Achieved 99.9% uptime for critical applications'
                ],
                tech: ['Angular', 'TypeScript', 'RESTful APIs', 'Performance Optimization', 'Clean Code']
              }
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
                <Card className="glass border-slate-600/50 transition-all duration-300 hover:border-blue-500/50 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">{job.company}</CardTitle>
                        <CardDescription className="text-blue-300 font-semibold text-lg">{job.position}</CardDescription>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-gray-400 font-medium">{job.period}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{job.description}</p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
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
      <section id="projects" className="py-20 relative overflow-hidden z-10">
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
              <span className="text-gradient-blue">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate technical expertise and creative problem-solving
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: 'Document based Chatbot',
                subtitle: 'RAG-based Real Estate Assistant',
                description: 'A sophisticated Retrieval-Augmented Generation (RAG) chatbot designed for property query automation. Enables real estate owners to automatically answer user queries with intelligent, context-aware responses.',
                longDescription: 'This AI-powered chatbot revolutionizes the real estate industry by providing instant, accurate responses to property inquiries. Built with advanced RAG architecture, it processes natural language queries and retrieves relevant property information from a comprehensive database. The system features intelligent context awareness, multi-language support, and seamless integration with existing real estate platforms.',
                features: ['Intelligent query processing', 'Context-aware responses', 'Real-time property data', 'Multi-language support', 'Advanced RAG architecture', 'Seamless API integration'],
                tech: ['React.js', 'Node.js', 'LangChain', 'OpenAI', 'AWS', 'PostgreSQL'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Business Report Generator',
                subtitle: 'AI Analysis Report Generator',
                description: 'An advanced AI-powered analysis report generator designed to identify and evaluate business-related problems. Delivers comprehensive reports with in-depth insights for informed decision-making.',
                longDescription: 'Quantra AI transforms raw business data into actionable intelligence through advanced machine learning algorithms. The system analyzes complex datasets, identifies patterns, and generates detailed reports with predictive insights. Features include automated data processing, customizable report templates, and real-time dashboard visualizations for stakeholders.',
                features: ['Automated report generation', 'Business intelligence insights', 'Data visualization', 'Predictive analytics', 'Custom report templates', 'Real-time dashboards'],
                tech: ['React.js', 'Node.js', 'LangChain agents and tools', 'OpenAI', 'AWS', 'Chart.js'],
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'AutoDoc AI When (no code automation)',
                subtitle: 'RAG-Based Document Automation System',
                description: 'A comprehensive automation solution built using n8n with Retrieval-Augmented Generation (RAG) architecture. Integrates vector databases, embeddings, OpenAI chat models, and intelligent agents.',
                longDescription: 'AutoDoc AI streamlines document processing workflows through intelligent automation and AI-powered analysis. The system handles document classification, data extraction, and automated responses using advanced NLP techniques. Built with n8n for workflow orchestration and integrated with vector databases for efficient document retrieval and processing.',
                features: ['Document processing automation', 'Intelligent data extraction', 'Workflow optimization', 'Secure document handling', 'NLP-powered analysis', 'Multi-format support'],
                tech: ['n8n', 'OpenAI', 'LangChain Agents', 'Vector DB', 'Supabase', 'AWS S3'],
                color: 'from-emerald-500 to-teal-500',

              }
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
                <Card className="glass border-slate-600/50 transition-all duration-300 hover:border-blue-500/50 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-br ${project.color} p-3 rounded-xl`}>
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-white">{project.title}</CardTitle>
                          <CardDescription className="text-blue-300 font-semibold">{project.subtitle}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700">

                    </div>
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
                      <span className="text-gradient-blue">
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
            Let's transform your ideas into intelligent reality. Let's create solutions that matter.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <a href="mailto:muskanzahid.pk@gmail.com" target="_blank" rel="noopener noreferrer">
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-500/50 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10"
              >
                <a href="https://github.com/Muskan-Zahid121" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MUSKAN ZAHID
              </h3>
              <p className="text-gray-400">Full Stack AI Engineer</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Muskan-Zahid121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:muskanzahid.pk@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-zahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Designer Credit */}
          <div className="mt-6 pt-6 border-t border-blue-800/30">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Designed and Developed by{' '}
                <span className="text-blue-400 font-medium">Muskan Zahid</span>
                {' '}• AI Full Stack Engineer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}