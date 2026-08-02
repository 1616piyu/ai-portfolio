type CertificateCardProps = {
  issuer: string;
  title: string;
  date: string;
  link: string;
};

export default function CertificateCard({
  issuer,
  title,
  date,
  link,
}: CertificateCardProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-cyan-400 mt-2">{issuer}</p>

      <p className="text-gray-400">{date}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:underline"
      >
        View Certificate
      </a>
    </div>
  );
}