import Image from "next/image";
import { certifications } from "../data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-4 py-14">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Certifications & Licenses
      </h2>
      <ul className="space-y-3">
        {certifications.map(
          ({
            field,
            organization,
            logo,
            issueDate,
            credentialId,
            credentialUrl,
          }) => (
            <li
              key={field + credentialId}
              className="flex items-start sm:items-center gap-3 text-sm text-gray-700"
            >
              {logo && (
                <Image
                  src={logo}
                  alt={organization}
                  width={256}
                  height={256}
                  className="w-8 h-8 object-contain flex-shrink-0 mt-1 sm:mt-0 pb-2"
                />
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full border-b border-gray-200 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full overflow-hidden">
                  <span className="font-medium truncate">{field}</span>
                  <span className="text-gray-500 truncate hidden sm:inline">
                    •
                  </span>
                  <span className="text-gray-500 truncate">{organization}</span>
                  <span className="text-gray-400 text-xs sm:ml-2">
                    Issued {issueDate}
                  </span>
                </div>

                <div className="mt-1 sm:mt-0 text-xs text-gray-600 hover:underline whitespace-nowrap">
                  <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
