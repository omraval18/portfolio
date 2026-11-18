import { experiments, projects, slug, type Project } from "@/lib/resume";
import { Emph } from "./emphasis";
import { Label, Section } from "./section";

export const projectId = (p: Project) => `project-${slug(p.name)}`;

const linkLabel = (href: string) =>
  href.includes("github.com") ? "GitHub" : new URL(href).hostname.replace(/^www\./, "");

function ProjectBody({ p }: { p: Project }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <h3 className="flex items-center gap-2 font-medium text-white">
          {p.name}
          {p.tag && (
            <span className="rounded-full border border-white/15 px-2 py-px font-mono text-[10px] font-normal uppercase tracking-widest text-neutral-400">
              {p.tag}
            </span>
          )}
        </h3>
        {p.href ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[11px] text-neutral-300 transition-colors group-hover:border-white/50 group-hover:text-white">
            {linkLabel(p.href)}
            <span aria-hidden className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px">
              ↗
            </span>
          </span>
        ) : p.note ? (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-dashed border-white/15 px-2.5 py-0.5 font-mono text-[11px] text-neutral-500">
            <svg aria-hidden viewBox="0 0 16 16" className="h-2.5 w-2.5 fill-current">
              <path d="M4 7V5a4 4 0 1 1 8 0v2h.5A1.5 1.5 0 0 1 14 8.5v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5v-5A1.5 1.5 0 0 1 3.5 7H4Zm2 0h4V5a2 2 0 1 0-4 0v2Z" />
            </svg>
            {p.note}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        <Emph text={p.desc} />
      </p>
      <p className="mt-2 font-mono text-[11px] text-neutral-600">{p.stack}</p>
    </>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {projects.map((p) => (
          <li key={p.name} id={projectId(p)} className="scroll-mt-24">
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block py-5 transition-colors hover:bg-white/[0.02]"
              >
                <ProjectBody p={p} />
              </a>
            ) : (
              <div className="py-5">
                <ProjectBody p={p} />
              </div>
            )}
          </li>
        ))}
      </ul>
      <Label className="mb-3 mt-10">Experiments</Label>
      <ul className="space-y-2 text-sm text-neutral-500">
        {experiments.map(([n, d]) => (
          <li key={n}>
            <span className="text-neutral-300">{n}</span> — {d}
          </li>
        ))}
      </ul>
    </Section>
  );
}
