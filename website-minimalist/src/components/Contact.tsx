import { contactItems } from "../data/contact";

export function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 tracking-wide">
        Contact & Links
      </h2>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-gray-600">
        {contactItems.map(({ label, href, ariaLabel, Icon, target, rel }) => (
          <a
            key={label}
            href={href}
            aria-label={ariaLabel}
            target={target}
            rel={rel}
            className="flex flex-col items-center space-y-2 transition duration-300 ease-in-out hover:text-gray-900 hover:scale-110 w-24"
          >
            <div className="p-3 rounded-full bg-gray-100 shadow-md">
              <Icon className="w-7 h-7" />
            </div>
            <span className="text-sm font-light tracking-wide select-none text-center">
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
