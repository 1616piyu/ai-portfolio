type TimelineItemProps = {
  year: string;
  title: string;
  company: string;
  description: string;
};

export default function TimelineItem({
  year,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div className="flex gap-8">

      {/* Left */}

      <div className="flex flex-col items-center">

        <div className="w-5 h-5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20"></div>

        <div className="w-1 flex-1 bg-slate-700"></div>

      </div>

      {/* Right */}

      <div className="pb-16">

        <p className="text-cyan-400 font-semibold">
          {year}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {title}
        </h3>

        <p className="text-gray-400 mt-1">
          {company}
        </p>

        <p className="text-gray-500 mt-4 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}