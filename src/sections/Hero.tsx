"use client";

import Image from "next/image";
import FadeIn from "../components/FadeIn";
import TypingText from "../components/TypingText";
import HeroBackground from "../components/HeroBackground";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <FadeIn>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white"
      >
        <HeroBackground />

        <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm">
              👋 Welcome to my Portfolio
            </span>

            <h1 className="text-6xl lg:text-7xl font-black mt-8 leading-tight">
              Piyush Pratap

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Singh
              </span>
            </h1>

            <div className="text-3xl mt-6 text-cyan-300">
              <TypingText />
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Passionate AI Engineer specializing in Machine Learning,
              Deep Learning, NLP, Large Language Models,
              Retrieval-Augmented Generation (RAG), Agentic AI,
              and intelligent automation.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 transition"
              >
                <FaDownload />

                Resume
              </a>

              <a
                href="#projects"
                className="flex items-center gap-3 rounded-xl border border-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-500 transition"
              >
                Projects

                <FiArrowRight />
              </a>

            </div>

            {/* Social */}

            <div className="flex gap-6 mt-10 text-3xl">

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

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-lg p-5 text-center hover:border-cyan-400 transition">

                <h2 className="text-3xl font-bold text-cyan-400">
                  10+
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  AI Projects
                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-lg p-5 text-center hover:border-cyan-400 transition">

                <h2 className="text-3xl font-bold text-cyan-400">
                  11+
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Certifications
                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-lg p-5 text-center hover:border-cyan-400 transition">

                <h2 className="text-3xl font-bold text-cyan-400">
                  2
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Internships
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[90px] opacity-40"></div>

              <div className="relative rounded-full p-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-500">

                <Image
                  src="/images/profile.png"
                  alt="Piyush Pratap Singh"
                  width={340}
                  height={340}
                  priority
                  className="
                  rounded-full
                  object-cover
                  border-4
                  border-slate-900
                  shadow-[0_0_60px_rgba(6,182,212,0.4)]
                  hover:scale-105
                  transition
                  duration-500
                  "
                />

              </div>

            </div>

          </div>

        </div>

        {/* Scroll */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

          <a href="#about">

            <span className="text-4xl text-cyan-400">
              ↓
            </span>

          </a>

        </div>

      </section>
    </FadeIn>
  );
}