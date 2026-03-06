import { notFound } from "next/navigation";
import Link from "next/link";
import { getSkill, getAllSlugs } from "@/lib/skills";
import PromptBlock from "@/components/PromptBlock";
import MarkdownContent from "@/components/MarkdownContent";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return {};
  return {
    title: `${skill.name} — AI Skills & Prompts`,
    description: skill.description,
  };
}

function splitSections(md: string) {
  const lines = md.trim().split("\n");
  const sections: { heading: string; body: string }[] = [];
  let current: { heading: string; body: string[] } | null = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) sections.push({ heading: current.heading, body: current.body.join("\n") });
      current = { heading: line.replace("## ", ""), body: [] };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) sections.push({ heading: current.heading, body: current.body.join("\n") });

  return sections;
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const sections = splitSections(skill.content);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors mb-8 inline-block"
      >
        &larr; Back
      </Link>

      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2">
        {skill.name}
      </h1>
      <p className="text-neutral-500 mb-12">{skill.description}</p>

      <div className="space-y-10 mb-16">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
            <div className="text-neutral-600 leading-relaxed">
              <MarkdownContent content={section.body} />
            </div>
          </section>
        ))}
      </div>

      {skill.prompt && (
        <section>
          <h2 className="text-xl font-semibold mb-4">The prompt</h2>
          <PromptBlock prompt={skill.prompt} />
        </section>
      )}
    </div>
  );
}
