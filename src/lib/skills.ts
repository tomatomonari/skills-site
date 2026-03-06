import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface Skill {
  slug: string;
  name: string;
  description: string;
  category: "skill" | "prompt";
  content: string;
  prompt: string;
}

export function getAllSkills(): Skill[] {
  const folders = fs.readdirSync(contentDir);

  return folders
    .filter((folder) => {
      const indexPath = path.join(contentDir, folder, "index.md");
      return fs.existsSync(indexPath);
    })
    .map((folder) => getSkill(folder)!);
}

export function getSkill(slug: string): Skill | null {
  const indexPath = path.join(contentDir, slug, "index.md");
  const promptPath = path.join(contentDir, slug, "prompt.md");

  if (!fs.existsSync(indexPath)) return null;

  const indexFile = fs.readFileSync(indexPath, "utf-8");
  const { data, content } = matter(indexFile);

  const prompt = fs.existsSync(promptPath)
    ? fs.readFileSync(promptPath, "utf-8")
    : "";

  return {
    slug,
    name: data.name,
    description: data.description,
    category: data.category || "skill",
    content,
    prompt,
  };
}

export function getAllSlugs(): string[] {
  const folders = fs.readdirSync(contentDir);
  return folders.filter((folder) => {
    const indexPath = path.join(contentDir, folder, "index.md");
    return fs.existsSync(indexPath);
  });
}
