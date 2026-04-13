"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 opacity-30 blur-[100px] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply animate-pulse [animation-delay:2s]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-6">
              Full Stack Web Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
              Kalyani <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Sutsonkar</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-light">
              Building scalable web applications, automation workflows, and AI-powered systems. Specialized in creating high-performance digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
              >
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-lg font-medium transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                Contact Me
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 flex items-center space-x-6 text-zinc-500 dark:text-zinc-500"
            >
              <a href="https://github.com/kalyanisutsonkar" target="_blank" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:kalyanissutsonkar@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <div className="h-[1px] w-20 bg-zinc-200 dark:bg-zinc-800" />
              <span className="text-xs uppercase tracking-widest font-semibold">Based in Pune, India</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
