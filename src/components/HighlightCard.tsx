type HighlightCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function HighlightCard({
  icon,
  title,
  description,
}: HighlightCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>
    </div> 
  );
}