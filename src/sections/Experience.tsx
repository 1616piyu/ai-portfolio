import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { experiences } from "../data/experience";
import FadeIn from "@/components/FadeIn";

export default function Experience() {
  return (
    <FadeIn>
        <section
  id="experience"
  className="py-24 bg-slate-950 text-white"
></section>
    <section className="bg-slate-900 text-white py-24">

      <div className="max-w-5xl mx-auto px-8">

        <SectionTitle
          title="Experience"
          subtitle="My Journey"
        />

        <div className="mt-16">

          {experiences.map((item) => (

            <TimelineItem
              key={item.title}
              year={item.year}
              title={item.title}
              company={item.company}
              description={item.description}
            />

          ))}

        </div>

      </div>

    </section>
    </FadeIn>
  );
}