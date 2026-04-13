"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon as GithubIcon } from "@/components/icons";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-60 dark:opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-white dark:from-zinc-950/20 dark:via-zinc-950/80 dark:to-zinc-950" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-100/50 dark:bg-cyan-900/30 backdrop-blur-md rounded-full mb-8 border border-cyan-500/20"
            >
              Full Stack Web Developer
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white mb-8 leading-[0.9]">
              Kalyani <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500">
                Sutsonkar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Building scalable web applications, automation workflows, and AI-powered systems with precision and performance.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/10 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-100"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-2xl font-bold text-lg backdrop-blur-md transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                Contact Me
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 flex items-center space-x-8 text-zinc-600 dark:text-zinc-400"
            >
              <a href="https://github.com/kalyanisutsonkar" target="_blank" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-all scale-110">
                <GithubIcon size={24} />
              </a>
              <a href="mailto:kalyanissutsonkar@gmail.com" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-all scale-110">
                <Mail size={24} />
              </a>
              <div className="h-px w-24 bg-zinc-200 dark:bg-zinc-800" />
              <span className="text-sm uppercase tracking-[0.2em] font-bold opacity-70">Pune, India</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
