"use client";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.githubUrl || p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
