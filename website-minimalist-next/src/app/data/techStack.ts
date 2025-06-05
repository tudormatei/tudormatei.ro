import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiSpring,
  SiTensorflow,
  SiFlask,
  SiDjango,
  SiApachetomcat,
} from "react-icons/si";
import { FaJava, FaLinux, FaDocker, FaGitAlt } from "react-icons/fa";

export const techStack = [
  { name: "Java", icon: FaJava },
  { name: "Spring", icon: SiSpring },
  { name: "Tomcat", icon: SiApachetomcat },
  { name: "PostgreSQL", icon: SiPostgresql },

  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },

  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },

  { name: "Linux", icon: FaLinux },
  // { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
];
