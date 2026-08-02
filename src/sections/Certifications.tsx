import SectionTitle from "../components/SectionTitle";
import CertificateCard from "../components/CertificateCard";
import { certifications } from "../data/certifications";
import FadeIn from "@/components/FadeIn";

export default function Certifications() {
  return (
    <FadeIn>
        <section
  id="certifications"
  className="py-24 bg-slate-950 text-white"
></section>
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle
          title="Certifications"
          subtitle="Achievements"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              issuer={certificate.issuer}
              title={certificate.title}
              date={certificate.date}
              link={certificate.link}
            />
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}