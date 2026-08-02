type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({
  skill,
}: SkillBadgeProps) {
  return (
    <div
      className="
        group
        px-5
        py-3
        rounded-full
        bg-slate-800/70
        backdrop-blur
        border
        border-slate-700
        hover:border-cyan-400
        hover:scale-105
        hover:shadow-lg
        hover:shadow-cyan-500/20
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <span className="group-hover:text-cyan-300 transition">
        {skill}
      </span>
    </div>
  );
}