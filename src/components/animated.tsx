import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "hero" | "about" | "skills" | "experience" | "projects" | "cta";
}

export default function AnimatedBackground({
  variant = "hero",
}: AnimatedBackgroundProps) {
  const getBackgroundContent = () => {
    switch (variant) {
      case "hero":
        return (
          <>
            {/* Soft radial glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
              <div className="absolute -bottom-40 right-1/3 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
            </div>
            {/* Geometric shapes */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute border border-blue-400/20"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Orbiting dots */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  rotate: 360,
                  transformOrigin: `${4 + Math.random() * 12}rem ${
                    4 + Math.random() * 12
                  }rem`,
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Floating dots */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Animated squares */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`square-${i}`}
                className="absolute w-2 h-2 bg-purple-400/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.1, 0.6, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Diamond shapes */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`diamond-${i}`}
                className="absolute w-3 h-3 bg-indigo-400/25"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: "rotate(45deg)",
                }}
                animate={{
                  rotate: [45, 225, 405],
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 12 + Math.random() * 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Pulsing circles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.3, 2, 0.3],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Moving lines */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${80 + Math.random() * 120}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  transformOrigin: "left center",
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scaleX: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}

            {/* Hexagon pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 transform rotate-45" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/20 transform -rotate-45" />
            </div>

            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
          </>
        );

      case "about":
        return (
          <>
            {/* Floating triangles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`triangle-${i}`}
                className="absolute w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-blue-400/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Pulsing dots */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.3, 1.5, 0.3],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}

            {/* Rotating squares */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`rotating-${i}`}
                className="absolute w-2 h-2 bg-indigo-400/25"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </>
        );

      case "skills":
        return (
          <>
            {/* Circuit nodes */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`circuit-${i}`}
                className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.5, 1.4, 0.5],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            {/* Pulsing hubs */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`hub-${i}`}
                className="absolute w-3 h-3 rounded-full bg-sky-400/20"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(56,189,248,0.25)",
                    "0 0 0 12px rgba(56,189,248,0)",
                  ],
                }}
                transition={{
                  duration: 2 + Math.random() * 1.5,
                  repeat: Infinity,
                }}
              />
            ))}

            {/* Circuit lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`circuit-line-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  width: `${60 + Math.random() * 100}px`,
                  transform: `rotate(${Math.random() * 90}deg)`,
                  transformOrigin: "left center",
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scaleX: [0.6, 1.4, 0.6],
                }}
                transition={{
                  duration: 5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Data flow particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`data-${i}`}
                className="absolute w-0.5 h-0.5 bg-cyan-400/50 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </>
        );

      case "experience":
        return (
          <>
            {/* Timeline dots */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`timeline-${i}`}
                className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Timeline connections */}
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={`timeline-line-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-purple-400/20 to-transparent"
                style={{
                  left: `${12 + i * 12}%`,
                  top: `${30 + Math.random() * 40}%`,
                  width: "10%",
                }}
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  scaleX: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Achievement stars */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-yellow-400/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: "rotate(45deg)",
                }}
                animate={{
                  rotate: [45, 225, 405],
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        );

      case "projects":
        return (
          <>
            {/* Code blocks */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`code-${i}`}
                className="absolute bg-cyan-400/10 border border-cyan-400/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${15 + Math.random() * 25}px`,
                }}
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            {/* Code rain */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`rain-${i}`}
                className="absolute w-px bg-cyan-400/15"
                style={{
                  left: `${Math.random() * 100}%`,
                  height: `${40 + Math.random() * 120}px`,
                  top: "-10%",
                }}
                animate={{
                  y: ["0%", "120%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeIn",
                }}
              />
            ))}

            {/* Syntax highlighting dots */}
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={`syntax-${i}`}
                className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.5, 1.3, 0.5],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Brackets */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`bracket-${i}`}
                className="absolute text-cyan-400/30 text-lg font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {i % 2 === 0 ? "{" : "}"}
              </motion.div>
            ))}
          </>
        );

      case "cta":
        return (
          <>
            {/* Connection nodes */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`connection-${i}`}
                className="absolute w-1.5 h-1.5 bg-purple-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.6, 1.4, 0.6],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Connection lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`connection-line-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-purple-400/25 to-transparent"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  width: `${100 + Math.random() * 150}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  transformOrigin: "left center",
                }}
                animate={{
                  opacity: [0.05, 0.4, 0.05],
                  scaleX: [0.7, 1.3, 0.7],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Pulse waves */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute w-4 h-4 border border-purple-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.5, 3, 0.5],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {getBackgroundContent()}
    </div>
  );
}
