"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-400",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    color: "from-purple-500 to-pink-500",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    name: "Python",
    color: "from-green-500 to-emerald-400",
    items: ["Django", "PyQt", "PySide", "Kivy", "Tkinter"],
  },
  {
    name: "MERN",
    color: "from-orange-500 to-yellow-400",
    items: ["MongoDB", "Express", "React", "Node.js"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#3b82f6,transparent)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Technical Expertise
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
              />

              <div className="relative backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  className="flex items-center mb-6"
                >
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}
                  >
                    {category.name}
                  </h3>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`
                        relative group/item px-4 py-2 rounded-full 
                        bg-gradient-to-r ${category.color} bg-opacity-10
                        hover:bg-opacity-20 transition-all duration-300
                        border border-white/10 hover:border-white/20
                      `}
                    >
                      <span className="relative z-10 text-sm font-medium text-white">
                        {item}
                      </span>
                      <div
                        className={`
                        absolute inset-0 rounded-full opacity-0 
                        group-hover/item:opacity-20 transition-opacity duration-300
                        bg-gradient-to-r ${category.color}
                      `}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Animated Corner Decorations */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <motion.div
                    animate={{
                      background: [
                        `linear-gradient(to bottom right, ${
                          category.color.split(" ")[1]
                        }, transparent)`,
                        `linear-gradient(to bottom right, transparent, ${
                          category.color.split(" ")[1]
                        })`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full h-full opacity-20"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
