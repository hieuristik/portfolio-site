"use client";
import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
  projects = [],
  collapsedCount = 3,
  title,
}) {
  const [expanded, setExpanded] = useState(false);

  const visible = useMemo(() => {
    if (expanded) return projects;
    return projects.slice(0, collapsedCount);
  }, [expanded, projects, collapsedCount]);

  const hasMore = projects.length > collapsedCount;

  return (
    <section className="mx-auto max-w-7xl px-6">
      {title && (
        <h2 className="mb-6 text-3xl font-bold tracking-tight">{title}</h2>
      )}

      <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.githubUrl || p.title} {...p} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="
              rounded-full px-5 py-2 text-sm font-semibold
              bg-black text-white shadow-sm
              hover:shadow-md hover:-translate-y-0.5
              transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40
            "
            aria-expanded={expanded}
            aria-controls="project-grid"
          >
            {expanded ? "SHOW LESS" : `SHOW MORE (${projects.length - collapsedCount})`}
          </button>
        </div>
      )}
    </section>
  );
}
