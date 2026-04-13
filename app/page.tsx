import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About, Skills } from "@/components/about-skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
