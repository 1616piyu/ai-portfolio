type ContactCardProps = {
  icon: string;
  title: string;
  value: string;
  link: string;
};

export default function ContactCard({
  icon,
  title,
  value,
  link,
}: ContactCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-slate-900 p-5 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="text-xl font-semibold mt-3">{title}</h3>

      <p className="text-gray-400 mt-2 break-words">{value}</p>
    </a>
  );
}