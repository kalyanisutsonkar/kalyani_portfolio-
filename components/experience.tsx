"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, CheckCircle2 } from "lucide-react";

const experience = [
  {
    company: "ProgressWithAI",
    role: "Frontend Developer",
    duration: "Nov 2023 – Present",
    desc: "Building AI-integrated frontend solutions and scalable React applications."
  },
  {
    company: "Teztecch Technologies Pvt Ltd",
    role: "Web Developer Intern",
    duration: "May 2023 – Nov 2023",
    desc: "Assisted in web development projects and learned modern development workflows."
  }
];

const achievements = [
  "Worked directly with international clients.",
  "Delivered freelance websites independently.",
  "Built scalable React applications.",
  "Reduced manual work through automation tools."
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-12 flex items-center">
              <Briefcase className="mr-4 text-cyan-500" size={28} />
              Professional Journey
            </h2>
            <div className="space-y-12 relative before:absolute before:left-3.5 before:top-2 before:bottom-0 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 w-7 h-7 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center z-10 shadow-sm">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest leading-none mb-2 block">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{exp.role}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-4">{exp.company}</p>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-12 flex items-center">
              <Trophy className="mr-4 text-amber-500" size={28} />
              Key Achievements
            </h2>
            <div className="grid gap-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-start space-x-4 group hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                  <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {ach}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
