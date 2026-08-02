"use client";

import { useMemo, useState } from "react";

import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Props = {
  query: string;
};

export default function AIProjectCards({
  query,
}: Props) {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const filteredProjects = useMemo(() => {
    const lower = query.toLowerCase();

    return projects.filter((project) => {
      return (
        lower.includes(project.id.toLowerCase()) ||

        lower.includes(project.title.toLowerCase()) ||

        lower.includes(project.category.toLowerCase()) ||

        project.technologies.some((tech) =>
          lower.includes(tech.toLowerCase())
        ) ||

        project.features.some((feature) =>
          lower.includes(feature.toLowerCase())
        )
      );
    });
  }, [query]);

  if (filteredProjects.length === 0) return null;

  return (
    <>
      <div className="mt-6 space-y-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onViewDetails={() =>
              setSelectedProject(project)
            }
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  );
}