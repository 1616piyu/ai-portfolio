export type QuestionType =
  | "identity"
  | "project"
  | "resume"
  | "github"
  | "linkedin"
  | "internship"
  | "education"
  | "skills"
  | "certifications"
  | "career"
  | "hire"
  | "summary"
  | "contact"
  | "unknown";

export function classifyQuestion(
  query: string
): QuestionType {

  const q = query.toLowerCase();

  // Identity

  if (
    q.includes("who are you") ||
    q.includes("introduce yourself") ||
    q.includes("what are you") ||
    q.includes("what can you do")
  ) {
    return "identity";
  }

  // Project

  if (
    q.includes("project") ||
    q.includes("cricket") ||
    q.includes("netflix") ||
    q.includes("fake news") ||
    q.includes("mall") ||
    q.includes("commentary") ||
    q.includes("yolo") ||
    q.includes("ocr")
  ) {
    return "project";
  }

  // Resume

  if (
    q.includes("resume") ||
    q.includes("cv")
  ) {
    return "resume";
  }

  // GitHub

  if (
    q.includes("github")
  ) {
    return "github";
  }

  // LinkedIn

  if (
    q.includes("linkedin")
  ) {
    return "linkedin";
  }

  // Internship

  if (
    q.includes("internship") ||
    q.includes("experience")
  ) {
    return "internship";
  }

  // Education

  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("degree")
  ) {
    return "education";
  }

  // Skills

  if (
    q.includes("skills") ||
    q.includes("technology") ||
    q.includes("tech stack")
  ) {
    return "skills";
  }

  // Certifications

  if (
    q.includes("certification") ||
    q.includes("certificate")
  ) {
    return "certifications";
  }

  // Career

  if (
    q.includes("career") ||
    q.includes("goal") ||
    q.includes("future")
  ) {
    return "career";
  }

  // Hire

  if (
    q.includes("hire") ||
    q.includes("why should") ||
    q.includes("why hire")
  ) {
    return "hire";
  }

  // Summary

  if (
    q.includes("summary") ||
    q.includes("summarize") ||
    q.includes("about you")
  ) {
    return "summary";
  }

  // Contact

  if (
    q.includes("contact") ||
    q.includes("email")
  ) {
    return "contact";
  }

  return "unknown";
}