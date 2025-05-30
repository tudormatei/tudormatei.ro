import { motion } from "framer-motion";
import { education } from "../data/education";

export function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10">Education</h2>

      {/* Education Entries */}
      <div className="space-y-8 mb-14">
        {education.map(
          ({ institution, degree, field, start, end, description }) => (
            <motion.div
              key={institution + degree}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="border-l-4 border-gray-300 pl-5"
            >
              <p className="text-xs font-mono text-gray-400 mb-1 select-none">
                {start} – {end}
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                {degree} in {field}
              </h3>
              <p className="text-sm font-medium text-gray-700 mb-2">
                {institution}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-prose">
                {description}
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
