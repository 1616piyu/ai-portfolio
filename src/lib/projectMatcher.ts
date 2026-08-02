import { projects } from "@/data/projects";

export function getRelevantProject(query: string) {
  const q = query.toLowerCase();

  return projects.find((project) => {
    const aliases = [
      project.id,
      project.title,
      project.category,
      ...project.technologies,
      ...project.features,
    ];

    switch (project.id) {
      case "cricket":
        aliases.push(
          "cricket",
          "cricket ai",
          "commentary",
          "commentary ai",
          "cricket commentary",
          "yolov8",
          "ocr",
          "easyocr",
          "ball tracking"
        );
        break;

      case "fake-news":
        aliases.push(
          "fake news",
          "fake news detection",
          "news detection",
          "multimodal",
          "multi modal",
          "resnet",
          "resnet50",
          "nlp"
        );
        break;

      case "netflix":
        aliases.push(
          "netflix",
          "netflix analysis",
          "content analysis",
          "movie analysis",
          "sql project"
        );
        break;

      case "mall":
        aliases.push(
          "mall",
          "customer segmentation",
          "kmeans",
          "k-means",
          "clustering",
          "customer clustering"
        );
        break;
    }

    return aliases.some((alias) =>
      q.includes(alias.toLowerCase())
    );
  });
}