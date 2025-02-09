import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Silverwing Company Website",
    description:
      "Corporate website with modern design and optimized performance",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack",
    link: "https://silverwing-co-iq.com",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4">
        <path
          fill="currentColor"
          d="M12 2L2 19h20L12 2zm0 4l6.5 10h-13L12 6z"
          className="text-blue-400"
        />
        <circle
          cx="12"
          cy="14"
          r="2"
          fill="currentColor"
          className="text-purple-400"
        />
      </svg>
    ),
  },
  {
    title: "Twitter Clone",
    description: "Full-featured social media platform with real-time updates",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    category: "Full Stack",
    link: "https://github.com/enki-somer",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4">
        <path
          fill="currentColor"
          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
          className="text-blue-400"
        />
      </svg>
    ),
  },
  {
    title: "Vehicle Repair System",
    description:
      "Desktop application for managing vehicle repairs and inventory",
    tech: ["Python", "PyQt", "SQLite", "Report Generation"],
    category: "Desktop",
    link: "https://github.com/enki-somer",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4">
        <path
          fill="currentColor"
          d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8l2-2v-3h2v3h2v-8h-2v3h-2v-3l-2-2h-3V6h3V4H7zm3 9h4v3h-4v-3z"
          className="text-blue-400"
        />
      </svg>
    ),
  },
  {
    title: "Case Study Projects",
    description: "Collection of projects showcasing various tech stacks",
    tech: ["React.js", "Next.js", "MERN", "Django", "Flask"],
    category: "Portfolio",
    link: "https://github.com/enki-somer",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm16 16V5H5v14h14z"
          className="text-blue-400"
        />
        <path
          fill="currentColor"
          d="M7 7h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z"
          className="text-purple-400"
        />
      </svg>
    ),
  },
];

const categories = ["All", "Full Stack", "Desktop", "Portfolio"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"
                  : "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="p-8">
                <div className="flex justify-center">
                  <project.icon />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
