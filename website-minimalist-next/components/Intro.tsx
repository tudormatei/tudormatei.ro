import { intro } from "../data/intro";
import { contactItems } from "../data/contact";
import Image from "next/image";

export function Intro() {
  const quickLinks = contactItems.filter((item) =>
    ["LinkedIn", "Email", "CV"].includes(item.label)
  );

  return (
    <section
      id="intro"
      className="flex flex-col sm:flex-row items-center sm:items-start gap-8 px-4"
    >
      <Image
        src={intro.profilePic}
        alt={intro.name}
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md ring-2 ring-gray-200"
      />
      <div className="text-center sm:text-left space-y-3 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {intro.name}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          {intro.role}
        </p>
        <p className="text-sm text-gray-400 max-w-md">{intro.description}</p>

        <div className="flex justify-center sm:justify-start gap-4 pt-2 text-sm text-gray-600">
          {quickLinks.map(({ label, href, target, rel }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              className="hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
