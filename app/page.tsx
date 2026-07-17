import Stacks from "@/components/Stacks";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center text-white items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 ">
      
      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      <div className="max-w-7xl w-full">

        <section id="home" className="scroll-mt-32">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-32">
          <Grid />
        </section>

        <section id="stacks" className="scroll-mt-32">
          <Stacks />
        </section>

        <section id="projects" className="scroll-mt-32">
          <RecentProjects />
        </section>

        <section id="experience" className="scroll-mt-32">
          <Experience />
        </section>

        <section id="achievements" className="scroll-mt-32">
          <Achievements />
        </section>

        <section id="contact" className="scroll-mt-32">
          <Footer />
        </section>

      </div>
    </main>
  );
}