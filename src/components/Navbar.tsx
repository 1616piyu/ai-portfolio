"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import ThemeToggle from "./ThemeToggle";

import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Highlights", to: "highlights" },
  { name: "Experience", to: "experience" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setMobileOpen(false)}
            className="cursor-pointer"
          >
            <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Piyush.
            </h1>
          </Link>

          {/* Desktop Navigation */}

          <ul className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  spy
                  duration={500}
                  offset={-80}
                  activeClass="text-cyan-400"
                  className="
                  cursor-pointer
                  text-gray-300
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  hover:after:w-full
                  after:transition-all
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

            <ThemeToggle />

            <a
              href="/resume.pdf"
              target="_blank"
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              px-5
              py-3
              font-semibold
              transition
              "
            >
              <FaDownload />

              Resume

            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`
        fixed
        top-20
        left-0
        w-full
        bg-slate-950/95
        backdrop-blur-xl
        border-b
        border-slate-800
        transition-all
        duration-300
        z-40
        ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
        `}
      >
        <div className="flex flex-col py-6">

          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMobileOpen(false)}
              className="
              px-8
              py-4
              cursor-pointer
              hover:bg-slate-800
              transition
              "
            >
              {item.name}
            </Link>
          ))}

          <div className="mx-8 mt-5 flex items-center justify-between">

            <ThemeToggle />

            <a
              href="/resume.pdf"
              target="_blank"
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              px-5
              py-3
              transition
              "
            >
              <FaDownload />

              Resume

            </a>

          </div>

        </div>

      </div>
    </>
  );
}