"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Zap, Smartphone, Globe } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";

const projects = [
  {
    title: "Anatomy Mapper",
    description: "Large-scale clinic and education platform developed for a US client. Built multiple modules including trial and pro versions with a scalable architecture.",
    tech: ["React.js", "Node.js", "Scalable Arch"],
    icon: <Layers className="text-cyan-500" />,
    link: "#"
  },
  {
    title: "Nodles Automation Builder",
    description: "Node-based automation builder that converts raw data into structured tables and images. Reduced manual work by 70%.",
    tech: ["React.js", "Automation", "Data Processing"],
    icon: <Zap className="text-amber-500" />,
    link: "#"
  },
  {
    title: "Six Pack Promise (Athenx)",
    description: "Large cross-platform fitness application built using React Native for iOS and Android. Implemented automated testing and integrated Firebase.",
    tech: ["React Native", "Redux", "Firebase", "SQLite"],
    icon: <Smartphone className="text-indigo-500" />,
    link: "#"
  },
  {
    title: "Client Websites",
    description: "Built multiple websites for freelance clients including design, development, and deployment while communicating directly with clients.",
    tech: ["Next.js", "Tailwind", "SEO", "Deployment"],
    icon: <Globe className="text-emerald-500" />,
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              A collection of systems and applications I&apos;ve built, ranging from large-scale enterprise platforms to high-performance consumer apps.
            </p>
          </div>
          <a href="https://github.com/kalyanisutsonkar" target="_blank" className="inline-flex items-center text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors">
            View all on GitHub <ExternalLink className="ml-2" size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-cyan-500 transition-colors">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
