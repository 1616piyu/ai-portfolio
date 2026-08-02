"use client";

import { FiDownload } from "react-icons/fi";

export default function ResumeCard() {
  return (
    <div
      className="
      mt-5
      rounded-2xl
      border
      border-cyan-500/30
      bg-slate-900
      p-5
      "
    >
      <h3 className="text-xl font-semibold">
        📄 Resume
      </h3>

      <p className="mt-2 text-gray-400">
        Download my latest AI/ML Resume.
      </p>

      <a
        href="/resume.pdf"
        download
        className="
        mt-5
        inline-flex
        items-center
        gap-2
        rounded-xl
        bg-cyan-500
        px-5
        py-3
        hover:bg-cyan-600
        transition
        "
      >
        <FiDownload />

        Download Resume
      </a>
    </div>
  );
}