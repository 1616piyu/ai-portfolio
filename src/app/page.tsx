"use client";

import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import AIChatButton from "../components/AIChatButton";
import AIChatWindow from "../components/AIChatWindow";
import ScrollProgress from "../components/ScrollProgress";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Highlights from "../sections/Highlights";
import Experience from "../sections/Experience";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  // All Hooks must come first
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Conditional render AFTER all hooks
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Highlights />

      <Experience />

      <Certifications />

      <Contact />

      <Footer />

      <ScrollProgress />

      {/* AI Assistant */}
      <AIChatButton onClick={() => setChatOpen(true)} />

      <AIChatWindow
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </>
  );
}