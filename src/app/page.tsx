import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Contact />

      <footer
        className="relative z-10 text-center px-14 py-7 font-mono text-[0.72rem] tracking-widest"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "#6b7a96",
        }}
      >
        Designed &amp; built by{" "}
        <span style={{ color: "#00e87a" }}>Your Name</span> · 2025
      </footer>
    </main>
  );
}
