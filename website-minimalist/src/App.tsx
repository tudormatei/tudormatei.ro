import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black font-sans px-4">
      <div className="max-w-4xl mx-auto space-y-20">
        <Intro />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
