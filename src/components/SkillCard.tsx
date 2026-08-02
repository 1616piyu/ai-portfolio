import { IconType } from "react-icons";

type SkillCardProps = {
  icon: IconType;
  title: string;
  skills: string[];
};

export default function SkillCard({
  icon: Icon,
  title,
  skills,
}: SkillCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      backdrop-blur-lg
      p-8
      hover:border-cyan-400
      hover:-translate-y-2
      transition-all
      duration-500
      "
    >
      <Icon className="text-5xl text-cyan-400 mb-6 group-hover:rotate-6 transition-transform duration-300" />

      <h3 className="text-2xl font-bold mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-300
            text-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}