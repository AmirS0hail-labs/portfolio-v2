import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Ruby", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    category: "Frameworks",
    skills: ["Ruby on Rails", "React", "Next.js", "React Native / RN Web"],
    note: "Exposure: Django, Spring Boot",
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "Redis", "MongoDB", "SQLite"],
  },
  {
    category: "Cloud / Infra",
    skills: ["AWS EC2", "AWS RDS", "AWS S3", "CI/CD", "Docker"],
  },
  {
    category: "Testing / Observability",
    skills: ["RSpec", "Cypress", "Sentry", "New Relic"],
  },
  {
    category: "Tooling / Product",
    skills: [
      "GitHub Actions",
      "BullMQ",
      "Mixpanel",
      "GrowthBook",
      "GTM",
      "Clarity",
    ],
  },
];
