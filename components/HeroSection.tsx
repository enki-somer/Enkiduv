"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Create static positions for particles
const PARTICLE_POSITIONS = Array.from({ length: 20 }, (_, i) => ({
  x: Math.floor((i * 100) / 20), // Evenly distributed x positions
  delay: i * 0.1,
}));

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }); // Default center position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const container = containerRef.current;
      if (!container) return;

      const { width, height, left, top } = container.getBoundingClientRect();
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
      setMousePosition({ x, y });
      setCursorPosition({ x: clientX - left, y: clientY - top });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Static Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20">
            <defs>
              <pattern
                id="grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 30 0 L 0 0 0 30"
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Particles - Only render on client */}
        {isClient && (
          <div className="absolute inset-0">
            {PARTICLE_POSITIONS.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
                initial={{ x: `${particle.x}%`, y: "100%", opacity: 0 }}
                animate={{
                  y: "0%",
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Interactive Elements - Only render on client */}
      {isClient && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 mix-blend-difference"
          animate={{
            background: `radial-gradient(circle 100px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(99, 102, 241, 0.15), transparent)`,
          }}
        />
      )}

      {/* Main Content */}
      <motion.div
        style={isClient ? { y, opacity } : {}}
        className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.2) 0%, transparent 70%)`,
          }}
        />

        <div className="relative space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="relative inline-block px-4 py-2 text-sm md:text-base text-blue-400 font-mono before:absolute before:inset-0 before:border before:border-blue-400/30 before:rounded-lg after:absolute after:inset-0 after:border after:border-blue-400/30 after:rounded-lg after:animate-ping after:animation-delay-200">
              FULL STACK DEVELOPER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold tracking-tight"
          >
            <span className="block text-white text-opacity-90">
              Crafting Digital
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
              Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl backdrop-blur-sm bg-black/10 p-4 rounded-xl"
          >
            Building modern web applications with cutting-edge technologies and
            thoughtful user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              onClick={(e) => handleSectionClick(e, "#projects")}
              className="group relative px-8 py-4 w-full md:w-auto overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                View Projects
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => handleSectionClick(e, "#contact")}
              className="group relative px-8 py-4 w-full md:w-auto overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center text-white font-medium">
                Let's Talk
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Only render on client */}
      {isClient && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 font-mono">
              Scroll to explore
            </span>
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
            >
              <motion.div
                className="w-1 h-1.5 rounded-full bg-gradient-to-b from-blue-400 to-purple-400"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
