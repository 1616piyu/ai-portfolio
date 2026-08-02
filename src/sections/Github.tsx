"use client";

import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";

export default function Github() {
  const username = "1616piyu";

  return (
    <FadeIn>
      <section
        id="github"
        className="scroll-mt-24 py-20 bg-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-8">

          <SectionTitle
            title="GitHub Activity"
            subtitle="Coding Journey"
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub Stats"
              width={500}
              height={250}
              className="rounded-2xl w-full"
            />

            <Image
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
              alt="GitHub Streak"
              width={500}
              height={250}
              className="rounded-2xl w-full"
            />

          </div>

          <div className="mt-8">

            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Languages"
              width={700}
              height={300}
              className="rounded-2xl mx-auto"
            />

          </div>

        </div>
      </section>
    </FadeIn>
  );
}