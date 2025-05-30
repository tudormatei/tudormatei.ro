import { motion } from "framer-motion";
import { techStack } from "../data/techStack";

export function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="techstack"
      className="max-w-4xl mx-auto px-4 py-10"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">Tech Stack</h2>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
        {techStack.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-3 w-auto px-4 py-3 rounded-lg cursor-default bg-gray-50 hover:bg-gray-100"
            title={name}
          >
            <Icon className="w-6 h-6 text-gray-700 flex-shrink-0" />
            <span className="text-gray-900 font-medium truncate">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
