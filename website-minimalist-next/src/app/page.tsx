import { Certifications } from "../../components/Certifications";
import { Contact } from "../../components/Contact";
import { Education } from "../../components/Education";
import { Experience } from "../../components/Experience";
import { Intro } from "../../components/Intro";
import Navbar from "../../components/Navbar";
import { Projects } from "../../components/Projects";
import { TechStack } from "../../components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-4">
      <main className="max-w-4xl mx-auto space-y-16">
        <Navbar />
        <Intro />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
