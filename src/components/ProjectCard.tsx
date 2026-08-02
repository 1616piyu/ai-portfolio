"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiEye } from "react-icons/fi";

type ProjectCardProps = {
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

  onViewDetails: () => void;
};

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  demo,
  category,
  year,
  features,
  problem,
  solution,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-slate-900
        border
        border-slate-800
        hover:border-cyan-400
        shadow-xl
        hover:shadow-cyan-500/20
        transition-all
        duration-500
      "
    >
      {/* Project Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        {/* Category */}

        <span
          className="
            absolute
            top-4
            left-4
            px-3
            py-1
            rounded-full
            bg-cyan-500
            text-white
            text-xs
            font-semibold
          "
        >
          {category}
        </span>

        {/* Year */}

        <span
          className="
            absolute
            top-4
            right-4
            px-3
            py-1
            rounded-full
            bg-slate-900/80
            text-cyan-300
            text-xs
            border
            border-cyan-400
          "
        >
          {year}
        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-4 text-gray-400 leading-7">
          {description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-6">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                text-cyan-300
                text-sm
                transition
                hover:bg-cyan-500
                hover:text-white
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-3 gap-3 mt-8">

          <button
  onClick={onViewDetails}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-slate-700
    hover:border-cyan-400
    hover:bg-slate-800
    py-3
    transition
  "
>
  <FiEye />

  Details
</button>
      
    

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              py-3
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-cyan-500
              hover:bg-cyan-500
              py-3
              transition
            "
          >
            <FiExternalLink />
            Demo
          </a>

        </div>

      </div>

    </motion.div>
  );
}