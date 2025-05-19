import { useState } from "react";
import { projects } from "../data/projects";
import { FiExternalLink } from "react-icons/fi";

const FILTERS = ["All", "Webapp", "AI", "Other"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full border text-sm transition cursor-pointer
              ${
                activeFilter === filter
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProjects.map(({ title, description, tags, image, link }) => (
          <div
            key={title}
            className="relative group w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)]
                       p-5 rounded-2xl bg-white 
                       shadow-[0_4px_16px_rgba(0,0,0,0.05)] 
                       hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] 
                       transition flex flex-col justify-between min-h-[320px]"
          >
            {image && (
              <div className="mb-4 h-36 w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover object-center filter grayscale"
                />
              </div>
            )}

            <div className="space-y-2 flex-grow">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Visit ${title}`}
                  >
                    <FiExternalLink className="w-4 h-4 text-gray-500 hover:text-black" />
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
