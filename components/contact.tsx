"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800 text-white overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] -z-1" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Let&apos;s Build Something <span className="text-cyan-400">Amazing</span></h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open. I&apos;m currently open to new opportunities and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest leading-none mb-1">Email</p>
                  <a href="mailto:kalyanissutsonkar@gmail.com" className="text-lg font-medium hover:text-cyan-400 transition-colors">
                    kalyanissutsonkar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest leading-none mb-1">GitHub</p>
                  <a href="https://github.com/kalyanisutsonkar" target="_blank" className="text-lg font-medium hover:text-cyan-400 transition-colors">
                    github.com/kalyanisutsonkar
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest leading-none mb-1">Location</p>
                  <p className="text-lg font-medium">Pune, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-400 ml-1">Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder:text-zinc-600" placeholder="Kalyani Sutsonkar" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-400 ml-1">Email</label>
                  <input type="email" className="w-full px-5 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder:text-zinc-600" placeholder="kalyani@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 ml-1">Subject</label>
                <input type="text" className="w-full px-5 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder:text-zinc-600" placeholder="Let's collaborate!" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 ml-1">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder:text-zinc-600 resize-none" placeholder="How can I help you?" />
              </div>
              <button className="w-full inline-flex items-center justify-center px-8 py-5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-2xl transition-all group">
                Send Message
                <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-center">
      <div className="container mx-auto px-4">
        <p className="text-zinc-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} <span className="text-zinc-300">Kalyani Sutsonkar</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
