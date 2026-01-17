import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiSpring,
  SiFlask,
  SiFastapi,
} from "react-icons/si";
import { FaJava, FaAws, FaLinux, FaDocker, FaGitAlt } from "react-icons/fa";

export const techStack = [
  { name: "Java", icon: FaJava },
  { name: "Spring", icon: SiSpring },
  // { name: "Tomcat", icon: SiApachetomcat },
  { name: "PostgreSQL", icon: SiPostgresql },

  { name: "Python", icon: SiPython },
  // { name: "TensorFlow", icon: SiTensorflow },
  // { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "FastAPI", icon: SiFastapi },

  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },

  { name: "Linux", icon: FaLinux },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
];
