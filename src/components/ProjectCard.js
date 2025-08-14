"use client";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  githubUrl,
  tags = [],
}) {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} on GitHub`}
      className="group block h-full w-full"
    >
      <article
        className="
          h-full w-full rounded-2xl overflow-hidden
          ring-1 ring-black/5 bg-white
          shadow-sm transition-all duration-300
          hover:shadow-xl hover:-translate-y-1
        "
      >
        <div className="relative aspect-[16/9]">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={false}
          />
          <div className="absolute right-3 top-3 rounded-full bg-white/80 backdrop-blur px-2 py-1 text-xs font-medium text-gray-700">
            GitHub
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            {description}
          </p>

          {tags?.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="text-xs rounded-full bg-gray-100 px-2.5 py-1 text-gray-700 ring-1 ring-inset ring-gray-200"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex items-center gap-4">
            <span
              className="
                inline-flex items-center gap-1 text-sm font-medium
                text-gray-900 group-hover:text-gray-700
              "
            >
              View code
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
