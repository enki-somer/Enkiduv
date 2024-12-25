"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const skillsAnimation = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 1, height: "auto" },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Animated SVG */}
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 left-0 w-24 h-full pointer-events-none"
        style={{ opacity }}
      >
        <svg viewBox="0 0 100 800" className="w-full h-full">
          <motion.path
            d="M 50 0 L 50 800"
            stroke="url(#gradient-stroke)"
            strokeWidth="2"
            fill="none"
            style={{ pathLength }}
          />
          <motion.path
            d="M 30 0 C 30 400, 70 400, 70 800"
            stroke="url(#gradient-stroke)"
            strokeWidth="1"
            fill="none"
            style={{ pathLength }}
          />
          <defs>
            <linearGradient
              id="gradient-stroke"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2="800"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="50"
            cy={scrollYProgress.get() * 800}
            r="4"
            fill="#3B82F6"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </svg>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-blue-500/5 to-transparent" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container relative mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Full Stack Developer with expertise in modern web technologies
                and a strong foundation in software development principles.
                Experienced in building scalable applications and implementing
                responsive designs.
              </p>
            </motion.div>

            <motion.div
              className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Skilled in both frontend and backend development, with a focus
                on creating efficient, maintainable code and delivering
                exceptional user experiences.
              </p>
            </motion.div>

            {/* Additional Stats Section */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { label: "Projects", value: "50+" },
                { label: "Experience", value: "5+ Years" },
                { label: "Clients", value: "30+" },
                { label: "Technologies", value: "15+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="backdrop-blur-lg bg-white/5 p-4 rounded-xl border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div className="relative backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Experience Highlights
              </h3>
              <motion.ul
                className="space-y-4"
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
              >
                {[
                  { skill: "Full Stack Development", icon: "💻" },
                  { skill: "React & Next.js", icon: "⚛️" },
                  { skill: "Node.js & Express", icon: "🚀" },
                  { skill: "Database Management", icon: "🗄️" },
                  { skill: "Cloud Services", icon: "☁️" },
                  { skill: "UI/UX Design", icon: "🎨" },
                ].map(({ skill, icon }, index) => (
                  <motion.li
                    key={skill}
                    variants={skillsAnimation}
                    className="flex items-center space-x-3 group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-xl">{icon}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="text-gray-300"
                    >
                      {skill}
                    </motion.span>
                    <motion.div
                      className="h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                      style={{ originX: 0 }}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
}
