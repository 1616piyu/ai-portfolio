import { projects } from "@/data/projects";
import { skillMap } from "@/data/skillMap";

export function findProjects(query: string) {
  const lower = query.toLowerCase();

  const matchedIds = new Set<string>();

  Object.entries(skillMap).forEach(([keyword, ids]) => {
    if (lower.includes(keyword)) {
      ids.forEach((id) => matchedIds.add(id));
    }
  });

  projects.forEach((project) => {
    if (
      lower.includes(project.title.toLowerCase()) ||
      lower.includes(project.category.toLowerCase()) ||
      lower.includes(project.id.toLowerCase())
    ) {
      matchedIds.add(project.id);
    }
  });

  return projects.filter((project) =>
    matchedIds.has(project.id)
  );
}