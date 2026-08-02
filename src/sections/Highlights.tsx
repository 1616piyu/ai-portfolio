import SectionTitle from "../components/SectionTitle";
import HighlightCard from "../components/HighlightCard";
import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="scroll-mt-24 py-20 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionTitle
          title="Professional Highlights"
          subtitle="Why Hire Me?"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item) => (
            <HighlightCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}