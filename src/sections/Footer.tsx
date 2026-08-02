"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}

          <div>
            <h2 className="text-3xl font-black text-cyan-400">
              Piyush.
            </h2>

            <p className="mt-6 text-gray-400 leading-8 max-w-lg">
              AI Engineer passionate about Machine Learning,
              Deep Learning, Large Language Models,
              Retrieval-Augmented Generation (RAG),
              Agentic AI and intelligent automation.
            </p>
          </div>

          {/* Right */}

          <div className="flex md:justify-end items-center gap-6 text-3xl">

            <a
              href="https://github.com/1616piyu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/piyush-pratap-singh-22995029a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:piyushpratapsingh739@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="#home"
              className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-600 transition"
            >
              <FiArrowUp />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 Piyush Pratap Singh • Built with Next.js, TypeScript & Tailwind CSS
        </div>

      </div>
    </footer>
  );
}