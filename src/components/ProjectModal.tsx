"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiX } from "react-icons/fi";

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  github: string;
  demo: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
          transition={{ duration: 0.3 }}
          className="
          relative
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-slate-900
          border
          border-slate-700
          shadow-2xl
          "
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            className="
            absolute
            top-5
            right-5
            z-20
            w-10
            h-10
            rounded-full
            bg-slate-800
            hover:bg-red-500
            transition
            flex
            items-center
            justify-center
            "
          >
            <FiX size={20} />
          </button>

          {/* Image */}

          <div className="relative h-80 w-full">

            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

          </div>

          {/* Content */}

          <div className="p-10">

            {/* Header */}

            <div className="flex flex-wrap justify-between gap-4">

              <div>

                <h2 className="text-4xl font-bold text-white">

                  {project.title}

                </h2>

                <p className="mt-3 text-cyan-400">

                  {project.category}

                </p>

              </div>

              <span
                className="
                px-4
                py-2
                rounded-full
                bg-cyan-500
                text-white
                h-fit
                "
              >
                {project.year}
              </span>

            </div>

            {/* Description */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-3">

                Description

              </h3>

              <p className="text-gray-400 leading-8">

                {project.description}

              </p>

            </div>

            {/* Problem */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-3">

                Problem

              </h3>

              <p className="text-gray-400 leading-8">

                {project.problem}

              </p>

            </div>

            {/* Solution */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-3">

                Solution

              </h3>

              <p className="text-gray-400 leading-8">

                {project.solution}

              </p>

            </div>

            {/* Features */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-5">

                Key Features

              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {project.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <span className="text-cyan-400">

                      ✔

                    </span>

                    <span>

                      {feature}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Tech Stack */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-5">

                Technologies

              </h3>

              <div className="flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/30
                    text-cyan-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                transition
                "
              >
                <FaGithub />

                GitHub Repository

              </a>

              {project.demo !== "#" && (

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  border
                  border-cyan-500
                  hover:bg-cyan-500
                  transition
                  "
                >
                  <FiExternalLink />

                  Live Demo

                </a>

              )}

            </div>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}