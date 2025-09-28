import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = {
    web: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
      "PostgreSQL",
    ],
    ai: ["AI", "Langchain", "OpenAI", "RAG Architecture", "Vector Databases"],
    core: ["JavaScript", "API"],
  };

  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-blue/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Title */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-bold mb-4 text-blue-500 leading-none">
              FULL STACK
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white leading-none">
              AI ENGINEER
            </h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#0a1b3d]/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/10">
              <div className="text-blue-500 text-5xl font-bold mb-2 flex items-center gap-3">
                <span className="text-blue-400">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 15L8.5 9L15.5 9L12 15Z" fill="currentColor" />
                  </svg>
                </span>
                1+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-[#0a1b3d]/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/10">
              <div className="text-blue-500 text-5xl font-bold mb-2 flex items-center gap-3">
                <span className="text-blue-400">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                3+
              </div>
              <div className="text-gray-400">Years Learning</div>
            </div>
            <div className="bg-[#0a1b3d]/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/10">
              <div className="text-blue-500 text-5xl font-bold mb-2 flex items-center gap-3">
                <span className="text-blue-400">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 9H16V15H8V9Z" fill="currentColor" />
                  </svg>
                </span>
                15+
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16">
            <p className="text-2xl text-gray-300 mb-4">
              Crafting intelligent solutions at the intersection of web
              development and artificial intelligence.
            </p>
            <p className="text-2xl text-gray-400">
              Where innovation meets execution. Where code becomes intelligence.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Tech Stack</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                {techStack.web.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#0a1b3d]/40 backdrop-blur-sm rounded-md border border-blue-500/20 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.ai.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#0a1b3d]/40 backdrop-blur-sm rounded-md border border-blue-500/20 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.core.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#0a1b3d]/40 backdrop-blur-sm rounded-md border border-blue-500/20 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium inline-flex items-center justify-center transition-all duration-200"
            >
              Explore My Work →
            </a>
            <a
              href="#experience"
              className="px-8 py-3 bg-transparent text-purple-400 hover:text-purple-300 rounded-md font-medium border border-purple-500/20 inline-flex items-center justify-center transition-all duration-200"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float animation-delay-3000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float animation-delay-4000"></div>

        {/* Diamond shapes */}
        <div className="absolute top-20 left-1/3 w-3 h-3 bg-transparent border-2 border-blue-400/30 rotate-45"></div>
        <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-transparent border-2 border-blue-400/20 rotate-45"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-transparent border-2 border-blue-400/40 rotate-45"></div>
      </div>
    </section>
  );
};

export default Hero;
