import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";

import {
  FaBrain,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

export default function Skills() {
  return (
    <FadeIn>
      <section
        id="skills"
        className="
        scroll-mt-24
        py-20
        bg-gradient-to-b
        from-slate-950
        via-slate-900
        to-slate-950
        text-white
        "
      >
        <div className="max-w-7xl mx-auto px-8">

          <SectionTitle
            title="Technical Skills"
            subtitle="My Expertise"
          />

          <div className="grid lg:grid-cols-3 gap-8">

            <SkillCard
              icon={FaBrain}
              title="AI & Machine Learning"
              skills={[
                "Python",
                "Machine Learning",
                "Deep Learning",
                "PyTorch",
                "TensorFlow",
                "Scikit-learn",
                "OpenCV",
                "NLP",
              ]}
            />

            <SkillCard
              icon={FaCode}
              title="Generative AI"
              skills={[
                "LLMs",
                "Prompt Engineering",
                "RAG",
                "LangChain",
                "FAISS",
                "Ollama",
                "OpenAI API",
                "Agentic AI",
              ]}
            />

            <SkillCard
              icon={FaDatabase}
              title="Development"
              skills={[
                "React",
                "Next.js",
                "TypeScript",
                "FastAPI",
                "Git",
                "REST API",
                "SQL",
                "GitHub",
              ]}
            />

          </div>

        </div>
      </section>
    </FadeIn>
  );
}