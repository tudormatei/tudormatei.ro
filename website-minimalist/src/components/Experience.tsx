import { motion } from "framer-motion";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10">Experience</h2>

      {/* Timeline vertical line */}
      <div className="relative before:absolute before:top-16 before:left-5 before:h-[calc(100%-4rem)] before:w-0.5 before:bg-gray-300 before:opacity-40">
        {experience.map(({ company, role, start, end, description }, index) => (
          <div
            key={company + role + start}
            className="relative mb-14 last:mb-0 pl-14"
            style={{ minHeight: "6rem" }}
          >
            {/* Dot (not animated) */}
            <div className="absolute left-[21px] top-1/2 w-4 h-4 rounded-full bg-gray-400 shadow-sm -translate-x-1/2 -translate-y-1/2" />

            {/* Animated content only */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {role}
              </h3>
              <p className="text-sm font-medium text-gray-600 mb-1">
                {company}
              </p>
              <p className="text-gray-700 leading-relaxed">{description}</p>
              <time className="block mt-2 text-sm font-mono text-gray-500 select-none">
                {start} - {end || "Present"}
              </time>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
