"use client";

import { useState } from "react";

import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

import { projects } from "../data/projects";

type Project = (typeof projects)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <FadeIn>
      <section
        id="projects"
        className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-28"
      >
        <div className="max-w-7xl mx-auto px-8">

          <SectionTitle
            title="Featured Projects"
            subtitle="My Work"
          />

          <div className="grid lg:grid-cols-2 gap-12">

            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                year={project.year}
                image={project.image}
                description={project.description}
                problem={project.problem}
                solution={project.solution}
                features={project.features}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}

          </div>

        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </section>
    </FadeIn>
  );
}