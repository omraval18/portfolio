import type { RailItem } from "@/components/global/timeline-rail";
import { experience, projects } from "@/lib/resume";
import { jobId } from "./experience-timeline";
import { projectId } from "./projects";

export const railItems: RailItem[] = [
  { id: "about", title: "About", level: 0 },
  { id: "experience", title: "Experience", level: 0 },
  ...experience.map((j) => ({
    id: jobId(j),
    kicker: "Experience",
    title: `${j.company} · ${j.role}`,
    meta: j.dates,
    current: j.current,
    level: 1 as const,
  })),
  { id: "projects", title: "Projects", level: 0 },
  ...projects.map((p) => ({ id: projectId(p), kicker: "Project", title: p.name, meta: p.tag ?? p.stack, level: 1 as const })),
  { id: "approach", title: "Approach", level: 0 },
  { id: "contact", title: "Contact", level: 0 },
];
