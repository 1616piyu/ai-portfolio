"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "AI Engineer",
        2000,
        "GenAI Developer",
        2000,
        "Machine Learning Engineer",
        2000,
        "LLM & RAG Developer",
        2000,
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className="text-cyan-400 font-semibold"
    />
  );
}