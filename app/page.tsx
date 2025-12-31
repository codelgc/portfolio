import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <Hero />
      <Stats />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

