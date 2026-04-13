"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Zap, Smartphone, Globe, Lock, Key } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import { useState } from "react";

const projects = [
  {
    title: "Anatomy Mapper (Pro)",
    description: "A comprehensive medical mapping and clinic management platform developed for a US-based client. Features a scalable architecture with complex data visualization and multi-module support.",
    tech: ["React.js", "Clinical Data", "Scalable UI"],
    icon: <Layers className="text-cyan-500" />,
    link: "https://pro.dev.anatomymapper.com/pre-annotation-main/",
    credentials: {
      username: "puneetpugaliateam@gmail.com",
      password: "Puneet@123"
    }
  },
  {
    title: "Audio Vision Event",
    description: "Premium event management and audio-visual services platform. Built with a focus on high-end aesthetics, smooth performance, and high conversion for international event planning.",
    tech: ["Next.js", "Tailwind CSS", "Premium UI"],
    icon: <Globe className="text-emerald-500" />,
    link: "https://www.audiovisionevent.com/"
  },
  {
    title: "Cafe Flying Gypsy",
    description: "Modern digital menu and brand showcase for a trendy cafe. Leveraged AI-powered optimization to enhance customer interaction and reduce bridge gaps in service.",
    tech: ["Next.js", "AI Integration", "Digital Menu"],
    icon: <Zap className="text-amber-500" />,
    link: "https://cafeflyinggypsy.progresswithai.com/"
  },
  {
    title: "Trupti Veg Alandi",
    description: "High-performance web presence for a prominent local restaurant. Focused on SEO, fast page loads, and a clean, responsive interface for mobile-first users.",
    tech: ["React", "Vercel", "Mobile Responsive"],
    icon: <Smartphone className="text-indigo-500" />,
    link: "https://trupti-veg-alandi.vercel.app/"
  },
  {
    title: "Navyug Menu",
    description: "Advanced digital menu system built for scalability. Orchestrated custom automation to sync inventory and pricing in real-time.",
    tech: ["Automation", "React.js", "Real-time Sync"],
    icon: <Layers className="text-cyan-500" />,
    link: "https://navyug-menu.progresswithai.com/"
  }
];

function ProjectCard({ project, i }: { project: typeof projects[0], i: number }) {
  const [showCreds, setShowCreds] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>
        <div className="flex space-x-2">
          {project.credentials && (
            <button 
              onClick={() => setShowCreds(!showCreds)}
              className={`p-2 transition-colors rounded-lg ${showCreds ? 'bg-cyan-500 text-white' : 'text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 bg-zinc-100 dark:bg-zinc-900'}`}
              title="View Demo Credentials"
            >
              <Lock size={18} />
            </button>
          )}
          <a href="#" className="p-2 text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            <Github size={18} />
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {showCreds && project.credentials && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-900/30 rounded-xl text-sm">
              <div className="flex mb-2 items-center text-cyan-800 dark:text-cyan-300 font-semibold">
                <Key size={14} className="mr-2" /> Demo Access
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 font-mono">
                <div><span className="text-zinc-400 dark:text-zinc-500 select-none">User:</span> {project.credentials.username}</div>
                <div><span className="text-zinc-400 dark:text-zinc-500 select-none">Pass:</span> {project.credentials.password}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
  );
}

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
          <a href="https://github.com/kalyanisutsonkar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors">
            View all on GitHub <ExternalLink className="ml-2" size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
