import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "letsremotify",
    description:
      "A Rails hiring platform with job posting and applicant review, plus a JWT-based handoff to a separate technical-assessment service.",
    stack: ["Ruby on Rails", "PostgreSQL", "JWT"],
  },
  {
    name: "TestRabbit",
    description:
      "An assessment authoring tool with automated end-to-end checks wired through Cypress and GitHub Actions CI.",
    stack: ["Cypress", "GitHub Actions", "JavaScript"],
  },
  {
    name: "Review Application",
    description:
      "A Next.js and TypeScript app for running structured quarterly performance reviews.",
    stack: ["Next.js", "TypeScript"],
  },
  {
    name: "Commission Operations Platform",
    description:
      "A Rails and PostgreSQL platform for commission payroll and reporting.",
    stack: ["Ruby on Rails", "PostgreSQL"],
  },
];
