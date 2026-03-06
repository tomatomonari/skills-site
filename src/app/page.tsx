import Link from "next/link";
import { getAllSkills } from "@/lib/skills";

export default function Home() {
  const skills = getAllSkills();

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <section className="mb-20">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
          Skills <span className="text-neutral-400">&</span> Prompts
        </h1>
        <p className="text-lg text-neutral-500 max-w-md">
          Curated skills for Claude Code. Copy the prompt, drop it in your
          commands folder, and start using.
        </p>
      </section>

      <section>
        <ul className="space-y-8">
          {skills.map((skill) => (
            <li key={skill.slug}>
              <Link href={`/${skill.slug}`} className="group block">
                <h2 className="text-xl font-medium mb-1">
                  <span className="skill-link">/{skill.slug}</span>
                  <span className="ml-2 text-xs uppercase tracking-wider text-neutral-400 font-normal">
                    {skill.category}
                  </span>
                </h2>
                <p className="text-neutral-500">{skill.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
