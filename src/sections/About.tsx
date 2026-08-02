import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <FadeIn>
        <section
  id="about"
  className="py-24 bg-slate-950 text-white">
    <section className="bg-slate-900 text-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">

              <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center text-8xl">

                👨‍💻

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-4xl font-bold">
              Hi, I'm Piyush Pratap Singh
            </h3>

            <p className="text-cyan-400 mt-3 text-lg">
              AI & Machine Learning Engineer
            </p>

            <p className="text-gray-400 mt-8 leading-8 text-lg">
              I recently completed my Bachelor's degree in Artificial
              Intelligence and Machine Learning. I enjoy building
              intelligent applications using Machine Learning,
              Deep Learning, NLP, Large Language Models,
              Retrieval-Augmented Generation (RAG),
              and Agentic AI.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Education
                </h4>

                <p className="text-gray-400 mt-2">
                  BE in Artificial Intelligence & Machine Learning
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Experience
                </h4>

                <p className="text-gray-400 mt-2">
                  Data Science Intern
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Interests
                </h4>

                <p className="text-gray-400 mt-2">
                  GenAI • LLMs • RAG
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Location
                </h4>

                <p className="text-gray-400 mt-2">
                  Bengaluru, India
                </p>
              </div>

            </div>

            <div className="mt-12">

              <Button text="Download Resume" />

            </div>

          </div>

        </div>

      </div>

    </section>
    </section>
    </FadeIn>
  );
}