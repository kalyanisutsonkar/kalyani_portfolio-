"use client";

import { motion } from "framer-motion";
import { Code, Server, Terminal, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Professional Summary</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Full Stack Web Developer with 2+ years of experience building scalable web applications and automation systems using React, Next.js, and Node.js. 
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Experienced in creating responsive interfaces, integrating APIs, and developing client-focused solutions. Passionate about solving complex problems and continuously learning new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: <Code className="text-cyan-500" />, label: "Frontend Excellence" },
              { icon: <Server className="text-indigo-500" />, label: "Backend Scalability" },
              { icon: <Terminal className="text-emerald-500" />, label: "Automation Workflows" },
              { icon: <Cpu className="text-amber-500" />, label: "AI Integration" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center text-center space-y-3">
                {item.icon}
                <span className="text-sm font-semibold dark:text-white">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    color: "bg-cyan-500"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
    color: "bg-indigo-500"
  },
  {
    title: "Tools & Platforms",
    skills: ["Firebase", "Docker", "GitHub", "Linux"],
    color: "bg-emerald-500"
  },
  {
    title: "Automation & Testing",
    skills: ["AI Agents", "Automated Testing"],
    color: "bg-amber-500"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
                <div className={`w-2 h-2 rounded-full ${cat.color} mr-3`} />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full">
                    {skill}
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
