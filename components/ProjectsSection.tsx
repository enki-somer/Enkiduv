"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    image: "/project1.jpg",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    category: "Web App",
    image: "/project2.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website with animations and responsive design",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/project3.jpg",
    link: "#",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Web App"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "glass-effect hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden hover-glow"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
