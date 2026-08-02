"use client";

import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ActionButtons() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      <a
        href="/resume.pdf"
        download
        className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-600 transition"
      >
        <div className="flex items-center gap-2">
          <FiDownload />
          Resume
        </div>
      </a>

      <a
        href="https://github.com/1616piyu"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 transition"
      >
        <div className="flex items-center gap-2">
          <FiGithub />
          GitHub
        </div>
      </a>

      <a
        href="https://linkedin.com/in/piyush-pratap-singh-22995029a"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
      >
        <div className="flex items-center gap-2">
          <FiLinkedin />
          LinkedIn
        </div>
      </a>

      <a
        href="mailto:piyushpratapsingh739@gmail.com"
        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
      >
        <div className="flex items-center gap-2">
          <FiMail />
          Email
        </div>
      </a>
    </div>
  );
}